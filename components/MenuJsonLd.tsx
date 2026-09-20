import { menu, siteConfig, website } from "@/content/website";

export default function MenuJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${siteConfig.siteUrl}/#menu`,
    name: `${siteConfig.name} Menu`,
    url: `${siteConfig.siteUrl}/#menu`,
    inLanguage: website.seo.language,
    hasMenuSection: menu.map((category) => ({
      "@type": "MenuSection",
      name: category.title,
      description: category.description,
      hasMenuItem: category.items.map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        description: item.description,
        suitableForDiet: item.vegetarian ? "https://schema.org/VegetarianDiet" : undefined,
        offers: item.price
          ? {
              "@type": "Offer",
              priceCurrency: "EUR",
              price: item.price.replace("€", ""),
            }
          : undefined,
      })),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
