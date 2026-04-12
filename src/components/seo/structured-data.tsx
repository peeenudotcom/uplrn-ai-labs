import { siteConfig } from '@/config/site';
import type { Course } from '@/config/courses';

// ---------------------------------------------------------------------------
// OrganizationSchema
// Add to the root layout so every page inherits it.
// ---------------------------------------------------------------------------
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo-tarahut.png`,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.street,
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.state,
      postalCode: siteConfig.contact.postalCode,
      addressCountry: 'IN',
    },
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    sameAs: [
      siteConfig.links.instagram,
      siteConfig.links.linkedin,
      siteConfig.links.youtube,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ---------------------------------------------------------------------------
// LocalBusinessSchema
// Add to contact and about pages.
// ---------------------------------------------------------------------------
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo-tarahut.png`,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.street,
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.state,
      postalCode: siteConfig.contact.postalCode,
      addressCountry: 'IN',
    },
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    openingHours: 'Mo-Sa 09:00-18:00',
    priceRange: '₹2,499 - ₹24,999',
    sameAs: [
      siteConfig.links.instagram,
      siteConfig.links.linkedin,
      siteConfig.links.youtube,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Converts a plain-text duration string to an ISO 8601 duration.
 * Examples:
 *   "4 Weeks"          → "P4W"
 *   "12 Weeks"         → "P12W"
 *   "15 Days"          → "P15D"
 *   "45 Days"          → "P45D"
 *   "8 Weeks"          → "P8W"
 *   "3 Weeks"          → "P3W"
 *   "90 Days (12 Weeks)"→ "P90D"
 */
function toIsoDuration(duration: string): string {
  // Try "N Weeks" first
  const weeksMatch = duration.match(/^(\d+)\s*Weeks?/i);
  if (weeksMatch) return `P${weeksMatch[1]}W`;

  // Try "N Days" (possibly followed by more text)
  const daysMatch = duration.match(/^(\d+)\s*Days?/i);
  if (daysMatch) return `P${daysMatch[1]}D`;

  // Fallback — return as-is (won't validate against schema.org but won't crash)
  return duration;
}

// ---------------------------------------------------------------------------
// CourseSchema
// Add to /courses/[slug] page.
// ---------------------------------------------------------------------------
export function CourseSchema({ course }: { course: Course }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.shortDescription,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      sameAs: siteConfig.url,
    },
    offers: {
      '@type': 'Offer',
      price: course.price,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
    courseMode: 'Offline',
    educationalLevel: course.level,
    timeRequired: toIsoDuration(course.duration),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ---------------------------------------------------------------------------
// FAQSchema
// Add to /faq page (pass allFaqs) or any page with FAQ content.
// ---------------------------------------------------------------------------
export interface FaqItem {
  question: string;
  answer: string;
}

export function FAQSchema({ faqs }: { faqs: FaqItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
