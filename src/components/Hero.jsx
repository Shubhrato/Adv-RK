"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="hero" style={{
            background: 'radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.15) 0%, transparent 60%), linear-gradient(180deg, rgba(7, 15, 30, 0.94) 0%, rgba(13, 27, 42, 0.98) 100%), url("https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'var(--text-light)',
            padding: '11rem 0 7rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Ambient Lighting & Shimmer Effect */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '600px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.18) 0%, transparent 70%)',
                pointerEvents: 'none',
                filter: 'blur(40px)',
                zIndex: 1
            }} />

            <div className="container hero-content" style={{ position: 'relative', zIndex: 2 }}>
                {/* Gold Pill Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '1.8rem', display: 'flex', justifyContent: 'center' }}
                >
                    <span className="gold-badge">
                        <span>🏛️</span> NEW CIVIL COURT, RAMNAGAR, ROORKEE &amp; HARIDWAR
                    </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)',
                        marginBottom: '1.5rem',
                        fontWeight: 700,
                        fontFamily: 'var(--font-heading)',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.1,
                        color: '#ffffff'
                    }}>
                    Advocate in Roorkee &amp; <br />
                    <span className="gold-gradient-text">
                        Legal Counsel in Haridwar
                    </span>
                </motion.h1>

                {/* Body Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    style={{
                        fontSize: 'clamp(1rem, 1.3vw, 1.25rem)',
                        maxWidth: '860px',
                        margin: '0 auto 2.8rem',
                        color: 'var(--text-dim)',
                        lineHeight: 1.8,
                        fontWeight: 400
                    }}>
                    Law Office of <strong>Advocate in Roorkee</strong> &amp; <strong>Legal Counsel in Haridwar</strong>. Comprehensive advocacy in <strong>Criminal Defence</strong>, <strong>Matrimonial &amp; Family Law</strong>, <strong>Property Litigation</strong>, and <strong>Cheque Bounce cases</strong>.
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="hero-btns"
                    style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}
                >
                    <Link href="/contact" className="btn" style={{ padding: '16px 38px', fontSize: '1rem' }}>
                        <span>⚡ Book Legal Consultation</span>
                    </Link>
                    <Link href="/about" className="btn btn-outline" style={{
                        color: '#ffffff',
                        borderColor: 'rgba(212, 175, 55, 0.5)',
                        padding: '16px 36px',
                        fontSize: '1rem',
                        backdropFilter: 'blur(10px)',
                        background: 'rgba(255, 255, 255, 0.04)'
                    }}>
                        Explore Our Practice
                    </Link>
                </motion.div>

                {/* Trust Statistics Ribbon */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    style={{
                        marginTop: '4.5rem',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '1.5rem',
                        background: 'rgba(13, 27, 42, 0.65)',
                        backdropFilter: 'blur(16px)',
                        border: '1px solid rgba(212, 175, 55, 0.2)',
                        borderRadius: '16px',
                        padding: '1.8rem 2rem',
                        maxWidth: '960px',
                        margin: '4.5rem auto 0'
                    }}
                >
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--accent-light)', fontFamily: 'var(--font-subheading)' }}>500+</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Successful Cases</div>
                    </div>
                    <div style={{ textAlign: 'center', borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
                        <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--accent-light)', fontFamily: 'var(--font-subheading)' }}>5+ Years</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Courtroom Practice</div>
                    </div>
                    <div style={{ textAlign: 'center', borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
                        <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--accent-light)', fontFamily: 'var(--font-subheading)' }}>100%</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Client Confidentiality</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
export default Hero;

