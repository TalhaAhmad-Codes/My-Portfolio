import socialLinks from "../data/SocialLinks.js";

function SocialIcon({ icon }) {
  const commonProps = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (icon) {
    case "github":
      return (
        <svg {...commonProps} fill="currentColor" stroke="none">
          <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.05c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.69 2.6 1.2 3.23.92.1-.72.39-1.2.7-1.48-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.06 1.14a10.6 10.6 0 0 1 5.57 0c2.12-1.44 3.06-1.14 3.06-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.77 1.15 2.99 0 4.29-2.61 5.24-5.1 5.51.4.35.75 1.03.75 2.08V22c0 .29.2.63.76.52A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
      );

    case "linkedin":
      return (
        <svg {...commonProps} fill="currentColor" stroke="none">
          <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.53v16.94c0 .85.69 1.53 1.55 1.53h16.9c.86 0 1.55-.68 1.55-1.53V3.53c0-.85-.69-1.53-1.55-1.53ZM7.93 18.9H4.98V9.4h2.95v9.5ZM6.45 8.1a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42ZM19.02 18.9h-2.94v-4.62c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.7H9.82V9.4h2.82v1.3h.04c.39-.74 1.35-1.52 2.78-1.52 2.97 0 3.56 1.96 3.56 4.51v5.21Z" />
        </svg>
      );

    case "email":
      return (
        <svg {...commonProps}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );

    case "facebook":
      return (
        <svg
          {...commonProps}
          fill="currentColor"
          stroke="none"
          viewBox="0 0 24 24"
        >
          <path d="M13.4 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.8-.1-1.6-.2-2.4-.2-2.4 0-4 1.5-4 4.2v2.3H7.6V13h2.7v8h3.1Z" />
        </svg>
      );

    case "instagram":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle
            cx="17.5"
            cy="6.5"
            r="0.8"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      );

    default:
      return null;
  }
}

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target={link.url.startsWith("mailto:") ? undefined : "_blank"}
          rel={
            link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"
          }
          aria-label={link.name}
          title={link.name}
          className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 ease-out hover:scale-110 hover:border-sky-300 hover:text-sky-600 hover:shadow-lg hover:shadow-sky-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-400 dark:hover:border-sky-400/50 dark:hover:text-sky-400 dark:hover:shadow-sky-400/15 dark:focus-visible:ring-offset-slate-950 motion-reduce:transform-none motion-reduce:transition-none"
        >
          <SocialIcon icon={link.icon} />
        </a>
      ))}
    </div>
  );
}
