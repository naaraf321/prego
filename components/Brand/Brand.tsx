import { siteConfig } from "@/content/website";

export default function Brand({ variant = "nav" }: { variant?: "nav" | "hero" | "footer" }) {
  return (
    <span className={`brand brand--${variant}`}>
      <span className="brand-word">{siteConfig.shortName.toUpperCase()}</span>
      <svg className="brand-rule" viewBox="0 0 220 10" fill="none" aria-hidden="true">
        <line x1="0" y1="5" x2="92" y2="5" stroke="currentColor" strokeWidth="1" />
        <line x1="128" y1="5" x2="220" y2="5" stroke="currentColor" strokeWidth="1" />
        <circle cx="100" cy="5" r="1.8" fill="currentColor" />
        <circle cx="120" cy="5" r="1.8" fill="currentColor" />
        <path d="M110 1.2 114.2 5 110 8.8 105.8 5Z" fill="currentColor" />
      </svg>
      <span className="brand-sub">{siteConfig.brandSubline}</span>
    </span>
  );
}
