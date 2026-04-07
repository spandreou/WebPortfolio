import type { Metadata } from "next";
import { siteConfig, siteUrl } from "@/lib/site-config";

type CreateMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: CreateMetadataInput): Metadata {
  const canonicalUrl = new URL(path, siteUrl).toString();
  const resolvedTitle =
    title === "Home" ? siteConfig.siteName : `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonicalUrl,
      siteName: siteConfig.siteName,
      title: resolvedTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
    },
  };
}
