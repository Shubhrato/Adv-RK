"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FaqAccordion = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                    <div
                        key={idx}
                        className="glass-card-light"
                        style={{
                            overflow: 'hidden',
                            borderColor: isOpen ? 'rgba(212, 175, 55, 0.4)' : 'rgba(0, 0, 0, 0.06)',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <button
                            onClick={() => toggleFaq(idx)}
                            style={{
                                width: '100%',
                                textAlign: 'left',
                                padding: '1.5rem 2rem',
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: '1rem',
                                outline: 'none'
                            }}
                        >
                            <span style={{
                                fontSize: '1.2rem',
                                fontWeight: 700,
                                fontFamily: 'var(--font-subheading)',
                                color: isOpen ? 'var(--accent-color)' : 'var(--primary-color)'
                            }}>
                                {faq.question}
                            </span>
                            <span style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                background: isOpen ? 'rgba(212, 175, 55, 0.15)' : 'rgba(0, 0, 0, 0.04)',
                                color: isOpen ? 'var(--accent-color)' : 'var(--primary-color)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.1rem',
                                fontWeight: 700,
                                flexShrink: 0,
                                transition: 'all 0.3s'
                            }}>
                                {isOpen ? '−' : '+'}
                            </span>
                        </button>

                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div style={{
                                        padding: '0 2rem 1.8rem',
                                        color: 'var(--text-muted)',
                                        lineHeight: 1.7,
                                        fontSize: '1rem',
                                        borderTop: '1px solid rgba(0, 0, 0, 0.04)',
                                        paddingTop: '1.2rem'
                                    }}>
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
};

export default FaqAccordion;
