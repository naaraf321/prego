/*
  ==============================================================
  PREGO WEBSITE CONTENT — EDIT THIS FILE ONLY
  ==============================================================

  This is the single source of truth for the visible website content.
  Change restaurant details, opening hours, headings, gallery images,
  testimonials, menu items, buttons and SEO copy here.

  You normally should NOT need to edit the components just to change text.
*/

const configuredSiteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").trim();

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  image?: string;
  popular?: boolean;
  chefChoice?: boolean;
  vegetarian?: boolean;
  spicy?: boolean;
};

export type MenuCategory = {
  title: string;
  description: string;
  items: MenuItem[];
};

export const website = {
  business: {
    name: "Prego Bar & Grill",
    shortName: "Prego",
    brandSubline: "Bar & Grill",
    description:
      "Prego Bar & Grill in Valletta, Malta — Maltese favourites, Mediterranean seafood, fresh pasta, burgers and grill dishes at 58 South Street.",
    priceRange: "€€–€€€",
    currency: "EUR",
    servesCuisine: ["Maltese", "Mediterranean", "Italian", "Seafood", "Grill"],
    siteUrl: configuredSiteUrl.replace(/\/$/, ""),
    tableoWidgetUrl:
      (process.env.NEXT_PUBLIC_TABLEO_WIDGET_URL || "https://app.tableo.com/widget/prego-malta").trim(),
    phoneDisplay: "+356 2122 4062",
    phone: "+35621224062",
    address: {
      street: "58 South St",
      locality: "Valletta",
      country: "MT",
      countryName: "Malta",
      display: "58 South St, Valletta, Malta",
    },
    facebook: "https://www.facebook.com/p/PREGO-61573375115369/",
    tripadvisor:
      "https://www.tripadvisor.co.uk/Restaurant_Review-g190328-d33408823-Reviews-Prego_Bar_Grill-Valletta_Island_of_Malta.html",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=58+South+St,+Valletta,+Malta",
    mapDirections:
      "https://www.google.com/maps/dir/?api=1&destination=58+South+St,+Valletta,+Malta",
    mapEmbedUrl:
      "https://www.google.com/maps?q=58+South+St,+Valletta,+Malta&output=embed",

    // Edit opening hours here. Contact, footer and Google structured data update automatically.
    hours: [
      {
        label: "Mon — Thu",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        periods: [
          { label: "Lunch", open: "11:00", close: "15:00" },
          { label: "Dinner", open: "18:00", close: "22:00" },
        ],
      },
      {
        label: "Fri — Sun",
        days: ["Friday", "Saturday", "Sunday"],
        periods: [
          { label: "Lunch", open: "11:00", close: "15:00" },
          { label: "Dinner", open: "18:00", close: "22:30" },
        ],
      },
    ],
  },

  seo: {
    defaultTitle: "Prego Bar & Grill Valletta | Maltese & Mediterranean Restaurant",
    titleTemplate: "%s | Prego Bar & Grill Valletta",
    openGraphTitle: "Prego Bar & Grill — Valletta, Malta",
    openGraphDescription:
      "Maltese favourites, Mediterranean seafood, fresh pasta and grill dishes at 58 South Street in Valletta.",
    twitterTitle: "Prego Bar & Grill — Valletta",
    twitterDescription:
      "Maltese favourites, Mediterranean seafood, fresh pasta and grill dishes at 58 South Street, Valletta.",
    ogImage: "/images/prego/og-prego.webp",
    locale: "en_MT",
    language: "en-MT",
  },

  navigation: {
    desktop: [
      { label: "Story", href: "/#story" },
      { label: "Menu", href: "/#menu" },
      { label: "Gallery", href: "/#gallery" },
      { label: "Chef", href: "/#chef" },
      { label: "Contact", href: "/#contact" },
    ],
    mobileExtra: [
      { label: "Home", href: "/#home" },
      { label: "Reviews", href: "/#testimonials" },
      { label: "Reservations", href: "/#reservations" },
    ],
    reserveLabel: "Reserve",
  },

  hero: {
    image: "/images/prego/dining-room.webp",
    imageAlt: "Interior of Prego Bar & Grill in Valletta, Malta",
    location: "58 South Street · Valletta · Malta",
    taglineBefore: "Maltese soul. Italian craft.",
    taglineEmphasis: "Valletta nights.",
    reserveButton: "Reserve a Table",
    menuButton: "Explore Menu",
    scrollLabel: "Scroll",
    marquee: [
      "Maltese Rabbit",
      "Fresh Pasta",
      "King Prawns",
      "Mediterranean Grill",
      "Valletta Nights",
      "Prego Bar & Grill",
      "Maltese Rabbit",
      "Fresh Pasta",
      "King Prawns",
      "Mediterranean Grill",
      "Valletta Nights",
      "Prego Bar & Grill",
    ],
  },

  story: {
    label: "The story",
    title: "Maltese flavour. Mediterranean energy.",
    image: "/images/prego/interior-lamps.webp",
    imageAlt: "Warm, characterful interior at Prego Bar & Grill",
    badgeLarge: "VLT",
    badgeSmall: "Heart of Valletta",
    paragraphs: [
      "At 58 South Street in Valletta, Prego Bar & Grill brings together Maltese favourites, seafood, fresh pasta and generous grill dishes in a warm, distinctive setting.",
      "Come for local rabbit and bragioli, king-prawn risotto, fresh pasta, steaks and Mediterranean seafood — then stay for the atmosphere in the heart of Malta's capital.",
    ],
    menuButton: "See the Menu",
    facebookButton: "Visit Facebook →",
  },

  menuSection: {
    label: "Prego menu",
    // Keep the title as two explicit lines so it always fits cleanly on desktop and mobile.
    titleLines: ["Maltese soul.", "Mediterranean table."],
    description:
      "Starters, salads, fresh pasta, risotto, burgers and mains — the complete Prego food menu, right here on the homepage.",
    legend: {
      chefChoice: "Chef choice",
      popular: "Popular",
      vegetarian: "Vegetarian",
      spicy: "Spicy",
    },
    note: "Prices and availability may change. Ask the team about allergens or dietary requirements.",
    reserveButton: "Reserve a Table",
  },

  signatureDishes: [
    {
      name: "Risotto King Prawns",
      description: "Risotto with king prawns & pistachios.",
      price: "€15.95",
      image: "/images/prego/food-table.webp",
      popular: true,
      chefChoice: true,
    },
    {
      name: "Mediterranean Platter",
      description: "2 king prawns, octopus, mussels & calamari.",
      price: "€24.95",
      image: "/images/prego/octopus-parmigiana.webp",
      popular: true,
      chefChoice: true,
    },
    {
      name: "Pan-Fried Rabbit",
      description: "Rabbit, red wine & garlic.",
      price: "€22.95",
      image: "/images/prego/pan-fried-rabbit.webp",
      popular: true,
    },
    {
      name: "Rabbit Grandma",
      description: "Traditional Maltese rabbit recipe.",
      price: "€22.95",
      image: "/images/prego/signature-rabbit.webp",
      popular: true,
      chefChoice: true,
    },
    {
      name: "Gnocchi Prego",
      description: "Potato gnocchi, pecorino, cream & beef tagliata.",
      price: "€15.95",
      image: "/images/prego/pasta-dish.webp",
      popular: true,
    },
  ] as MenuItem[],

  menu: [
    {
      title: "Starters",
      description: "To begin.",
      items: [
        { name: "Tuna Fishcakes", description: "2 patties with caponata sauce.", price: "€9.95" },
        { name: "Maltese Arancini", description: "2 Maltese sausage, zucchini & vegetable mousse.", price: "€9.95", popular: true },
        { name: "Rabbit Spring Rolls", description: "3 spring rolls, grandma's recipe.", price: "€8.95", popular: true },
        { name: "Fried Cheeselets", description: "2 cheeselets with green salad, cranberry chutney & walnuts.", price: "€8.95", vegetarian: true },
        { name: "Octopus Parmiggiana", description: "Octopus, garlic, aubergine, mozzarella di bufala & tomato sauce.", price: "€14.95", popular: true },
      ],
    },
    {
      title: "Salads",
      description: "Fresh & healthy.",
      items: [
        { name: "Chicken Salad", description: "Chicken breast, bocconcini di mozzarella, sundried tomatoes & almonds.", price: "€14.95", popular: true },
        { name: "Beef Salad", description: "Flank steak strips, barley, chickpeas & green leaves.", price: "€16.95", popular: true },
        { name: "Caprese Salad", description: "Tomato and fresh mozzarella di bufala.", price: "€14.95", vegetarian: true },
        { name: "Fresh Salmon Salad", description: "Fresh Norwegian salmon, quinoa, tomatoes & green leaves.", price: "€16.95", popular: true },
      ],
    },
    {
      title: "Fresh Pasta",
      description: "Freshly made every day.",
      items: [
        { name: "Garganelli Maltese", description: "Maltese sausage, gorgonzola, cream & grana.", price: "€14.95" },
        { name: "Gnocchi Prego", description: "Potato gnocchi, pecorino, cream & beef tagliata.", price: "€15.95", popular: true },
        { name: "Pappardelle della Casa", description: "Stracciatella, walnut pesto, Parmigiano Reggiano & cream.", price: "€14.95", vegetarian: true, popular: true },
        { name: "Agnolotti Tartufini", description: "Pasta, wild mushroom, truffle & Asiago cheese.", price: "€14.95", vegetarian: true, chefChoice: true, popular: true },
        { name: "Tagliatelle Octopus", description: "Local octopus, fresh pasta, cherry tomatoes & herbs.", price: "€16.95", popular: true },
        { name: "Tortellacci Lobster & Grana", description: "Lobster tortellacci, cherry tomatoes & grana.", price: "€17.95", chefChoice: true, popular: true },
      ],
    },
    {
      title: "Risotto",
      description: "Creamy Italian classics.",
      items: [
        { name: "Spinach & Speck Risotto", description: "Speck, blue cheese, spinach & cream.", price: "€14.95" },
        { name: "Risotto King Prawns", description: "Risotto with king prawns & pistachios.", price: "€15.95", popular: true, chefChoice: true },
      ],
    },
    {
      title: "Burgers",
      description: "Served with premium ingredients.",
      items: [
        { name: "Spicy Chicken Burger", description: "Mexican cheese, coleslaw, crispy chicken fillet, gherkins, lettuce, tomato & spicy sauce.", price: "€14.95", spicy: true, popular: true },
        { name: "Beef Burger", description: "Double beef patty, crispy bacon, provolone cheese, caramelized onions, lettuce, tomato & house sauce.", price: "€14.95", chefChoice: true },
        { name: "Veggie Burger", description: "Veg patty, pea purée, tomato, lettuce & smoked cheese.", price: "€14.95", vegetarian: true },
      ],
    },
    {
      title: "Mains",
      description: "Signature dishes & local favorites.",
      items: [
        { name: "Mediterranean Platter", description: "2 king prawns, octopus, mussels & calamari.", price: "€24.95", chefChoice: true, popular: true },
        { name: "Calamari Stew", description: "Squid, carrots, potato, olives & aubergines.", price: "€24.95" },
        { name: "Bragioli – Beef Olives", description: "Local bragioli stuffed with egg, bacon and minced beef, served with grandma's rabbit sauce.", price: "€24.95" },
        { name: "Pan-Fried Rabbit", description: "Rabbit, red wine & garlic.", price: "€22.95", popular: true },
        { name: "Rabbit Grandma", description: "Traditional Maltese rabbit recipe.", price: "€22.95", chefChoice: true, popular: true },
        { name: "Fillet Maltese", description: "Prime beef fillet, Maltese sausage, sundried tomatoes, cheeselets & creamy tomato sauce.", price: "€31.95", popular: true },
        { name: "Ribeye Steak", description: "Beef ribeye, porcini, cream & burratina.", price: "€30.95", popular: true },
        { name: "Pork Ribs", description: "Grilled pork rib in apple & honey sauce.", price: "€19.95", popular: true },
        { name: "Seabass", description: "Local seabass with shrimp sauce.", price: "€27.95" },
      ],
    },
  ] as MenuCategory[],

  gallery: {
    label: "Prego in pictures",
    title: "Eat. Drink. Stay.",
    description: "Real photographs from Prego — the room, the plates, the people and the details.",
    // Add, remove or reorder image objects here. The gallery adapts automatically.
    images: [
      { src: "/images/prego/dining-room.webp", alt: "Prego Bar & Grill dining room in Valletta", caption: "Dining room" },
      { src: "/images/prego/pasta-dish.webp", alt: "Fresh pasta served at Prego Bar & Grill", caption: "Fresh pasta" },
      // { src: "/images/prego/interior-lamps.webp", alt: "Warm interior lighting at Prego Bar & Grill", caption: "The room" },
      { src: "/images/prego/octopus-parmigiana.webp", alt: "Octopus Parmigiana at Prego Bar & Grill", caption: "Octopus Parmigiana" },
      { src: "/images/prego/pan-fried-rabbit.webp", alt: "Pan-fried rabbit at Prego Bar & Grill", caption: "Pan-fried rabbit" },
      { src: "/images/prego/rabbit-spring-rolls.webp", alt: "Rabbit spring rolls at Prego Bar & Grill", caption: "Rabbit spring rolls" },
      { src: "/images/prego/beef-dish.webp", alt: "Beef dish served at Prego Bar & Grill", caption: "From the grill" },
      { src: "/images/prego/cocktail-and-dishes.webp", alt: "Cocktail and dishes at Prego Bar & Grill", caption: "Food & drinks" },
      { src: "/images/prego/signature-rabbit.webp", alt: "Signature Maltese rabbit dish", caption: "Maltese rabbit" },
      { src: "/images/prego/rabbit-closeup.webp", alt: "Rabbit dish close-up at Prego", caption: "Local flavour" },
      { src: "/images/prego/food-table.webp", alt: "Mediterranean dishes on the Prego table", caption: "The Prego table" },
      { src: "/images/prego/prego-emblem.webp", alt: "Prego interior emblem and decor", caption: "Prego details" },
      { src: "/images/prego/wine-table.webp", alt: "Wine and table setting at Prego", caption: "Wine & table" },
      // { src: "/images/prego/chef.webp", alt: "Prego chef in the kitchen", caption: "From the kitchen" },
      // { src: "/images/prego/team-member.webp", alt: "Prego team member", caption: "The team" },
    ],
  },

  chef: {
    label: "From the kitchen",
    title: "Food with character, not shortcuts.",
    paragraph:
      "Prego's menu moves between Maltese comfort dishes, Italian pasta and Mediterranean seafood. The kitchen keeps the plates generous, recognisable and full of flavour.",
    principle: "Local roots. Mediterranean instinct. Plates made to feel worth coming back for.",
    menuButton: "Discover the Menu",
    image: "/images/prego/chef.webp",
    imageAlt: "Chef at Prego Bar & Grill",
  },

  testimonials: {
    label: "Guest notes",

    title: "From our guests.",

    description:
      "Real experiences from guests who visited Prego Bar & Grill in Valletta.",

      platformRatings: [
        
        {
          source: "Google",
          rating: 4.6,
          maxRating: 5,
          reviews: 145,
          label: "Highly rated",
          url: "https://www.google.com/maps/search/?api=1&query=Prego%20Bar%20%26%20Grill%20Valletta&query_place_id=ChIJcaimGQBFDhMRB48UkuwAn5s",
        },
        {
          source: "Tripadvisor",
          rating: 4.9,
          maxRating: 5,
          reviews: 14,
          label: "Excellent",
          url: "https://www.tripadvisor.co.uk/Restaurant_Review-g190328-d33408823-Reviews-Prego_Bar_Grill-Valletta_Island_of_Malta.html",
        },
      ],
      
    reviews: [
      {
        name: "Beatriz R.",
        meta: "Family visit · Aug 2026",
        title: "Amazing",

        // Paraphrased from the public Tripadvisor review
        quote:
          "Friendly and gracious service, generous portions and a pleasant atmosphere.",

        rating: 5,
        source: "Tripadvisor",
      },

      {
        name: "HomerNottingham",
        meta: "Family visit · Aug 2026",
        title: "Perfect little gem",

        // Paraphrased from the public Tripadvisor review
        quote:
          "A hidden gem with smart décor and a recommended dish that really impressed.",

        rating: 5,
        source: "Tripadvisor",
      },

      {
        name: "Honda C.",
        meta: "Family visit · Apr 2026",
        title: "Best",

        // Paraphrased from the public Tripadvisor review
        quote:
          "Praised the food, staff and the overall service experience.",

        rating: 5,
        source: "Tripadvisor",
      },

      {
        name: "Fredrick M.",
        meta: "Family visit · Dec 2025",
        title: "Amazing Experience",

        quote:
          "A welcoming experience with attentive service, well-prepared food and a team that made the visit feel special.",

        rating: 5,
        source: "Tripadvisor",
      },

      {
        name: "Nicoleta D.",
        meta: "Couples visit · Sep 2025",
        title: "Best food in Valletta",

        quote:
          "Loved the food experience and also highlighted the restaurant's décor, furnishings and atmosphere.",

        rating: 5,
        source: "Tripadvisor",
      },

      {
        name: "MrsandMrHappy",
        meta: "Couples visit · Mar 2026",
        title: "Great place for evening meal",

        quote:
          "Enjoyed the meal, found the staff polite and helpful, and planned to return during the same trip.",

        rating: 5,
        source: "Tripadvisor",
      },
    ],

    sourceLabel: "Tripadvisor · Verified public review",

    moreLinkLabel: "Read all reviews on Tripadvisor",
  },

  booking: {
    label: "Reservations",
    title: "Your table awaits.",
    description: "Check live availability and reserve your table online with Tableo.",
    loadingTitle: "Loading reservations",
    loadingSubtitle: "Live availability by Tableo",
    fallbackText: "Booking form not visible?",
    fallbackLink: "Open Tableo directly →",
  },

  contact: {
    label: "Find us",
    titleLines: ["Valletta,", "South Street."],
    addressHeading: "Address",
    hoursHeading: "Opening hours",
    contactHeading: "Contact",
    directionsButton: "Get Directions",
    facebookButton: "Facebook",
    mapTitle: "Map showing Prego Bar & Grill at 58 South Street, Valletta",
  },

  footer: {
    description: "Maltese favourites, Mediterranean seafood, fresh pasta and grill dishes in Valletta.",
    exploreHeading: "Explore",
    hoursHeading: "Opening Hours",
    contactHeading: "Contact",
    statement: "See you at Prego.",
    reserveButton: "Book with Tableo",
    menuButton: "View Menu",
    links: [
      ["Home", "/#home"],
      ["Story", "/#story"],
      ["Menu", "/#menu"],
      ["Gallery", "/#gallery"],
      ["Chef", "/#chef"],
      ["Reviews", "/#testimonials"],
      ["Reservations", "/#reservations"],
      ["Contact", "/#contact"],
    ],
  },
} as const;

// Convenient aliases for code that needs business/menu data.
export const siteConfig = website.business;
export const menu = website.menu;
export const signatureDishes = website.signatureDishes;
