// Serverless API route for production deployments (e.g., Vercel)
// Keeps RESEND_API_KEY strictly server-side

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, projectDescription, email, replyEmail, name, fullName, source } = req.body || {};
    const finalMessage = message || projectDescription || '';
    const finalEmail = email || replyEmail || 'No reply email provided';
    const finalName = name || fullName || 'Anonymous Visitor';
    const finalSource = source || 'Website Project Request Chatbar';

    if (!finalMessage.trim()) {
      return res.status(400).json({ error: 'Message content is required.' });
    }

    const escapeHtml = (str) =>
      String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

    const requestId = `REQ-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    const timestamp = new Date().toISOString();
    const apiKey = process.env.RESEND_API_KEY;

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        from: 'Krishnaite <admissions@krishnaite.dev>',
        to: ['admissions@krishnaite.dev'],
        subject: `New Project Request — Krishnaite (${requestId})`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; padding: 24px; border: 1px solid #E5DFD3; border-radius: 8px; background-color: #FAF7F0;">
            <h2 style="color: #20221F; margin-top: 0;">New Project Request — Krishnaite</h2>
            <p style="color: #B77B43; font-weight: 600; font-size: 14px;">Source: ${escapeHtml(finalSource)}</p>
            <hr style="border: none; border-top: 1px solid #E5DFD3; margin: 16px 0;" />
            <p><strong>Customer / Lead:</strong> ${escapeHtml(finalName)}</p>
            <p><strong>Reply Email:</strong> <a href="mailto:${escapeHtml(finalEmail)}">${escapeHtml(finalEmail)}</a></p>
            <p><strong>Request Identifier:</strong> <code>${requestId}</code></p>
            <p><strong>Timestamp:</strong> ${timestamp}</p>
            <div style="margin-top: 20px; padding: 16px; background-color: #FFFFFF; border: 1px solid #E5DFD3; border-radius: 6px;">
              <h4 style="margin-top: 0; color: #20221F;">Submitted Project Description & Requirements:</h4>
              <div style="white-space: pre-wrap; font-size: 15px; color: #333333; line-height: 1.6;">${escapeHtml(finalMessage)}</div>
            </div>
          </div>
        `
      })
    });

    if (resendRes.ok) {
      const data = await resendRes.json();
      return res.status(200).json({ ok: true, requestId, id: data.id });
    } else {
      const err = await resendRes.json().catch(() => ({}));
      return res.status(resendRes.status || 500).json({ error: err.message || 'Resend error' });
    }
  } catch (error) {
    console.error('Serverless send error:', error);
    return res.status(500).json({ error: 'Server error processing request.' });
  }
}
