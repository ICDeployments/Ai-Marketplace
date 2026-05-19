import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Overview",            href: "/",                scrollTo: "overview"        },
  { label: "Sub Vertical",        href: null,               scrollTo: "sub-vertical"    },
  { label: "Build Your own Agent",href: null,               scrollTo: "build-agent"     },
  { label: "Service Offerings",   href: null,               scrollTo: "service-offerings"},
  { label: "Contact",             href: null,               scrollTo: "contact"         },
];

export default function SecondaryNavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    if (location.pathname !== "/") return;

    const sections = NAV_ITEMS
      .map((item) => item.scrollTo && document.getElementById(item.scrollTo))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        const topmost = visible.reduce((prev, curr) =>
          prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr
        );
        setActiveSection(topmost.target.id);
      },
      { rootMargin: "-60px 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [location.pathname]);

  const isActive = (item) => {
    if (location.pathname !== "/") return false;
    return item.scrollTo === activeSection;
  };

  const handleClick = (e, item) => {
    if (item.scrollTo) {
      e.preventDefault();
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById(item.scrollTo)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.getElementById(item.scrollTo)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="w-full bg-[#7373D8] sticky top-0 z-50">
      <nav
        className="flex items-center gap-[48px] h-[44px] mx-auto w-full max-w-[1440px]"
        style={{ paddingLeft: "var(--page-gutter)", paddingRight: "var(--page-gutter)" }}
      >
        {NAV_ITEMS.map((item, index) => {
          const active = isActive(item);
          return (
            <a
              key={index}
              href={item.href ?? `#${item.scrollTo}`}
              onClick={(e) => handleClick(e, item)}
              className={`text-[15px] leading-[20px] font-semibold transition-colors cursor-pointer self-stretch flex items-center ${
                active
                  ? "bg-white text-[#000048] border-b-[3px] border-[#000048] px-[16px]"
                  : "text-white hover:opacity-80"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </section>
  );
}
