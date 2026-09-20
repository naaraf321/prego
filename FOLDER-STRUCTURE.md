# Prego folder structure

```text
prego-bar-grill/
│
├── content/
│   ├── website.ts       ← EDIT THIS FILE FOR WEBSITE CONTENT
│   └── README.md        ← quick editing guide
│
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   ├── sitemap.ts
│   ├── robots.ts
│   └── manifest.ts
│
├── components/
│   ├── Header/
│   ├── Hero/
│   ├── Story/
│   ├── MenuPreview/
│   ├── Gallery/
│   ├── Chef/
│   ├── Testimonials/
│   ├── Booking/
│   ├── Contact/
│   ├── Footer/
│   └── ImageWithSkeleton/
│
├── public/
│   └── images/prego/    ← image files
│
├── next.config.mjs
├── package.json
└── README.md
```

## Normal editing workflow

1. Text/details/menu/gallery list → `content/website.ts`
2. Replace/add actual image files → `public/images/prego/`
3. Only edit component CSS if you want to change the visual design.

You no longer need to hunt through many components just to change restaurant information.
