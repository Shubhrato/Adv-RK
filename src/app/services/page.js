import React from 'react';
import Link from 'next/link';
import RevealOnScroll from '../../components/RevealOnScroll';
import TiltCard from '../../components/TiltCard';
import { servicesData } from '../../data/servicesData';

export const metadata = {
    title: 'Legal Services & Practice Areas | Advocate RK Roorkee',
    description: 'Comprehensive overview of practice areas including Criminal Defense, Matrimonial Law, Property Litigation, Cheque Bounce, Consumer Law, and Appellate Law.',
    keywords: [
        'Practice Areas Roorkee',
        'Legal Services Roorkee',
        'Criminal Defense',
        'Family Law',
        'Property Litigation'
    ],
    alternates: {
        canonical: '/services',
    },
    openGraph: {
        title: 'Legal Services & Practice Areas | Advocate RK Roorkee',
        description: 'Comprehensive overview of practice areas including Criminal Defense, Matrimonial Law, Property Litigation, Cheque Bounce, Consumer Law, and Appellate Law.',
        url: 'https://advocaterk0788.in/services',
        siteName: 'Advocate RK & Associates',
        locale: 'en_IN',
        type: 'website',
    },
};

export default function Services() {
    const servicesList = Object.values(servicesData);

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
            }
        ]
    };

    return (
        <div className="page-animate">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            {/* Header Banner */}
            <section style={{
                padding: '11rem 0 6rem',
                color: 'white',
                textAlign: 'center',
                background: 'radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.15) 0%, transparent 60%), linear-gradient(180deg, #070f1e 0%, #0d1b2a 100%), url("https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1920&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="container">
                    <RevealOnScroll>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.2rem' }}>
                            <span className="gold-badge">TRIAL &amp; APPELLATE PRACTICE</span>
                        </div>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', color: '#ffffff' }}>
                            Legal Services &amp; <span className="gold-gradient-text">Practice Areas</span>
                        </h1>
                        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-dim)', lineHeight: 1.8 }}>
                            Objective information regarding practice areas and legal services offered at New Civil Court, Ramnagar, Roorkee &amp; Haridwar.
                        </p>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Service Cards Grid */}
            <section style={{ padding: '7rem 0', backgroundColor: 'var(--bg-premium)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
                        {servicesList.map((service, idx) => (
                            <RevealOnScroll key={service.slug} delay={idx * 0.1}>
                                <TiltCard>
                                    <div className="glass-card-light card-hover" style={{ borderRadius: '16px', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ height: '240px', overflow: 'hidden' }}>
                                            <img src={service.image} alt={`${service.title} Practice Area - Advocate RK & Associates Roorkee`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                            <div>
                                                <h2 style={{ fontSize: '1.5rem', marginBottom: '0.8rem', color: 'var(--primary-color)', fontFamily: 'var(--font-heading)' }}>{service.title}</h2>
                                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.65, fontSize: '0.95rem', marginBottom: '1.8rem' }}>{service.shortDesc}</p>
                                            </div>
                                            <div>
                                                <Link
                                                    href={`/services/${service.slug}`}
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
                                                    Explore Practice Details &rarr;
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

