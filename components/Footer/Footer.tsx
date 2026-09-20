import Link from "next/link";
import Brand from "@/components/Brand/Brand";
import { siteConfig, website } from "@/content/website";

export default function Footer() {
  const footer = website.footer;

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link href="/#home"><Brand variant="footer" /></Link>
            <p>{footer.description}</p>
            <div className="socials">
              <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" aria-label={`${siteConfig.name} on Facebook`}>FB</a>
              <a href={siteConfig.tripadvisor} target="_blank" rel="noopener noreferrer" aria-label={`${siteConfig.name} on Tripadvisor`}>TA</a>
            </div>
          </div>

          <div className="foot-col">
            <h3>{footer.exploreHeading}</h3>
            <ul>{footer.links.map(([label, href]) => <li key={label}><Link href={href}>{label}</Link></li>)}</ul>
          </div>

          <div className="foot-col">
            <h3>{footer.hoursHeading}</h3>
            <div className="foot-hours">
              {siteConfig.hours.map((group) => (
                <div className="foot-hours-group" key={group.label}>
                  <span className="foot-hours-days">{group.label}</span>
                  <div className="foot-hours-periods">
                    {group.periods.map((period) => (
                      <span key={`${group.label}-${period.label}`}>
                        <small>{period.label}</small>
                        {period.open} — {period.close}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="foot-col">
            <h3>{footer.contactHeading}</h3>
            <ul>
              <li>{siteConfig.address.street}<br />{siteConfig.address.locality}, {siteConfig.address.countryName}</li>
              <li><a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a></li>
            </ul>
          </div>
        </div>

        <div className="statement">
          <h2>{footer.statement}</h2>
          <div className="cta">
            <a href="/#reservations" className="btn btn--gold"><span>{footer.reserveButton}</span></a>
            <Link href="/#menu" className="btn"><span>{footer.menuButton}</span></Link>
          </div>
        </div>

        <div className="foot-base">
          <span>© {new Date().getFullYear()} {siteConfig.name} — {siteConfig.address.locality}, {siteConfig.address.countryName}</span>
          <span>{siteConfig.address.street} · {siteConfig.address.locality}</span>
        </div>
      </div>
    </footer>
  );
}
