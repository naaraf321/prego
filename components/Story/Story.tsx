import Link from "next/link";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import { siteConfig, website } from "@/content/website";

export default function Story() {
  const story = website.story;

  return (
    <section className="section story" id="story" aria-labelledby="story-title">
      <div className="wrap split">
        <div className="split-media reveal">
          <div className="frame img-reveal">
            <ImageWithSkeleton src={story.image} alt={story.imageAlt} fill quality={78} sizes="(max-width: 1024px) 100vw, 52vw" />
          </div>
          <div className="badge"><b>{story.badgeLarge}</b><small>{story.badgeSmall}</small></div>
        </div>
        <div className="split-body reveal">
          <span className="label">{story.label}</span>
          <h2 className="display display--sm" id="story-title">{story.title}</h2>
          {story.paragraphs.map((paragraph) => <p className="lede" key={paragraph}>{paragraph}</p>)}
          <div className="story-actions">
            <Link href="/#menu" className="btn btn--gold"><span>{story.menuButton}</span></Link>
            <a href={siteConfig.facebook} className="text-link" target="_blank" rel="noopener noreferrer">{story.facebookButton}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
