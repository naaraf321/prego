import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import { website } from "@/content/website";
import "./Gallery.css";

type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export default function Gallery() {
  const section = website.gallery;

  /*
   * Important:
   * website.ts may be defined with `as const`, which makes TypeScript
   * infer the exact gallery length (for example 12).
   *
   * Converting it to a normal array here means the gallery can safely
   * contain any number of images in the future.
   */
  const images: GalleryImage[] = Array.from(section.images);

  const count = images.length;

  // If you remove every gallery image later,
  // the entire section simply disappears.
  if (count === 0) {
    return null;
  }

  /*
   * 1 image  = gal--1
   * 2 images = gal--2
   * 3 images = gal--3
   * 4 images = gal--4
   * 5+       = gal--many
   */
  const layoutClass =
    count <= 4
      ? `gal--${count}`
      : "gal--many";

  /*
   * Helps CSS balance the final row:
   *
   * remainder 0 = perfect row
   * remainder 1 = one image left
   * remainder 2 = two images left
   */
  const remainderClass =
    count > 4
      ? `gal--rem-${count % 3}`
      : "";

  return (
    <section
      id="gallery"
      className="section gallery-section"
      aria-labelledby="gallery-title"
    >
      <div className="wrap">

        {/* ==============================
            HEADING
        ============================== */}
        <header className="gallery-heading reveal">
          <span className="label">
            {section.label}
          </span>

          <h2
            id="gallery-title"
            className="display display--sm"
          >
            {section.title}
          </h2>

          {section.description && (
            <p>
              {section.description}
            </p>
          )}
        </header>


        {/* ==============================
            GALLERY
        ============================== */}
        <div
          className={[
            "gal",
            layoutClass,
            remainderClass,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {images.map((image, index) => (
            <figure
              className="gi reveal"
              key={`${image.src}-${index}`}
            >
              <ImageWithSkeleton
                src={image.src}
                alt={image.alt}
                fill
                sizes="
                  (max-width: 760px) 100vw,
                  (max-width: 1100px) 50vw,
                  33vw
                "
              />

              {image.caption && (
                <figcaption className="gallery-caption">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>

      </div>
    </section>
  );
}
