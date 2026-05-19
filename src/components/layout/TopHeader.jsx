import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageContainer from "./PageContainer";
import GlobeDropdown from "../ui/GlobeDropdown";
import { MegaDropdown } from "../ui/MegaDropdown";
import { industriesMenu, servicesMenu, insightsMenu, aboutMenu } from "../../data/MegaDropDownData";
import { CATEGORY_SOLUTIONS } from "../../pages/CategorySolutionsPage";

/* Maps a /banking-suite/<slug> route to the CATEGORY_SOLUTIONS title(s) it represents */
const SUITE_SCOPE = {
  "retail-banking":          { label: "Retail Banking",          titles: ["Retail Banking"] },
  "commercial-banking":      { label: "Commercial Banking",      titles: ["Commercial Banking"] },
  "investment-banking":      { label: "Investment Banking",      titles: ["Investment Banking", "Capital Market"] },
  "cards-payments":          { label: "Cards & Payments",        titles: ["Cards & Payments"] },
  "risk-compliance":         { label: "Risk & Compliance",       titles: ["Risk & Compliance"] },
  "asset-management":        { label: "Asset Management",        titles: ["Asset Management", "Asset and Wealth Management"] },
  "wealth-management":       { label: "Wealth Management",       titles: ["Wealth Management", "Asset and Wealth Management"] },
  "market-infrastructure":   { label: "Market Infrastructure",   titles: ["Market Infrastructure"] },
  "asset-wealth-management": { label: "Asset & Wealth Management", titles: ["Asset and Wealth Management", "Asset Management", "Wealth Management"] },
};

/* ── utility links ──────────────────────────────────────────────────────── */

const UTILITY_LINKS = [
  { label: "Career",    href: "https://www.cognizant.com/us/en/careers" },
  { label: "News",      href: "https://news.cognizant.com/" },
  { label: "Events",    href: "https://www.cognizant.com/us/en/events" },
  { label: "Investors", href: "https://investors.cognizant.com/default.aspx" },
];

const MENU_SOURCES = {
  industries: industriesMenu,
  services:   servicesMenu,
  insights:   insightsMenu,
  about:      aboutMenu,
};

/* ── search bar ─────────────────────────────────────────────────────────── */

function SearchBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef(null);

  const scope = useMemo(() => {
    const m = location.pathname.match(/^\/banking-suite\/([^/]+)/);
    return m ? SUITE_SCOPE[m[1]] || null : null;
  }, [location.pathname]);

  /* Reset query whenever the route changes */
  useEffect(() => {
    setSearchTerm("");
    setIsOpen(false);
    setIsFocused(false);
  }, [location.pathname]);

  const allSolutions = useMemo(() => {
    const byTitle = new Map();
    for (const [slug, data] of Object.entries(CATEGORY_SOLUTIONS || {})) {
      for (const sol of data.solutions || []) {
        if (!byTitle.has(sol.title)) {
          byTitle.set(sol.title, { title: sol.title, category: data.title, slug });
        }
      }
    }
    return Array.from(byTitle.values());
  }, []);

  const scopedSolutions = useMemo(() => {
    if (!scope) return allSolutions;
    return allSolutions.filter((s) => scope.titles.includes(s.category));
  }, [scope, allSolutions]);

  const matches = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return [];
    return scopedSolutions
      .filter((s) => s.title.toLowerCase().includes(q) || s.category.toLowerCase().includes(q))
      .slice(0, 8);
  }, [searchTerm, scopedSolutions]);

  const showResults = isOpen && searchTerm.trim().length > 0;

  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen]);

  const handleSelect = (result) => {
    setSearchTerm("");
    setIsOpen(false);
    setIsFocused(false);
    navigate(`/category/${result.slug}`, { state: { fromLabel: result.category } });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && matches.length > 0) {
      handleSelect(matches[0]);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div ref={containerRef} className="relative flex items-center">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => {
          setIsFocused(true);
          setIsOpen(true);
        }}
        onKeyDown={handleKeyDown}
        style={{ width: isFocused ? "320px" : "220px", transition: "width 0.3s ease" }}
        className="h-[40px] rounded-md border border-[#D0D0CE] bg-white py-2 pl-4 pr-10 text-[13px] focus:border-[#2F78C4] focus:outline-none placeholder:text-[#97999B]"
      />
      <div className="absolute inset-y-0 right-3 flex items-center gap-1">
        {searchTerm && (
          <button
            type="button"
            onClick={() => setSearchTerm("")}
            className="text-[#97999B] hover:text-[#000048]"
            aria-label="Clear"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        )}
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="text-[#97999B]">
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
          <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {showResults && (
        <div
          className="absolute top-full mt-2 right-0 z-50 bg-white rounded-md shadow-lg border border-[#D0D0CE] overflow-hidden"
          style={{ width: "320px", maxHeight: "400px", overflowY: "auto" }}
        >
          <div className="px-4 py-2 text-[11px] text-[#97999B] bg-[#F5F7FA] border-b border-[#E0E0E0]">
            {scope ? <>Searching in <span className="font-semibold text-[#000048]">{scope.label}</span></> : "Searching all use cases"}
          </div>
          {matches.length === 0 ? (
            <div className="px-4 py-3 text-[12px] text-[#97999B]">No use cases match "{searchTerm}"</div>
          ) : (
            matches.map((result, i) => (
              <button
                key={`${result.slug}-${i}`}
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleSelect(result);
                }}
                className="w-full text-left px-4 py-2 hover:bg-[#DEEBF8] border-b border-[#F0F0F0] last:border-b-0 block"
              >
                <div className="text-[13px] font-medium text-[#000048] truncate">{result.title}</div>
                <div className="text-[11px] text-[#97999B]">{result.category}</div>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}

/* ── main component ─────────────────────────────────────────────────────── */

export default function TopHeader() {
  const [openDropdown, setOpenDropdown] = useState(null); // 'industries' | 'services' | 'insights' | 'about' | null
  const [selectedSidebar, setSelectedSidebar] = useState(null);
  const rootRef = useRef(null);

  /* close on outside click or Escape */
  useEffect(() => {
    if (!openDropdown) return;

    const handleOutside = (e) => {
      if (!rootRef.current) return;
      if (rootRef.current.contains(e.target)) return;
      setOpenDropdown(null);
      setSelectedSidebar(null);
    };

    const handleKey = (e) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setSelectedSidebar(null);
      }
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, [openDropdown]);

  const toggleDropdown = (key) => {
    if (openDropdown === key) {
      setOpenDropdown(null);
      setSelectedSidebar(null);
      return;
    }
    setOpenDropdown(key);
    const source = MENU_SOURCES[key];
    if (source?.length) setSelectedSidebar(source[0].id);
  };

  const activeMenuData =
    openDropdown === "industries" ? industriesMenu :
    openDropdown === "services"   ? servicesMenu   :
    openDropdown === "insights"   ? insightsMenu   :
    aboutMenu;

  return (
    <div ref={rootRef} className="relative">
      <header className="w-full border-b border-[#E0E0E0] bg-white">

        {/* Top utility bar */}
        <PageContainer>
          <div className="flex h-[40px] items-center justify-end">
            <div className="flex items-center divide-x divide-[#D0D0CE] text-[12px] text-[#97999B]">
              {UTILITY_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="px-[24px] transition-colors hover:text-[#000048]"
                >
                  {label}
                </a>
              ))}
              <div className="px-[24px]">
                <GlobeDropdown />
              </div>
            </div>
          </div>
        </PageContainer>

        {/* Main nav */}
        <PageContainer>
          <div className="flex h-[71px] items-center justify-between">

            {/* Logo + nav buttons */}
            <div className="flex items-center gap-[34px]">
              <img
                src="/assets/images/logo.png"
                alt="Cognizant Logo"
                className="h-[46px] w-auto object-contain"
              />

              <nav>
                <ul className="flex text-[18px] font-medium text-[#53565A]">
                  {(["industries", "services", "insights", "about"]).map((key) => {
                    const label = key.charAt(0).toUpperCase() + key.slice(1);
                    const isOpen = openDropdown === key;
                    return (
                      <li key={key}>
                        <button
                          type="button"
                          onClick={() => toggleDropdown(key)}
                          className={`relative flex items-center h-[71px] px-2.5 transition-all duration-200 hover:bg-[#DEEBF8] hover:text-[#000048] focus:outline-none ${
                            isOpen ? "bg-[#DEEBF8] text-[#000048]" : ""
                          }`}
                        >
                          {label}
                          {isOpen && (
                            <span className="absolute top-0 left-0 w-full h-[4px] bg-[#2F78C4]" />
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            {/* Search */}
            <SearchBar />
          </div>
        </PageContainer>

      </header>

      {/* Mega dropdown — rendered outside header flow but inside rootRef */}
      <MegaDropdown
        openDropdown={openDropdown}
        selectedSidebar={selectedSidebar}
        setSelectedSidebar={setSelectedSidebar}
        menuData={activeMenuData}
      />
    </div>
  );
}
