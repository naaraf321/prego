# Prego Bar & Grill — Next.js

Production website for Prego Bar & Grill, Valletta.

## The one file you normally edit

Open:

`content/website.ts`

That file controls the restaurant details and the visible website content, including:

- Restaurant name, phone, address and links
- Opening hours
- Hero text and hero image
- Story section
- Full food menu and prices
- Gallery images, captions and ordering
- Chef section
- Testimonials
- Booking copy
- Contact labels
- Footer content
- Main SEO titles and descriptions

The components read from that file automatically.

## Gallery

Edit `website.gallery.images` in `content/website.ts`.

You can add, delete or reorder images. The gallery layout automatically adapts:

- 1 image: wide feature
- 2 images: 2 columns
- 3 images: 3 columns
- 4 images: 2 × 2
- 5+ images: balanced 3-column layout; final row automatically fills cleanly

Images stay in full colour. Hover only applies a very small zoom and gold border.

## Opening hours

Edit only `website.business.hours` in `content/website.ts`.

Contact, Footer and Google Restaurant structured data all use the same values.

Current setup:

- Mon–Thu: Lunch 11:00–15:00, Dinner 18:00–22:00
- Fri–Sun: Lunch 11:00–15:00, Dinner 18:00–22:30

## Tableo

The default widget is:

`https://app.tableo.com/widget/prego-malta`

For production you can also set:

`NEXT_PUBLIC_TABLEO_WIDGET_URL=https://app.tableo.com/widget/prego-malta`

## Production domain

Set:

`NEXT_PUBLIC_SITE_URL=https://your-real-domain.com`

before the production build.

## Run locally

```bash
npm install
npm run dev
```

## Production check

```bash
npm run typecheck
npm run build
```
