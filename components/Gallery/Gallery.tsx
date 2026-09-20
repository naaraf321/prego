import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import { website } from "@/content/website";

export default function Gallery() {
  const section = website.gallery;
  const count = section.images.length;
  if (count === 0) return null;

  const layoutClass = count <= 4 ? `gal--${Math.max(count, 1)}` : "gal--many";
  const remainderClass = count > 4 ? `gal--rem-${count % 3}` : "";

  return (
    <section className="section" id="gallery" aria-labelledby="gallery-title">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="label reveal">{section.label}</span>
            <h2 className="display display--sm lines" id="gallery-title">
              <span className="ln"><span>{section.title}</span></span>
            </h2>
          </div>
          <p className="side reveal">{section.description}</p>
        </div>

        <div className={`gal ${layoutClass} ${remainderClass}`}>
          {section.images.map((image) => (
            <figure className="gi reveal" key={image.src}>
              <ImageWithSkeleton
                src={image.src}
                alt={image.alt}
                fill
                quality={74}
                sizes="(max-width: 760px) 100vw, (max-width: 980px) 50vw, 33vw"
              />
              <span className="gallery-caption">{image.caption}</span>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
