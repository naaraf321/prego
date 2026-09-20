import { siteConfig, website } from "@/content/website";

export default function Contact() {
  const contact = website.contact;

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="wrap loc-grid">
        <div className="loc-info">
          <span className="label reveal">{contact.label}</span>
          <h2 className="display display--sm reveal" id="contact-title">
            {contact.titleLines.map((line, index) => (
              <span key={line}>{line}{index < contact.titleLines.length - 1 && <br />}</span>
            ))}
          </h2>

          <div className="loc-block reveal">
            <h3>{contact.addressHeading}</h3>
            <address>
              {siteConfig.address.street}<br />
              {siteConfig.address.locality}, {siteConfig.address.countryName}
            </address>
          </div>

          <div className="loc-block reveal">
            <h3>{contact.hoursHeading}</h3>
            <div className="loc-hours">
              {siteConfig.hours.map((group) => (
                <div className="hours-group" key={group.label}>
                  <span className="hours-days">{group.label}</span>
                  <div className="hours-periods">
                    {group.periods.map((period) => (
                      <div className="hours-period" key={`${group.label}-${period.label}`}>
                        <span className="hours-period-label">{period.label}</span>
                        <span>{period.open} — {period.close}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="loc-block reveal">
            <h3>{contact.contactHeading}</h3>
            <p><a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a></p>
          </div>

          <div className="loc-actions reveal">
            <a className="btn btn--gold" href={siteConfig.mapDirections} target="_blank" rel="noopener noreferrer">
              <span>{contact.directionsButton}</span>
            </a>
            <a className="btn" href={siteConfig.facebook} target="_blank" rel="noopener noreferrer">
              <span>{contact.facebookButton}</span>
            </a>
          </div>
        </div>

        <div className="map reveal">
          <iframe
            title={contact.mapTitle}
            src={siteConfig.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
