import { siteConfig, website } from "@/content/website";

export default function RestaurantJsonLd() {
  const schemaImages = Array.from(new Set([
    website.hero.image,
    website.story.image,
    website.chef.image,
    ...website.gallery.images.slice(0, 6).map((image) => image.src),
  ])).map((path) => `${siteConfig.siteUrl}${path}`);

  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${siteConfig.siteUrl}/#restaurant`,
    name: siteConfig.name,
    alternateName: `${siteConfig.shortName} ${siteConfig.address.locality}`,
    url: siteConfig.siteUrl,
    mainEntityOfPage: siteConfig.siteUrl,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    priceRange: siteConfig.priceRange,
    acceptsReservations: true,
    currenciesAccepted: siteConfig.currency,
    servesCuisine: siteConfig.servesCuisine,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressCountry: siteConfig.address.country,
    },
    hasMap: siteConfig.mapUrl,
    menu: `${siteConfig.siteUrl}/#menu`,
    sameAs: [siteConfig.facebook, siteConfig.tripadvisor],
    logo: `${siteConfig.siteUrl}/icon.png`,
    image: schemaImages,
    openingHoursSpecification: siteConfig.hours.flatMap((group) =>
      group.periods.map((period) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: group.days,
        opens: period.open,
        closes: period.close,
      }))
    ),
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: siteConfig.tableoWidgetUrl,
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: { "@type": "FoodEstablishmentReservation" },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
