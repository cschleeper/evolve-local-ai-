import type { MetadataRoute } from "next";
import { siteConfig, services } from "@/lib/constants";
import { getAllPosts } from "@/lib/mdx";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = ["", "/about", "/contact", "/packages", "/privacy", "/terms", "/blog"];
  const posts = await getAllPosts();

  const baseEntries = staticPages.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const serviceEntries = services.map((service) => ({
    url: `${siteConfig.siteUrl}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  const postEntries = posts.map((post) => ({
    url: `${siteConfig.siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
  }));

  return [...baseEntries, ...serviceEntries, ...postEntries];
}
