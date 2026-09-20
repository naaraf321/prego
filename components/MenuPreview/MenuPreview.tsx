import { menu, siteConfig, website } from "@/content/website";

function DishMarks({
  popular,
  chefChoice,
  vegetarian,
  spicy,
}: {
  popular?: boolean;
  chefChoice?: boolean;
  vegetarian?: boolean;
  spicy?: boolean;
}) {
  return (
    <span className="dish-marks" aria-label="Dish labels">
      {chefChoice && <span className="mark mark--chef" title={website.menuSection.legend.chefChoice} aria-label={website.menuSection.legend.chefChoice}>◆</span>}
      {popular && <span className="mark mark--popular" title={website.menuSection.legend.popular} aria-label={website.menuSection.legend.popular}>★</span>}
      {vegetarian && <span className="mark mark--veg" title={website.menuSection.legend.vegetarian} aria-label={website.menuSection.legend.vegetarian}>▲</span>}
      {spicy && <span className="mark mark--spicy" title={website.menuSection.legend.spicy} aria-label={website.menuSection.legend.spicy}>●</span>}
    </span>
  );
}

export default function MenuPreview() {
  const section = website.menuSection;

  return (
    <section className="section home-menu" id="menu" aria-labelledby="menu-title">
      <div className="wrap">
        <div className="sec-head home-menu-head">
          <div className="home-menu-heading-copy">
            <span className="label reveal">{section.label}</span>
            <h2 className="home-menu-title reveal" id="menu-title">
              {section.titleLines.map((line) => <span key={line}>{line}</span>)}
            </h2>
          </div>
          <p className="side reveal">{section.description}</p>
        </div>

        <div className="home-menu-legend reveal" aria-label="Menu legend">
          <span><i className="mark mark--chef">◆</i> {section.legend.chefChoice}</span>
          <span><i className="mark mark--popular">★</i> {section.legend.popular}</span>
          <span><i className="mark mark--veg">▲</i> {section.legend.vegetarian}</span>
          <span><i className="mark mark--spicy">●</i> {section.legend.spicy}</span>
        </div>

        <div className="home-menu-categories" aria-label={`${siteConfig.name} food menu`}>
          {menu.map((category) => {
            const categoryId = `category-${category.title.toLowerCase().replace(/\s+/g, "-")}`;

            return (
              <section className="editorial-category reveal" key={category.title} aria-labelledby={categoryId}>
                <header className="editorial-category-head">
                  <h3 id={categoryId}>{category.title}</h3>
                  <p>{category.description}</p>
                </header>

                <div className="editorial-items">
                  {category.items.map((item) => (
                    <article className="editorial-item" key={item.name}>
                      <div className="editorial-item-top">
                        <h4>{item.name}</h4>
                        <DishMarks
                          popular={item.popular}
                          chefChoice={item.chefChoice}
                          vegetarian={item.vegetarian}
                          spicy={item.spicy}
                        />
                        <span className="editorial-dots" aria-hidden="true" />
                        <strong>{item.price}</strong>
                      </div>
                      <p>{item.description}</p>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <div className="home-menu-footer reveal">
          <p>{section.note}</p>
          <a href="#reservations" className="btn btn--gold"><span>{section.reserveButton}</span></a>
        </div>
      </div>
    </section>
  );
}
