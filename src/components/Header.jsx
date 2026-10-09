"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            backgroundColor: scrolled ? 'rgba(7, 15, 30, 0.92)' : 'rgba(7, 15, 30, 0.75)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.35)' : 'none',
            zIndex: 1000,
            transition: 'all 0.4s ease',
            borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.25)' : '1px solid rgba(255, 255, 255, 0.08)'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 24px',
                height: '84px'
            }}>
                <Link
                    href="/"
                    className="logo"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        cursor: 'pointer',
                        textDecoration: 'none'
                    }}
                >
                    <div style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(244, 196, 48, 0.05))',
                        border: '1px solid rgba(212, 175, 55, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '6px',
                        boxShadow: '0 0 15px rgba(212, 175, 55, 0.2)'
                    }}>
                        <img src="/logo.png" alt="Advocate RK &amp; Associates - Law Firm Logo Roorkee" style={{ height: '100%', width: '100%', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                    </div>
                    <div>
                        <span style={{
                            margin: 0,
                            fontSize: '1.45rem',
                            lineHeight: 1.1,
                            color: '#ffffff',
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 700,
                            letterSpacing: '0.5px',
                            display: 'block'
                        }}>
                            Advocate RK
                        </span>
                        <span style={{
                            fontSize: '0.7rem',
                            color: 'var(--accent-light)',
                            letterSpacing: '2.5px',
                            textTransform: 'uppercase',
                            fontFamily: 'var(--font-subheading)',
                            fontWeight: 600,
                            display: 'block',
                            marginTop: '2px'
                        }}>
                            &amp; Associates
                        </span>
                    </div>
                </Link>

                <nav className={`nav ${isOpen ? 'open' : ''}`}>
                    <ul className={`nav-menu ${isOpen ? 'open' : ''}`} style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                        {navItems.map((item) => (
                            <li key={item.name} style={{ listStyle: 'none' }}>
                                <Link
                                    href={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`nav-link ${pathname === item.path ? 'active' : ''}`}
                                    style={{ textDecoration: 'none', color: pathname === item.path ? 'var(--accent-light)' : '#ffffff' }}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        <li style={{ display: 'flex', gap: '12px', alignItems: 'center', listStyle: 'none' }}>
                            <a
                                href="tel:+917409296786"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    color: 'var(--accent-light)',
                                    fontSize: '0.85rem',
                                    fontWeight: 700,
                                    textDecoration: 'none',
                                    padding: '8px 18px',
                                    borderRadius: '50px',
                                    border: '1px solid rgba(212, 175, 55, 0.4)',
                                    background: 'rgba(212, 175, 55, 0.12)',
                                    letterSpacing: '0.5px'
                                }}
                            >
                                📞 Call Now
                            </a>
                            <Link href="/contact" className="btn" onClick={() => setIsOpen(false)} style={{
                                padding: '10px 22px',
                                fontSize: '0.85rem',
                                color: '#070f1e',
                                textDecoration: 'none'
                            }}>
                                Consult Now
                            </Link>
                        </li>
                    </ul>
                </nav>

                <button
                    className="mobile-toggle"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                    style={{
                        fontSize: '1.6rem',
                        cursor: 'pointer',
                        color: 'var(--accent-light)',
                        background: 'rgba(212, 175, 55, 0.1)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        borderRadius: '8px',
                        padding: '0.4rem 0.7rem',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1100,
                        userSelect: 'none'
                    }}
                >
                    {isOpen ? '✕' : '☰'}
                </button>
            </div>
        </header>
    );
};

export default Header;

