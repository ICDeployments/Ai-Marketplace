import { useNavigate } from "react-router-dom";
import { CATEGORY_SOLUTIONS } from "./CategorySolutionsPage";
import { getCategoryPotentialColor } from "../data/usecasePotentials";
import TopHeader from "../components/layout/TopHeader";
import DarkMarketplaceNav from "../components/layout/DarkMarketplaceNav";
import Footer from "../components/layout/Footer";
import PageContainer from "../components/layout/PageContainer";

/* ─── Data (Insurance BIAN reference) ─── */

const COLUMNS = [
  {
    title: "Channels / Experience",
    items: [
      { label: "Customer" },
      { label: "Agent" },
      { label: "Broker" },
      { label: "Partner" },
    ],
  },
  {
    title: "Sales & Service Domains ( BIAN)",
    items: [
      { label: "Customer Mgmt" },
      { label: "Product Mgmt" },
      { label: "Proposal" },
    ],
  },
  {
    title: "Core Insurance Domain",
    items: [
      { label: "Policy Admin" },
      { label: "Underwriting" },
      { label: "Claims" },
      { label: "Billing" },
      { label: "Reinsurance" },
      { label: "Pricing" },
    ],
  },
  {
    title: "Control & Support Domains",
    items: [
      { label: "Risk mgmt" },
      { label: "Compliance" },
      { label: "Fraud" },
      { label: "Finance" },
    ],
  },
  {
    title: "Data / Integration / Platform",
    items: [
      { label: "Mater Data" },
      { label: "APIs" },
      { label: "Event Hub" },
      { label: "Analytics" },
    ],
  },
];

/* ─── Shared UI primitives ─── */

function ItemBox({ label, slug }) {
  const navigate = useNavigate();
  const count = slug ? (CATEGORY_SOLUTIONS[slug]?.solutions?.length ?? 0) : 0;
  const on = count > 0;
  const accentColor = (on && getCategoryPotentialColor(slug)) || "#2F78C4";

  return (
    <div
      className="relative flex items-center justify-center text-center px-[14px] py-[12px] rounded-[6px] w-full"
      style={{
        backgroundColor: on ? accentColor : "#DEEEFF",
        color: on ? "#ffffff" : "#000048",
        fontSize: 13,
        lineHeight: "16px",
        fontWeight: on ? 600 : 400,
        cursor: on ? "pointer" : "default",
      }}
      onClick={() => on && navigate(`/category/${slug}`, { state: { fromLabel: label } })}
    >
      {label}
      {on && (
        <span
          className="absolute flex items-center justify-center rounded-full"
          style={{
            top: -10, right: -8, width: 18, height: 18,
            backgroundColor: "white",
            color: accentColor,
            border: `1.5px solid ${accentColor}`,
            fontSize: 11,
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          {count}
        </span>
      )}
    </div>
  );
}

/* ─── Page ─── */

export default function InsuranceSuitePage() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <TopHeader />
      <DarkMarketplaceNav />

      <section className="relative w-full">
        <img
          src="/assets/images/InsuranceHero.png"
          alt="Insurance"
          className="w-full h-[300px] object-cover block"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 0, 72, 0.47) 43.84%, rgba(0, 0, 72, 0) 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-center">
          <PageContainer>
            <h2
              className="font-bold text-[42px] leading-[50px] uppercase tracking-wide mb-[12px] cursor-pointer hover:opacity-80"
              style={{ color: "#FFFFFF" }}
              onClick={() => navigate("/", { state: { scrollTo: "sub-vertical" } })}
            >
              Insurance
            </h2>
            <p className="text-[15px] leading-[24px] max-w-[560px]" style={{ color: "#FFFFFF" }}>
              Underwriting, claims, policy administration, and customer engagement across life, health, P&amp;C, and reinsurance.
            </p>
          </PageContainer>
        </div>
      </section>

      {/* 5-column BIAN architecture */}
      <section className="w-full bg-white pb-[80px] flex-1">
        <PageContainer>
          <div className="grid grid-cols-5 gap-[20px] items-stretch">
            {COLUMNS.map((col, ci) => (
              <div
                key={ci}
                className="rounded-[14px] p-[20px] bg-white flex flex-col"
                style={{ border: "1px solid #E5E7EB" }}
              >
                <h3
                  className="text-center font-bold mb-[20px]"
                  style={{ color: "#000048", fontSize: 13, lineHeight: "17px" }}
                >
                  {col.title}
                </h3>
                <div className="flex flex-col gap-[16px]">
                  {col.items.map((item, ii) => (
                    <ItemBox key={ii} label={item.label} slug={item.slug} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      <Footer />
    </div>
  );
}
