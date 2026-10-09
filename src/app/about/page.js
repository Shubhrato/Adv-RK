import React from 'react';
import Link from 'next/link';
import RevealOnScroll from '../../components/RevealOnScroll';

export const metadata = {
    title: 'About Us | Advocate RK & Associates Roorkee',
    description: 'Learn about Advocate RK & Associates law practice at New Civil Court, Ramnagar, Roorkee & Haridwar. Dedicated trial counsel and legal practice areas.',
    keywords: [
        'About Advocate RK',
        'Law Practice Roorkee',
        'Legal Counsel Background',
        'New Civil Court Lawyers'
    ],
    alternates: {
        canonical: '/about',
    },
    openGraph: {
        title: 'About Us | Advocate RK & Associates Roorkee',
        description: 'Learn about Advocate RK & Associates law practice at New Civil Court, Ramnagar, Roorkee & Haridwar. Dedicated trial counsel and legal practice areas.',
        url: 'https://advocaterk0788.in/about',
        siteName: 'Advocate RK & Associates',
        locale: 'en_IN',
        type: 'website',
    },
};

export default function About() {
    const aboutJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Attorney',
        'name': 'Advocate RK & Associates',
        'image': 'https://advocaterk0788.in/assets/advocate_profile.jpg',
        'telephone': '+917409296786',
        'email': 'advocaterk0788@gmail.com',
        'url': 'https://advocaterk0788.in/about',
        'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'New Civil Court, Ramnagar',
            'addressLocality': 'Roorkee',
            'addressRegion': 'Uttarakhand',
            'postalCode': '247667',
            'addressCountry': 'IN'
        },
        'founder': {
            '@type': 'Person',
            'name': 'Advocate RK',
            'jobTitle': 'Advocate & Head of Legal Practice'
        },
        'worksFor': {
            '@type': 'LegalService',
            'name': 'Advocate RK & Associates'
        }
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
                'name': 'About Us',
                'item': 'https://advocaterk0788.in/about'
            }
        ]
    };

    const stats = [
        { id: 1, label: 'Cases Won', value: '500+' },
        { id: 2, label: 'Happy Clients', value: '1000+' },
        { id: 3, label: 'Years Experience', value: '5+' }
    ];

    return (
        <div className="page-animate">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            {/* Header Banner */}
            <section style={{
                padding: '11rem 0 6rem',
                color: 'white',
                background: 'radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.15) 0%, transparent 60%), linear-gradient(180deg, #070f1e 0%, #0d1b2a 100%), url("https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&w=1920&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                textAlign: 'center',
                position: 'relative'
            }}>
                <div className="container">
                    <RevealOnScroll>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.2rem' }}>
                            <span className="gold-badge">ESTABLISHED COURT PRACTICE</span>
                        </div>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', color: '#ffffff' }}>
                            About Advocate RK <span className="gold-gradient-text">&amp; Associates</span>
                        </h1>
                        <p style={{ maxWidth: '850px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-dim)', lineHeight: 1.8 }}>
                            Trial law practice operating at <strong>New Civil Court, Ramnagar, Roorkee</strong> &amp; <strong>Haridwar</strong>. Dedicated to providing objective legal information and statutory representation.
                        </p>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Practice Details */}
            <section style={{ padding: '7rem 0', backgroundColor: '#ffffff' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <RevealOnScroll>
                            <div>
                                <span className="gold-badge" style={{ marginBottom: '1rem' }}>LEGAL COUNSEL HISTORY</span>
                                <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', marginBottom: '1.8rem', fontFamily: 'var(--font-heading)' }}>About Our Legal Practice</h2>
                                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                                    Established in 2018, Advocate RK &amp; Associates operates at New Civil Court, Ramnagar, Roorkee. We provide active trial representation in Criminal Defense, Matrimonial Disputes, Property Litigation, and Cheque Bounce matters across District and Appellate Courts.
                                </p>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', background: 'var(--bg-premium)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
                                    {stats.map(stat => (
                                        <div key={stat.id} style={{ textAlign: 'center' }}>
                                            <div style={{ fontSize: '2.2rem', color: 'var(--accent-color)', margin: 0, fontFamily: 'var(--font-subheading)', fontWeight: 800 }}>{stat.value}</div>
                                            <p style={{ margin: 0, fontWeight: 600, fontSize: '0.8rem', color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '4px' }}>{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll delay={0.2}>
                            <div style={{ position: 'relative' }}>
                                <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--box-shadow-elevated)', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1589216532372-1c2a367900d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                                        alt="Advocate RK &amp; Associates Law Practice Office at New Civil Court Ramnagar Roorkee"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Core Practice Principles */}
            <section style={{ padding: '7rem 0', backgroundColor: 'var(--bg-premium)' }}>
                <div className="container">
                    <RevealOnScroll>
                        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
                            <span className="gold-badge" style={{ marginBottom: '1rem' }}>OUR ADVOCACY APPROACH</span>
                            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontFamily: 'var(--font-heading)', marginTop: '0.5rem' }}>
                                Core Principles of Our Practice
                            </h2>
                            <div style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, var(--accent-light), var(--accent-color))', margin: '1.2rem auto', borderRadius: '2px' }}></div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '750px', margin: '0 auto' }}>
                                Transparent counsel, meticulous evidence examination, and steadfast courtroom advocacy tailored to the statutory facts of each case.
                            </p>
                        </div>
                    </RevealOnScroll>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
                        {[
                            {
                                icon: '⚖️',
                                title: 'Strategic Case Scrutiny',
                                desc: 'Every legal proceeding begins with thorough evaluation of FIRs, court records, police charge sheets, and title deeds to identify decisive legal remedies.'
                            },
                            {
                                icon: '📜',
                                title: 'Direct & Honest Counsel',
                                desc: 'Clients receive realistic assessments of case merits, prospective court timelines, and statutory procedures without unrealistic guarantees or ambiguity.'
                            },
                            {
                                icon: '🏛️',
                                title: 'Assertive Court Representation',
                                desc: 'Diligent witness cross-examination, urgent stay applications, regular & anticipatory bail advocacy before Judicial Magistrates and Sessions Judges.'
                            }
                        ].map((pillar, idx) => (
                            <RevealOnScroll key={idx} delay={idx * 0.15}>
                                <div className="glass-card-light card-hover" style={{ padding: '2.5rem', borderRadius: '16px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ fontSize: '2.2rem', marginBottom: '1.2rem' }}>{pillar.icon}</div>
                                    <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)', color: 'var(--primary-color)' }}>{pillar.title}</h3>
                                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>{pillar.desc}</p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Jurisdiction & Courts */}
            <section style={{ padding: '6rem 0', backgroundColor: '#ffffff' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <RevealOnScroll>
                            <div>
                                <span className="gold-badge" style={{ marginBottom: '1rem' }}>TERRITORIAL REACH</span>
                                <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
                                    Courts &amp; Judicial Forums
                                </h2>
                                <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                    Advocate RK &amp; Associates represents individuals, families, and business proprietors across district and appellate forums in Uttarakhand:
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {[
                                        'New Civil Court, Ramnagar, Roorkee (Civil, Criminal & NI Act Courts)',
                                        'District & Sessions Court, Haridwar (Bail & Criminal Trials)',
                                        'Family Court, Haridwar (Matrimonial & Child Custody Disputes)',
                                        'District Consumer Disputes Redressal Commission (DCDRC), Haridwar',
                                        'High Court of Uttarakhand, Nainital (Revisions & Appellate Petitions)'
                                    ].map((court, idx) => (
                                        <li key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '0.95rem', color: 'var(--primary-color)', fontWeight: 600 }}>
                                            <span style={{ color: 'var(--accent-color)' }}>✔</span>
                                            <span>{court}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll delay={0.2}>
                            <div className="glass-card-light" style={{ padding: '3rem', borderRadius: '20px', border: '1px solid rgba(212, 175, 55, 0.3)', textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📍</div>
                                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>Law Practice Chamber</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.8rem', fontSize: '0.95rem' }}>
                                    New Civil Court, Ramnagar, Roorkee, Haridwar District, Uttarakhand - 247667. Conveniently located near court chambers for prompt legal assistance.
                                </p>
                                <Link href="/contact" className="btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
                                    View Chamber Location &rarr;
                                </Link>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Office Consultation CTA */}
            <section style={{
                padding: '6rem 0',
                background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 70%), linear-gradient(135deg, #070f1e 0%, #0d1b2a 100%)',
                color: 'white',
                textAlign: 'center'
            }}>
                <div className="container">
                    <RevealOnScroll>
                        <h2 style={{ color: '#ffffff', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontFamily: 'var(--font-heading)', marginBottom: '1.2rem' }}>
                            Need Professional Legal Representation?
                        </h2>
                        <p style={{ margin: '0 auto 2.5rem', fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)', maxWidth: '750px', lineHeight: 1.8 }}>
                            Schedule an in-person office consultation at New Civil Court, Ramnagar, Roorkee for confidential case analysis and statutory guidance.
                        </p>
                        <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/contact" className="btn" style={{ textDecoration: 'none', padding: '16px 36px' }}>
                                Schedule Consultation
                            </Link>
                            <a href="tel:+917409296786" className="btn btn-outline" style={{ color: '#ffffff', borderColor: '#ffffff', textDecoration: 'none', padding: '16px 36px' }}>
                                📞 Call Direct
                            </a>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>
        </div>
    );
}

