module.exports = [
"[project]/src/components/RevealOnScroll.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const RevealOnScroll = ({ children, threshold = 0.1, className = '', delay = 0, y = 30 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: y
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            amount: threshold
        },
        transition: {
            duration: 0.8,
            delay: delay,
            ease: [
                0.21,
                0.47,
                0.32,
                0.98
            ]
        },
        className: className,
        style: {
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column'
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/RevealOnScroll.jsx",
        lineNumber: 8,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = RevealOnScroll;
}),
"[project]/src/components/TiltCard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const TiltCard = ({ children, className = '', style = {} })=>{
    // Simplified "ProfessionalCard" - No more 3D tilt as per user request
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        whileHover: {
            y: -10,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        style: {
            height: "100%",
            ...style
        },
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                height: "100%",
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                borderRadius: '12px',
                overflow: 'hidden'
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/TiltCard.jsx",
            lineNumber: 20,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/TiltCard.jsx",
        lineNumber: 9,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = TiltCard;
}),
"[project]/src/data/servicesData.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "servicesData",
    ()=>servicesData
]);
const servicesData = {
    'criminal-defense': {
        slug: 'criminal-defense',
        title: 'Criminal Defense & Bail Matters',
        shortDesc: 'Legal representation in criminal defense matters including bail applications, criminal trials, anticipatory bail, and court appeals.',
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
        heroImage: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1920&q=80',
        overview: 'Advocate RK & Associates provides legal representation and trial court advocacy in criminal defense matters before District Courts, Magistrate Courts, and Appellate Courts in Roorkee, Haridwar, and across Uttarakhand. We handle criminal proceedings under IPC/BNS (Bharatiya Nyaya Sanhita), Code of Criminal Procedure (CrPC/BNSS), and special criminal statutes.',
        keyAreas: [
            {
                title: 'Regular & Anticipatory Bail',
                desc: 'Drafting and contesting bail applications under Section 437, 438, 439 CrPC / BNSS in District Courts and High Court.'
            },
            {
                title: 'Criminal Trial Defense',
                desc: 'Trial defense, examination of witnesses, cross-examination, and argument of criminal cases before Sessions and Magistrate Courts.'
            },
            {
                title: 'FIR Quashing & Revision',
                desc: 'Legal assistance for criminal revision petitions, discharge applications, and petitions under Section 482 CrPC before the High Court.'
            },
            {
                title: 'Domestic Violence & IPC Offences',
                desc: 'Representation in cases related to Section 498A, Dowry Prohibition Act, Domestic Violence Act, and bodily injury offenses.'
            },
            {
                title: 'Economic & Financial Crimes',
                desc: 'Defense in fraud, forgery, breach of trust, and white-collar criminal proceedings.'
            }
        ],
        processSteps: [
            {
                step: '1. Case Analysis',
                desc: 'Thorough review of FIR, charge sheet, police reports, and legal documents.'
            },
            {
                step: '2. Legal Drafting',
                desc: 'Preparation of bail petitions, discharge applications, or written statements.'
            },
            {
                step: '3. Court Arguments',
                desc: 'Representation before Magistrate, Sessions Judge, or High Court Bench.'
            },
            {
                step: '4. Trial Advocacy',
                desc: 'Cross-examination of prosecution witnesses and presentation of defense evidence.'
            }
        ],
        faqs: [
            {
                question: 'How to file a criminal case or defense petition in Roorkee Court? (रूड़की कोर्ट में केस कैसे फाइल करें?)',
                answer: 'Criminal proceedings are initiated by lodging an FIR at the concerned police station or by filing a private criminal complaint under Section 200 CrPC / BNSS directly before the Judicial Magistrate Court at New Civil Court, Ramnagar, Roorkee.'
            },
            {
                question: 'What is the procedure for obtaining anticipatory bail prior to arrest?',
                answer: 'If there is a reasonable apprehension of arrest in a non-bailable offence, an anticipatory bail petition under Section 438 CrPC / Sec 482 BNSS is filed before the Sessions Court at Haridwar or the High Court of Uttarakhand at Nainital.'
            },
            {
                question: 'How long does it take to get a regular bail in a criminal case?',
                answer: 'In general criminal matters, regular bail applications before the Magistrate or Sessions Court in Roorkee and Haridwar are typically heard within 3 to 7 working days depending on court schedules and police diary reports.'
            },
            {
                question: 'Can a false FIR lodged against an individual be cancelled or quashed?',
                answer: 'Yes, if an FIR is registered with malicious intent or false accusations, a petition under Section 482 CrPC can be filed before the High Court of Uttarakhand to quash the FIR and prevent unlawful police harassment.'
            },
            {
                question: 'What documents are required to prepare a bail application?',
                answer: 'Key documents include a copy of the FIR, arrest memo, identity proof of sureties, property papers for bail bonds, and relevant evidence establishing innocence or non-involvement.'
            }
        ],
        metaTitle: 'Criminal Defense Legal Services in Roorkee & Haridwar | Legal Information',
        metaDesc: 'Information on criminal defense practice areas including bail, criminal trials, FIR petitions, and appeals at New Civil Court Roorkee & Haridwar.'
    },
    'matrimonial-disputes': {
        slug: 'matrimonial-disputes',
        title: 'Matrimonial & Family Law',
        shortDesc: 'Legal counsel for matrimonial disputes, divorce proceedings, maintenance, alimony, and child custody matters.',
        image: 'https://images.unsplash.com/photo-1589216532372-1c2a367900d9?auto=format&fit=crop&w=800&q=80',
        heroImage: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1920&q=80',
        overview: 'Advocate RK & Associates provides structured legal guidance and litigation support in matrimonial and family law matters under Hindu Marriage Act, Special Marriage Act, Guardians and Wards Act, and Protection of Women from Domestic Violence Act. We assist clients in navigating sensitive family legal disputes through mediation and family court proceedings.',
        keyAreas: [
            {
                title: 'Mutual Consent Divorce',
                desc: 'Drafting joint petitions, first and second motion proceedings under Section 13B of Hindu Marriage Act.'
            },
            {
                title: 'Contested Divorce Proceedings',
                desc: 'Litigation in contested divorce cases based on cruelty, desertion, adultery, or mutual incompatibility.'
            },
            {
                title: 'Maintenance & Alimony (Sec 125 CrPC / BNSS)',
                desc: 'Filing and contesting applications for interim and final maintenance for spouse and children.'
            },
            {
                title: 'Child Custody & Guardianship',
                desc: 'Legal representation in child custody petitions, visitation rights, and guardianship disputes.'
            },
            {
                title: 'Domestic Violence & Restitution',
                desc: 'Court proceedings under DV Act 2005 and Restitution of Conjugal Rights (Sec 9 HMA).'
            }
        ],
        processSteps: [
            {
                step: '1. Initial Consultation',
                desc: 'Understanding family dynamics, legal rights, and statutory remedies.'
            },
            {
                step: '2. Pre-Litigation Mediation',
                desc: 'Exploring alternative dispute resolution and settlement options.'
            },
            {
                step: '3. Petition Drafting & Filing',
                desc: 'Filing petitions before the Family Court at Roorkee & Haridwar.'
            },
            {
                step: '4. Evidence & Trial',
                desc: 'Presenting documentary proof, cross-examination, and final arguments.'
            }
        ],
        faqs: [
            {
                question: 'How long does a Mutual Consent Divorce take to complete in Family Court?',
                answer: 'A mutual consent divorce (Sec 13B HMA) generally takes around 6 months between the 1st Motion and 2nd Motion, though courts may waive the 6-month period under specific circumstances.'
            },
            {
                question: 'How is monthly maintenance calculated in family disputes? (भरण-पोषण कैसे तय होता है?)',
                answer: 'Under Section 125 CrPC / BNSS, courts evaluate the income of both spouses, standard of living during marriage, financial liabilities, and reasonable needs of the dependent spouse and minor children.'
            },
            {
                question: 'What factors determine child custody in a divorce case?',
                answer: 'Child custody is decided based on the overall welfare and best interests of the child, considering the child’s age, educational background, emotional bonding, and living environment offered by each parent.'
            },
            {
                question: 'Where are matrimonial and divorce petitions filed in Roorkee?',
                answer: 'Matrimonial suits, maintenance petitions, and divorce applications arising in Roorkee are filed before the Family Court having jurisdiction over Roorkee and Haridwar district.'
            },
            {
                question: 'What is Stridhan and how can a woman claim it back?',
                answer: 'Stridhan includes all gifts, jewelry, cash, and items presented to a woman before, during, or after marriage. It is her exclusive property, and a petition under Section 406 IPC / DV Act can be filed for its recovery.'
            }
        ],
        metaTitle: 'Matrimonial & Family Law Practice in Roorkee & Haridwar | Practice Areas',
        metaDesc: 'Legal information on matrimonial law, mutual & contested divorce, maintenance under Sec 125, and child custody at New Civil Court Roorkee.'
    },
    'property-litigation': {
        slug: 'property-litigation',
        title: 'Property Litigation & Land Disputes',
        shortDesc: 'Legal advice and court representation for property litigation, partition suits, title disputes, and real estate matters.',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
        heroImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80',
        overview: 'Advocate RK & Associates represents individuals, landholders, and business entities in civil property disputes, land revenue matters, title verification, partition suits, and injunction proceedings before Civil Courts, Revenue Courts, and Appellate Authorities in Roorkee and Haridwar.',
        keyAreas: [
            {
                title: 'Partition & Declaration Suits',
                desc: 'Filing civil suits for ancestral property partition, declaration of title, and determination of shares.'
            },
            {
                title: 'Stay & Permanent Injunctions',
                desc: 'Drafting applications for temporary injunctions (Order 39 CPC) to protect property possession.'
            },
            {
                title: 'Land Revenue & Mutation Disputes',
                desc: 'Representation before Tehsildar, SDM, and Collector Courts for land revenue, khatauni mutation, and boundary demarcation.'
            },
            {
                title: 'Tenant Eviction & Rent Disputes',
                desc: 'Filing eviction petitions, lease enforcement, and recovering unpaid rent or mesne profits.'
            },
            {
                title: 'Specific Performance & Breach of Contract',
                desc: 'Legal proceedings for specific performance of real estate sale agreements and recovery of advance payments.'
            }
        ],
        processSteps: [
            {
                step: '1. Title & Search Verification',
                desc: 'Examining registry deeds, revenue records, and chain of ownership.'
            },
            {
                step: '2. Legal Notice Notice',
                desc: 'Issuing statutory legal notice prior to initiating civil litigation.'
            },
            {
                step: '3. Plaint Filing & Stay Order',
                desc: 'Filing civil plaint and seeking urgent interim protection orders.'
            },
            {
                step: '4. Civil Trial & Decree',
                desc: 'Framing of issues, evidence recording, and obtaining decree.'
            }
        ],
        faqs: [
            {
                question: 'How long does a property dispute take to resolve in Roorkee civil court? (जमीन विवाद सुलझाने में कितना समय लगता है?)',
                answer: 'Civil property suits involve title verification, framing of issues, witness evidence, and final arguments. While full trials take time, urgent stay orders (Temporary Injunction Order 39 CPC) to stop illegal construction or sale can be obtained in initial court hearings.'
            },
            {
                question: 'How can an owner prevent illegal encroachment or unauthorized sale of land?',
                answer: 'An owner can file a civil suit for Permanent Injunction along with an application for Temporary Stay under Order 39 Rules 1 & 2 CPC in Civil Court to prohibit the opposite party from entering or selling the land.'
            },
            {
                question: 'What is the procedure for ancestral property partition among legal heirs?',
                answer: 'If family co-owners cannot agree on an informal split, a civil suit for Partition and Separate Possession is filed in the Civil Court to determine each legal heir’s share according to personal succession laws.'
            },
            {
                question: 'Which court hears revenue land mutation and boundary disputes in Haridwar district?',
                answer: 'Agricultural land revenue matters, khatauni mutation disputes, and boundary demarcations (Paimaish) fall under the jurisdiction of Revenue Courts (Tehsildar, SDM Court, and Collector Court).'
            },
            {
                question: 'What documents are essential for instituting a civil property suit?',
                answer: 'Crucial documents include registered sale deeds, chain of previous title deeds, Khatauni / Khasra revenue extracts, municipal tax receipts, site maps, and photographs of possession.'
            }
        ],
        metaTitle: 'Property Litigation Practice in Roorkee & Haridwar | Civil Legal Information',
        metaDesc: 'Information on civil property litigation, partition suits, injunctions, and land revenue matters at New Civil Court Roorkee.'
    },
    'cheque-bounce': {
        slug: 'cheque-bounce',
        title: 'Cheque Bounce (Section 138 NI Act)',
        shortDesc: 'Legal advocacy for Negotiable Instruments Act Section 138 cheque dishonour proceedings and financial recovery matters.',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
        heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1920&q=80',
        overview: 'Advocate RK & Associates handles summary criminal trial proceedings under Section 138 of the Negotiable Instruments Act, 1881 for cheque bounce cases, recovery of debt, statutory legal demand notices, and defense proceedings before Judicial Magistrate Courts in Roorkee and Haridwar.',
        keyAreas: [
            {
                title: 'Statutory Legal Demand Notice',
                desc: 'Drafting and serving mandatory statutory legal notices within 30 days of cheque dishonour memo.'
            },
            {
                title: 'Criminal Complaint Filing',
                desc: 'Filing formal Section 138 NI Act complaint before the Judicial Magistrate within statutory timeframes.'
            },
            {
                title: 'Complainant Representation',
                desc: 'Pre-summoning evidence, summons issuance, and trial advocacy for cheque payees.'
            },
            {
                title: 'Accused Defense Representation',
                desc: 'Defense advocacy regarding legally enforceable debt, security cheques, and statutory defects.'
            },
            {
                title: 'Out-of-Court Settlement',
                desc: 'Facilitating compounding of offences under Section 147 NI Act through formal compromise deeds.'
            }
        ],
        processSteps: [
            {
                step: '1. Cheque Memo Received',
                desc: 'Noting bank return memo reason (insufficient funds, signature mismatch).'
            },
            {
                step: '2. Legal Notice (30 Days)',
                desc: 'Serving statutory 15-day demand notice to the drawer.'
            },
            {
                step: '3. Magistrate Complaint',
                desc: 'Filing criminal complaint within 30 days after notice expiry.'
            },
            {
                step: '4. Summons & Trial',
                desc: 'Court appearance, interim compensation application (Sec 143A), and trial.'
            }
        ],
        faqs: [
            {
                question: 'What is the exact deadline to send a legal notice after a cheque bounces?',
                answer: 'A statutory legal notice under Section 138 NI Act must be dispatched to the drawer within 30 calendar days from the date of receiving the bank dishonour return memo.'
            },
            {
                question: 'What happens if the drawer ignores the 15-day cheque bounce notice?',
                answer: 'If the drawer fails to clear the cheque payment within 15 days of receiving the legal notice, a criminal complaint is instituted before the Judicial Magistrate Court within the next 30 days.'
            },
            {
                question: 'Can the court award interim compensation during a cheque bounce trial?',
                answer: 'Yes, under Section 143A of the NI Act, the court may order the drawer to pay an interim compensation of up to 20% of the cheque amount to the complainant during trial.'
            },
            {
                question: 'Is a cheque bounce case compoundable or settleable out of court?',
                answer: 'Yes, Section 147 of the Negotiable Instruments Act classifies cheque bounce offences as compoundable, allowing parties to settle the matter through compromise at any trial stage.'
            },
            {
                question: 'What is the maximum punishment awarded for cheque dishonour under Section 138?',
                answer: 'The law provides for imprisonment for a term up to 2 years, or a monetary fine extending up to double the cheque amount, or both.'
            }
        ],
        metaTitle: 'Cheque Bounce & NI Act Legal Services in Roorkee | Practice Information',
        metaDesc: 'Legal details on Section 138 NI Act cheque bounce legal notice, magistrate complaints, and defense proceedings in Roorkee & Haridwar.'
    },
    'consumer-law': {
        slug: 'consumer-law',
        title: 'Consumer Rights & Dispute Redressal',
        shortDesc: 'Representation and advice regarding consumer protection rights, defective goods, and deficiency of services.',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
        heroImage: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1920&q=80',
        overview: 'Advocate RK & Associates provides legal guidance for consumers and service providers under the Consumer Protection Act 2019 before District Consumer Disputes Redressal Commissions (DCDRC) in Haridwar and State Commission Uttarakhand.',
        keyAreas: [
            {
                title: 'Deficiency of Service Complaints',
                desc: 'Litigation against insurance companies, telecom providers, banks, builders, and service firms.'
            },
            {
                title: 'Defective Product Claims',
                desc: 'Filing complaints for defective manufacturing, unfair trade practices, and warranty breaches.'
            },
            {
                title: 'Medical Negligence Disputes',
                desc: 'Legal assistance in cases of alleged medical malpractice and hospital service deficiency.'
            },
            {
                title: 'Real Estate Consumer Claims',
                desc: 'Filing consumer petitions against builders for delayed possession and unfair agreements.'
            }
        ],
        processSteps: [
            {
                step: '1. Notice to Service Provider',
                desc: 'Sending formal legal notice specifying defect or service deficiency.'
            },
            {
                step: '2. Consumer Commission Petition',
                desc: 'Filing complaint before District Consumer Commission Haridwar.'
            },
            {
                step: '3. Evidence & Written Statement',
                desc: 'Submitting bills, communications, and expert evidence.'
            },
            {
                step: '4. Final Order & Compensation',
                desc: 'Seeking product replacement, refund, and financial compensation.'
            }
        ],
        faqs: [
            {
                question: 'What is the time limit for filing a consumer complaint in Consumer Forum?',
                answer: 'A consumer complaint must be filed within 2 years from the date on which the cause of action (defect, service failure, or financial fraud) arose.'
            },
            {
                question: 'Which Consumer Commission has jurisdiction over Roorkee residents?',
                answer: 'Complaints for Haridwar district (including Roorkee) for claim values up to ₹50 Lakhs are filed before the District Consumer Disputes Redressal Commission (DCDRC) at Haridwar.'
            },
            {
                question: 'Can a consumer claim compensation for mental harassment and legal expenses?',
                answer: 'Yes, under the Consumer Protection Act 2019, consumers can seek monetary compensation for mental agony, financial loss, product refund, and litigation costs.'
            },
            {
                question: 'Is a formal legal notice required before filing a consumer court complaint?',
                answer: 'While sending a 15-day legal demand notice is not mandatory, it is strongly advised as it provides the seller a final chance to rectify the issue and serves as evidence of reluctance in court.'
            },
            {
                question: 'Can complaints be filed online for consumer disputes in Uttarakhand?',
                answer: 'Yes, consumer complaints can be submitted online via the official e-Daakhil portal (edaakhil.nic.in) along with digital proof and filing fee payment.'
            }
        ],
        metaTitle: 'Consumer Protection Law Practice in Roorkee & Haridwar | Information',
        metaDesc: 'Legal practice details for consumer disputes, deficiency of services, and DCDRC filings in Haridwar district.'
    },
    'appellate-law': {
        slug: 'appellate-law',
        title: 'Appellate Practice & High Court Litigation',
        shortDesc: 'Representation in higher appellate courts including High Court appeals, revision petitions, and writ matters.',
        image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80',
        heroImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80',
        overview: 'Advocate RK & Associates handles appellate litigation, civil revisions, criminal appeals, and writ petitions arising from trial court decrees and orders before appellate authorities and High Courts.',
        keyAreas: [
            {
                title: 'First & Second Civil Appeals',
                desc: 'Filing and arguing civil appeals (Section 96 & 100 CPC) against decree orders of trial courts.'
            },
            {
                title: 'Criminal Appeals & Revisions',
                desc: 'Criminal appeals against conviction/acquittal and revision petitions under BNSS / CrPC.'
            },
            {
                title: 'Writ Petitions (Article 226)',
                desc: 'Filing writ petitions before the High Court of Uttarakhand at Nainital.'
            }
        ],
        processSteps: [
            {
                step: '1. Certified Copy Assessment',
                desc: 'Thorough evaluation of lower court judgment, decree, and trial record.'
            },
            {
                step: '2. Memorandum of Appeal',
                desc: 'Framing substantial questions of law and grounds of appeal.'
            },
            {
                step: '3. Admission Hearing',
                desc: 'Arguing for stay on lower court decree during admission stage.'
            }
        ],
        faqs: [
            {
                question: 'What is the limitation period for filing a civil appeal in High Court?',
                answer: 'The statutory limitation period for instituting a civil appeal before the High Court of Uttarakhand is generally 90 days from the date of the lower court decree.'
            },
            {
                question: 'What is the difference between a Civil Appeal and a Civil Revision?',
                answer: 'An appeal challenges the merits and legal findings of a final judgment or decree, whereas a revision challenges jurisdictional errors or illegalities committed by a subordinate court.'
            },
            {
                question: 'Can a trial court order be stayed during the appellate stage?',
                answer: 'Yes, an appellant can move an application for stay of execution of decree (Order 41 Rule 5 CPC) before the appellate court at the time of admission of the appeal.'
            },
            {
                question: 'What types of Writ Petitions are filed under Article 226 of the Constitution?',
                answer: 'Writ petitions before the High Court include Writs of Habeas Corpus, Mandamus, Prohibition, Quo Warranto, and Certiorari to enforce fundamental rights or challenge unlawful government actions.'
            },
            {
                question: 'What certified documents are necessary to file an appeal in High Court?',
                answer: 'Filing an appeal requires certified copies of the trial court judgment, formal decree, complete order sheets, and relevant exhibit evidence from lower court records.'
            }
        ],
        metaTitle: 'Appellate Practice & High Court Legal Information | Roorkee',
        metaDesc: 'Information on appellate legal practice, civil & criminal appeals, and High Court revision petitions.'
    }
};
}),
"[project]/src/app/services/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RevealOnScroll$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RevealOnScroll.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TiltCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TiltCard.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$servicesData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/servicesData.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Services() {
    const servicesList = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$servicesData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["servicesData"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "page-animate",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: '10rem 0 6rem',
                    color: 'white',
                    textAlign: 'center',
                    backgroundImage: 'linear-gradient(rgba(10, 25, 47, 0.85), rgba(10, 25, 47, 0.95)), url("https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1920&q=80")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: 'var(--primary-color)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RevealOnScroll$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontSize: '3.5rem',
                                    marginBottom: '1.5rem',
                                    color: 'var(--accent-color)'
                                },
                                children: "Legal Services & Practice Areas"
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/page.js",
                                lineNumber: 25,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    maxWidth: '750px',
                                    margin: '0 auto',
                                    fontSize: '1.25rem',
                                    opacity: 0.9,
                                    lineHeight: 1.6
                                },
                                children: "Objective information regarding practice areas and legal services offered at New Civil Court, Ramnagar, Roorkee & Haridwar."
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/page.js",
                                lineNumber: 26,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/services/page.js",
                        lineNumber: 24,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/services/page.js",
                    lineNumber: 23,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/services/page.js",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: '6rem 0'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                            gap: '3rem'
                        },
                        children: servicesList.map((service, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RevealOnScroll$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                delay: idx * 0.1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TiltCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-hover",
                                        style: {
                                            backgroundColor: 'var(--card-bg)',
                                            borderRadius: '12px',
                                            overflow: 'hidden',
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            border: '1px solid var(--border-color)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    height: '240px',
                                                    overflow: 'hidden'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: service.image,
                                                    alt: service.title,
                                                    style: {
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/page.js",
                                                    lineNumber: 41,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/page.js",
                                                lineNumber: 40,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: '2rem',
                                                    flex: 1,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                style: {
                                                                    fontSize: '1.5rem',
                                                                    marginBottom: '1rem',
                                                                    color: 'var(--primary-color)'
                                                                },
                                                                children: service.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/services/page.js",
                                                                lineNumber: 45,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    color: 'var(--text-muted)',
                                                                    lineHeight: 1.6,
                                                                    fontSize: '0.95rem',
                                                                    marginBottom: '1.5rem'
                                                                },
                                                                children: service.shortDesc
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/services/page.js",
                                                                lineNumber: 46,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/services/page.js",
                                                        lineNumber: 44,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/services/${service.slug}`,
                                                            style: {
                                                                textDecoration: 'none',
                                                                color: 'var(--accent-color)',
                                                                fontWeight: 700,
                                                                fontSize: '0.95rem',
                                                                display: 'inline-flex',
                                                                alignItems: 'center',
                                                                gap: '8px'
                                                            },
                                                            children: "View Details →"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/services/page.js",
                                                            lineNumber: 49,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/services/page.js",
                                                        lineNumber: 48,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/services/page.js",
                                                lineNumber: 43,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/services/page.js",
                                        lineNumber: 39,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/page.js",
                                    lineNumber: 38,
                                    columnNumber: 33
                                }, this)
                            }, service.slug, false, {
                                fileName: "[project]/src/app/services/page.js",
                                lineNumber: 37,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/page.js",
                        lineNumber: 35,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/services/page.js",
                    lineNumber: 34,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/services/page.js",
                lineNumber: 33,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/services/page.js",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_cd6630ee._.js.map