import React from 'react';
import Link from 'next/link';
import RevealOnScroll from '../../components/RevealOnScroll';
import TiltCard from '../../components/TiltCard';
import { blogArticles } from '../../data/blogData';

export const metadata = {
    title: 'Legal Blog & Articles | Advocate RK & Associates Roorkee',
    description: 'Informative articles on Indian laws, cheque bounce procedures, property registry rules, matrimonial rights, and consumer protection in Roorkee & Haridwar.',
    alternates: {
        canonical: '/blog',
    },
    openGraph: {
        title: 'Legal Blog & Articles | Advocate RK & Associates Roorkee',
        description: 'Informative articles on Indian laws, cheque bounce procedures, property registry rules, and matrimonial rights.',
        url: 'https://advocaterk0788.in/blog',
        siteName: 'Advocate RK & Associates',
        locale: 'en_IN',
        type: 'website',
    }
};

export default function BlogIndexPage() {
    const articles = Object.values(blogArticles);

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': 'https://advocaterk0788.in'
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Legal Knowledge & Articles',
                'item': 'https://advocaterk0788.in/blog'
            }
        ]
    };

    return (
        <div className="page-animate">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            {/* Hero Header */}
            <section style={{
                padding: '11rem 0 6rem',
                color: 'white',
                textAlign: 'center',
                background: 'radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.15) 0%, transparent 60%), linear-gradient(180deg, #070f1e 0%, #0d1b2a 100%), url("https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&w=1920&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="container">
                    <RevealOnScroll>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.2rem' }}>
                            <span className="gold-badge">LEGAL GUIDANCE &amp; STATUTORY INSIGHTS</span>
                        </div>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', color: '#ffffff' }}>
                            Legal Knowledge &amp; <span className="gold-gradient-text">Articles</span>
                        </h1>
                        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-dim)', lineHeight: 1.8 }}>
                            Informative articles and legal guidance on common Indian laws, cheque bounce procedures, property registration, and statutory rights.
                        </p>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Articles Grid */}
            <section style={{ padding: '7rem 0', backgroundColor: 'var(--bg-premium)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
                        {articles.map((article, idx) => (
                            <RevealOnScroll key={article.slug} delay={idx * 0.1}>
                                <TiltCard>
                                    <div className="glass-card-light card-hover" style={{
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}>
                                        <div style={{ height: '230px', overflow: 'hidden', position: 'relative' }}>
                                            <img src={article.image} alt={`${article.title} - Legal Knowledge Guide`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            <span style={{
                                                position: 'absolute',
                                                top: '16px',
                                                left: '16px',
                                                background: 'rgba(7, 15, 30, 0.85)',
                                                backdropFilter: 'blur(10px)',
                                                color: 'var(--accent-light)',
                                                padding: '6px 16px',
                                                borderRadius: '50px',
                                                fontSize: '0.8rem',
                                                fontWeight: 700,
                                                textTransform: 'uppercase',
                                                border: '1px solid rgba(212, 175, 55, 0.3)'
                                            }}>
                                                {article.category}
                                            </span>
                                        </div>

                                        <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                            <div>
                                                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.8rem', fontWeight: 600 }}>
                                                    📅 {article.date} &nbsp;•&nbsp; ⏱️ {article.readTime}
                                                </div>
                                                <h2 style={{ fontSize: '1.35rem', marginBottom: '0.8rem', color: 'var(--primary-color)', lineHeight: 1.4, fontFamily: 'var(--font-heading)' }}>
                                                    {article.title}
                                                </h2>
                                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.65, fontSize: '0.95rem', marginBottom: '1.8rem' }}>
                                                    {article.excerpt}
                                                </p>
                                            </div>

                                            <div>
                                                <Link
                                                    href={`/blog/${article.slug}`}
                                                    style={{
                                                        textDecoration: 'none',
                                                        color: 'var(--accent-color)',
                                                        fontWeight: 700,
                                                        fontSize: '0.95rem',
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: '8px'
                                                    }}
                                                >
                                                    Read Full Article &rarr;
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </TiltCard>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

