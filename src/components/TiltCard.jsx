"use client";

import React from 'react';
import { motion } from 'framer-motion';

const TiltCard = ({ children, className = '', style = {} }) => {
    // Simplified "ProfessionalCard" - No more 3D tilt as per user request
    return (
        <motion.div
            whileHover={{
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
            }}
            style={{
                height: "100%",
                ...style
            }}
            className={className}
        >
            <div style={{ height: "100%", boxShadow: '0 10px 30px rgba(0,0,0,0.05)', borderRadius: '12px', overflow: 'hidden' }}>
                {children}
            </div>
        </motion.div>
    );
};

export default TiltCard;
