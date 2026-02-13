import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { JsonLd } from "@/components/ui/json-ld";
import { services } from "@/lib/constants";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schemas";
import { absoluteUrl } from "@/lib/utils";

export function getServiceMetadata(slug: string): Metadata {
  const service = services.find((item) => item.slug === slug);
  if (!service) {
    return {};
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    alternates: { canonical: absoluteUrl(`/services/${slug}`) },
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      url: absoluteUrl(`/services/${slug}`),
      type: "website",
    },
  };
}

export function ServiceRoute({ slug }: { slug: string }) {
  const service = services.find((item) => item.slug === slug);
  if (!service) {
    notFound();
  }

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqSchema(service.faq)} />
      <JsonLd
        data={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/#services" },
            { name: service.title, path: `/services/${service.slug}` },
          ])
        }
      />
      <ServicePageTemplate slug={slug} />
    </>
  );
}
