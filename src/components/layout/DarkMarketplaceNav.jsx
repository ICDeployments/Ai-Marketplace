import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageContainer from "./PageContainer";
import { CATEGORY_SOLUTIONS } from "../../pages/CategorySolutionsPage";

/* Suite slug → human label (also used in TopHeader for SUITE_SCOPE) */
const SUITE_LABELS = {
  "retail-banking":          "Retail Banking",
  "commercial-banking":      "Commercial Banking",
  "investment-banking":      "Investment Banking",
  "cards-payments":          "Cards & Payments",
  "risk-compliance":         "Risk & Compliance",
  "asset-management":        "Asset Management",
  "wealth-management":       "Wealth Management",
  "market-infrastructure":   "Market Infrastructure",
  "asset-wealth-management": "Asset & Wealth Management",
  "insurance":               "Insurance",
};

/* CATEGORY_SOLUTIONS.title → suite slug (for /category routes) */
const SUITE_TITLE_TO_SLUG = {
  "Retail Banking":              "retail-banking",
  "Commercial Banking":          "commercial-banking",
  "Investment Banking":          "investment-banking",
  "Capital Market":              "investment-banking",
  "Cards & Payments":            "cards-payments",
  "Risk & Compliance":           "risk-compliance",
  "Asset Management":            "asset-management",
  "Wealth Management":           "wealth-management",
  "Market Infrastructure":       "market-infrastructure",
  "Asset and Wealth Management": "asset-wealth-management",
  "Insurance":                   "insurance",
};

export default function DarkMarketplaceNav({ isHomePage = false }) {
  const navigate = useNavigate();
  const location = useLocation();

  const crumbs = useMemo(() => {
    const list = [
      { label: "Industries" },
      { label: "BFSI" },
    ];

    if (location.pathname === "/") return list;

    list.push({
      label: "Ai Marketplace",
      // Always return to the home page, restoring the scroll position the user
      // was at when they navigated away (handled in HomePage via sessionStorage).
      onClick: () => navigate("/", { state: { restoreScroll: true } }),
    });

    const suiteMatch = location.pathname.match(/^\/banking-suite\/([^/]+)/);
    if (suiteMatch) {
      const slug = suiteMatch[1];
      const label = SUITE_LABELS[slug] || slug;
      list.push({ label, onClick: () => navigate(`/banking-suite/${slug}`) });
      return list;
    }

    const categoryMatch = location.pathname.match(/^\/category\/([^/]+)/);
    if (categoryMatch) {
      const slug = categoryMatch[1];
      const data = CATEGORY_SOLUTIONS[slug];
      const suiteSlug = data ? SUITE_TITLE_TO_SLUG[data.title] : null;
      if (suiteSlug) {
        list.push({
          label: SUITE_LABELS[suiteSlug],
          onClick: () => navigate(`/banking-suite/${suiteSlug}`),
        });
      }
      const categoryLabel = location.state?.fromLabel || data?.title || slug;
      list.push({ label: categoryLabel, onClick: () => navigate(-1) });
    }

    return list;
  }, [location.pathname, location.state, navigate]);

  return (
    <div className={`w-full bg-[#000048] text-white ${isHomePage ? 'py-[11px]' : 'py-[12px]'}`}>
      <PageContainer>
        {/* Breadcrumb */}
        <div className="text-[12px] font-medium leading-[14px] mb-[6px]">
          {crumbs.map((crumb, i) => (
            <span key={i}>
              {i > 0 && <span className="text-white">{" / "}</span>}
              {crumb.onClick ? (
                <button
                  type="button"
                  className="text-[#6AA2DC] hover:underline focus:outline-none"
                  onClick={crumb.onClick}
                >
                  {crumb.label}
                </button>
              ) : (
                <span className="text-[#6AA2DC]">{crumb.label}</span>
              )}
            </span>
          ))}
        </div>

        {/* Title */}
        <div
          className="text-[15px] leading-[18px] font-semibold cursor-pointer hover:opacity-90"
          onClick={() => navigate("/")}
        >
          AI Marketplace
        </div>
      </PageContainer>
    </div>
  );
}
