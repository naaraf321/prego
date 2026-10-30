# Edit Prego website content here

For normal content changes, edit only:

`content/website.ts`

You can change there:
- Restaurant name, phone, address and links
- Opening hours
- Hero text and hero image
- Story text
- Entire food menu and prices
- Gallery images, captions and order
- Chef section text/image
- Testimonials
- Booking section text
- Contact section labels
- Footer text and links
- SEO titles/descriptions

## Gallery
Add/remove/reorder objects inside `website.gallery.images`.
The gallery layout automatically adapts to 1, 2, 3, 4, or any larger number of images.

## Opening hours
Edit only `website.business.hours`.
The Contact section, Footer and Google Restaurant structured data all use the same values.

## Important
Do not put secret API keys in this file. Anything imported into client components can be visible in the browser.
