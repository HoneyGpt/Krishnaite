import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './KnowledgeLibrary.css';

const MOCK_ARTICLES = [
    {
        id: 1,
        title: 'Navigating a Mid-Career Transition',
        description: 'A structured approach to choosing between a stable corporate role and a high-risk startup opportunity.',
        category: 'Career',
    },
    {
        id: 2,
        title: 'The Ethics of Automated Layoffs',
        description: 'How leaders can balance fiscal responsibility with human empathy during restructuring.',
        category: 'Leadership',
    },
    {
        id: 3,
        title: 'Resolving Co-Founder Conflicts',
        description: 'Using the Krishnaite framework to harmonize differing visions and save the core business.',
        category: 'Strategy',
    },
    {
        id: 4,
        title: 'Aligning Personal Values with Work',
        description: 'A guide to auditing your current position and realigning it with your long-term ethical compass.',
        category: 'Personal',
    },
    {
        id: 5,
        title: 'Handling a Toxic Superior',
        description: 'Strategic options for protecting your peace and career trajectory without reacting emotionally.',
        category: 'Ethics',
    },
    {
        id: 6,
        title: 'Scaling Too Fast',
        description: 'When sudden growth threatens company culture and product quality.',
        category: 'Strategy',
    }
];

const FILTERS = ['All', 'Career', 'Ethics', 'Leadership', 'Personal', 'Strategy'];

const KnowledgeLibrary = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredArticles = activeFilter === 'All'
        ? MOCK_ARTICLES
        : MOCK_ARTICLES.filter(a => a.category === activeFilter);

    return (
        <div className="knowledge-container page-transition-enter-active">
            <section className="container section">
                <div className="text-center mb-8">
                    <h1 className="page-title mb-4">Knowledge Library</h1>
                    <p className="page-subtext">Structured solutions to real-world dilemmas</p>
                </div>

                <div className="filters-container flex-center mb-8">
                    {FILTERS.map(filter => (
                        <button
                            key={filter}
                            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="articles-grid">
                    {filteredArticles.map(article => (
                        <div key={article.id} className="article-card soft-card">
                            <div className="article-category">{article.category}</div>
                            <h3 className="article-title mb-3">{article.title}</h3>
                            <p className="article-desc mb-6">{article.description}</p>
                            <Link to={`/article/${article.id}`} className="article-link">
                                Read Structured Solution <span className="arrow">→</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default KnowledgeLibrary;
