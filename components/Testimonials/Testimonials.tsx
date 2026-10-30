import { siteConfig, website } from "@/content/website";
import "./Testimonials.css";

/* ============================================================
   TRIPADVISOR LOGO
============================================================ */

function TripadvisorLogo() {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
      className="pregoReviews__brandSvg"
    >
      <circle cx="32" cy="32" r="25" fill="#34E0A1" />

      <path
        d="M18.5 26.5c3.6-4.5 8-6.7 13.5-6.7s9.9 2.2 13.5 6.7"
        fill="none"
        stroke="#07110D"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <circle
        cx="22.5"
        cy="33"
        r="8.5"
        fill="none"
        stroke="#07110D"
        strokeWidth="3"
      />

      <circle
        cx="41.5"
        cy="33"
        r="8.5"
        fill="none"
        stroke="#07110D"
        strokeWidth="3"
      />

      <circle cx="22.5" cy="33" r="2.7" fill="#07110D" />
      <circle cx="41.5" cy="33" r="2.7" fill="#07110D" />

      <path
        d="M31.8 29.8 35 34l-3.2 4.1L28.7 34l3.1-4.2Z"
        fill="#07110D"
      />

      <path
        d="M18.4 24.6 14 22.2M45.6 24.6 50 22.2"
        stroke="#07110D"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}


/* ============================================================
   GOOGLE LOGO
============================================================ */

function GoogleLogo() {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      focusable="false"
      className="pregoReviews__brandSvg pregoReviews__brandSvg--google"
    >
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z"
      />

      <path
        fill="#4285F4"
        d="M46.5 24.55c0-1.57-.14-3.08-.4-4.55H24v9.02h12.65c-.55 2.9-2.18 5.36-4.64 7.02l7.73 6c4.51-4.17 6.76-10.32 6.76-17.49Z"
      />

      <path
        fill="#FBBC05"
        d="M10.53 28.59A14.49 14.49 0 0 1 9.77 24c0-1.6.28-3.15.76-4.59l-7.98-6.19A24.05 24.05 0 0 0 0 24c0 3.86.92 7.52 2.55 10.78l7.98-6.19Z"
      />

      <path
        fill="#34A853"
        d="M24 48c6.47 0 11.9-2.13 15.87-5.81l-7.73-6c-2.14 1.44-4.88 2.3-8.14 2.3-6.26 0-11.57-4.22-13.47-9.9l-7.98 6.19C6.5 42.62 14.62 48 24 48Z"
      />
    </svg>
  );
}


/* ============================================================
   PLATFORM LOGO
============================================================ */

function PlatformLogo({ source }: { source: string }) {
  const type = source.toLowerCase();

  if (type.includes("tripadvisor")) {
    return <TripadvisorLogo />;
  }

  if (type.includes("google")) {
    return <GoogleLogo />;
  }

  return (
    <span className="pregoReviews__fallbackLogo">
      {source.charAt(0)}
    </span>
  );
}


/* ============================================================
   TESTIMONIALS
============================================================ */

export default function Testimonials() {
  const section = website.testimonials;

  const titleWords = section.title.trim().split(" ");
  const accentWord = titleWords.pop() ?? "";
  const titleStart = titleWords.join(" ");

  return (
    <section
      className="section pregoReviews"
      id="testimonials"
      aria-labelledby="reviews-title"
    >
      <div className="wrap pregoReviews__wrap">

        {/* ====================================================
            HERO / SUMMARY
        ==================================================== */}
        <div className="pregoReviews__hero reveal">

          {/* LEFT */}
          <header className="pregoReviews__intro">
            <span className="pregoReviews__eyebrow">
              {section.label}
            </span>

            <h2
              className="pregoReviews__title"
              id="reviews-title"
            >
              {titleStart}{" "}
              <em>{accentWord}</em>
            </h2>

            <p className="pregoReviews__description">
              {section.description}
            </p>
          </header>


          {/* RIGHT */}
          <div className="pregoReviews__ratingArea">

            <div className="pregoReviews__ratingPanel">

              {section.platformRatings.map(
                (platform, index) => (
                  <a
                    key={platform.source}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pregoReviews__ratingRow"
                    aria-label={`View Prego reviews on ${platform.source}`}
                  >

                    {/* Logo + platform */}
                    <div className="pregoReviews__platform">
                      <div className="pregoReviews__logoCircle">
                        <PlatformLogo
                          source={platform.source}
                        />
                      </div>

                      <div className="pregoReviews__platformText">
                        <strong>
                          {platform.source}
                        </strong>

                        <span>
                          {platform.reviews} reviews
                        </span>
                      </div>
                    </div>


                    {/* Divider */}
                    <span
                      className="pregoReviews__verticalLine"
                      aria-hidden="true"
                    />


                    {/* Score */}
                    <div className="pregoReviews__score">
                      <strong>
                        {platform.rating}
                      </strong>

                      <span>
                        /{platform.maxRating}
                      </span>
                    </div>


                    {/* Stars */}
                    <div
                      className="pregoReviews__platformStars"
                      aria-label={`${platform.rating} out of ${platform.maxRating} stars`}
                    >
                      ★★★★★
                    </div>


                    {/* Arrow */}
                    <span
                      className="pregoReviews__external"
                      aria-hidden="true"
                    >
                      ↗
                    </span>

                  </a>
                )
              )}

            </div>


            {/* Small handwritten line */}
            <div className="pregoReviews__note">
              <span
                className="pregoReviews__noteArrow"
                aria-hidden="true"
              >
                ↖
              </span>

              <span>
                Real reviews. Real guests.
              </span>
            </div>

          </div>

        </div>


        {/* ====================================================
            HORIZONTAL DIVIDER
        ==================================================== */}

        <div className="pregoReviews__divider" />


        {/* ====================================================
            REVIEW CARDS
        ==================================================== */}

        <div className="pregoReviews__grid">

          {section.reviews.map((review, index) => (
            <a
              href={siteConfig.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="pregoReviews__card reveal"
              key={`${review.name}-${index}`}
              aria-label={`Read ${review.name}'s review`}
            >

              {/* Stars */}
              <div
                className="pregoReviews__stars"
                aria-label={`${review.rating} out of 5 stars`}
              >
                {Array.from({ length: 5 }).map(
                  (_, starIndex) => (
                    <span
                      key={starIndex}
                      className={
                        starIndex < review.rating
                          ? "pregoReviews__star pregoReviews__star--active"
                          : "pregoReviews__star"
                      }
                      aria-hidden="true"
                    >
                      ★
                    </span>
                  )
                )}
              </div>


              {/* Review title */}
              {review.title && (
                <span className="pregoReviews__reviewTitle">
                  {review.title}
                </span>
              )}


              {/* Quote */}
              <blockquote className="pregoReviews__quote">
                {review.quote}
              </blockquote>


              {/* Reviewer */}
              <div className="pregoReviews__reviewer">

                <div className="pregoReviews__reviewerInfo">
                  <strong>
                    {review.name}
                  </strong>

                  <span>
                    {review.meta}
                  </span>
                </div>


                <div className="pregoReviews__cardBottom">
                  <span className="pregoReviews__source">
                    {review.source}
                  </span>

                  <span className="pregoReviews__read">
                    Read review ↗
                  </span>
                </div>

              </div>

            </a>
          ))}

        </div>


        {/* ====================================================
            FOOTER CTA
        ==================================================== */}

        <div className="pregoReviews__footer reveal">

          <a
            href={siteConfig.tripadvisor}
            target="_blank"
            rel="noopener noreferrer"
          >
            {section.moreLinkLabel}

            <span aria-hidden="true">
              →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}