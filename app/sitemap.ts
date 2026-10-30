import type { MetadataRoute } from "next";
import { siteConfig, website } from "@/content/website";

export default function sitemap(): MetadataRoute.Sitemap {
  const image = (path: string) => `${siteConfig.siteUrl}${path}`;
  const galleryImages = website.gallery.images.map((item) => image(item.src));

  return [
    {
      url: siteConfig.siteUrl,
      changeFrequency: "weekly",
      priority: 1,
      images: Array.from(new Set([
        image(website.hero.image),
        image(website.story.image),
        image(website.chef.image),
        ...galleryImages,
      ])),
    },
  ];
}
