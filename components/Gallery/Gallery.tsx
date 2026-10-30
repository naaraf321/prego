"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import { website } from "@/content/website";
import "./Gallery.css";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const images = website.gallery.images;
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(images.length > 1);

  const updateControls = () => {
    const track = trackRef.current;
    if (!track) return;
    const slides = Array.from(track.querySelectorAll<HTMLElement>(".prego-gallery__slide"));
    const center = track.scrollLeft + track.clientWidth / 2;
    let nearest = 0;
    let distance = Infinity;
    slides.forEach((slide, i) => {
      const gap = Math.abs(slide.offsetLeft - track.offsetLeft + slide.offsetWidth / 2 - center);
      if (gap < distance) { distance = gap; nearest = i; }
    });
    setActive(nearest);
    setCanPrev(track.scrollLeft > 3);
    setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 3);
  };

  useEffect(() => {
    const track = trackRef.current;
    const section = sectionRef.current;
    if (!track || !section) return;
    const sync = () => updateControls();
    const observer = new ResizeObserver(sync);
    observer.observe(track);
    track.addEventListener("scroll", sync, { passive: true });
    sync();
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let context: gsap.Context | undefined;
    if (!prefersReduced) {
      context = gsap.context(() => {
        gsap.fromTo(".prego-gallery__heading", { autoAlpha: 0, y: 30 }, {
          autoAlpha: 1, y: 0, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 85%", once: true },
        });
        gsap.fromTo(".prego-gallery__slide", { autoAlpha: 0, y: 55 }, {
          autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.09, ease: "power3.out",
          scrollTrigger: { trigger: track, start: "top 90%", once: true },
        });
      }, section);
    }
    return () => { track.removeEventListener("scroll", sync); observer.disconnect(); context?.revert(); };
  }, []);

  const move = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slides = track.querySelectorAll<HTMLElement>(".prego-gallery__slide");
    const target = slides[Math.max(0, Math.min(slides.length - 1, active + direction))];
    if (target) {
      const left = target.offsetLeft - track.offsetLeft - (track.clientWidth - target.offsetWidth) / 2;
      track.scrollTo({ left, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    }
  };

  if (!images.length) return null;

  return (
    <section ref={sectionRef} id="gallery" className="section prego-gallery" aria-labelledby="gallery-title">
      <div className="prego-gallery__wrap">
        <header className="prego-gallery__heading">
          <div>
            <span className="prego-gallery__eyebrow">{website.gallery.label}</span>
            <h2 id="gallery-title">{website.gallery.title}</h2>
          </div>
          <div className="prego-gallery__controls" aria-label="Gallery controls">
            <button type="button" onClick={() => move(-1)} disabled={!canPrev} aria-label="Previous photos">←</button>
            <button type="button" onClick={() => move(1)} disabled={!canNext} aria-label="Next photos">→</button>
          </div>
        </header>
        <div className="prego-gallery__track" ref={trackRef} role="region" aria-label="Prego photo gallery" tabIndex={0}>
          {images.map((image, index) => (
            <figure className="prego-gallery__slide" key={`${image.src}-${index}`}>
              <ImageWithSkeleton src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 85vw, (max-width: 1000px) 55vw, 42vw" />
              {image.caption && <figcaption>{image.caption}</figcaption>}
            </figure>
          ))}
        </div>
        <div className="prego-gallery__progress" aria-hidden="true"><span style={{ width: `${((active + 1) / images.length) * 100}%` }} /></div>
      </div>
    </section>
  );
}
