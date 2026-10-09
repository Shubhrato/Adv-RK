import React, { useState } from 'react';
import RevealOnScroll from '../components/RevealOnScroll';
import { motion } from 'framer-motion';

const Contact = () => {
    const [result, setResult] = useState("");
    const [status, setStatus] = useState("idle"); // idle, loading, success, error

    // Replace with your actual Web3Forms Access Key
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
            const sheetPromise = fetch(GOOGLE_SHEET_URL, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: sheetParams.toString(),
                mode: "no-cors"
            }).catch(err => console.error("Google Sheet error:", err));

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
            setResult("Something went wrong. Please try again later.");
        }
    };

    return (
        <div className="page-animate">
            {/* Header Section */}
            <section style={{
                backgroundColor: 'var(--header-bg)',
                padding: '10rem 0 6rem',
                color: 'white',
                textAlign: 'center',
                background: 'linear-gradient(rgba(10, 25, 47, 0.8), rgba(10, 25, 47, 0.9)), url("https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1920&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="container">
                    <RevealOnScroll>
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>Contact Us</h1>
                        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.25rem', opacity: 0.9, lineHeight: 1.6 }}>
                            Have a legal concern? Reach out to <strong>Advocate RK & Associates</strong> for expert guidance and reliable representation.
                        </p>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Content Section */}
            <section style={{ padding: '8rem 0', backgroundColor: 'var(--bg-premium)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '5rem' }}>

                        {/* Contact Information */}
                        <RevealOnScroll>
                            <div style={{ paddingRight: '2rem' }}>
                                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Get In Touch</h2>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.1rem' }}>
                                    We are available for consultations during business hours. Feel free to visit our office or call us directly.
                                </p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                        <div style={{
                                            fontSize: '1.5rem',
                                            backgroundColor: 'rgba(212, 175, 55, 0.1)',
                                            padding: '1rem',
                                            borderRadius: '12px',
                                            color: 'var(--accent-color)'
                                        }}>📍</div>
                                        <div>
                                            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>Office Address</h4>
                                            <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: 1.6 }}>
                                                New Civil Court, Ramnagar,<br />
                                                Roorkee, Haridwar, Uttarakhand - 247667
                                            </p>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                        <div style={{
                                            fontSize: '1.5rem',
                                            backgroundColor: 'rgba(212, 175, 55, 0.1)',
                                            padding: '1rem',
                                            borderRadius: '12px',
                                            color: 'var(--accent-color)'
                                        }}>📞</div>
                                        <div>
                                            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>Call Us</h4>
                                            <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: 1.6 }}>
                                                +91 74092 96786
                                            </p>
                                            <a
                                                href="https://wa.me/917409296786"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                    marginTop: '10px',
                                                    color: '#25D366',
                                                    fontWeight: 600,
                                                    fontSize: '0.95rem',
                                                    textDecoration: 'none'
                                                }}
                                            >
                                                <span>Chat on WhatsApp</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.89 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.743-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                        <div style={{
                                            fontSize: '1.5rem',
                                            backgroundColor: 'rgba(212, 175, 55, 0.1)',
                                            padding: '1rem',
                                            borderRadius: '12px',
                                            color: 'var(--accent-color)'
                                        }}>✉️</div>
                                        <div>
                                            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>Email Us</h3>
                                            <a href="mailto:advocaterk0788@gmail.com" style={{ margin: 0, color: 'var(--text-muted)', lineHeight: 1.6, textDecoration: 'none' }}>advocaterk0788@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>

                        {/* Contact Form */}
                        <RevealOnScroll delay={0.2}>
                            <form
                                onSubmit={onSubmit}
                                style={{
                                    backgroundColor: 'white',
                                    padding: '3rem',
                                    borderRadius: '16px',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                                    border: '1px solid rgba(0,0,0,0.05)'
                                }}
                            >
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Send a Message</h3>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.8rem', fontWeight: 600, fontSize: '0.9rem', color: 'var(--primary-color)' }}>Your Full Name</label>
                                    <input
                                        name="name"
                                        type="text"
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '14px 18px',
                                            borderRadius: '8px',
                                            border: '1px solid #ddd',
                                            fontSize: '1rem',
                                            outline: 'none',
                                            transition: 'border-color 0.3s'
                                        }}
                                        placeholder="Enter Your Full Name"
                                    />
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.8rem', fontWeight: 600, fontSize: '0.9rem', color: 'var(--primary-color)' }}>Email Address</label>
                                        <input
                                            name="email"
                                            type="email"
                                            required
                                            style={{
                                                width: '100%',
                                                padding: '14px 18px',
                                                borderRadius: '8px',
                                                border: '1px solid #ddd',
                                                fontSize: '1rem'
                                            }}
                                            placeholder="name@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.8rem', fontWeight: 600, fontSize: '0.9rem', color: 'var(--primary-color)' }}>Phone Number</label>
                                        <input
                                            name="phone"
                                            type="tel"
                                            required
                                            style={{
                                                width: '100%',
                                                padding: '14px 18px',
                                                borderRadius: '8px',
                                                border: '1px solid #ddd',
                                                fontSize: '1rem'
                                            }}
                                            placeholder="1234567890"
                                        />
                                    </div>
                                </div>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.8rem', fontWeight: 600, fontSize: '0.9rem', color: 'var(--primary-color)' }}>Subject / Legal Area</label>
                                    <select
                                        name="subject"
                                        style={{
                                            width: '100%',
                                            padding: '14px 18px',
                                            borderRadius: '8px',
                                            border: '1px solid #ddd',
                                            fontSize: '1rem',
                                            appearance: 'none',
                                            backgroundColor: 'white'
                                        }}
                                    >
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Criminal Defense">Criminal Defense</option>
                                        <option value="Matrimonial Dispute">Matrimonial Dispute</option>
                                        <option value="Property Litigation">Property Litigation</option>
                                        <option value="Cheque Bounce">Cheque Bounce</option>
                                    </select>
                                </div>

                                <div style={{ marginBottom: '2.5rem' }}>
                                    <label style={{ display: 'block', marginBottom: '0.8rem', fontWeight: 600, fontSize: '0.9rem', color: 'var(--primary-color)' }}>Describe Your Case</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows="4"
                                        style={{
                                            width: '100%',
                                            padding: '14px 18px',
                                            borderRadius: '8px',
                                            border: '1px solid #ddd',
                                            fontSize: '1rem',
                                            resize: 'none'
                                        }}
                                        placeholder="Please provide a brief overview of your legal requirement..."
                                    ></textarea>
                                </div>

                                <button
                                    className="btn"
                                    type="submit"
                                    disabled={status === "loading"}
                                    style={{
                                        width: '100%',
                                        opacity: status === "loading" ? 0.7 : 1,
                                        cursor: status === "loading" ? 'not-allowed' : 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '10px'
                                    }}
                                >
                                    {status === "loading" ? "Sending..." : "Send Secure Message"}
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
};

export default Contact;
