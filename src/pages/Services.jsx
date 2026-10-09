import React from 'react';
import RevealOnScroll from '../components/RevealOnScroll';
import TiltCard from '../components/TiltCard';

const Services = () => {
    const services = [
        {
            title: "Criminal Defense",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
            desc: "Expert representation in criminal matters including bail, trials and appeals."
        },
        {
            title: "Family Law",
            image: "https://images.unsplash.com/photo-1589216532372-1c2a367900d9?auto=format&fit=crop&w=800&q=80",
            desc: "Compassionate legal support for divorce, alimony, and custody cases."
        },
        {
            title: "Banking Law",
            image: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&w=800&q=80",
            desc: "Professional advice on financial regulations and banking disputes."
        },
        {
            title: "Consumer Law",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
            desc: "Protecting consumer rights and handling fair trade practice disputes."
        },
        {
            title: "Accident Law",
            image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
            desc: "Committed to obtaining just compensation for accident victims."
        },
        {
            title: "Appellate Law",
            image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80",
            desc: "Representation in higher courts, including High Court and Supreme Court appeals."
        }
    ];

    return (
        <div className="page-animate">
            <section style={{
                padding: '10rem 0 6rem',
                color: 'white',
                textAlign: 'center',
                backgroundImage: 'linear-gradient(rgba(10, 25, 47, 0.85), rgba(10, 25, 47, 0.95)), url("https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1920&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'var(--primary-color)'
            }}>
                <div className="container">
                    <RevealOnScroll>
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>Legal Services &amp; Practice Areas</h1>
                        <p style={{ maxWidth: '750px', margin: '0 auto', fontSize: '1.25rem', opacity: 0.9, lineHeight: 1.6 }}>
                            Objective information regarding practice areas and legal services offered at New Civil Court, Ramnagar, Roorkee &amp; Haridwar.
                        </p>
                    </RevealOnScroll>
                </div>
            </section>

            <section style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
                        {services.map((service, idx) => (
                            <RevealOnScroll key={idx} delay={idx * 0.1}>
                                <TiltCard>
                                    <div className="card-hover" style={{ backgroundColor: 'var(--card-bg)', borderRadius: '12px', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', border: '1px solid var(--border-color)' }}>
                                        <div style={{ height: '240px', overflow: 'hidden' }}>
                                            <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div style={{ padding: '2rem', flex: 1 }}>
                                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h3>
                                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{service.desc}</p>
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
};

export default Services;
