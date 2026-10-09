"use client";

import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#070f1e',
            color: 'white',
            padding: '5rem 0 2.5rem',
            marginTop: 'auto',
            borderTop: '1px solid rgba(212, 175, 55, 0.25)',
            position: 'relative'
        }}>
            <div className="container">
                <div className="footer-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '3.5rem'
                }}>
                    <div>
                        <div style={{
                            color: 'var(--accent-light)',
                            fontFamily: 'var(--font-heading)',
                            fontSize: '1.8rem',
                            marginBottom: '1rem',
                            fontWeight: 700
                        }}>
                            Advocate RK <span style={{ fontSize: '0.9rem', display: 'block', color: 'rgba(255,255,255,0.7)', letterSpacing: '2px', fontFamily: 'var(--font-subheading)', marginTop: '4px' }}>&amp; ASSOCIATES</span>
                        </div>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.7, fontSize: '0.95rem' }}>
                            Dedicated trial legal counsel offering objective statutory guidance and courtroom advocacy at New Civil Court, Ramnagar, Roorkee &amp; Haridwar.
                        </p>
                        <div style={{ display: 'flex', gap: '14px' }}>
                            <a href="https://www.instagram.com/advocaterk_1?igsh=NXE4aXlsczN3NWsy" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(212,175,55,0.3)', transition: 'all 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#E1306C' }}>
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/rk-associates-4704901b1/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(212,175,55,0.3)', transition: 'all 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#0077b5' }}>
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/share/1CDjKyD8HZ/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(212,175,55,0.3)', transition: 'all 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#1877F2' }}>
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                            <a href="https://wa.me/917409296786" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(212,175,55,0.3)', transition: 'all 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#25D366' }}>
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.89 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.743-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <div style={{ color: 'var(--accent-light)', fontFamily: 'var(--font-subheading)', fontSize: '1.1rem', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>Law Office Contact</div>
                        <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                                <span>📍</span>
                                <span>New Civil Court, Ramnagar, Roorkee, Haridwar, Uttarakhand 247667</span>
                            </li>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                                <span>📞</span>
                                <a href="tel:+917409296786" style={{ color: 'var(--accent-light)', textDecoration: 'none', fontWeight: 700 }}>
                                    Call Now (+91 74092 96786)
                                </a>
                            </li>
                            <li style={{ display: 'flex', gap: '10px' }}>
                                <span>✉️</span>
                                <a href="mailto:advocaterk0788@gmail.com" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>
                                    advocaterk0788@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div style={{ color: 'var(--accent-light)', fontFamily: 'var(--font-subheading)', fontSize: '1.1rem', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>Quick Navigation</div>
                        <ul style={{ padding: 0, listStyle: 'none' }}>
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Practice Areas', path: '/services' },
                                { name: 'Legal Blog', path: '/blog' },
                                { name: 'Book Consultation', path: '/contact' }
                            ].map(item => (
                                <li key={item.name} style={{ marginBottom: '10px' }}>
                                    <Link href={item.path} style={{ transition: 'color 0.3s', color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.95rem' }}
                                        onMouseOver={(e) => e.target.style.color = 'var(--accent-light)'}
                                        onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.75)'}
                                    >
                                        &rarr; {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    marginTop: '3rem',
                    paddingTop: '2rem',
                    textAlign: 'center',
                    fontSize: '0.8rem',
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.7,
                    maxWidth: '960px',
                    margin: '3rem auto 0'
                }}>
                    <p style={{ margin: '0 0 12px 0' }}>
                        <strong>Bar Council Disclaimer:</strong> As per the regulations of the Bar Council of India, advocates and legal practitioners are prohibited from soliciting work or advertising. This website is purely informative and intended to provide factual details regarding Advocate RK &amp; Associates, law practice office address, and core legal focus.
                    </p>
                    <p style={{ margin: 0, color: 'var(--accent-light)', fontWeight: 600 }}>&copy; {new Date().getFullYear()} Advocate RK &amp; Associates. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

