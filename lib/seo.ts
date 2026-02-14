import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/utils";

export const defaultOgImage = absoluteUrl("/images/og-default.jpg");

type BuildMetadataArgs = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  robots?: Metadata["robots"];
  other?: NonNullable<Metadata["other"]>;
};

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  type = "website",
  robots,
  other,
}: BuildMetadataArgs): Metadata {
  return {
    title,
    description,
    keywords,
    robots,
    other,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      type,
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: "Evolve Local AI",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage],
    },
  };
}
