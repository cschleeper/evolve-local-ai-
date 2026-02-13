import { packages } from "@/lib/constants";
import { Container } from "@/components/ui/container";
import { PackageCard } from "@/components/ui/package-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export function PackagesSection() {
  return (
    <section id="packages" className="py-24">
      <Container>
        <SectionHeader
          label="Packages"
          title="Implementation packages for every growth stage"
          subtitle="All pricing is starting at and tailored to your business size, workflow complexity, and support needs."
          centered
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <Reveal key={pkg.name} delay={index * 0.08}>
              <PackageCard {...pkg} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
