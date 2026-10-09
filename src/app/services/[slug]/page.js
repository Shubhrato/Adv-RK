import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { servicesData } from '../../../data/servicesData';
import RevealOnScroll from '../../../components/RevealOnScroll';

export async function generateStaticParams() {
    return Object.keys(servicesData).map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = servicesData[slug];
    if (!service) return { title: 'Service Not Found' };

    return {
        title: service.metaTitle || `${service.title} | Advocate RK Roorkee`,
        description: service.metaDesc,
        alternates: {
            canonical: `/services/${slug}`,
        },
        openGraph: {
            title: service.metaTitle,
            description: service.metaDesc,
            url: `https://advocaterk0788.in/services/${slug}`,
            siteName: 'Advocate RK & Associates',
            locale: 'en_IN',
            type: 'website',
        }
    };
}

export default async function ServiceDetailPage({ params }) {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) {
        notFound();
    }

    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': service.title,
        'description': service.shortDesc,
        'provider': {
            '@type': 'LegalService',
            'name': 'Advocate RK & Associates',
            'url': 'https://advocaterk0788.in'
        },
        'areaServed': [
            { '@type': 'AdministrativeArea', 'name': 'Roorkee' },
            { '@type': 'AdministrativeArea', 'name': 'Haridwar' },
            { '@type': 'AdministrativeArea', 'name': 'Uttarakhand' }
        ]
    };

    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': service.faqs.map(faq => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.answer
            }
        }))
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
                'name': 'Practice Areas',
                'item': 'https://advocaterk0788.in/services'
            },
            {
                '@type': 'ListItem',
                'position': 3,
                'name': service.title,
                'item': `https://advocaterk0788.in/services/${slug}`
            }
        ]
    };

    return (
        <div className="page-animate">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            {/* Sub-page Hero Banner */}
            <section style={{
                padding: '10rem 0 5rem',
                color: 'white',
                textAlign: 'center',
                backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.85), rgba(10, 25, 47, 0.95)), url("${service.heroImage}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'var(--primary-color)'
            }}>
                <div className="container">
                    <RevealOnScroll>
                        {/* Breadcrumbs */}
                        <div style={{ fontSize: '0.95rem', marginBottom: '1rem', opacity: 0.85 }}>
                            <Link href="/" style={{ color: 'var(--accent-color)', textDecoration: 'none' }}>Home</Link>
                            <span style={{ margin: '0 8px' }}>/</span>
                            <Link href="/services" style={{ color: 'var(--accent-color)', textDecoration: 'none' }}>Practice Areas</Link>
                            <span style={{ margin: '0 8px' }}>/</span>
                            <span style={{ color: 'white' }}>{service.title}</span>
                        </div>

                        <h1 style={{ fontSize: '3.2rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>
                            {service.title}
                        </h1>
                        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', opacity: 0.9, lineHeight: 1.6 }}>
                            {service.shortDesc}
                        </p>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Overview Section */}
            <section style={{ padding: '5rem 0', backgroundColor: 'var(--bg-color)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <RevealOnScroll>
                            <div>
                                <p style={{ color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 700 }}>
                                    Practice Overview
                                </p>
                                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                                    Information Regarding {service.title}
                                </h2>
                                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                                    {service.overview}
                                </p>
                                <div style={{
                                    padding: '1.5rem',
                                    backgroundColor: 'var(--bg-premium)',
                                    borderRadius: '8px',
                                    borderLeft: '4px solid var(--accent-color)'
                                }}>
                                    <p style={{ margin: 0, fontWeight: 600, fontSize: '0.95rem', color: 'var(--primary-color)' }}>
                                        Court Location: New Civil Court, Ramnagar, Roorkee &amp; District Courts Haridwar, Uttarakhand.
                                    </p>
                                </div>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll delay={0.2}>
                            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--box-shadow)' }}>
                                <img src={service.image} alt={`${service.title} Legal Representation - Advocate RK & Associates Roorkee`} style={{ width: '100%', height: '380px', objectFit: 'cover' }} />
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Key Areas Handled */}
            <section style={{ padding: '5rem 0', backgroundColor: 'var(--bg-premium)' }}>
                <div className="container">
                    <RevealOnScroll>
                        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                            <h2 style={{ fontSize: '2.5rem' }}>Specific Matters &amp; Proceedings Handled</h2>
                            <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--accent-color)', margin: '1rem auto' }}></div>
                        </div>
                    </RevealOnScroll>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {service.keyAreas.map((area, idx) => (
                            <RevealOnScroll key={idx} delay={idx * 0.1}>
                                <div style={{
                                    backgroundColor: 'white',
                                    padding: '2rem',
                                    borderRadius: '10px',
                                    height: '100%',
                                    boxShadow: 'var(--box-shadow-light)',
                                    border: '1px solid var(--border-color)'
                                }}>
                                    <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>{area.title}</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{area.desc}</p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Legal Process Steps */}
            <section style={{ padding: '5rem 0', backgroundColor: 'var(--bg-color)' }}>
                <div className="container">
                    <RevealOnScroll>
                        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                            <h2 style={{ fontSize: '2.5rem' }}>Overview of Legal Process</h2>
                            <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--accent-color)', margin: '1rem auto' }}></div>
                        </div>
                    </RevealOnScroll>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                        {service.processSteps.map((step, idx) => (
                            <RevealOnScroll key={idx} delay={idx * 0.1}>
                                <div style={{
                                    padding: '1.8rem',
                                    backgroundColor: 'var(--bg-premium)',
                                    borderRadius: '10px',
                                    height: '100%',
                                    borderTop: '3px solid var(--accent-color)'
                                }}>
                                    <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-color)', marginBottom: '0.8rem' }}>{step.step}</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service FAQs */}
            {service.faqs && service.faqs.length > 0 && (
                <section style={{ padding: '5rem 0', backgroundColor: 'var(--bg-premium)' }}>
                    <div className="container">
                        <RevealOnScroll>
                            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                                <h2 style={{ fontSize: '2.5rem' }}>Frequently Asked Questions</h2>
                                <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--accent-color)', margin: '1rem auto' }}></div>
                            </div>
                        </RevealOnScroll>

                        <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {service.faqs.map((faq, idx) => (
                                <RevealOnScroll key={idx} delay={idx * 0.1}>
                                    <div style={{
                                        backgroundColor: 'white',
                                        padding: '2rem',
                                        borderRadius: '10px',
                                        boxShadow: 'var(--box-shadow-light)',
                                        border: '1px solid var(--border-color)'
                                    }}>
                                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', color: 'var(--primary-color)' }}>
                                            {faq.question}
                                        </h3>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
                                            {faq.answer}
                                        </p>
                                    </div>
                                </RevealOnScroll>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Bottom Call to Action */}
            <section style={{
                padding: '4rem 0',
                backgroundColor: 'var(--header-bg)',
                color: 'white',
                textAlign: 'center'
            }}>
                <div className="container">
                    <RevealOnScroll>
                        <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem', color: 'var(--accent-color)' }}>
                            Need Information Regarding {service.title}?
                        </h2>
                        <p style={{ maxWidth: '700px', margin: '0 auto 2rem', opacity: 0.9, fontSize: '1.1rem' }}>
                            Contact Advocate RK &amp; Associates office at New Civil Court, Ramnagar, Roorkee for office consultation.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/contact" className="btn" style={{ textDecoration: 'none', padding: '14px 32px' }}>
                                Contact Office
                            </Link>
                            <Link href="/services" className="btn-outline" style={{ textDecoration: 'none', padding: '14px 32px', color: 'white', borderColor: 'white' }}>
                                View All Practice Areas
                            </Link>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>
        </div>
    );
}
