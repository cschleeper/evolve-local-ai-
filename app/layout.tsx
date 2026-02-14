import type { Metadata } from "next";
import Script from "next/script";
import { DM_Serif_Display, Outfit, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { ChatWidget } from "@/components/ui/chat-widget";
import { siteConfig } from "@/lib/constants";
import { absoluteUrl } from "@/lib/utils";
import { defaultOgImage } from "@/lib/seo";
import "./globals.css";

const serif = DM_Serif_Display({
  variable: "--font-serif-display",
  subsets: ["latin"],
  weight: "400",
});

const sans = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "AI for Local Business in Pennsylvania | Evolve Local AI",
    template: "%s",
  },
  description: siteConfig.description,
  alternates: { canonical: absoluteUrl("/") },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "AI for Local Business in Pennsylvania | Evolve Local AI",
    description: siteConfig.description,
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
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
    title: "AI for Local Business in Pennsylvania | Evolve Local AI",
    description: siteConfig.description,
    images: [defaultOgImage],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  keywords: ["AI for local business", "AI assistant installation", "business AI automation"],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const showChatbot = process.env.NEXT_PUBLIC_ENABLE_CHATBOT === "true";

  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable} ${mono.variable} bg-[var(--color-paper)] antialiased`}>
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}');`}
            </Script>
          </>
        ) : null}
        <Navigation />
        <main>{children}</main>
        <Footer />
        {showChatbot ? <ChatWidget /> : null}
      </body>
    </html>
  );
}
