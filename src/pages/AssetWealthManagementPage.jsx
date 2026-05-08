import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopHeader from "../components/layout/TopHeader";
import DarkMarketplaceNav from "../components/layout/DarkMarketplaceNav";
import Footer from "../components/layout/Footer";
import PageContainer from "../components/layout/PageContainer";

const FILTER_PILLS = [
  { count: 6, label: "Agents" },
  { count: 3, label: "Autonomus AI" },
  { count: 2, label: "AI + Human" },
  { count: 1, label: "Human in Loop gates" },
];

const ROW1_CARDS = [
  {
    title: "Sales & Portfolio Management",
    subtitle: "Core banking products and services for customers",
    badge: { count: 4, label: "Agents" },
    items: [
      { label: "LeadGeneration", slug: "awm-lead-generation" },
      { label: "Customer Onboarding" },
      { label: "Relationship Mgmt." },
      { label: "Research Management" },
      { label: "Investment Strategy" },
      { label: "Portfolio Construction", slug: "awm-portfolio-construction" },
      { label: "Investment Recommendation" },
      { label: "Sub-Advisory Selection" },
      { label: "Asset Allocation" },
      { label: "CRM" },
      { label: "Marketing" },
      { label: "Product Management" },
      { label: "Trade Order Entry" },
      { label: "Portfolio Mgmt.", slug: "awm-portfolio-mgmt" },
      { label: "Compliance, Licensing Registration" },
      { label: "Portfolio Risk" },
      { label: "Decision Support" },
    ],
  },
  {
    title: "Investment Product Operations",
    subtitle: "Core banking products and services for customers",
    badge: { count: 4, label: "Agents" },
    items: [
      { label: "Marketing & Communications Compliance" },
      { label: "Model Management", slug: "awm-model-management" },
      { label: "Account Master" },
      { label: "Trade Processing" },
      { label: "Settlement Processing" },
      { label: "Post-Trade Compliance" },
      { label: "Risk Management" },
      { label: "Marketing Operations & Sales Support" },
      { label: "Client Reporting" },
      { label: "Service Case Management" },
      { label: "Credit Management" },
      { label: "Billing & Fee Management" },
      { label: "RFP Response Management" },
      { label: "Product Master" },
      { label: "Cash Management" },
    ],
  },
  {
    title: "Custody Operations & Transactions Processing",
    subtitle: "Core banking products and services for customers",
    badge: { count: 2, label: "Agents" },
    items: [
      { label: "Account Setup & Processing" },
      { label: "Order Management" },
      { label: "Managed Account Operations" },
      { label: "Portfolio Accounting & Administration", slug: "awm-portfolio-accounting" },
      { label: "Records & Information Management" },
      { label: "Account Funding / Money Movement" },
      { label: "Securities Processing" },
      { label: "Custody Services" },
      { label: "Client Statements" },
      { label: "Tax Reporting" },
    ],
  },
  {
    title: "Shared Services & Utilities",
    subtitle: "Core banking products and services for customers",
    items: [
      { label: "Identity & Access Management" },
      { label: "Document & Content Management" },
      { label: "Data Management & Analytics" },
      { label: "Regulatory Reporting", slug: "awm-regulatory-reporting" },
      { label: "Reference & Market Data" },
      { label: "Risk Management and Fraud Detection" },
      { label: "Compliance Management" },
      { label: "Integrations & Communications Protocols" },
    ],
  },
];

const ROW2_CARDS = [
  {
    title: "Actors / Personae",
    subtitle: "Core banking products and services for customers",
    items: [
      {
        label: "Clients",
        hasArrow: true,
        subItems: [
          { label: "High Net Worth Individuals", count: 1 },
          { label: "Retail Investors", count: 1 },
          { label: "Institutional Clients", count: 2 },
          { label: "Family Offices", count: 1 },
        ],
      },
      {
        label: "PMs & Traders",
        hasArrow: true,
        subItems: [
          { label: "Portfolio Managers", count: 2 },
          { label: "Equity Traders", count: 1 },
          { label: "Fixed Income Traders", count: 1 },
        ],
      },
      {
        label: "Product Oversight",
        hasArrow: true,
        subItems: [
          { label: "Risk & Compliance Teams", count: 1 },
          { label: "Fund Oversight Officers", count: 1 },
          { label: "Product Controllers", count: 1 },
        ],
      },
      {
        label: "3rd Parties",
        hasArrow: true,
        subItems: [
          { label: "Custodians", count: 1 },
          { label: "Prime Brokers", count: 1 },
          { label: "External Asset Managers", count: 1 },
        ],
      },
    ],
  },
];

/* ── Shared filter chip ── */
function Chip({ count, label }) {
  return (
    <div
      className="inline-flex items-center gap-[5px] rounded-full whitespace-nowrap"
      style={{ backgroundColor: "#D9E2FF", border: "1.5px solid #7373D8", padding: "7px 16px" }}
    >
      <span style={{ color: "#000048", fontWeight: 700, fontSize: 13, lineHeight: 1 }}>{count}</span>
      <span style={{ color: "#2E308E", fontWeight: 500, fontSize: 13, lineHeight: 1 }}>{label}</span>
    </div>
  );
}

/* ── In-card agent badge ── */
function CardBadge({ count, label }) {
  return (
    <div
      className="inline-flex items-center whitespace-nowrap"
      style={{ backgroundColor: "#EEF4FF", border: "1px solid #2F78C4", borderRadius: 6, padding: "3px 10px" }}
    >
      <span style={{ color: "#2F78C4", fontWeight: 400, fontSize: 12, lineHeight: "18px" }}>
        {count} {label}
      </span>
    </div>
  );
}

/* ── Card icon ── */
function LayerIcon() {
  return (
    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <circle cx="27" cy="27" r="27" fill="#2F78C4" />
      <line x1="17" y1="36" x2="17" y2="18" stroke="white" strokeWidth="2.8" strokeLinecap="round" />
      <polyline points="12,23 17,18 22,23" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="27" y1="20" x2="41" y2="20" stroke="white" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="27" y1="27" x2="38" y2="27" stroke="white" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="27" y1="34" x2="34" y2="34" stroke="white" strokeWidth="2.8" strokeLinecap="round" />
    </svg>
  );
}

/* ── Chevron ── */
function Chevron({ open }) {
  return (
    <svg width="10" height="10" viewBox="0 0 16 10" fill="none" className="flex-shrink-0 ml-[4px]">
      <path
        d={open ? "M14 8l-6-6-6 6" : "M2 2l6 6 6-6"}
        stroke="#2F78C4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Sub-item row ── */
function SubItem({ label, count }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex items-center justify-between px-[12px] py-[8px] cursor-pointer transition-colors"
      style={{ backgroundColor: hovered ? "#2F78C4" : "transparent", color: hovered ? "#ffffff" : "#000048" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="text-[12px] leading-[17px]">{label}</span>
      {count != null && (
        <span className="text-[11px] font-medium ml-[8px] flex-shrink-0" style={{ color: hovered ? "#ffffff" : "#97999B" }}>
          {count}
        </span>
      )}
    </div>
  );
}

/* ── Card ── */
function LayerCard({ card }) {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const navigate = useNavigate();
  const toggleItem = (i) => setExpandedIndex(expandedIndex === i ? null : i);

  return (
    <div
      className="bg-white flex flex-col gap-[12px]"
      style={{ borderRadius: 12, border: "1px solid #E2E8F0", boxShadow: "0 2px 10px rgba(0,0,72,0.08)", padding: "20px" }}
    >
      <div className="flex items-start gap-[12px]">
        <LayerIcon />
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-[14px] leading-[20px]" style={{ color: "#000048" }}>{card.title}</h3>
          <p className="text-[11px] leading-[16px] mt-[4px]" style={{ color: "#53565A" }}>{card.subtitle}</p>
        </div>
      </div>

      {card.badge && (
        <div><CardBadge count={card.badge.count} label={card.badge.label} /></div>
      )}

      <hr style={{ borderColor: "#E2E8F0", margin: 0 }} />

      <ul className="flex flex-col gap-[6px]">
        {card.items.map((item, i) => (
          <li key={i}>
            <div
              className="flex items-center justify-between px-[10px] py-[8px] rounded-[6px]"
              style={{ backgroundColor: "#DEEEFF", cursor: (item.hasArrow || item.slug) ? "pointer" : "default" }}
              onClick={() => {
                if (item.hasArrow) toggleItem(i);
                else if (item.slug) navigate(`/category/${item.slug}`);
              }}
            >
              <span className="flex items-center gap-[8px]">
                <span className="flex-shrink-0" style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "#2F78C4" }} />
                <span className="text-[12px] leading-[17px]" style={{ color: "#000048" }}>{item.label}</span>
              </span>
              {item.hasArrow && <Chevron open={expandedIndex === i} />}
            </div>
            {item.hasArrow && expandedIndex === i && item.subItems?.length > 0 && (
              <div className="mt-[4px] overflow-hidden" style={{ border: "1px solid #92BBE6", borderRadius: 6 }}>
                {item.subItems.map((sub, j) => <SubItem key={j} label={sub.label} count={sub.count} />)}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AssetWealthManagementPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <TopHeader />
      <DarkMarketplaceNav />

      <section className="w-full bg-white pt-[52px] pb-[40px]">
        <PageContainer>
          <h1 className="font-bold text-[36px] leading-[44px] mb-[16px] text-center" style={{ color: "#00005A" }}>
            Asset &amp; Wealth Management
          </h1>
          <p className="text-[17px] leading-[28px] max-w-[700px] mx-auto mb-[32px] text-center" style={{ color: "#000048" }}>
            Our service offerings span the full AI lifecycle—from ready-to-deploy models and agentic
            orchestration to seamless integration and advanced analytics.
          </p>
          <div className="flex items-center justify-start gap-[12px]">
            {FILTER_PILLS.map((pill, i) => <Chip key={i} count={pill.count} label={pill.label} />)}
          </div>
        </PageContainer>
      </section>

      <section className="w-full bg-white pb-[60px] flex-1">
        <PageContainer>
          {/* Row 1 — 4 cards */}
          <div className="grid grid-cols-4 gap-[20px] mb-[20px]">
            {ROW1_CARDS.map((card, i) => <LayerCard key={i} card={card} />)}
          </div>

          {/* Row 2 — Actors/Personae in col 1, remaining 3 slots empty */}
          <div className="grid grid-cols-4 gap-[20px]">
            {ROW2_CARDS.map((card, i) => <LayerCard key={i} card={card} />)}
          </div>
        </PageContainer>
      </section>

      <Footer />
    </div>
  );
}
