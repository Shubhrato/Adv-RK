"use client";

import React from 'react';
import { motion } from 'framer-motion';

const RevealOnScroll = ({ children, threshold = 0.1, className = '', delay = 0, y = 30 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: threshold }}
            transition={{ duration: 0.8, delay: delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={className}
            style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}
        >
            {children}
        </motion.div>
    );
};

export default RevealOnScroll;
