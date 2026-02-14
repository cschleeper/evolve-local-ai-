import { absoluteUrl } from "@/lib/utils";
import { siteConfig, socialLinks, type ServiceItem } from "@/lib/constants";
import { serviceSeoContent } from "@/lib/service-seo-content";
import { defaultOgImage } from "@/lib/seo";

type FAQ = { question: string; answer: string };

function toE164Phone(phone: string) {
  const digits = phone.replace(/[^\d]/g, "");
  if (digits.length === 11 && digits.startsWith("1")) {
    return `+${digits}`;
  }
  if (digits.length === 10) {
    return `+1${digits}`;
  }
  return phone;
}

export function localBusinessSchema(pagePath = "/") {
  const sameAs = socialLinks.map((link) => link.href);

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: absoluteUrl("/"),
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: toE164Phone(siteConfig.phone),
    priceRange: "$$",
    areaServed: [
      {
        "@type": "State",
        name: "Pennsylvania",
      },
      {
        "@type": "City",
        name: "Ambler",
      },
      {
        "@type": "City",
        name: "Philadelphia",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ambler",
      addressRegion: "PA",
      addressCountry: "US",
    },
    mainEntityOfPage: absoluteUrl(pagePath),
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function serviceSchema(service: ServiceItem) {
  const seoContent = serviceSeoContent[service.slug];

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: seoContent?.serviceType || service.title,
    serviceType: seoContent?.serviceType || service.title,
    description: seoContent?.schemaDescription || service.shortDescription,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    areaServed: "Pennsylvania",
    offers: {
      "@type": "Offer",
      description: `Starting at ${service.startsAt}`,
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
  author: string;
  image?: string;
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
      "@type": "Person",
      name: args.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      logo: {
        "@type": "ImageObject",
        url: defaultOgImage,
      },
    },
    image: args.image ? absoluteUrl(args.image) : defaultOgImage,
    mainEntityOfPage: absoluteUrl(`/blog/${args.slug}`),
    url: absoluteUrl(`/blog/${args.slug}`),
  };
}
