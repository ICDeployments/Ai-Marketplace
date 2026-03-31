import { useLocation, useNavigate } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Overview",            href: "/",                scrollTo: null              },
  { label: "Sub Vertical",        href: null,               scrollTo: "sub-vertical"    },
  { label: "Build Your own Agent",href: null,               scrollTo: "build-agent"     },
  { label: "Service Offerings",   href: null,               scrollTo: "service-offerings"},
  { label: "Contact",             href: null,               scrollTo: "contact"         },
];

export default function SecondaryNavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (item) => {
    if (item.href === "/") return location.pathname === "/";
    return false;
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
    <section className="w-full bg-[#7373D8]">
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
              className={`text-[13px] leading-[18px] font-semibold transition-colors cursor-pointer self-stretch flex items-center ${
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
