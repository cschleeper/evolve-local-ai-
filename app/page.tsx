import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { TrustBar } from "@/components/sections/trust-bar";
import { ProblemSolutionSection } from "@/components/sections/problem-solution-section";
import { homepageFaq } from "@/lib/constants";
import { absoluteUrl } from "@/lib/utils";
import { faqSchema, localBusinessSchema } from "@/lib/schemas";
import { JsonLd } from "@/components/ui/json-ld";

const ServicesSection = dynamic(() => import("@/components/sections/services-section").then((mod) => mod.ServicesSection));
const AssistantDeepDiveSection = dynamic(() =>
  import("@/components/sections/assistant-deep-dive-section").then((mod) => mod.AssistantDeepDiveSection),
);
const UseCasesSection = dynamic(() => import("@/components/sections/use-cases-section").then((mod) => mod.UseCasesSection));
const HowItWorksSection = dynamic(() =>
  import("@/components/sections/how-it-works-section").then((mod) => mod.HowItWorksSection),
);
const PackagesSection = dynamic(() => import("@/components/sections/packages-section").then((mod) => mod.PackagesSection));
const AboutSection = dynamic(() => import("@/components/sections/about-section").then((mod) => mod.AboutSection));
const BlogPreviewSection = dynamic(() =>
  import("@/components/sections/blog-preview-section").then((mod) => mod.BlogPreviewSection),
);
const FAQSection = dynamic(() => import("@/components/sections/faq-section").then((mod) => mod.FAQSection));
const CTASection = dynamic(() => import("@/components/ui/cta-section").then((mod) => mod.CTASection));

export const metadata: Metadata = {
  title: "AI for Local Business in Pennsylvania",
  description:
    "Evolve Local AI installs and maintains AI assistants, chatbots, and automations for local businesses in Ambler, PA and across Pennsylvania.",
  alternates: { canonical: absoluteUrl("/") },
  keywords: ["AI for local business", "AI assistant installation", "business AI automation"],
  openGraph: {
    title: "Evolve Local AI | AI for Local Business",
    description:
      "Install a dedicated AI Assistant for your business with hands-on setup, automation, and local support.",
    url: absoluteUrl("/"),
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={faqSchema(homepageFaq)} />
      <HeroSection />
      <TrustBar />
      <ProblemSolutionSection />
      <ServicesSection />
      <AssistantDeepDiveSection />
      <UseCasesSection />
      <HowItWorksSection />
      <PackagesSection />
      <AboutSection />
      <BlogPreviewSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
