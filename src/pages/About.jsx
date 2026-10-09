import React from 'react';
import RevealOnScroll from '../components/RevealOnScroll';

const About = () => {
    const stats = [
        { id: 1, label: 'Cases Won', value: '500+' },
        { id: 2, label: 'Happy Clients', value: '1000+' },
        { id: 3, label: 'Years Experience', value: '5+' }
    ];

    return (
        <div className="page-animate">
            <section style={{
                padding: '10rem 0 6rem',
                color: 'white',
                backgroundImage: 'linear-gradient(rgba(10, 25, 47, 0.8), rgba(10, 25, 47, 0.9)), url("https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&w=1920&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                textAlign: 'center',
                backgroundColor: 'var(--primary-color)'
            }}>
                <div className="container">
                    <RevealOnScroll>
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>About RK Associates</h1>
                        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', opacity: 0.9, lineHeight: 1.8 }}>
                            Law practice operating at <strong>New Civil Court, Ramnagar, Roorkee</strong> &amp; <strong>Haridwar</strong>. Dedicated to providing objective information and legal representation.
                        </p>
                    </RevealOnScroll>
                </div>
            </section>

            <section style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <RevealOnScroll>
                            <div>
                                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>About Our Legal Practice</h2>
                                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                                    Established in 2018, Advocate RK &amp; Associates operates at New Civil Court, Ramnagar, Roorkee. Our legal team provides representation in Criminal Defense, Matrimonial Disputes, Property Litigation, and Cheque Bounce matters across District and Appellate Courts.
                                </p>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                    {stats.map(stat => (
                                        <div key={stat.id}>
                                            <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', margin: 0 }}>{stat.value}</h3>
                                            <p style={{ margin: 0, fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-muted)' }}>{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll delay={0.2}>
                            <div style={{ position: 'relative' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1589216532372-1c2a367900d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                                    alt="Legal Office"
                                    style={{ width: '100%', borderRadius: '8px', boxShadow: 'var(--box-shadow)' }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-20px',
                                    right: '-20px',
                                    width: '100%',
                                    height: '100%',
                                    border: '2px solid var(--accent-color)',
                                    borderRadius: '8px',
                                    zIndex: -1
                                }}></div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
