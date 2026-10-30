
"use client";

import { Fragment, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { menu, siteConfig, website } from "@/content/website";
import "./MenuPreview.css";

// ============================================================
// 1. ANIMATION SETTINGS
// ============================================================

// Controls how transparent older cards become.
const CARD_OPACITY = [1, 0.74, 0.45, 0.25, 0.13];

// How far each older card moves upward (pixels).
const CARD_MOVE = 21;

// How much each older card shrinks.
const CARD_SCALE = 0.036;

// ============================================================
// 2. GET SIGNATURE DISHES FROM WEBSITE.TS
// ============================================================

// The menu item type is defined by your existing menu data.
type MenuItem = (typeof menu)[number]["items"][number];

// Information required by each signature card.
type FeaturedDish = {
  item: MenuItem;
  category: string;
  image: string;
  imageAlt: string;
};

// All signature dishes come directly from website.ts.
//
// This includes:
// - Risotto King Prawns
// - Mediterranean Platter
// - Pan-Fried Rabbit
// - Rabbit Grandma
// - Gnocchi Prego
//
// Adding, removing or reordering dishes in website.ts
// automatically updates the Scroll Stack.

const signatureDishes: FeaturedDish[] =
  website.signatureDishes.map((dish) => {
    // The image field exists in your signatureDishes data.
    // This type also handles the MenuItem assertion in website.ts.
    const dishWithImage = dish as MenuItem & {
      image?: string;
      imageAlt?: string;
    };

    return {
      item: dish,

      category: "Signature Dish",

      // Read the actual dish image from website.ts.
      image: dishWithImage.image || website.hero.image,

      // Image description for accessibility.
      imageAlt: dishWithImage.imageAlt || dish.name,
    };
  });

// ============================================================
// 3. DISH LABELS
// ============================================================

// Displays:
// ◆ Chef's Choice
// ★ Popular
// ▲ Vegetarian
// ● Spicy

function DishMarks({ item }: { item: MenuItem }) {
  const labels = website.menuSection.legend;

  const marks = [
    {
      show: item.chefChoice,
      symbol: "◆",
      css: "mark--chef",
      label: labels.chefChoice,
    },
    {
      show: item.popular,
      symbol: "★",
      css: "mark--popular",
      label: labels.popular,
    },
    {
      show: item.vegetarian,
      symbol: "▲",
      css: "mark--veg",
      label: labels.vegetarian,
    },
    {
      show: item.spicy,
      symbol: "●",
      css: "mark--spicy",
      label: labels.spicy,
    },
  ];

  return (
    <span className="dish-marks" aria-label="Dish labels">
      {marks
        .filter((mark) => mark.show)
        .map((mark) => (
          <span
            key={mark.css}
            className={`mark ${mark.css}`}
            title={mark.label}
            aria-label={mark.label}
          >
            {mark.symbol}
          </span>
        ))}
    </span>
  );
}

// ============================================================
// 4. SIGNATURE DISH CARD DESIGN
// ============================================================

// This component displays one dish.
//
// It receives:
// - Image
// - Name
// - Price
// - Description
// - Dish labels

function SignatureCard({
  dish,
  index,
  total,
}: {
  dish: FeaturedDish;
  index: number;
  total: number;
}) {
  const number = String(index + 1).padStart(2, "0");
  const totalNumber = String(total).padStart(2, "0");

  return (
    <article
      className="signature-card"
      style={{ zIndex: index + 1 }}
    >
      {/* DISH BACKGROUND IMAGE */}

      <div className="signature-card__image">
        <Image
          src={dish.image}
          alt={dish.imageAlt}
          fill
          quality={80}
          sizes="(max-width: 760px) 88vw, (max-width: 1300px) 88vw, 1160px"
        />
      </div>

      {/* CARD NUMBER */}

      {/* <span
        className="signature-card__count"
        aria-hidden="true"
      >
        {number} / {totalNumber}
      </span> */}

      {/* DISH INFORMATION */}

      <div className="signature-card__content">
        <span className="signature-card__category">
          {number}. {dish.category}
        </span>

        <div className="signature-card__name-row">
          <h3>{dish.item.name}</h3>

          <strong className="signature-card__price">
            {dish.item.price}
          </strong>
        </div>

        <p>{dish.item.description}</p>

        <DishMarks item={dish.item} />
      </div>
    </article>
  );
}

// ============================================================
// 5. GSAP SCROLL STACK ANIMATION
// ============================================================

// CSS keeps each card sticky while scrolling.
// GSAP makes older cards:
// 1. Move upward
// 2. Become smaller
// 3. Fade behind the new card
//
// No ScrollTrigger pin spacer is used.

function SignatureStack({
  dishes,
}: {
  dishes: FeaturedDish[];
}) {
  const stackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const stack = stackRef.current;

    if (!stack || dishes.length < 2) return;

    gsap.registerPlugin(ScrollTrigger);

    // Get all signature card elements.
    const cards = Array.from(
      stack.querySelectorAll<HTMLElement>(".signature-card")
    );

    const media = gsap.matchMedia();
    let active = true;

    // Desktop animation only.
    media.add(
      "(min-width: 761px) and (prefers-reduced-motion: no-preference)",
      () => {
        // Cards shrink from the top center.
        gsap.set(cards, {
          transformOrigin: "center top",
        });

        // Start from the second card.
        cards.slice(1).forEach((newCard, index) => {
          // All cards before the incoming card.
          const olderCards = cards.slice(0, index + 1);

          // Create a scroll-controlled animation.
          const timeline = gsap.timeline({
            defaults: {
              ease: "none",
            },

            scrollTrigger: {
              trigger: newCard,

              // Animation starts as the new card enters.
              start: "top bottom",

              // Animation ends when the card reaches
              // its CSS sticky position.
              end: () => {
                const stickyTop =
                  parseFloat(getComputedStyle(newCard).top) ||
                  104;

                return `top top+=${stickyTop}`;
              },

              // Connect animation to scrolling.
              scrub: true,

              // Recalculate on browser resize.
              invalidateOnRefresh: true,
            },
          });

          // Animate previous cards.
          olderCards.forEach((oldCard, oldIndex) => {
            const depth = Math.min(
              olderCards.length - oldIndex,
              4
            );

            timeline.to(
              oldCard,
              {
                // Move backward and upward.
                y: -depth * CARD_MOVE,

                // Make the card slightly smaller.
                scale: 1 - depth * CARD_SCALE,

                // Fade as newer cards appear.
                opacity: CARD_OPACITY[depth],

                duration: 1,
              },
              0
            );
          });
        });
      }
    );

    // Refresh animation positions after fonts load.
    document.fonts?.ready.then(() => {
      if (active) {
        ScrollTrigger.refresh();
      }
    });

    // Clean up GSAP animations.
    return () => {
      active = false;
      media.revert();
    };
  }, [dishes]);

  // return (
  //   <div
  //     id="signature-stack"
  //     className="signature-stack"
  //     ref={stackRef}
  //   >
  //     {dishes.map((dish, index) => (
  //       <Fragment
  //         key={`${dish.item.name}-${index}`}
  //       >
  //         {/* ACTUAL FOOD CARD */}

  //         <SignatureCard
  //           dish={dish}
  //           index={index}
  //           total={dishes.length}
  //         />

  //         {/* SCROLL DISTANCE BETWEEN CARDS */}

  //         {index < dishes.length - 1 && (
  //           <div
  //             className="signature-stack__spacer"
  //             aria-hidden="true"
  //           />
  //         )}
  //       </Fragment>
  //     ))}
  //   </div>
  // );
}

// ============================================================
// 6. FULL RESTAURANT MENU
// ============================================================

// This section displays the complete restaurant menu.
// The data comes from the existing "menu" export in website.ts.

function FullMenu() {
  const section = website.menuSection;

  // Symbols displayed above the menu.
  const legend = [
    {
      symbol: "◆",
      css: "mark--chef",
      label: section.legend.chefChoice,
    },
    {
      symbol: "★",
      css: "mark--popular",
      label: section.legend.popular,
    },
    {
      symbol: "▲",
      css: "mark--veg",
      label: section.legend.vegetarian,
    },
    {
      symbol: "●",
      css: "mark--spicy",
      label: section.legend.spicy,
    },
  ];

  return (
    <>
      {/* FULL MENU TITLE */}

      <div
        className="sec-head home-menu-head"
        id="full-menu"
      >
        <div className="home-menu-heading-copy">
          <span className="label reveal">
            {section.label}
          </span>

          <h2
            className="home-menu-title reveal"
            id="menu-title"
          >
            {section.titleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
        </div>

        <p className="side reveal">
          {section.description}
        </p>
      </div>

      {/* MENU LABEL LEGEND */}

      <div
        className="home-menu-legend reveal"
        aria-label="Menu legend"
      >
        {legend.map((mark) => (
          <span key={mark.css}>
            <i className={`mark ${mark.css}`}>
              {mark.symbol}
            </i>

            {" "}
            {mark.label}
          </span>
        ))}
      </div>

      {/* ALL MENU CATEGORIES */}

      <div
        className="home-menu-categories"
        aria-label={`${siteConfig.name} food menu`}
      >
        {menu.map((category) => {
          // Create a unique ID for each category.
          const categoryId = `category-${category.title
            .toLowerCase()
            .replace(/\s+/g, "-")}`;

          return (
            <section
              className="editorial-category reveal"
              key={category.title}
              aria-labelledby={categoryId}
            >
              {/* CATEGORY NAME */}

              <header className="editorial-category-head">
                <h3 id={categoryId}>
                  {category.title}
                </h3>

                <p>{category.description}</p>
              </header>

              {/* DISHES INSIDE CATEGORY */}

              <div className="editorial-items">
                {category.items.map((item) => (
                  <article
                    className="editorial-item"
                    key={item.name}
                  >
                    <div className="editorial-item-top">
                      {/* DISH NAME */}

                      <h4>{item.name}</h4>

                      {/* DISH LABELS */}

                      <DishMarks item={item} />

                      {/* DOTTED SEPARATOR */}

                      <span
                        className="editorial-dots"
                        aria-hidden="true"
                      />

                      {/* DISH PRICE */}

                      <strong>{item.price}</strong>
                    </div>

                    {/* DISH DESCRIPTION */}

                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* BOTTOM RESERVATION BUTTON */}

      <div className="home-menu-footer reveal">
        <p>{section.note}</p>

        <a
          href="#reservations"
          className="btn btn--gold"
        >
          <span>{section.reserveButton}</span>
        </a>
      </div>
    </>
  );
}

// ============================================================
// 7. SIGNATURE SECTION HEADING
// ============================================================


function SignatureHeading() {
  return (
    <header className="signature-intro">

      {/* SMALL BRAND LABEL */}
      <span className="signature-eyebrow">
        PREGO BAR & GRILL · VALLETTA
      </span>

      {/* LARGE MAIN HEADING */}
      <h2
        id="signature-title"
        className="signature-intro__headline"
      >
        MEDITERRANEAN
        <span>GRILL.</span>
      </h2>

      {/* HANDWRITTEN-STYLE SUBTITLE */}
      <p className="signature-intro__script">
        where Maltese tradition meets good food
      </p>

      {/* RESTAURANT DESCRIPTION */}
      <p className="signature-intro__description">
        At Prego, we celebrate the flavours of Malta
        and the Mediterranean. From traditional
        Maltese rabbit to delicious seafood, fresh
        pasta and dishes made for sharing, every
        meal is an invitation to enjoy good food
        and great company.
      </p>

      {/* ACTION BUTTONS */}
      <div className="signature-intro__actions">

        <a
          href="#signature-stack"
          className="signature-intro__button signature-intro__button--primary"
        >
          Discover Our Dishes
          <span aria-hidden="true">↓</span>
        </a>

        <a
          href="#reservations"
          className="signature-intro__button signature-intro__button--outline"
        >
          Reserve a Table
          <span aria-hidden="true">↗</span>
        </a>

      </div>

      {/* FEATURE LABELS */}
      <div className="signature-intro__features">

        <span>
          <span className="signature-feature-icon">◆</span>
          TRADITIONAL MALTESE FLAVOURS
        </span>

        <span>
          <span className="signature-feature-icon">✦</span>
          SEAFOOD & MEDITERRANEAN GRILL
        </span>

      </div>

    </header>
  );
}


// ============================================================
// 8. MAIN MENU PREVIEW
// ============================================================

// Final section order:
//
// 1. Signature Heading
// 2. Signature Dishes Scroll Stack
// 3. Full Restaurant Menu
// 4. Reservation Button

export default function MenuPreview() {
  return (
    <section
      className="section home-menu"
      id="menu"
      aria-labelledby={
        signatureDishes.length
          ? "signature-title"
          : "menu-title"
      }
    >
      <div className="wrap">
        {/* SIGNATURE DISHES SECTION */}

        {signatureDishes.length > 0 && (
          <section
            className="signature-section"
            aria-labelledby="signature-title"
          >
            <SignatureHeading />

            <SignatureStack
              dishes={signatureDishes}
            />
          </section>
        )}

        {/* FULL RESTAURANT MENU */}

        <FullMenu />
      </div>
    </section>
  );
}
