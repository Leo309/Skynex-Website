'use client';

import React from 'react';
import Script from 'next/script';

export default function OrganizationSchema() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SKYNEX DIGITAL',
    url: 'https://skynexdigital.com',
    logo: 'https://skynexdigital.com/logo.png',
    sameAs: [
      'https://linkedin.com/company/skynex-global',
      'https://twitter.com/skynexglobal',
      'https://github.com/skynex-global'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-123-456-7890',
      contactType: 'customer service',
      email: 'info@skynexdigital.com',
      availableLanguage: ['English']
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vancouver',
      addressRegion: 'BC',
      postalCode: 'V5H 0H4',
      addressCountry: 'CA'
    },
    description: 'SKYNEX DIGITAL specializes in e-commerce solutions and AI-powered tools that help businesses make better decisions and stay competitive in the digital marketplace.'
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
