import PageContainer from "./PageContainer";

function Col({ title, items }) {
  return (
    <div>
      <h3 className="text-[15px] font-semibold mb-3">{title}</h3>
      <ul className="space-y-0 text-[15px] text-white/80">
        {items.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="hover:underline cursor-pointer"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Social Icons (SVG) */
function IconLinkedIn({ className = "" }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.036-1.852-3.036-1.853 0-2.136 1.445-2.136 2.939v5.666H9.086V9h3.11v1.561h.045c.433-.82 1.494-1.685 3.073-1.685 3.287 0 3.894 2.164 3.894 4.977v6.599ZM5.337 7.433a1.81 1.81 0 1 1 0-3.62 1.81 1.81 0 0 1 0 3.62ZM6.956 20.452H3.717V9h3.239v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

function IconX({ className = "" }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2H21.5l-7.11 8.13L22.75 22h-6.54l-5.12-6.682L5.2 22H2l7.63-8.74L1.5 2H8.2l4.63 6.09L18.244 2Zm-1.15 18h1.8L7.26 3.9H5.33l11.764 16.1Z" />
    </svg>
  );
}

function IconFacebook({ className = "" }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12.07C22 6.477 17.523 2 11.93 2 6.477 2 2 6.477 2 12.07 2 17.092 5.657 21.22 10.438 22v-7.03H7.898v-2.9h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.877h2.773l-.443 2.9h-2.33V22C18.343 21.22 22 17.092 22 12.07Z" />
    </svg>
  );
}

function IconInstagram({ className = "" }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 7.5A4.5 4.5 0 1 0 12 16.5A4.5 4.5 0 1 0 12 7.5Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M17.6 6.4h.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconYouTube({ className = "" }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.5 6.2s-.23-1.64-.95-2.36c-.91-.95-1.93-.96-2.4-1.02C16.86 2.5 12 2.5 12 2.5h-.01s-4.86 0-8.15.32c-.47.06-1.49.07-2.4 1.02C.73 4.56.5 6.2.5 6.2S.25 8.12.25 10.04v1.92c0 1.92.25 3.84.25 3.84s.23 1.64.95 2.36c.91.95 2.1.92 2.63 1.02 1.91.18 8.17.32 8.17.32s4.86-.01 8.15-.33c.47-.06 1.49-.07 2.4-1.02.72-.72.95-2.36.95-2.36s.25-1.92.25-3.84v-1.92c0-1.92-.25-3.84-.25-3.84ZM9.75 14.5v-7l6.25 3.5-6.25 3.5Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#000048] text-white">
      <PageContainer className="py-[46px]">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-[50px]">
          <div className="flex items-start gap-3">
            <img
              src="/assets/images/footerlogo.png"
              alt="Logo"
              className="h-[54px] w-auto object-contain"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px]">
            <Col title="What we do" items={[
              { label: "Industries", href: "https://www.cognizant.com/us/en/industries" },
              { label: "Services",   href: "https://www.cognizant.com/us/en/services" },
              { label: "Insights",   href: "https://www.cognizant.com/us/en/insights" },
            ]} />
            <Col title="Who we are" items={[
              { label: "About Cognizant",    href: "https://www.cognizant.com/us/en/about-cognizant" },
              { label: "Locations",          href: "https://www.cognizant.com/us/en/about-cognizant/global-locations" },
              { label: "Annual Report",      href: "https://www.cognizant.com/us/en/about-cognizant/2023-annual-report" },
              { label: "Board of Directors", href: "https://www.cognizant.com/us/en/about-cognizant/corporate-governance/board-of-directors" },
              { label: "Awards and accolades", href: "https://www.cognizant.com/us/en/industry-analyst-recognition" },
            ]} />
            <Col title="AI and innovation" items={[
              { label: "AI Lab",                    href: "https://www.cognizant.com/us/en/services/ai" },
              { label: "Engineering AI for impact", href: "https://www.cognizant.com/us/en/services/engineering-research-development" },
              { label: "New minds, new markets",    href: "https://www.cognizant.com/us/en/insights" },
            ]} />
          </div>
        </div>

        <div className="mt-[28px] text-[15px] pl-[260px]">
          <h4 className="font-semibold mb-2">Resources</h4>
          <div className="text-white/80 space-y-0">
            <div><a href="https://www.cognizant.com/us/en/about-cognizant/contact-cognizant" target="_blank" rel="noreferrer" className="hover:underline">Contact Us</a></div>
            <div><a href="https://www.cognizant.com/us/en/careers" target="_blank" rel="noreferrer" className="hover:underline">Careers</a></div>
            <div><a href="https://www.cognizant.com/us/en/about-cognizant/supplier-information" target="_blank" rel="noreferrer" className="hover:underline">Information for Suppliers</a></div>
            <div><a href="https://www.cognizant.com/us/en/glossary" target="_blank" rel="noreferrer" className="hover:underline">Glossary</a></div>
          </div>
        </div>

        <div className="mt-[24px] pt-[16px] border-t border-white/80 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[12px] text-white/100">
          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com/company/cognizant" target="_blank" rel="noreferrer" aria-label="LinkedIn"><IconLinkedIn className="w-[28px] h-[22px]" /></a>
            <a href="https://twitter.com/cognizant" target="_blank" rel="noreferrer" aria-label="Twitter"><IconX className="w-[28px] h-[22px]" /></a>
            <a href="https://www.facebook.com/Cognizant" target="_blank" rel="noreferrer" aria-label="Facebook"><IconFacebook className="w-[28px] h-[22px]" /></a>
            <a href="https://www.instagram.com/cognizant" target="_blank" rel="noreferrer" aria-label="Instagram"><IconInstagram className="w-[28px] h-[22px]" /></a>
            <a href="https://www.youtube.com/cognizant" target="_blank" rel="noreferrer" aria-label="YouTube"><IconYouTube className="w-[28px] h-[22px]" /></a>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://www.cognizant.com/us/en/sitemap" target="_blank" rel="noreferrer" className="hover:underline">Sitemap</a>
            <a href="https://www.cognizant.com/us/en/terms-conditions" target="_blank" rel="noreferrer" className="hover:underline">Terms</a>
            <a href="https://www.cognizant.com/us/en/privacy-notice" target="_blank" rel="noreferrer" className="hover:underline">Privacy Notice</a>
            <a href="https://www.cognizant.com/us/en/cookie-notice" target="_blank" rel="noreferrer" className="hover:underline">Cookie Notice</a>
            <span>©2026 Cognizant, all rights reserved</span>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}