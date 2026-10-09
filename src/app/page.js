import React from 'react';
import Link from 'next/link';
import Hero from '../components/Hero';
import RevealOnScroll from '../components/RevealOnScroll';
import TiltCard from '../components/TiltCard';
import FaqAccordion from '../components/FaqAccordion';

export const metadata = {
    title: 'Advocate in Roorkee & Legal Counsel in Haridwar | RK Law',
    description: 'Advocate in Roorkee & Haridwar handling Criminal Defense, Matrimonial Disputes, Property Litigation & Cheque Bounce at New Civil Court. Book consultation today.',
    keywords: [
        'Advocate in Roorkee',
        'Lawyer in Roorkee',
        'Legal Counsel Haridwar',
        'New Civil Court Roorkee',
        'Criminal Defense Law',
        'Matrimonial Law'
    ],
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Advocate in Roorkee & Legal Counsel in Haridwar | RK Law',
        description: 'Advocate in Roorkee & Haridwar handling Criminal Defense, Matrimonial Disputes, Property Litigation & Cheque Bounce at New Civil Court. Book consultation today.',
        url: 'https://advocaterk0788.in/',
        siteName: 'Advocate RK & Associates',
        locale: 'en_IN',
        type: 'website',
    },
};

export default function Home() {
    const testimonials = [
        {
            text: "Advocate RK handled my property dispute with extreme professionalism. His deep understanding of civil law saved me from a major financial loss.",
            author: "Rajesh Kumar",
            role: "Business Owner in Roorkee",
            rating: 5
        },
        {
            text: "I was very stressed about my matrimonial case, but Advocate RK's compassionate guidance gave me peace of mind and swift legal resolution.",
            author: "Priya Sharma",
            role: "Verified Client",
            rating: 5
        },
        {
            text: "Efficient, knowledgeable, and highly reliable. Recommended for any criminal defense or bail matters at New Civil Court Roorkee.",
            author: "Amit Singh",
            role: "Verified Client",
            rating: 5
        }
    ];

    const faqs = [
        {
            question: "What is your primary area of practice?",
            answer: "We specialize in Criminal Defense, Matrimonial Disputes (Divorce, Alimony), Property Litigation, and Cheque Bounce (NI Act) cases across District Courts and High Courts."
        },
        {
            question: "How can I book a consultation?",
            answer: "You can book a consultation by clicking the 'Consult Now' button in the header, calling us directly at +917409296786, or visiting our law office in Ramnagar, Roorkee."
        },
        {
            question: "Do you handle cases in the High Court?",
            answer: "Yes, we represent clients in the High Court of Uttarakhand (Nainital), High Court of Uttar Pradesh (Prayagraj), and the High Court of Delhi."
        }
    ];

    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqs.map(faq => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.answer
            }
        }))
    };

    const websiteJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        'name': 'Advocate RK & Associates',
        'url': 'https://advocaterk0788.in/',
        'potentialAction': {
            '@type': 'SearchAction',
            'target': 'https://advocaterk0788.in/services?q={search_term_string}',
            'query-input': 'required name=search_term_string'
        }
    };

    return (
        <div className="page-animate">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
            />
            <Hero />

            {/* About / Attorney Profile Teaser */}
            <section style={{ padding: '7rem 0', backgroundColor: '#ffffff', position: 'relative' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <RevealOnScroll>
                        <div>
                            <span className="gold-badge" style={{ marginBottom: '1.2rem' }}>
                                🏛️ LAW OFFICE IN RAMNAGAR ROORKEE
                            </span>
                            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', marginBottom: '1.5rem', lineHeight: 1.15, fontFamily: 'var(--font-heading)' }}>
                                Advocate RK &amp; <span className="gold-gradient-text" style={{ textDecoration: 'underline var(--accent-color)' }}>Associates</span>
                            </h2>
                            <p style={{ marginBottom: '1.8rem', fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                                Professional <strong>Advocate in Roorkee</strong> and <strong>Legal Counsel in Haridwar</strong>. Located at New Civil Court Ramnagar, offering steadfast court advocacy in <strong>Criminal Defence</strong>, <strong>Matrimonial &amp; Family Law</strong>, <strong>Property Litigation</strong>, and <strong>Cheque Bounce proceedings</strong>.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginBottom: '2.2rem' }}>
                                {[
                                    '✔ Strategic Trial Advocacy',
                                    '✔ High Success Rate',
                                    '✔ 100% Confidentiality',
                                    '✔ District & High Court'
                                ].map((item, idx) => (
                                    <div key={idx} style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--primary-color)' }}>
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <Link href="/about" className="btn" style={{ textDecoration: 'none' }}>
                                Learn More About Our Practice &rarr;
                            </Link>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll threshold={0.3} delay={0.2}>
                        <div style={{ position: 'relative' }}>
                            <TiltCard>
                                <div style={{ position: 'relative', height: '520px', width: '100%', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--box-shadow-elevated)', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
                                    <img
                                        src="/assets/advocate_profile.jpg"
                                        alt="Advocate RK - Legal Counsel in Roorkee &amp; Haridwar at New Civil Court Ramnagar"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'center 20%'
                                        }}
                                    />
                                    <div
                                        style={{
                                            position: 'absolute',
                                            bottom: '24px',
                                            right: '24px',
                                            background: 'rgba(7, 15, 30, 0.9)',
                                            backdropFilter: 'blur(16px)',
                                            color: 'white',
                                            padding: '1.8rem 2.2rem',
                                            borderRadius: '16px',
                                            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                                            border: '1px solid rgba(212, 175, 55, 0.4)'
                                        }}
                                    >
                                        <div style={{ margin: 0, fontSize: '3.2rem', fontWeight: 800, color: 'var(--accent-light)', lineHeight: 1, fontFamily: 'var(--font-subheading)' }}>5+</div>
                                        <p style={{ margin: 0, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)', marginTop: '4px' }}>Years of Excellence</p>
                                    </div>
                                </div>
                            </TiltCard>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Practice Areas Bento Grid */}
            <section style={{ padding: '7rem 0', backgroundColor: 'var(--bg-premium)' }}>
                <div className="container">
                    <RevealOnScroll>
                        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                                <span className="gold-badge">CORE ADVOCACY</span>
                            </div>
                            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontFamily: 'var(--font-heading)', marginTop: '0.5rem' }}>Legal Practice Areas at New Civil Court Roorkee</h2>
                            <div style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, var(--accent-light), var(--accent-color))', margin: '1.2rem auto', borderRadius: '2px' }}></div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '750px', margin: '0 auto' }}>
                                Comprehensive legal litigation and objective statutory representation at New Civil Court, Ramnagar Roorkee &amp; Haridwar.
                            </p>
                        </div>
                    </RevealOnScroll>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem'
                    }}>
                        {[
                            {
                                name: "Criminal Defense",
                                icon: "⚖️",
                                slug: "criminal-defense",
                                img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
                                desc: "Legal defense in criminal proceedings, bail applications (Sec 438/439 BNSS), criminal trials, and High Court appeals."
                            },
                            {
                                name: "Matrimonial & Family Law",
                                icon: "📜",
                                slug: "matrimonial-disputes",
                                img: "https://images.unsplash.com/photo-1589216532372-1c2a367900d9?auto=format&fit=crop&w=800&q=80",
                                desc: "Compassionate and assertive representation for divorce proceedings, alimony, maintenance, and child custody disputes."
                            },
                            {
                                name: "Property Litigation",
                                icon: "🏛️",
                                slug: "property-litigation",
                                img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
                                desc: "Court advocacy for land disputes, property partition, title verification, Khatauni mutation, and injunction suits."
                            },
                            {
                                name: "Cheque Bounce (NI Act)",
                                icon: "💼",
                                slug: "cheque-bounce",
                                img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
                                desc: "Statutory legal notices and court litigation under Section 138 Negotiable Instruments Act for swift financial recovery."
                            }
                        ].map((practice, idx) => (
                            <RevealOnScroll key={idx} delay={idx * 0.1}>
                                <div className="glass-card-light card-hover" style={{
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                                        <img
                                            src={practice.img}
                                            alt={`${practice.name} Legal Services - Advocate RK & Associates Roorkee`}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                        <div style={{
                                            position: 'absolute',
                                            top: '16px',
                                            left: '16px',
                                            background: 'rgba(7, 15, 30, 0.85)',
                                            backdropFilter: 'blur(10px)',
                                            padding: '8px 16px',
                                            borderRadius: '50px',
                                            color: 'var(--accent-light)',
                                            fontSize: '0.85rem',
                                            fontWeight: 600,
                                            border: '1px solid rgba(212, 175, 55, 0.3)'
                                        }}>
                                            {practice.icon} {practice.name}
                                        </div>
                                    </div>
                                    <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                        <div>
                                            <h3 style={{ fontSize: '1.45rem', marginBottom: '0.8rem', fontFamily: 'var(--font-heading)' }}>{practice.name}</h3>
                                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.65 }}>{practice.desc}</p>
                                        </div>
                                        <div style={{ marginTop: '1.8rem' }}>
                                            <Link
                                                href={`/services/${practice.slug}`}
                                                style={{
                                                    textDecoration: 'none',
                                                    color: 'var(--accent-color)',
                                                    fontWeight: 700,
                                                    fontSize: '0.9rem',
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '8px'
                                                }}
                                            >
                                                Learn Practice Details &rarr;
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <Link href="/services" className="btn-outline" style={{ textDecoration: 'none' }}>
                            View All Legal Services &rarr;
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials Glass Cards */}
            <section style={{ padding: '7rem 0', backgroundColor: '#ffffff' }}>
                <div className="container">
                    <RevealOnScroll>
                        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                                <span className="gold-badge">CLIENT SATISFACTION</span>
                            </div>
                            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontFamily: 'var(--font-heading)', marginTop: '0.5rem' }}>What Our Clients Say</h2>
                            <div style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, var(--accent-light), var(--accent-color))', margin: '1.2rem auto', borderRadius: '2px' }}></div>
                        </div>
                    </RevealOnScroll>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {testimonials.map((t, idx) => (
                            <RevealOnScroll key={idx} delay={idx * 0.15}>
                                <div className="glass-card-light" style={{ padding: '2.5rem', borderRadius: '16px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div>
                                        <div style={{ color: '#f39c12', fontSize: '1.2rem', marginBottom: '1rem' }}>
                                            {'⭐'.repeat(t.rating)}
                                        </div>
                                        <p style={{ fontStyle: 'italic', color: 'var(--primary-color)', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '1.8rem' }}>
                                            "{t.text}"
                                        </p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '1.2rem' }}>
                                        <div style={{
                                            width: '44px',
                                            height: '44px',
                                            borderRadius: '50%',
                                            background: 'linear-gradient(135deg, #070f1e, #15253b)',
                                            color: 'var(--accent-light)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: 700,
                                            fontSize: '1.1rem'
                                        }}>
                                            {t.author.charAt(0)}
                                        </div>
                                        <div>
                                            <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700 }}>{t.author}</h3>
                                            <small style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{t.role}</small>
                                        </div>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Legal Articles & Insights */}
            <section style={{ padding: '7rem 0', backgroundColor: 'var(--bg-premium)' }}>
                <div className="container">
                    <RevealOnScroll>
                        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                                <span className="gold-badge">LEGAL GUIDANCE</span>
                            </div>
                            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontFamily: 'var(--font-heading)', marginTop: '0.5rem' }}>Articles &amp; Legal Insights</h2>
                            <div style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, var(--accent-light), var(--accent-color))', margin: '1.2rem auto', borderRadius: '2px' }}></div>
                        </div>
                    </RevealOnScroll>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                        {[
                            {
                                slug: 'cheque-bounce-legal-notice-guide',
                                title: 'What to Do When a Cheque Bounces? Section 138 NI Act & Legal Notice Rules',
                                category: 'Financial Law',
                                desc: 'Understanding mandatory 30-day demand notices, bank return memos, statutory time limits, and court proceedings.'
                            },
                            {
                                slug: 'property-registry-and-mutation-guide',
                                title: 'Property Registration & Land Mutation (Khatauni) Rules',
                                category: 'Property Law',
                                desc: 'Preventing real estate fraud, 30-year chain title searches, encumbrance certificates, and mutation procedures.'
                            },
                            {
                                slug: 'anticipatory-bail-process-guide',
                                title: 'Anticipatory Bail & Protection Against Arrest (Sec 438 BNSS/CrPC)',
                                category: 'Criminal Law',
                                desc: 'Seeking pre-arrest legal protection in Sessions Court or High Court when apprehending arrest in non-bailable offences.'
                            }
                        ].map((art, idx) => (
                            <RevealOnScroll key={art.slug} delay={idx * 0.1}>
                                <div className="glass-card-light card-hover" style={{
                                    borderRadius: '16px',
                                    padding: '2.2rem',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}>
                                    <div>
                                        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>{art.category}</span>
                                        <h3 style={{ fontSize: '1.3rem', margin: '0.8rem 0 1rem', color: 'var(--primary-color)', lineHeight: 1.4, fontFamily: 'var(--font-heading)' }}>{art.title}</h3>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.65 }}>{art.desc}</p>
                                    </div>
                                    <div style={{ marginTop: '1.8rem' }}>
                                        <Link href={`/blog/${art.slug}`} style={{ color: 'var(--accent-color)', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem' }}>
                                            Read Article &rarr;
                                        </Link>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <Link href="/blog" className="btn-outline" style={{ textDecoration: 'none' }}>
                            View All Legal Articles &rarr;
                        </Link>
                    </div>
                </div>
            </section>

            {/* Interactive FAQ Accordion */}
            <section style={{ padding: '7rem 0', backgroundColor: '#ffffff' }}>
                <div className="container">
                    <RevealOnScroll>
                        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                                <span className="gold-badge">CLEAR ANSWERS</span>
                            </div>
                            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontFamily: 'var(--font-heading)', marginTop: '0.5rem' }}>Frequently Asked Questions</h2>
                            <div style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, var(--accent-light), var(--accent-color))', margin: '1.2rem auto', borderRadius: '2px' }}></div>
                        </div>
                    </RevealOnScroll>

                    <FaqAccordion faqs={faqs} />
                </div>
            </section>

            {/* Urgent Legal Consultation Banner */}
            <section style={{
                padding: '7rem 0',
                background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 70%), linear-gradient(135deg, #070f1e 0%, #0d1b2a 100%)',
                color: 'white',
                textAlign: 'center',
                borderTop: '1px solid rgba(212, 175, 55, 0.3)'
            }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.2rem' }}>
                        <span className="gold-badge">URGENT LEGAL COUNSEL</span>
                    </div>
                    <h2 style={{ color: '#ffffff', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontFamily: 'var(--font-heading)', margin: '0.8rem 0 1.5rem' }}>Facing a Critical Legal Challenge?</h2>
                    <p style={{ margin: '0 auto 2.8rem', fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)', maxWidth: '750px', lineHeight: 1.8 }}>
                        Don't navigate the complex legal system alone. Get professional statutory advice and immediate courtroom guidance from Advocate RK &amp; Associates.
                    </p>
                    <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/contact" className="btn" style={{ textDecoration: 'none', padding: '16px 36px' }}>
                            Book Consultation Now
                        </Link>
                        <a href="tel:+917409296786" className="btn btn-outline" style={{ color: '#ffffff', borderColor: '#ffffff', textDecoration: 'none', padding: '16px 36px' }}>
                            📞 Call Now
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

