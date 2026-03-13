import { Link, useLocation } from "react-router-dom";
import PageContainer from "./PageContainer";

const NAV_ITEMS = [
  { label: "Overview", href: "/" },
  { label: "Sub Vertical", href: "/agentic-solutions" },
  { label: "Build Your own Agent", href: "#build-agent" },
  { label: "Service Offerings", href: "#service-offerings" },
  { label: "Contact", href: "#contact" },
];

export default function SecondaryNavBar() {
  const location = useLocation();

  const isActive = (href) => {
    if (href === "/") {
      return false;
    }
    if (href.startsWith("#")) {
      return false;
    }
    if (href === "/agentic-solutions" && location.pathname.startsWith("/category/")) {
      return true;
    }
    return location.pathname.startsWith(href);
  };

  return (
    <section className="w-full bg-[#000048]">
      <nav
        className="flex items-center gap-[48px] h-[44px] mx-auto w-full max-w-[1440px]"
        style={{ paddingLeft: "var(--page-gutter)", paddingRight: "var(--page-gutter)" }}
      >
        {NAV_ITEMS.map((item, index) => {
          const active = isActive(item.href);

          if (item.href.startsWith("#")) {
            return (
              <a
                key={index}
                href={item.href}
                className="text-[13px] leading-[18px] font-normal text-white hover:text-[#00E8D6] transition-colors"
              >
                {item.label}
              </a>
            );
          }

          return (
            <Link
              key={index}
              to={item.href}
              className={`text-[13px] leading-[18px] font-normal transition-colors ${
                active
                  ? "text-[#00E8D6]"
                  : "text-white hover:text-[#00E8D6]"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </section>
  );
}
