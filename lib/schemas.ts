import { absoluteUrl } from "@/lib/utils";
import { siteConfig, type ServiceItem } from "@/lib/constants";

type FAQ = { question: string; answer: string };

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed: ["Ambler", "Pennsylvania", "Philadelphia Metro"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ambler",
      addressRegion: "PA",
      addressCountry: "US",
    },
  };
}

export function serviceSchema(service: ServiceItem) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDescription,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      areaServed: "Pennsylvania",
    },
    areaServed: "United States",
    offers: {
      "@type": "Offer",
      priceSpecification: service.startsAt,
      url: absoluteUrl(`/services/${service.slug}`),
    },
  };
}

export function faqSchema(faq: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function blogPostingSchema(args: {
  title: string;
  description: string;
  slug: string;
  date: string;
  updated: string;
  tags: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: args.title,
    description: args.description,
    datePublished: args.date,
    dateModified: args.updated,
    keywords: args.tags,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    mainEntityOfPage: absoluteUrl(`/blog/${args.slug}`),
    url: absoluteUrl(`/blog/${args.slug}`),
  };
}
