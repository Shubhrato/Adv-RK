import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import RevealOnScroll from '../components/RevealOnScroll';
import TiltCard from '../components/TiltCard';

const Home = ({ setCurrentPage }) => {

    const handleNav = (page) => {
        if (setCurrentPage) {
            setCurrentPage(page);
            window.scrollTo(0, 0);
        }
    };

    const testimonials = [
        {
            text: "Advocate RK handled my property dispute with extreme professionalism. His deep understanding of the law saved me from a major financial loss.",
            author: "Rajesh Kumar",
            role: "Business Owner"
        },
        {
            text: "I was very stressed about my matrimonial case, but Advocate RK's compassionate approach and clear guidance gave me much-needed peace of mind.",
            author: "Priya Sharma",
            role: "Client"
        },
        {
            text: "Efficient, knowledgeable, and reliable. Highly recommended for any criminal defense or bail matters in the Roorkee area.",
            author: "Amit Singh",
            role: "Client"
        }
    ];

    const faqs = [
        {
            question: "What is your primary area of practice?",
            answer: "We specialize in Criminal Defense, Matrimonial Disputes (Divorce, Alimony), Property Litigation, and Cheque Bounce (NI Act) cases across District Courts and High Courts."
        },
        {
            question: "How can I book a consultation?",
            answer: "You can book a consultation by clicking the 'Consult Now' button in the header, calling us directly at +917409296786, or visiting our office in Roorkee."
        },
        {
            question: "Do you handle cases in the High Court?",
            answer: "Yes, we represent clients in the High Court of Uttarakhand (Nainital), High Court of Uttar Pradesh (Prayagraj), and the High Court of Delhi."
        }
    ];

    return (
        <div className="page-animate">
            <Hero setCurrentPage={setCurrentPage} />

            <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-color)', overflow: 'hidden' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '5rem', alignItems: 'start' }}>
                    <RevealOnScroll>
                        <div>
                            <h4 style={{ color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '1rem' }}>Law Office in Ramnagar Roorkee</h4>
                            <h2 style={{ fontSize: '3.2rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>Advocate RK &amp; <span style={{ color: 'var(--accent-color)', borderBottom: '3px solid var(--accent-color)' }}>Associates</span></h2>
                            <p style={{ marginBottom: '1.5rem', fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                                Professional <strong>Advocate in Roorkee</strong> and <strong>Legal Counsel in Haridwar</strong>. Located at New Civil Court Ramnagar, offering legal counsel and court representation in <strong>Criminal Defence</strong>, <strong>Matrimonial &amp; Family Law</strong>, <strong>Property Litigation</strong>, and <strong>Cheque Bounce cases</strong>.
                            </p>
                            <button onClick={() => handleNav('about')} className="btn-outline">
                                Learn More About Us
                            </button>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll threshold={0.3} delay={0.2}>
                        <div style={{ position: 'relative' }}>
                            <TiltCard>
                                <div style={{ position: 'relative', height: '500px', width: '100%' }}>
                                    <img
                                        src="/assets/advocate_profile.jpg"
                                        alt="Advocate RK - Legal Counsel in Roorkee"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'center 20%',
                                            borderRadius: '8px',
                                            boxShadow: 'var(--box-shadow)'
                                        }}
                                    />
                                    <motion.div
                                        initial={{ x: 50, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.5, duration: 0.8 }}
                                        style={{
                                            position: 'absolute',
                                            bottom: '-30px',
                                            right: '30px',
                                            backgroundColor: 'var(--header-bg)',
                                            color: 'white',
                                            padding: '2.5rem',
                                            borderRadius: '4px',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                                            minWidth: '200px',
                                            zIndex: 2,
                                            border: '1px solid var(--border-color)'
                                        }}
                                    >
                                        <h3 style={{ margin: 0, fontSize: '3.5rem', fontWeight: 700, color: 'var(--accent-color)', lineHeight: 1 }}>5+</h3>
                                        <p style={{ margin: 0, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Years of Experience</p>
                                    </motion.div>
                                </div>
                            </TiltCard>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-premium)' }}>
                <div className="container">
                    <RevealOnScroll>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '3rem' }}>Practice Areas</h2>
                            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--accent-color)', margin: '1.5rem auto' }}></div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '750px', margin: '0 auto' }}>
                                Information regarding practice areas and legal services at New Civil Court, Ramnagar Roorkee &amp; Haridwar.
                            </p>
                        </div>
                    </RevealOnScroll>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {[
                            {
                                name: "Criminal Defense",
                                img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
                                desc: "Legal representation in criminal defense matters including bail applications, criminal trials, and court appeals."
                            },
                            {
                                name: "Matrimonial & Family Law",
                                img: "https://images.unsplash.com/photo-1589216532372-1c2a367900d9?auto=format&fit=crop&w=800&q=80",
                                desc: "Legal counsel for matrimonial disputes, divorce proceedings, alimony, and child custody matters."
                            },
                            {
                                name: "Property Litigation",
                                img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
                                desc: "Legal advice and court representation for property litigation, land disputes, and real estate matters."
                            },
                            {
                                name: "Cheque Bounce (NI Act)",
                                img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
                                desc: "Legal advocacy for NI Act Section 138 cheque bounce proceedings and financial recovery matters."
                            }
                        ].map((practice, idx) => (
                            <RevealOnScroll key={idx} delay={idx * 0.1}>
                                <div className="card-hover" style={{
                                    backgroundColor: 'white',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    boxShadow: 'var(--box-shadow-light)',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <div style={{ height: '200px', overflow: 'hidden' }}>
                                        <img
                                            src={practice.img}
                                            alt={practice.name}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div style={{ padding: '2rem', flex: 1 }}>
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{practice.name}</h3>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{practice.desc}</p>
                                    </div>
                                    <div style={{ padding: '0 2rem 2rem' }}>
                                        <button
                                            onClick={() => handleNav('services')}
                                            style={{
                                                background: 'none',
                                                border: 'none',
                                                color: 'var(--accent-color)',
                                                fontWeight: 700,
                                                fontSize: '0.9rem',
                                                cursor: 'pointer',
                                                padding: 0,
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px'
                                            }}
                                        >
                                            View Details →
                                        </button>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <button className="btn-outline" onClick={() => handleNav('services')}>
                            View All Services
                        </button>
                    </div>
                </div>
            </section>

            {/* Testimonials Section Reverted to Grid */}
            <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-premium)' }}>
                <div className="container">
                    <RevealOnScroll>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '3rem' }}>What Our Clients Say</h2>
                            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--accent-color)', margin: '1.5rem auto' }}></div>
                        </div>
                    </RevealOnScroll>

                    <div className="testimonials-grid">
                        {testimonials.map((testi, idx) => (
                            <RevealOnScroll key={idx} delay={idx * 0.1}>
                                <div className="testimonial-card">
                                    <p className="testimonial-text">"{testi.text}"</p>
                                    <div className="testimonial-author" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
                                        <div style={{
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '50%',
                                            backgroundColor: 'var(--accent-color)',
                                            color: 'var(--primary-color)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '1.2rem',
                                            fontWeight: 700,
                                            flexShrink: 0
                                        }}>
                                            {testi.author.charAt(0)}
                                        </div>
                                        <div className="author-info">
                                            <h4 style={{ margin: 0 }}>{testi.author}</h4>
                                            <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>{testi.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section Reverted to Cards */}
            <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-color)' }}>
                <div className="container">
                    <RevealOnScroll>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '3rem' }}>Frequently Asked Questions</h2>
                            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--accent-color)', margin: '1.5rem auto' }}></div>
                        </div>
                    </RevealOnScroll>

                    <div className="faq-container">
                        {faqs.map((faq, idx) => (
                            <RevealOnScroll key={idx} delay={idx * 0.1}>
                                <div className="faq-card">
                                    <h4>{faq.question}</h4>
                                    <p style={{ color: 'var(--text-muted)' }}>{faq.answer}</p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{
                padding: '6rem 0',
                background: 'linear-gradient(rgba(10, 25, 47, 0.9), rgba(10, 25, 47, 0.95)), url("/assets/legal_bg.jpg")',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                color: 'white',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h2 style={{ color: 'white' }}>Facing a Legal Challenge?</h2>
                    <p style={{ margin: '1.5rem 0 2.5rem', fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)' }}>Don't navigate the legal system alone. Get expert advice from Advocate RK today.</p>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                        <button className="btn" onClick={() => handleNav('contact')}>Consult Now</button>
                        <button className="btn-outline" style={{ color: 'white', borderColor: 'white' }} onClick={() => window.location.href = 'tel:+917409296786'}>Call Now</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
