"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { website } from "@/content/website";
import "./Hero.css";

const TILE_IMAGES: string[] = [];

const HEADLINE = {
  opening: "Craving the Real Taste of Malta?",
};

const COLUMN_COUNT = 7;
const TILES_PER_GROUP = 6;


function gallerySources(value: unknown): string[] {
  if (typeof value === "string") return value.trim() ? [value] : [];
  if (Array.isArray(value)) return value.flatMap(gallerySources);
  if (!value || typeof value !== "object") return [];
  const item = value as Record<string, unknown>;
  for (const key of ["src", "image", "url"]) {
    if (typeof item[key] === "string" && item[key].trim()) return [item[key]];
  }
  for (const key of ["images", "items", "photos"]) {
    if (Array.isArray(item[key])) return gallerySources(item[key]);
  }
  return [];
}

type ColumnStyle = CSSProperties & {
  "--tile-speed": string;
  "--tile-delay": string;
};

export default function Hero() {
  const hero = website.hero;
  const sectionRef = useRef<HTMLElement>(null);
  const [paused, setPaused] = useState(false);
  const [offscreen, setOffscreen] = useState(false);
  const gallery = (website as unknown as { gallery?: unknown }).gallery;
  const sources = TILE_IMAGES.length ? TILE_IMAGES : gallerySources(gallery);
  const images = [...new Set(sources.length ? sources : [hero.image])].slice(0, 12);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      setOffscreen(!entry.isIntersecting);
    });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="hero prego-tile-hero"
        id="home"
        aria-labelledby="home-title"
        data-motion-paused={paused || offscreen ? "true" : "false"}
      >
        <div className="prego-tiles" aria-hidden="true">
          <div className="prego-tiles__wall">
            {Array.from({ length: COLUMN_COUNT }, (_, column) => {
              const columnImages = Array.from(
                { length: TILES_PER_GROUP },
                (_, row) => images[(column * 3 + row) % images.length],
              );

              return (
                <div
                  className="prego-tiles__column"
                  key={column}
                  style={{
                    "--tile-speed": `${48 + (column % 4) * 8}s`,
                    "--tile-delay": `${-column * 9 - 15}s`,
                  } as ColumnStyle}
                >
                  <div className="prego-tiles__track">

                    {[0, 1].map((copy) => (
                      <div className="prego-tiles__group" key={copy}>
                        {columnImages.map((src, row) => (
                          <div className="prego-tiles__tile" key={`${copy}-${row}`}>
                            <Image
                              src={src}
                              alt=""
                              fill
                              sizes="(max-width: 700px) 230px, (max-width: 1200px) 300px, 24vw"
                              quality={80}
                              loading="eager"
                              draggable={false}
                            />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="hero-inner">

          <h1 className="prego-hero-title" id="home-title">
            <span>{HEADLINE.opening}</span>
          </h1>

          <div className="hero-cta">
            <a href="#reservations" className="btn btn--gold">
              <span>{hero.reserveButton}</span>
            </a>
            <Link href="/#menu" className="btn">
              <span>{hero.menuButton}</span>
            </Link>
          </div>
        </div>


      </section>

      <div className="marquee prego-hero-marquee" aria-hidden="true" data-motion-paused={paused ? "true" : "false"}>
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div className="prego-marquee-group" key={copy}>
              {hero.marquee.map((item, index) => (
                <span key={`${copy}-${index}`} className={index % 3 === 1 ? "out" : index % 3 === 2 ? "gold" : ""}>
                  {item}<i> ◆ </i>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
