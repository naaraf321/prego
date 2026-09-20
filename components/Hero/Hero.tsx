import Link from "next/link";
import Brand from "@/components/Brand/Brand";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import { website } from "@/content/website";

export default function Hero() {
  const hero = website.hero;

  return (
    <>
      <section className="hero" id="home" aria-labelledby="home-title">
        <div className="hero-media">
          <ImageWithSkeleton
            src={hero.image}
            alt={hero.imageAlt}
            fill
            priority
            fetchPriority="high"
            quality={80}
            sizes="100vw"
          />
        </div>
        <div className="hero-inner">
          <span className="hero-tag anim">{hero.location}</span>
          <h1 className="anim" id="home-title" aria-label={`${website.business.name} in ${website.business.address.locality}, ${website.business.address.countryName}`}><Brand variant="hero" /></h1>
          <p className="hero-sub anim">{hero.taglineBefore} <em>{hero.taglineEmphasis}</em></p>
          <div className="hero-cta anim">
            <a href="#reservations" className="btn btn--gold"><span>{hero.reserveButton}</span></a>
            <Link href="/#menu" className="btn"><span>{hero.menuButton}</span></Link>
          </div>
        </div>
        {/* <div className="scroll-cue" aria-hidden="true"><span>{hero.scrollLabel}</span><i /></div> */}
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {hero.marquee.map((item, index) => (
            <span key={`${item}-${index}`} className={index % 3 === 1 ? "out" : index % 3 === 2 ? "gold" : ""}>
              {item}<i> ◆ </i>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
