import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogArticles } from '../../../data/blogData';
import RevealOnScroll from '../../../components/RevealOnScroll';

export async function generateStaticParams() {
    return Object.keys(blogArticles).map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const article = blogArticles[slug];
    if (!article) return { title: 'Article Not Found' };

    return {
        title: article.metaTitle || `${article.title} | Advocate RK Roorkee`,
        description: article.metaDesc,
        alternates: {
            canonical: `/blog/${slug}`,
        },
        openGraph: {
            title: article.metaTitle,
            description: article.metaDesc,
            url: `https://advocaterk0788.in/blog/${slug}`,
            siteName: 'Advocate RK & Associates',
            locale: 'en_IN',
            type: 'article',
            publishedTime: article.date,
            authors: ['Advocate RK & Associates'],
        }
    };
}

export default async function BlogArticlePage({ params }) {
    const { slug } = await params;
    const article = blogArticles[slug];

    if (!article) {
        notFound();
    }

    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': article.title,
        'image': article.image,
        'datePublished': article.date,
        'dateModified': article.date,
        'author': {
            '@type': 'LegalService',
            'name': article.author,
            'url': 'https://advocaterk0788.in'
        },
        'publisher': {
            '@type': 'Organization',
            'name': 'Advocate RK & Associates',
            'logo': {
                '@type': 'ImageObject',
                'url': 'https://advocaterk0788.in/favicon.svg'
            }
        },
        'description': article.excerpt
    };

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
                'name': 'Legal Blog',
                'item': 'https://advocaterk0788.in/blog'
            },
            {
                '@type': 'ListItem',
                'position': 3,
                'name': article.title,
                'item': `https://advocaterk0788.in/blog/${slug}`
            }
        ]
    };

    const faqJsonLd = article.faqs ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': article.faqs.map(faq => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.answer
            }
        }))
    } : null;

    return (
        <div className="page-animate">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            {faqJsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
                />
            )}

            {/* Article Hero Banner */}
            <section style={{
                padding: '10rem 0 5rem',
                color: 'white',
                textAlign: 'center',
                backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.88), rgba(10, 25, 47, 0.95)), url("${article.heroImage}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'var(--primary-color)'
            }}>
                <div className="container">
                    <RevealOnScroll>
                        {/* Breadcrumbs */}
                        <div style={{ fontSize: '0.95rem', marginBottom: '1.5rem', opacity: 0.85 }}>
                            <Link href="/" style={{ color: 'var(--accent-color)', textDecoration: 'none' }}>Home</Link>
                            <span style={{ margin: '0 8px' }}>/</span>
                            <Link href="/blog" style={{ color: 'var(--accent-color)', textDecoration: 'none' }}>Legal Blog</Link>
                            <span style={{ margin: '0 8px' }}>/</span>
                            <span style={{ color: 'white' }}>{article.category}</span>
                        </div>

                        <div style={{
                            display: 'inline-block',
                            backgroundColor: 'var(--accent-color)',
                            color: 'var(--primary-color)',
                            padding: '4px 16px',
                            borderRadius: '20px',
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            marginBottom: '1.5rem',
                            textTransform: 'uppercase'
                        }}>
                            {article.category}
                        </div>

                        <h1 style={{ fontSize: '2.8rem', marginBottom: '1.5rem', color: 'white', lineHeight: 1.3, maxWidth: '900px', margin: '0 auto 1.5rem' }}>
                            {article.title}
                        </h1>

                        <div style={{ fontSize: '0.95rem', opacity: 0.9, display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <span>✍️ {article.author}</span>
                            <span>📅 {article.date}</span>
                            <span>⏱️ {article.readTime}</span>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Article Main Content */}
            <section style={{ padding: '5rem 0', backgroundColor: 'var(--bg-color)' }}>
                <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <RevealOnScroll>
                        {/* Featured Image */}
                        <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '3rem', boxShadow: 'var(--box-shadow)' }}>
                            <img src={article.image} alt={`${article.title} - Advocate RK Legal Article`} style={{ width: '100%', maxHeight: '420px', objectFit: 'cover' }} />
                        </div>

                        {/* Article Text Content */}
                        <div style={{
                            backgroundColor: 'white',
                            padding: '3rem 2.5rem',
                            borderRadius: '12px',
                            boxShadow: 'var(--box-shadow-light)',
                            fontSize: '1.1rem',
                            lineHeight: 1.9,
                            color: 'var(--primary-color)'
                        }}>
                            <div dangerouslySetInnerHTML={{
                                __html: article.content
                                    .replace(/### (.*?)\n/g, '<h2 style="font-size:1.6rem; color:var(--primary-color); margin-top:2rem; margin-bottom:1rem; font-family:var(--font-heading);">$1</h2>')
                                    .replace(/#### (.*?)\n/g, '<h3 style="font-size:1.3rem; color:var(--accent-color); margin-top:1.5rem; margin-bottom:0.8rem; font-family:var(--font-heading);">$1</h3>')
                                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                    .replace(/---/g, '<hr style="border:0; border-top:1px solid var(--border-color); margin:2.5rem 0;" />')
                                    .replace(/\n\n/g, '<p style="margin-bottom:1.5rem; color:var(--text-muted);"></p>')
                            }} />

                            {/* Key Takeaways Box */}
                            {article.keyTakeaways && (
                                <div style={{
                                    marginTop: '3rem',
                                    padding: '2rem',
                                    backgroundColor: 'var(--bg-premium)',
                                    borderRadius: '10px',
                                    borderLeft: '5px solid var(--accent-color)'
                                }}>
                                    <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--primary-color)', fontFamily: 'var(--font-heading)' }}>
                                        📌 Key Legal Takeaways
                                    </h2>
                                    <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                                        {article.keyTakeaways.map((point, idx) => (
                                            <li key={idx} style={{ marginBottom: '0.8rem', color: 'var(--text-muted)', fontSize: '1rem' }}>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Article FAQs */}
                            {article.faqs && article.faqs.length > 0 && (
                                <div style={{ marginTop: '3.5rem' }}>
                                    <h2 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', color: 'var(--primary-color)', fontFamily: 'var(--font-heading)' }}>
                                        ❓ Frequently Asked Questions (FAQs)
                                    </h2>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                        {article.faqs.map((faq, idx) => (
                                            <div key={idx} style={{
                                                padding: '1.5rem',
                                                backgroundColor: 'var(--bg-color)',
                                                borderRadius: '8px',
                                                border: '1px solid var(--border-color)'
                                            }}>
                                                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.6rem', color: 'var(--primary-color)', fontFamily: 'var(--font-heading)' }}>
                                                    {faq.question}
                                                </h3>
                                                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Office Contact CTA */}
                        <div style={{
                            marginTop: '3.5rem',
                            padding: '3rem 2rem',
                            backgroundColor: 'var(--header-bg)',
                            color: 'white',
                            borderRadius: '12px',
                            textAlign: 'center'
                        }}>
                            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--accent-color)', fontFamily: 'var(--font-heading)' }}>
                                Have a Legal Query Regarding This Topic?
                            </h2>
                            <p style={{ maxWidth: '650px', margin: '0 auto 2rem', opacity: 0.9, fontSize: '1.05rem', lineHeight: 1.6 }}>
                                Contact Advocate RK &amp; Associates office at New Civil Court, Ramnagar, Roorkee for office consultation.
                            </p>
                            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <Link href="/contact" className="btn" style={{ textDecoration: 'none', padding: '12px 30px' }}>
                                    Contact Office
                                </Link>
                                <Link href="/blog" className="btn-outline" style={{ textDecoration: 'none', padding: '12px 30px', color: 'white', borderColor: 'white' }}>
                                    Back to All Articles
                                </Link>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>
        </div>
    );
}
