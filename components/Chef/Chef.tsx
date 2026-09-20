import Link from "next/link";
import ImageWithSkeleton from "@/components/ImageWithSkeleton/ImageWithSkeleton";
import { website } from "@/content/website";

export default function Chef() {
  const chef = website.chef;

  return (
    <section className="section chef-section" id="chef" aria-labelledby="chef-title">
      <div className="wrap chef-grid">
        <div className="chef-copy reveal">
          <span className="label">{chef.label}</span>
          <h2 className="display display--sm" id="chef-title">{chef.title}</h2>
          <p className="lede">{chef.paragraph}</p>
          <p className="chef-principle">{chef.principle}</p>
          <Link href="/#menu" className="btn btn--gold"><span>{chef.menuButton}</span></Link>
        </div>
        <div className="chef-media reveal">
          <ImageWithSkeleton src={chef.image} alt={chef.imageAlt} fill quality={78} sizes="(max-width: 900px) 100vw, 48vw" />
        </div>
      </div>
    </section>
  );
}
