
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Chef.css";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    id: "chef",
    name: "Cormack Spiteri",
    role: "Chef",
    image: "/images/team/chef.jpg",
    position: "50% 35%",
  },
  {
    id: "manager",
    name: "Paurick Spiteri",
    role: "Manager",
    image: "/images/team/manager.jpg",
    position: "50% 35%",
  },
];

export default function Chef() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".prego-team__eyebrow", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".prego-team__heading", {
        opacity: 0,
        y: 45,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".prego-team__subtitle", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".prego-team__card", {
        opacity: 0,
        y: 75,
        scale: 0.94,
        duration: 1.1,
        stagger: 0.16,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".prego-team__grid",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".prego-team__portrait", {
        scale: 0.7,
        opacity: 0,
        duration: 0.9,
        stagger: 0.16,
        ease: "back.out(1.3)",
        scrollTrigger: {
          trigger: ".prego-team__grid",
          start: "top 85%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section chef-section prego-team"
      id="chef"
      aria-labelledby="prego-team-title"
    >
      <div className="prego-team__container">
        <header className="prego-team__header">
          <span className="prego-team__eyebrow">
            <span className="prego-team__eyebrow-dot" />
            MEET OUR TEAM
          </span>

          <h2
            id="prego-team-title"
            className="prego-team__heading"
          >
            THE FACES
            <br />
            <em>BEHIND PREGO.</em>
          </h2>

          <p className="prego-team__subtitle">
            REAL PEOPLE. REAL PASSION.
          </p>
        </header>

        <div className="prego-team__grid">
          {team.map((member) => (
            <article
              className="prego-team__card"
              key={member.id}
            >
              {/* */}

              <div className="prego-team__portrait">
                <Image
                  src={member.image}
                  alt={`Prego ${member.name}`}
                  fill
                  sizes="(max-width: 700px) 190px, (max-width: 1024px) 180px, 220px"
                  style={{
                    objectFit: "cover",
                    objectPosition: member.position,
                  }}
                />
              </div>

              <h3 className="prego-team__name">
                {member.name}
              </h3>

              <span className="prego-team__role">
                {member.role}
              </span>

              <div className="prego-team__bottom-line" />
            </article>
          ))}
        </div>

        
      </div>
    </section>
  );
}
