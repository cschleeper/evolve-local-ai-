import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { JsonLd } from "@/components/ui/json-ld";
import { services } from "@/lib/constants";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schemas";
import { buildMetadata } from "@/lib/seo";

export function getServiceMetadata(slug: string): Metadata {
  const service = services.find((item) => item.slug === slug);
  if (!service) {
    return {};
  }

  return buildMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: `/services/${slug}`,
    keywords: service.seo.keywords,
  });
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
