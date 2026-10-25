import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Server-side middleware for local development to handle email submissions securely
function resendServerMiddleware(apiKey) {
  return {
    name: 'resend-server-middleware',
    configureServer(server) {
      server.middlewares.use('/api/send-enquiry', async (req, res, next) => {
        if (req.method !== 'POST') {
          return next();
        }

        let body = '';
        req.on('data', chunk => {
          body += chunk;
        });

        req.on('end', async () => {
          let data = {};
          try {
            data = JSON.parse(body || '{}');
          } catch (jsonErr) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            return res.end(JSON.stringify({ error: 'Invalid JSON payload.' }));
          }

          try {
            const message = data.message || data.projectDescription || '';
            const email = data.email || data.replyEmail || 'No reply email provided';
            const name = data.name || data.fullName || 'Anonymous Visitor';
            const source = data.source || 'Website Project Request Chatbar';

            if (!message.trim()) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              return res.end(JSON.stringify({ error: 'Message content is required.' }));
            }

            // Safe HTML escaping
            const escapeHtml = (str) =>
              String(str)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#039;');

            const requestId = `REQ-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
            const timestamp = new Date().toISOString();

            // Dispatch to Resend API strictly on the server
            const keyToUse = apiKey || process.env.RESEND_API_KEY;
            const resendRes = await fetch('https://api.resend.com/emails', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${keyToUse}`
              },
              body: JSON.stringify({
                from: 'Krishnaite <admissions@krishnaite.dev>',
                to: ['admissions@krishnaite.dev'],
                subject: `New Project Request — Krishnaite (${requestId})`,
                html: `
                  <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; padding: 24px; border: 1px solid #E5DFD3; border-radius: 8px; background-color: #FAF7F0;">
                    <h2 style="color: #20221F; margin-top: 0;">New Project Request — Krishnaite</h2>
                    <p style="color: #B77B43; font-weight: 600; font-size: 14px;">Source: ${escapeHtml(source)}</p>
                    <hr style="border: none; border-top: 1px solid #E5DFD3; margin: 16px 0;" />
                    <p><strong>Customer / Lead:</strong> ${escapeHtml(name)}</p>
                    <p><strong>Reply Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
                    <p><strong>Request Identifier:</strong> <code>${requestId}</code></p>
                    <p><strong>Timestamp:</strong> ${timestamp}</p>
                    <div style="margin-top: 20px; padding: 16px; background-color: #FFFFFF; border: 1px solid #E5DFD3; border-radius: 6px;">
                      <h4 style="margin-top: 0; color: #20221F;">Submitted Project Description & Requirements:</h4>
                      <div style="white-space: pre-wrap; font-size: 15px; color: #333333; line-height: 1.6;">${escapeHtml(message)}</div>
                    </div>
                  </div>
                `
              })
            });

            if (resendRes.ok) {
              const resJson = await resendRes.json();
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              return res.end(JSON.stringify({ ok: true, requestId, id: resJson.id }));
            } else {
              const errJson = await resendRes.json().catch(() => ({}));
              console.error('Resend Server Response Error:', errJson);
              res.statusCode = resendRes.status || 500;
              res.setHeader('Content-Type', 'application/json');
              return res.end(JSON.stringify({ error: errJson.message || 'Failed to dispatch via Resend.' }));
            }
          } catch (err) {
            console.error('Server Middleware Execution Error:', err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            return res.end(JSON.stringify({ error: 'Server error processing request.' }));
          }
        });
      });
    }
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const apiKey = env.RESEND_API_KEY || process.env.RESEND_API_KEY;

  return {
    plugins: [
      react(),
      resendServerMiddleware(apiKey)
    ]
  };
});
