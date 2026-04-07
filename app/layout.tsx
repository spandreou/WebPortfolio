import type { Metadata } from "next";
import { Sora, Space_Mono } from "next/font/google";
import { BackgroundEffect } from "@/components/BackgroundEffect";
import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";
import { siteConfig, siteUrl } from "@/lib/site-config";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.siteName,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.siteName,
  keywords: [...siteConfig.keywords],
  creator: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteConfig.siteName,
    title: siteConfig.siteName,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.siteName,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:border focus:border-cyan-300/60 focus:bg-slate-950 focus:px-4 focus:py-2 focus:text-sm focus:text-cyan-100"
        >
          Skip to content
        </a>
        <BackgroundEffect />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main id="main-content" className="flex-1 pb-12 pt-2 sm:pt-4">
            <Container className="h-full">{children}</Container>
          </main>
        </div>
      </body>
    </html>
  );
}
