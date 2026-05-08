import { useState } from "react";
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
    title: "Consumption Layer",
    subtitle: "Core banking products and services for customers",
    items: [
      { label: "Mobile" },
      { label: "Web" },
      { label: "Branch" },
      { label: "Contact Center" },
      { label: "ATM / POS" },
      { label: "Chat Bots" },
    ],
  },
  {
    title: "Business Products & Services",
    subtitle: "Core banking products and services for customers",
    badge: { count: 4, label: "Agents" },
    items: [
      {
        label: "Business Developement",
        hasArrow: true,
        subItems: [
          { label: "Sales, Marketing, CRM", count: 1 },
          { label: "Product Origination", count: 2 },
          { label: "Advisory Services", count: 1 },
          { label: "Product Management & Pricing", count: 1 },
        ],
      },
      {
        label: "Product Fullfilment",
        hasArrow: true,
        subItems: [
          { label: "Deposits / CASA", count: 1 },
          { label: "Lending / Mortgages", count: 2 },
          { label: "Trade Finance, Investments", count: 1 },
        ],
      },
      {
        label: "Cross Platform Services",
        hasArrow: true,
        subItems: [
          { label: "Account-based, RT Payments", count: 1 },
          { label: "Debit & Credit Cards", count: 1 },
          { label: "Check / Lock Box", count: 1 },
        ],
      },
      {
        label: "Service Operations",
        hasArrow: true,
        subItems: [
          { label: "Application Processing", count: 1 },
          { label: "Reconciliations", count: 1 },
          { label: "Client Reporting", count: 1 },
          { label: "Dispute Resolutions", count: 1 },
        ],
      },
    ],
  },
  {
    title: "Business Shared Services",
    subtitle: "Core banking products and services for customers",
    badge: { count: 2, label: "Agents" },
    items: [
      {
        label: "Finance & Reg Reporting",
        hasArrow: true,
        subItems: [
          { label: "SGL / GL / Financial Control", count: 1 },
          { label: "Regulatory Reporting", count: 1 },
          { label: "Compliance", count: 1 },
        ],
      },
      {
        label: "Financial Risk Management",
        hasArrow: true,
        subItems: [
          { label: "Credit Risk", count: 1 },
          { label: "Market Risk", count: 1 },
          { label: "Liquidity Risk", count: 1 },
          { label: "Operational Risk", count: 1 },
        ],
      },
      {
        label: "Business Process Integration",
        hasArrow: true,
        subItems: [
          { label: "Process Design", count: 1 },
          { label: "Workflow Management", count: 1 },
          { label: "Process Automation", count: 1 },
        ],
      },
      {
        label: "Data & Analytics",
        hasArrow: true,
        subItems: [
          { label: "ODS / DWH / Data Lake", count: 1 },
          { label: "Reporting / BI", count: 1 },
          { label: "Analytics & Insights", count: 1 },
        ],
      },
    ],
  },
  {
    title: "Reg.Compliance & Risk Management",
    subtitle: "Core banking products and services for customers",
    items: [
      { label: "CLM/Onboarding" },
      { label: "KYC/AML/Fraud Detection, Prevention" },
      { label: "Records Management, Controls, Recs, ESG" },
    ],
  },
];

const ROW2_CARDS = [
  {
    title: "Foundation Layer",
    subtitle: "Core banking products and services for customers",
    items: [
      { label: "Document and Content mgmt" },
      { label: "IAM (Identity & Access Mgmt)" },
      { label: "Notifications" },
      {
        label: "Infra Structure & Hosting",
        hasArrow: true,
        subItems: [
          { label: "Provisioning", count: 1 },
          { label: "Perimeter Security", count: 1 },
          { label: "DevOps", count: 1 },
          { label: "Observability", count: 1 },
        ],
      },
    ],
  },
  {
    title: "ENterprise Enablement",
    subtitle: "Core banking products and services for customers",
    items: [
      { label: "Business Strategy / Management" },
      { label: "PMO" },
      { label: "HR Management" },
      { label: "IT Management" },
      { label: "Procurement" },
      { label: "Facilities Management" },
    ],
  },
  {
    title: "Integration Layer",
    subtitle: "Core banking products and services for customers",
    items: [
      { label: "Ecosystems Integration" },
      { label: "API Management" },
      {
        label: "Data Providers",
        hasArrow: true,
        subItems: [
          { label: "Party Reference Data / Market / ESG Data", count: 1 },
          { label: "Products / Financial Instruments / Pricing", count: 1 },
          { label: "External Agencies", count: 1 },
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
      style={{
        backgroundColor: "#D9E2FF",
        border: "1.5px solid #7373D8",
        padding: "7px 16px",
      }}
    >
      <span style={{ color: "#000048", fontWeight: 700, fontSize: 13, lineHeight: 1 }}>
        {count}
      </span>
      <span style={{ color: "#2E308E", fontWeight: 500, fontSize: 13, lineHeight: 1 }}>
        {label}
      </span>
    </div>
  );
}

/* ── In-card agent badge ── */
function CardBadge({ count, label }) {
  return (
    <div
      className="inline-flex items-center whitespace-nowrap"
      style={{
        backgroundColor: "#EEF4FF",
        border: "1px solid #2F78C4",
        borderRadius: 6,
        padding: "3px 10px",
      }}
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

/* ── Chevron icon — direction aware ── */
function Chevron({ open }) {
  return (
    <svg width="10" height="10" viewBox="0 0 16 10" fill="none" className="flex-shrink-0 ml-[4px]">
      <path
        d={open ? "M14 8l-6-6-6 6" : "M2 2l6 6 6-6"}
        stroke="#2F78C4"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
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
      style={{
        backgroundColor: hovered ? "#2F78C4" : "transparent",
        color: hovered ? "#ffffff" : "#000048",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="text-[12px] leading-[17px]">{label}</span>
      {count != null && (
        <span
          className="text-[11px] font-medium ml-[8px] flex-shrink-0"
          style={{ color: hovered ? "#ffffff" : "#97999B" }}
        >
          {count}
        </span>
      )}
    </div>
  );
}

/* ── Card component ── */
function LayerCard({ card }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleItem = (i) => setExpandedIndex(expandedIndex === i ? null : i);

  return (
    <div
      className="bg-white flex flex-col gap-[12px]"
      style={{
        borderRadius: 12,
        border: "1px solid #E2E8F0",
        boxShadow: "0 2px 10px rgba(0,0,72,0.08)",
        padding: "20px",
      }}
    >
      {/* Icon + title */}
      <div className="flex items-start gap-[12px]">
        <LayerIcon />
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-[14px] leading-[20px]" style={{ color: "#000048" }}>
            {card.title}
          </h3>
          <p className="text-[11px] leading-[16px] mt-[4px]" style={{ color: "#53565A" }}>
            {card.subtitle}
          </p>
        </div>
      </div>

      {/* Agent badge */}
      {card.badge && (
        <div>
          <CardBadge count={card.badge.count} label={card.badge.label} />
        </div>
      )}

      {/* Divider — always present for all cards */}
      <hr style={{ borderColor: "#E2E8F0", margin: 0 }} />

      {/* Items */}
      <ul className="flex flex-col gap-[6px]">
        {card.items.map((item, i) => (
          <li key={i}>
            {/* Parent row */}
            <div
              className="flex items-center justify-between px-[10px] py-[8px] rounded-[6px]"
              style={{
                backgroundColor: "#DEEEFF",
                cursor: item.hasArrow ? "pointer" : "default",
              }}
              onClick={() => item.hasArrow && toggleItem(i)}
            >
              <span className="flex items-center gap-[8px]">
                <span
                  className="flex-shrink-0"
                  style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "#2F78C4" }}
                />
                <span className="text-[12px] leading-[17px]" style={{ color: "#000048" }}>
                  {item.label}
                </span>
              </span>
              {item.hasArrow && <Chevron open={expandedIndex === i} />}
            </div>

            {/* Sub-items dropdown */}
            {item.hasArrow && expandedIndex === i && item.subItems?.length > 0 && (
              <div
                className="mt-[4px] overflow-hidden"
                style={{
                  border: "1px solid #92BBE6",
                  borderRadius: 6,
                }}
              >
                {item.subItems.map((sub, j) => (
                  <SubItem key={j} label={sub.label} count={sub.count} />
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function RetailBankingSuitePage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <TopHeader />
      <DarkMarketplaceNav />

      {/* Hero */}
      <section className="w-full bg-white pt-[52px] pb-[40px]">
        <PageContainer>
          <h1 className="font-bold text-[36px] leading-[44px] mb-[16px] text-center" style={{ color: "#00005A" }}>
            Cognizant Integrated Banking Suite- Retail Banking
          </h1>
          <p className="text-[17px] leading-[28px] max-w-[700px] mx-auto mb-[32px] text-center" style={{ color: "#000048" }}>
            Our service offerings span the full AI lifecycle—from ready-to-deploy models and agentic
            orchestration to seamless integration and advanced analytics.
          </p>
          {/* Chips left-aligned — flush with the card grid start */}
          <div className="flex items-center justify-start gap-[12px]">
            {FILTER_PILLS.map((pill, i) => (
              <Chip key={i} count={pill.count} label={pill.label} />
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Cards */}
      <section className="w-full bg-white pb-[60px] flex-1">
        <PageContainer>
          <div className="grid grid-cols-4 gap-[20px] mb-[20px]">
            {ROW1_CARDS.map((card, i) => (
              <LayerCard key={i} card={card} />
            ))}
          </div>
          <div className="grid grid-cols-4 gap-[20px]">
            {ROW2_CARDS.map((card, i) => (
              <LayerCard key={i} card={card} />
            ))}
            <div />
          </div>
        </PageContainer>
      </section>

      <Footer />
    </div>
  );
}
