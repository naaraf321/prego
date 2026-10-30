const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "").trim();
const tableo = (process.env.NEXT_PUBLIC_TABLEO_WIDGET_URL || "").trim();

const errors = [];

if (!siteUrl) errors.push("NEXT_PUBLIC_SITE_URL is missing.");
if (siteUrl && !siteUrl.startsWith("https://")) errors.push("NEXT_PUBLIC_SITE_URL must use https:// in production.");
if (/localhost|127\.0\.0\.1/i.test(siteUrl)) errors.push("NEXT_PUBLIC_SITE_URL must not point to localhost in production.");
if (/your-domain\.com|example\.com/i.test(siteUrl)) errors.push("NEXT_PUBLIC_SITE_URL is still a placeholder; set the real restaurant domain.");
if (!tableo) errors.push("NEXT_PUBLIC_TABLEO_WIDGET_URL is missing.");
if (tableo && !/^https:\/\/app\.tableo\.com\/widget\//.test(tableo)) errors.push("NEXT_PUBLIC_TABLEO_WIDGET_URL must be a Tableo widget URL.");

if (errors.length) {
  console.error("\nProduction environment check failed:\n");
  for (const error of errors) console.error(`- ${error}`);
  console.error("\nSee .env.production.example and PRODUCTION-CHECKLIST.md.\n");
  process.exit(1);
}

console.log("Production environment check passed.");
