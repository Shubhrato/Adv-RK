import Header from '../components/Header';
import Footer from '../components/Footer';
import QuickContactDock from '../components/QuickContactDock';
import '../index.css';

export const metadata = {
    metadataBase: new URL('https://advocaterk0788.in'),
    title: 'Advocate in Roorkee & Legal Counsel in Haridwar | RK Law',
    description: 'Advocate in Roorkee & Haridwar handling Criminal Defense, Matrimonial Disputes, Property Litigation & Cheque Bounce at New Civil Court. Book consultation today.',
    keywords: [
        'Advocate in Roorkee',
        'Lawyer in Roorkee',
        'Legal Counsel Haridwar',
        'Advocate RK Roorkee',
        'New Civil Court Ramnagar Lawyer',
        'Criminal Lawyer Roorkee',
        'Matrimonial Divorce Lawyer Roorkee',
        'Property Litigation Advocate Roorkee',
        'Cheque Bounce Lawyer Roorkee',
        'Court Practice Haridwar'
    ],
    alternates: {
        canonical: '/',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
        },
    },
    openGraph: {
        title: 'Advocate in Roorkee & Legal Counsel in Haridwar | RK Law',
        description: 'Advocate in Roorkee & Haridwar handling Criminal Defense, Matrimonial Disputes, Property Litigation & Cheque Bounce at New Civil Court. Book consultation today.',
        url: 'https://advocaterk0788.in/',
        siteName: 'Advocate RK & Associates',
        locale: 'en_IN',
        type: 'website',
        images: [
            {
                url: 'https://advocaterk0788.in/assets/advocate_profile.jpg',
                width: 1200,
                height: 630,
                alt: 'Advocate RK & Associates Roorkee',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Advocate in Roorkee & Legal Counsel in Haridwar | RK Law',
        description: 'Advocate in Roorkee & Haridwar handling Criminal Defense, Matrimonial Disputes, Property Litigation & Cheque Bounce at New Civil Court. Book consultation today.',
        images: ['https://advocaterk0788.in/assets/advocate_profile.jpg'],
    },
}

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LegalService', 'LocalBusiness', 'Attorney'],
    'name': 'Advocate RK & Associates',
    'image': 'https://advocaterk0788.in/assets/advocate_profile.jpg',
    '@id': 'https://advocaterk0788.in/#legalservice',
    'url': 'https://advocaterk0788.in/',
    'telephone': '+917409296786',
    'email': 'advocaterk0788@gmail.com',
    'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'New Civil Court, Ramnagar',
        'addressLocality': 'Roorkee',
        'addressRegion': 'Uttarakhand',
        'postalCode': '247667',
        'addressCountry': 'IN'
    },
    'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 29.8543,
        'longitude': 77.8880
    },
    'areaServed': [
        { '@type': 'AdministrativeArea', 'name': 'Roorkee' },
        { '@type': 'AdministrativeArea', 'name': 'Haridwar' },
        { '@type': 'AdministrativeArea', 'name': 'Uttarakhand' }
    ],
    'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+917409296786',
        'contactType': 'legal consultant',
        'areaServed': 'IN',
        'availableLanguage': ['en', 'hi']
    },
    'openingHoursSpecification': [
        {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            'opens': '09:00',
            'closes': '19:00'
        }
    ],
    'knowsAbout': [
        'Criminal Defense Law & Bail Applications',
        'Matrimonial & Family Disputes (Sec 498A, Mutual & Contested Divorce)',
        'Property & Land Litigation (Chain Title Search & Mutation)',
        'Section 138 Negotiable Instruments Act (Cheque Bounce Notice)',
        'Consumer Protection Law & Claims',
        'Appellate Law & High Court Litigation'
    ],
    'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Legal Practice Areas & Services',
        'itemListElement': [
            {
                '@type': 'Offer',
                'itemOffered': {
                    '@type': 'Service',
                    'name': 'Criminal Defense & Anticipatory Bail'
                }
            },
            {
                '@type': 'Offer',
                'itemOffered': {
                    '@type': 'Service',
                    'name': 'Matrimonial & Family Law Representation'
                }
            },
            {
                '@type': 'Offer',
                'itemOffered': {
                    '@type': 'Service',
                    'name': 'Property Litigation & Land Dispute Settlement'
                }
            },
            {
                '@type': 'Offer',
                'itemOffered': {
                    '@type': 'Service',
                    'name': 'Section 138 NI Act Cheque Bounce Proceedings'
                }
            }
        ]
    },
    'priceRange': '₹₹',
    'sameAs': [
        'https://www.instagram.com/advocaterk_1?igsh=NXE4aXlsczN3NWsy',
        'https://www.linkedin.com/in/rk-associates-4704901b1/',
        'https://www.facebook.com/share/1CDjKyD8HZ/'
    ]
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800;900&family=Outfit:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta name="geo.region" content="IN-UT" />
                <meta name="geo.placename" content="Roorkee, Haridwar, Uttarakhand" />
                <meta name="geo.position" content="29.8543;77.8880" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                if (typeof window !== 'undefined' && typeof MutationObserver !== 'undefined') {
                                    var observer = new MutationObserver(function(mutations) {
                                        for (var i = 0; i < mutations.length; i++) {
                                            var target = mutations[i].target;
                                            if (target && target.nodeType === 1 && target.hasAttribute && target.hasAttribute('bis_skin_checked')) {
                                                target.removeAttribute('bis_skin_checked');
                                            }
                                        }
                                    });
                                    observer.observe(document.documentElement, {
                                        attributes: true,
                                        subtree: true,
                                        attributeFilter: ['bis_skin_checked']
                                    });
                                }
                            })();
                        `
                    }}
                />
            </head>
            <body suppressHydrationWarning>
                <Header />
                <main>{children}</main>
                <Footer />
                <QuickContactDock />
            </body>
        </html>
    )
}

