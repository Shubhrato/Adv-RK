"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const QuickContactDock = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '12px'
        }}>
            {/* Quick Action Options */}
            {expanded && (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    animation: 'fadeIn 0.3s ease-out'
                }}>
                    <a
                        href="tel:+917409296786"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            background: '#070f1e',
                            color: 'var(--accent-light)',
                            padding: '14px 24px',
                            borderRadius: '50px',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                            border: '1px solid rgba(212, 175, 55, 0.5)',
                            textDecoration: 'none',
                            fontSize: '0.95rem',
                            fontWeight: 700
                        }}
                    >
                        <span>📞 Call Advocate Now</span>
                    </a>

                    <Link
                        href="/contact"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            background: 'linear-gradient(135deg, var(--accent-light), var(--accent-color))',
                            color: '#070f1e',
                            padding: '12px 20px',
                            borderRadius: '50px',
                            boxShadow: '0 8px 24px var(--accent-glow)',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            fontWeight: 700
                        }}
                    >
                        <span>📅 Book Consultation</span>
                    </Link>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setExpanded(!expanded)}
                aria-label="Quick Legal Contact"
                style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #070f1e, #15253b)',
                    color: 'var(--accent-light)',
                    border: '2px solid var(--accent-color)',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
            >
                {expanded ? '✕' : '⚖️'}
            </button>
        </div>
    );
};

export default QuickContactDock;
