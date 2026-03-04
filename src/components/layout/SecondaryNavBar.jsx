import { Link, useLocation } from "react-router-dom";
import PageContainer from "./PageContainer";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Agentic Solutions", href: "/agentic-solutions" },
  { label: "Try your Agent", href: "/try-your-agent" },
  { label: "Build your own Agent", href: "#build-agent" },
  { label: "Service Offerings", href: "#service-offerings" },
  { label: "Contact", href: "#contact" },
];

export default function SecondaryNavBar() {
  const location = useLocation();
  
  const isActive = (href) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    if (href.startsWith("#")) {
      return false; // Scroll links are not actively highlighted in this implementation
    }
    // Check if we're on a category page and highlight "Agentic Solutions"
    if (href === "/agentic-solutions" && location.pathname.startsWith("/category/")) {
      return true;
    }
    // Check if we're on agent interaction page and highlight "Try your Agent"
    if (href === "/try-your-agent" && location.pathname.startsWith("/agent-interaction/")) {
      return true;
    }
    return location.pathname.startsWith(href);
  };

  return (
    <section className="w-full bg-[#000048]">
      <PageContainer>
        <nav className="flex items-center gap-[12px] h-[24px] -ml-[10px]">
          {NAV_ITEMS.map((item, index) => {
            const active = isActive(item.href);
            
            if (item.href.startsWith("#")) {
              return (
                <a
                  key={index}
                  href={item.href}
                  className="text-[12px] leading-[16px] font-medium text-white hover:text-[#00E8D6] transition-colors px-[10px] py-[4px]"
                >
                  {item.label}
                </a>
              );
            }
            
            return (
              <Link
                key={index}
                to={item.href}
                className={`text-[12px] leading-[16px] font-medium transition-all px-[10px] py-[4px] ${
                  active 
                    ? "bg-[#2F78C4] text-white" 
                    : "text-white hover:text-[#00E8D6]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </PageContainer>
    </section>
  );
}
