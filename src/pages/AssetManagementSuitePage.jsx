import { useNavigate } from "react-router-dom";
import { CATEGORY_SOLUTIONS } from "./CategorySolutionsPage";
import TopHeader from "../components/layout/TopHeader";
import DarkMarketplaceNav from "../components/layout/DarkMarketplaceNav";
import Footer from "../components/layout/Footer";
import PageContainer from "../components/layout/PageContainer";

/* ─── Data ─── */

const CONSUMPTION_ITEMS = [
  "Branch",
  "Mobile (incl. Employee Access)",
  "Online (including Employee Intranet Access)",
];

const BUSINESS_PRODUCTS_COLS = [
  {
    title: "Sales & Portfolio Management",
    items: [
      { label: "Sales, Mktg, CRM" },
      { label: "Advisor Relationship" },
      { label: "Investment Strategy" },
      { label: "Solution Strategy" },
      { label: "Trade Order Entry" },
      { label: "A/c Opening/Onboarding", slug: "am-account-opening" },
      { label: "Securities Research" },
      { label: "Portfolio Mgmt." },
      { label: "Asset Allocation" },
      { label: "Portfolio Risk" },
      { label: "Product Development / Mgmt." },
    ],
  },
  {
    title: "Investment Product Operations",
    items: [
      { label: "Mktg/Comms Compliance" },
      { label: "Model Mgmt" },
      { label: "Settlement Processing" },
      { label: "Post-Trade Compliance" },
      { label: "Service Case Mgmt" },
      { label: "Risk Mgmt" },
      { label: "Mktg Ops & Sales Support" },
      { label: "Trade Processing" },
      { label: "Trade Recon", slug: "am-trade-recon" },
      { label: "Client Reporting" },
      { label: "Billing & Fee Mgmt" },
      { label: "Cash Mgmt" },
    ],
  },
  {
    title: "Confirmation, Clearing And Settlement, Payments",
    items: [
      { label: "A/c Setup, Processing" },
      { label: "Securities Processing" },
      { label: "Custody Services" },
      { label: "Fund/investment Accounting" },
      { label: "Asset Servicing" },
      { label: "Records & Info Mgmt" },
      { label: "Performance reporting" },
      { label: "Tax Reporting" },
      { label: "Client statements" },
    ],
  },
];

const REG_COMPLIANCE_ITEMS = [
  { label: "KYC/AML/Fraud Detection, Prevention" },
  { label: "E2E Fin Crime Mgmt." },
  { label: "Records Management, Controls, Recs, ESG" },
];

const BUSINESS_SHARED_COLS = [
  {
    title: "Financial Risk Management",
    items: [
      { label: "Credit Risk" },
      { label: "Market Risk" },
      { label: "Liquidity Risk" },
      { label: "Operational Risk" },
    ],
  },
  {
    title: "Business Process Integration",
    items: [
      { label: "Process Design" },
      { label: "Workflow Management" },
      { label: "Process / Workflow Automation" },
    ],
  },
  {
    title: "Data & Analytics",
    items: [
      { label: "Client / Counterparty Master Data" },
      { label: "Product Master Data" },
      { label: "Securities Reference Data" },
      { label: "Books/Accounts Reference Data" },
      { label: "Market Data(Real time / Historical)" },
      { label: "FX (Vol/Curves)" },
      { label: "ODS / DWH / Data Lake" },
      { label: "Analytics & Insights" },
      { label: "Reporting / BI" },
    ],
  },
];

const ENTERPRISE_ITEMS = [
  "Business Strategy / Management",
  "PMO",
  "HR Management",
  "IT Management",
  "Procurement",
  "Facilities Management",
];

const FOUNDATION_ITEMS = [
  "Document and Content Mgmt",
  "IAM (Identity & Access Mgmt)",
  "Notifications",
];

const FOUNDATION_SUB = {
  title: "Infrastructure & Hosting",
  items: ["Cybersecurity", "Cloud", "Provisioning", "Perimeter security", "DevOps", "Observability"],
};

/* ─── Shared UI primitives ─── */

function ItemBox({ label, slug, textBound = false }) {
  const navigate = useNavigate();
  const count = slug ? (CATEGORY_SOLUTIONS[slug]?.solutions?.length ?? 0) : 0;
  const on = count > 0;

  return (
    <div
      className={`relative flex items-center justify-center text-center px-[14px] py-[10px] rounded-[5px] ${textBound ? "w-fit" : "w-full"}`}
      style={{
        backgroundColor: on ? "#2F78C4" : "#DEEEFF",
        border: "none",
        color: on ? "#ffffff" : "#000048",
        fontSize: 11,
        lineHeight: "14px",
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
            top: -10, right: -8, width: 16, height: 16,
            backgroundColor: "white",
            color: "#2F78C4",
            border: "1.5px solid #2F78C4",
            fontSize: 10,
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

function SectionLabel({ children }) {
  return (
    <p className="font-bold text-[15px] tracking-widest uppercase text-center mb-[10px]"
       style={{ color: "#2F78C4" }}>
      {children}
    </p>
  );
}

function ColHeader({ children }) {
  return (
    <p className="text-center font-semibold text-[11px] leading-[15px] mb-[14px]"
       style={{ color: "#000048" }}>
      {children}
    </p>
  );
}

function SectionBox({ children, className = "", style = {} }) {
  return (
    <div className={`bg-white rounded-[10px] p-[14px] ${className}`}
         style={{ border: "1px solid #C7C7C7", ...style }}>
      {children}
    </div>
  );
}

function SubSectionBox({ children, className = "" }) {
  return (
    <div className={`rounded-[7px] p-[10px] ${className}`}
         style={{ border: "1px solid #C7C7C7", backgroundColor: "#ffffff" }}>
      {children}
    </div>
  );
}

function ColBox({ children }) {
  return (
    <div className="rounded-[8px] p-[10px]" style={{ border: "1px solid #C7C7C7" }}>
      {children}
    </div>
  );
}

/* ─── Page ─── */

export default function AssetManagementSuitePage() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <TopHeader />
      <DarkMarketplaceNav />

      <section className="w-full bg-white pt-[40px] pb-[24px]">
        <PageContainer>
          <div className="inline-block">
            <h2
              className="text-[#00005A] font-bold text-[22px] leading-[26px] mb-[8px] cursor-pointer hover:opacity-80"
              onClick={() => navigate("/", { state: { scrollTo: "sub-vertical" } })}
            >
              Asset Management
            </h2>
          </div>
        </PageContainer>
      </section>

      {/* Architecture diagram */}
      <section className="w-full pt-[24px] pb-[60px] flex-1" style={{ backgroundColor: "#F5F7FA" }}>
        <PageContainer>

          {/* CONSUMPTION LAYER */}
          <SectionBox className="mb-[12px]">
            <SectionLabel>Consumption Layer</SectionLabel>
            <div className="flex items-center justify-center flex-wrap gap-[12px] mt-[16px]">
              {CONSUMPTION_ITEMS.map((item, i) => (
                <ItemBox key={i} label={item} textBound />
              ))}
            </div>
          </SectionBox>

          {/* MIDDLE ROW */}
          <div className="flex gap-[12px] mb-[12px] items-stretch">

            {/* ── LEFT COLUMN ── */}
            <div className="flex flex-col gap-[12px]" style={{ width: 215, flexShrink: 0 }}>

              {/* Integration Layer */}
              <SectionBox className="flex-1">
                <SectionLabel>Integration Layer</SectionLabel>

                {/* Ecosystems Integration as a box */}
                <div className="mb-[10px]">
                  <ItemBox label="Ecosystems Integration" />
                </div>

                {/* Ecosystem sub-card */}
                <div className="rounded-[6px] p-[7px] mb-[8px]"
                     style={{ backgroundColor: "#ffffff", border: "1px solid #C7C7C7" }}>
                  <p className="text-[10px] font-semibold text-center mb-[5px]" style={{ color: "#000000" }}>
                    Ecosystem
                  </p>
                  <div className="flex flex-col gap-[10px]">
                    {["Corporates", "Relationship Manager", "Intermediary", "3rd Party"].map((item, i) => (
                      <ItemBox key={i} label={item} />
                    ))}
                  </div>
                </div>

                {/* Standalone item */}
                <div className="flex flex-col gap-[10px] mb-[8px]">
                  <ItemBox label="API Management" />
                </div>

                {/* Reference Data Providers */}
                <div className="rounded-[6px] p-[7px]"
                     style={{ backgroundColor: "#ffffff", border: "1px solid #C7C7C7" }}>
                  <p className="text-[10px] font-semibold text-center mb-[5px]" style={{ color: "#000000" }}>
                    Reference data providers
                  </p>
                  <div className="flex flex-col gap-[10px]">
                    {["Party Reference Data / Market / ESG Data", "Products/Financial Instruments/Pricing", "External Agencies"].map((item, i) => (
                      <ItemBox key={i} label={item} />
                    ))}
                  </div>
                </div>
              </SectionBox>

              {/* Enterprise Enablement */}
              <SectionBox>
                <SectionLabel>Enterprise Enablement</SectionLabel>
                <div className="flex flex-col gap-[10px]">
                  {ENTERPRISE_ITEMS.map((item, i) => (
                    <ItemBox key={i} label={item} />
                  ))}
                </div>
              </SectionBox>

            </div>

            {/* ── RIGHT COLUMN — Business Layer ── */}
            <SectionBox className="flex-1 min-w-0">
              <SectionLabel>Business Layer</SectionLabel>

              {/* Business Products & Services */}
              <SubSectionBox className="mb-[10px]">
                <p className="font-bold text-[11px] tracking-wider text-center mb-[10px]"
                   style={{ color: "#000048" }}>
                  BUSINESS PRODUCTS &amp; SERVICES
                </p>
                <div className="grid grid-cols-3 gap-[16px]">
                  {BUSINESS_PRODUCTS_COLS.map((col, ci) => (
                    <ColBox key={ci}>
                      <ColHeader>{col.title}</ColHeader>
                      <div className="flex flex-col gap-[10px]">
                        {col.items.map((item, ii) => (
                          <ItemBox key={ii} label={item.label} slug={item.slug} />
                        ))}
                      </div>
                    </ColBox>
                  ))}
                </div>
              </SubSectionBox>

              {/* Reg. Compliance & Risk Management */}
              <SubSectionBox className="mb-[10px]">
                <p className="font-bold text-[11px] tracking-wider text-center mb-[10px]"
                   style={{ color: "#000048" }}>
                  Reg. Compliance &amp; Risk Management
                </p>
                <div className="grid grid-cols-3 gap-[16px]">
                  {REG_COMPLIANCE_ITEMS.map((item, i) => (
                    <ItemBox key={i} label={item.label} slug={item.slug} />
                  ))}
                </div>
              </SubSectionBox>

              {/* Business Shared Services */}
              <SubSectionBox>
                <p className="font-bold text-[11px] tracking-wider text-center mb-[10px]"
                   style={{ color: "#000048" }}>
                  BUSINESS SHARED SERVICES
                </p>
                <div className="grid grid-cols-3 gap-[16px]">
                  {BUSINESS_SHARED_COLS.map((col, ci) => (
                    <ColBox key={ci}>
                      <ColHeader>{col.title}</ColHeader>
                      <div className="flex flex-col gap-[10px]">
                        {col.items.map((item, ii) => (
                          <ItemBox key={ii} label={item.label} slug={item.slug} />
                        ))}
                      </div>
                    </ColBox>
                  ))}
                </div>
              </SubSectionBox>

            </SectionBox>
          </div>

          {/* FOUNDATIONAL LAYER */}
          <SectionBox>
            <SectionLabel>Foundational Layer</SectionLabel>
            <div className="grid grid-cols-3 gap-[16px] mb-[16px]">
              {FOUNDATION_ITEMS.map((item, i) => (
                <ItemBox key={i} label={item} />
              ))}
            </div>
            <SubSectionBox>
              <p className="text-[11px] font-semibold text-center mb-[7px]" style={{ color: "#000048" }}>
                {FOUNDATION_SUB.title}
              </p>
              <div className="grid grid-cols-6 gap-[16px]">
                {FOUNDATION_SUB.items.map((item, i) => (
                  <ItemBox key={i} label={item} />
                ))}
              </div>
            </SubSectionBox>
          </SectionBox>

        </PageContainer>
      </section>

      <Footer />
    </div>
  );
}
