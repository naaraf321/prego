import { siteConfig, website } from "@/content/website";

export default function WebsiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.siteUrl}/#website`,
    url: siteConfig.siteUrl,
    name: siteConfig.name,
    alternateName: `${siteConfig.shortName} ${siteConfig.address.locality}`,
    inLanguage: website.seo.language,
    publisher: { "@id": `${siteConfig.siteUrl}/#restaurant` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
