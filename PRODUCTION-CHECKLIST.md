# Prego production checklist

## Before deployment

1. Copy `.env.production.example` to your host's environment variables.
2. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain, with no trailing slash.
3. Keep `NEXT_PUBLIC_TABLEO_WIDGET_URL=https://app.tableo.com/widget/prego-malta`.
4. Run `npm install`, `npm run typecheck`, then `npm run build`. The build intentionally fails if the real HTTPS domain is not configured.
5. Deploy only if the production build succeeds.

## After deployment

1. Open `/`, `/menu`, `/robots.txt`, `/sitemap.xml`, and the Tableo booking section.
2. Verify all navigation links, phone link, Facebook, Tripadvisor, directions and booking.
3. Add the final domain to Google Search Console and set `GOOGLE_SITE_VERIFICATION`.
4. Submit `/sitemap.xml` in Search Console and request indexing for `/` and `/menu`.
5. Test Restaurant JSON-LD with Google's Rich Results Test.
6. Claim/verify the Google Business Profile and keep name, address, phone and opening hours identical to the website.
7. Keep HTTPS enabled at the hosting/domain layer.

## Security notes

- No private API key is stored in this project. Tableo uses a public widget URL.
- Production responses include CSP, HSTS, anti-clickjacking, MIME sniffing protection, strict referrer policy and a restrictive permissions policy.
- Next.js and React are pinned to patched maintenance versions in `package.json`.
- Do not put secret keys into any variable beginning with `NEXT_PUBLIC_`; those variables are intentionally exposed to browsers.

## Homepage menu
- Confirm every Menu link lands on `/#menu`.
- Confirm `/menu` immediately redirects to the homepage menu section.
- Confirm all six menu categories and prices are visible in page HTML.

## Image resilience
- Throttle the browser network and confirm Prego skeleton placeholders appear while local images load.
- Temporarily rename one test image locally and confirm the branded "Image unavailable" fallback appears.
