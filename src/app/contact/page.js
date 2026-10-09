"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import RevealOnScroll from '../../components/RevealOnScroll';

export default function Contact() {
    const [result, setResult] = useState("");
    const [status, setStatus] = useState("idle"); // idle, loading, success, error

    const WEB3FORMS_KEY = "9287b538-fc4f-4672-94de-768ddc229739";
    const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbwei_GCK7x9QizcM9l8R_NqqFidfxSUH5dMloRUUN0DBg3ItRgZpGeeR_yGycL-VyGmag/exec";

    const onSubmit = async (event) => {
        event.preventDefault();
        setStatus("loading");
        setResult("Submitting your inquiry...");

        const formElement = event.target;
        const formData = new FormData(formElement);
        formData.append("access_key", WEB3FORMS_KEY);

        const sheetParams = new URLSearchParams();
        for (const [key, value] of formData.entries()) {
            sheetParams.append(key, value);
        }

        try {
            // Send lead directly to Google Sheet
            const sheetPromise = fetch(GOOGLE_SHEET_URL, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: sheetParams.toString(),
                mode: "no-cors"
            }).catch(err => console.error("Google Sheet error:", err));

            // Send instant email notification via Web3Forms
            const emailPromise = fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            }).then(res => res.json()).catch(() => ({ success: true }));

            await Promise.all([sheetPromise, emailPromise]);

            setStatus("success");
            setResult("Message sent successfully! We will contact you shortly.");
            formElement.reset();
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
            setResult("Something went wrong. Please try again or call us directly.");
        }
    };

    const contactJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        'name': 'Contact Advocate RK & Associates',
        'description': 'Contact legal team for consultation at New Civil Court, Ramnagar, Roorkee & Haridwar.',
        'url': 'https://advocaterk0788.in/contact',
        'mainEntity': {
            '@type': 'LegalService',
            'name': 'Advocate RK & Associates',
            'telephone': '+917409296786',
            'email': 'advocaterk0788@gmail.com',
            'address': {
                '@type': 'PostalAddress',
                'streetAddress': 'New Civil Court, Ramnagar',
                'addressLocality': 'Roorkee',
                'addressRegion': 'Uttarakhand',
                'postalCode': '247667',
                'addressCountry': 'IN'
            }
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
                'name': 'Contact Us',
                'item': 'https://advocaterk0788.in/contact'
            }
        ]
    };

    return (
        <div className="page-animate">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            {/* Header Banner */}
            <section style={{
                padding: '11rem 0 6rem',
                color: 'white',
                background: 'radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.15) 0%, transparent 60%), linear-gradient(180deg, #070f1e 0%, #0d1b2a 100%), url("https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1920&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                textAlign: 'center'
            }}>
                <div className="container">
                    <RevealOnScroll>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.2rem' }}>
                            <span className="gold-badge">LEGAL CONSULTATION</span>
                        </div>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', color: '#ffffff' }}>
                            Contact <span className="gold-gradient-text">Advocate RK &amp; Associates</span>
                        </h1>
                        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-dim)', lineHeight: 1.8 }}>
                            Reach out for objective statutory counsel, bail applications, or court advocacy at New Civil Court, Ramnagar, Roorkee.
                        </p>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Main Contact Grid */}
            <section style={{ padding: '7rem 0', backgroundColor: 'var(--bg-premium)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '4rem', alignItems: 'start' }}>

                        {/* Contact Information Cards */}
                        <RevealOnScroll>
                            <div>
                                <span className="gold-badge" style={{ marginBottom: '1rem' }}>OFFICE LOCATION &amp; DIRECT DIAL</span>
                                <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Get In Touch</h2>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1.05rem', lineHeight: 1.7 }}>
                                    Our legal team is available for urgent consultations. Feel free to visit our office in Ramnagar, Roorkee or reach out directly.
                                </p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div className="glass-card-light" style={{ padding: '1.8rem', borderRadius: '16px', display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                                        <div style={{
                                            fontSize: '1.5rem',
                                            background: 'rgba(212, 175, 55, 0.12)',
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '12px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'var(--accent-color)',
                                            flexShrink: 0
                                        }}>📍</div>
                                        <div>
                                            <h3 style={{ margin: '0 0 0.4rem 0', fontSize: '1.15rem', fontFamily: 'var(--font-heading)' }}>Office Address</h3>
                                            <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                                                New Civil Court, Ramnagar,<br />
                                                Roorkee, Haridwar, Uttarakhand - 247667
                                            </p>
                                        </div>
                                    </div>

                                    <div className="glass-card-light" style={{ padding: '1.8rem', borderRadius: '16px', display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                                        <div style={{
                                            fontSize: '1.5rem',
                                            background: 'rgba(212, 175, 55, 0.12)',
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '12px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'var(--accent-color)',
                                            flexShrink: 0
                                        }}>📞</div>
                                        <div>
                                            <h3 style={{ margin: '0 0 0.4rem 0', fontSize: '1.15rem', fontFamily: 'var(--font-heading)' }}>Direct Phone</h3>
                                            <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '8px' }}>+91 74092 96786</p>
                                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '8px', flexWrap: 'wrap' }}>
                                                <a
                                                    href="tel:+917409296786"
                                                    className="btn"
                                                    style={{
                                                        padding: '8px 18px',
                                                        fontSize: '0.85rem',
                                                        textDecoration: 'none'
                                                    }}
                                                >
                                                    📞 Call Now
                                                </a>
                                                <a
                                                    href="https://wa.me/917409296786"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: '6px',
                                                        color: '#25D366',
                                                        fontWeight: 700,
                                                        fontSize: '0.9rem',
                                                        textDecoration: 'none'
                                                    }}
                                                >
                                                    <span>💬 WhatsApp</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="glass-card-light" style={{ padding: '1.8rem', borderRadius: '16px', display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                                        <div style={{
                                            fontSize: '1.5rem',
                                            background: 'rgba(212, 175, 55, 0.12)',
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '12px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'var(--accent-color)',
                                            flexShrink: 0
                                        }}>✉️</div>
                                        <div>
                                            <h3 style={{ margin: '0 0 0.4rem 0', fontSize: '1.15rem', fontFamily: 'var(--font-heading)' }}>Official Email</h3>
                                            <a href="mailto:advocaterk0788@gmail.com" style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem', textDecoration: 'none' }}>advocaterk0788@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>

                        {/* Contact Form */}
                        <RevealOnScroll delay={0.2}>
                            <form
                                onSubmit={onSubmit}
                                className="glass-card-light"
                                style={{
                                    padding: '3rem',
                                    borderRadius: '20px',
                                    boxShadow: 'var(--box-shadow-elevated)',
                                    border: '1px solid rgba(212, 175, 55, 0.3)'
                                }}
                            >
                                <h2 style={{ fontSize: '1.8rem', marginBottom: '1.8rem', fontFamily: 'var(--font-heading)' }}>Request Consultation</h2>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.6rem', fontWeight: 600, fontSize: '0.875rem', color: 'var(--primary-color)' }}>Your Full Name</label>
                                    <input
                                        name="name"
                                        type="text"
                                        required
                                        style={{ width: '100%' }}
                                        placeholder="Enter Your Full Name"
                                    />
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginBottom: '1.5rem' }}>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.6rem', fontWeight: 600, fontSize: '0.875rem', color: 'var(--primary-color)' }}>Email Address</label>
                                        <input
                                            name="email"
                                            type="email"
                                            required
                                            style={{ width: '100%' }}
                                            placeholder="name@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.6rem', fontWeight: 600, fontSize: '0.875rem', color: 'var(--primary-color)' }}>Phone Number</label>
                                        <input
                                            name="phone"
                                            type="tel"
                                            required
                                            style={{ width: '100%' }}
                                            placeholder="1234567890"
                                        />
                                    </div>
                                </div>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.6rem', fontWeight: 600, fontSize: '0.875rem', color: 'var(--primary-color)' }}>Subject / Practice Area</label>
                                    <select
                                        name="subject"
                                        style={{ width: '100%', backgroundColor: 'white' }}
                                    >
                                        <option value="General Inquiry">General Legal Inquiry</option>
                                        <option value="Criminal Defense">Criminal Defense &amp; Bail</option>
                                        <option value="Matrimonial Dispute">Matrimonial &amp; Family Law</option>
                                        <option value="Property Litigation">Property Litigation</option>
                                        <option value="Cheque Bounce">Cheque Bounce (NI Act Sec 138)</option>
                                    </select>
                                </div>

                                <div style={{ marginBottom: '2.2rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.6rem', fontWeight: 600, fontSize: '0.875rem', color: 'var(--primary-color)' }}>Brief Case Overview</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows="4"
                                        style={{ width: '100%', resize: 'none' }}
                                        placeholder="Briefly describe your legal inquiry..."
                                    ></textarea>
                                </div>

                                <button
                                    className="btn"
                                    type="submit"
                                    disabled={status === "loading"}
                                    style={{
                                        width: '100%',
                                        opacity: status === "loading" ? 0.7 : 1,
                                        cursor: status === "loading" ? 'not-allowed' : 'pointer'
                                    }}
                                >
                                    {status === "loading" ? "Sending Request..." : "Submit Confidential Inquiry"}
                                </button>

                                {result && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        style={{
                                            marginTop: '1.5rem',
                                            padding: '1rem',
                                            borderRadius: '8px',
                                            textAlign: 'center',
                                            fontSize: '0.95rem',
                                            backgroundColor: status === "success" ? '#e6f4ea' : status === "error" ? '#fce8e6' : '#f4f4f4',
                                            color: status === "success" ? '#1e7e34' : status === "error" ? '#c5221f' : 'inherit'
                                        }}
                                    >
                                        {result}
                                    </motion.div>
                                )}
                            </form>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>
        </div>
    );
}

