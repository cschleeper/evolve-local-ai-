import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { ServiceCard } from "@/components/ui/service-card";
import { serviceCardContent } from "@/lib/constants";

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <Container>
        <SectionHeader
          label="Services"
          title="AI implementation services built for local business reality"
          subtitle="Start with one high-impact workflow or combine services into a full AI operating system for your company."
          centered
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {serviceCardContent.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 3) * 0.06}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.shortDescription}
                tags={service.tags}
                href={service.href}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
