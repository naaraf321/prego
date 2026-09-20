"use client";

import { useState } from "react";
import { siteConfig, website } from "@/content/website";

export default function TableoBooking() {
  const [loaded, setLoaded] = useState(false);
  const booking = website.booking;

  return (
    <div className={`tableo-shell ${loaded ? "is-loaded" : ""}`}>
      {!loaded && (
        <div className="tableo-loading" aria-live="polite">
          <span className="tableo-loading-mark" aria-hidden="true">P</span>
          <div>
            <strong>{booking.loadingTitle}</strong>
            <span>{booking.loadingSubtitle}</span>
          </div>
        </div>
      )}

      <iframe
        className="tableo-frame"
        src={siteConfig.tableoWidgetUrl}
        title={`Book a table at ${siteConfig.name}`}
        loading="lazy"
        allow="payment *"
        referrerPolicy="strict-origin-when-cross-origin"
        onLoad={() => setLoaded(true)}
      />

      <div className="tableo-fallback">
        <span>{booking.fallbackText}</span>
        <a href={siteConfig.tableoWidgetUrl} target="_blank" rel="noopener noreferrer">
          {booking.fallbackLink}
        </a>
      </div>
    </div>
  );
}
