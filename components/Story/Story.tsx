
import Link from "next/link";
import { siteConfig, website } from "@/content/website";
import "./Story.css";

export default function Story() {
  const story = website.story;

  return (
    <section
      className="section story story-values"
      id="story"
      aria-labelledby="story-title"
    >
      <div className="wrap">
        <div className="story-values__top reveal">
          <span className="label story-values__eyebrow">
            {story.label}
          </span>

          <h2 className="story-values__title" id="story-title">
            THE PREGO FEELING.
          </h2>
        </div>

        <div className="story-values__layout">
          <div className="story-values__visual">
            <figure className="story-values__image-shell">
              <img
                src={story.image}
                alt={story.imageAlt}
                className="story-values__photo"
                loading="lazy"
                decoding="async"
              />

              {/* <figcaption className="story-values__badge">
                <b>{story.badgeLarge}</b>
                <small>{story.badgeSmall}</small>
              </figcaption> */}
            </figure>
          </div>

          <div className="story-values__bottom">
            <div className="story-values__words">
              <span>Tradition.</span>
              <span>Flavour.</span>
              <span>Hospitality.</span>
            </div>

            <div className="story-values__content">
              <p className="story-values__lead">
                The first bite says it all.
              </p>

              {story.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="story-values__paragraph"
                >
                  {paragraph}
                </p>
              ))}

              <div className="story-values__actions">
                <Link href="/#menu" className="btn btn--gold">
                  <span>{story.menuButton}</span>
                </Link>

                {siteConfig.facebook && (
                  <a
                    href={siteConfig.facebook}
                    className="story-values__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FACEBOOK ↗
                  </a>
                )}

                {siteConfig.instagram && (
                  <a
                    href={siteConfig.instagram}
                    className="story-values__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    INSTAGRAM ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
