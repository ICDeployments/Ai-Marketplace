import { useNavigate } from "react-router-dom";
import { CATEGORY_SOLUTIONS } from "./CategorySolutionsPage";
import TopHeader from "../components/layout/TopHeader";
import DarkMarketplaceNav from "../components/layout/DarkMarketplaceNav";
import Footer from "../components/layout/Footer";
import PageContainer from "../components/layout/PageContainer";
import GradientUnderline from "../components/ui/GradientUnderline";

/* ─── Data ─── */

const COLUMNS = [
  /* Column 1 */
  [
    {
      title: "Assisted And Digital Channels",
      items: [
        { label: "Mobile" },
        { label: "Desktop (Web)" },
        { label: "Co-Browsing" },
        { label: "Branch" },
        { label: "CC / Chat" },
        { label: "ATM / POS" },
      ],
    },
    {
      title: "Fraud Mgmt.",
      items: [
        { label: "Decisioning", slug: "rc-fraud-decisioning" },
        { label: "Models" },
        { label: "Alert Mgmt." },
        { label: "Bureau Reporting" },
      ],
    },
    {
      title: "Liquidity Risk",
      items: [
        { label: "Collateral Management" },
        { label: "Asset/Liability Mgmt" },
        { label: "Cash & Liquidity Mgmt." },
      ],
    },
    {
      title: "Regulatory Reporting",
      items: [
        { label: "Blue Sheet" },
        { label: "Escheatment" },
        { label: "Trade Reporting" },
        { label: "Capital Adequacy" },
        { label: "Customer Deposits" },
        { label: "Fees & Commission" },
      ],
    },
  ],

  /* Column 2 */
  [
    {
      title: "CLM & KYC",
      items: [
        { label: "Prospecting" },
        { label: "On-boarding / Initial CDD" },
        { label: "Ongoing - CDD" },
        { label: "Suitability & Entitlements" },
        { label: "Single Client View" },
        { label: "Legal. Credit & Tax" },
        { label: "Client Risk Rating" },
        { label: "Account Set-up & Maintenance" },
      ],
    },
    {
      title: "Market Risk",
      items: [
        { label: "VaR Calculation" },
        { label: "Model Validation & Stress Testing" },
        { label: "Limit Mgmt." },
        { label: "Reporting" },
      ],
    },
    {
      title: "ESG",
      items: [
        { label: "Data" },
        { label: "Reporting / BI" },
        { label: "Analytics & Insights" },
      ],
    },
  ],

  /* Column 3 */
  [
    {
      title: "Financial Crime Compliance",
      items: [
        { label: "Transaction Monitoring" },
        { label: "Transaction Screening" },
        { label: "Client Name Screening" },
        { label: "Network Analysis" },
        { label: "Investigations" },
        { label: "SAR / Reg Filings", slug: "rc-sar-filing" },
        { label: "Adverse Media / Negative News" },
        { label: "Trader Surveillance" },
      ],
    },
    {
      title: "Credit Risk",
      items: [
        { label: "Facility, Limits & Agreements Data" },
        { label: "Portfolio Mgmt. & Exposure Monitoring" },
        { label: "Over limit controls & defaults / recovery" },
        { label: "Reporting" },
      ],
    },
    {
      title: "Cyber Security",
      items: [
        { label: "Identity & Access Management" },
        { label: "Integrated Threat & Vulnerability Mgmt." },
        { label: "GRC Tooling for App, Network, Policies" },
        { label: "Data Protection & Privacy" },
      ],
    },
  ],
];

const BOTTOM_CARDS = [
  {
    title: "Employee Compliance",
    rows: [
      {
        columns: 3,
        items: [
          { label: "External Business Affiliation" },
          { label: "Information Barrier Monitoring" },
          { label: "Employee Communications" },
        ],
      },
      {
        columns: 4,
        items: [
          { label: "Mandated Training & Education" },
          { label: "Personal Trading" },
          { label: "Licensing & Registration" },
          { label: "Policy Management" },
        ],
      },
    ],
  },
  {
    title: "Ecosystem",
    rows: [
      {
        columns: 6,
        items: [
          { label: "Client" },
          { label: "RM" },
          { label: "Intermediary" },
          { label: "Credit & Fraud Bureau" },
          { label: "Beneficiary Bank" },
          { label: "Correspondent Bank" },
        ],
      },
    ],
  },
  {
    title: "Enterprise Enablement",
    rows: [
      {
        columns: 6,
        items: [
          { label: "Operational Risk Management" },
          { label: "Integrated Risk Management – IT & Suppliers" },
          { label: "Regulatory Change Mgmt.", slug: "rc-reg-change" },
          { label: "Data Governance & Protection" },
          { label: "Market & Reference Data" },
          { label: "Quality Assurance / Model Mgmt." },
        ],
      },
    ],
  },
];

/* ─── Shared UI primitives ─── */

function ItemBox({ label, slug }) {
  const navigate = useNavigate();
  const count = slug ? (CATEGORY_SOLUTIONS[slug]?.solutions?.length ?? 0) : 0;
  const on = count > 0;

  return (
    <div
      className="relative flex items-center justify-center text-center px-[14px] py-[10px] rounded-[5px] w-full"
      style={{
        backgroundColor: on ? "#2F78C4" : "#DEEEFF",
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

function CardBox({ title, items }) {
  return (
    <div className="bg-white rounded-[10px] p-[14px]" style={{ border: "1px solid #C7C7C7" }}>
      <p className="text-center font-semibold text-[13px] leading-[18px] mb-[14px]"
         style={{ color: "#000048" }}>
        {title}
      </p>
      <div className="flex flex-col gap-[10px]">
        {items.map((item, i) => (
          <ItemBox key={i} label={item.label} slug={item.slug} />
        ))}
      </div>
    </div>
  );
}

function WideCardBox({ title, rows }) {
  return (
    <div className="bg-white rounded-[10px] p-[14px]" style={{ border: "1px solid #C7C7C7" }}>
      <p className="text-center font-semibold text-[13px] leading-[18px] mb-[14px]"
         style={{ color: "#000048" }}>
        {title}
      </p>
      <div className="flex flex-col gap-[10px]">
        {rows.map((row, ri) => (
          <div
            key={ri}
            className="grid gap-[10px]"
            style={{ gridTemplateColumns: `repeat(${row.columns}, minmax(0, 1fr))` }}
          >
            {row.items.map((item, ii) => (
              <ItemBox key={ii} label={item.label} slug={item.slug} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Page ─── */

export default function RiskComplianceSuitePage() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <TopHeader />
      <DarkMarketplaceNav />

      <section className="w-full bg-white pt-[40px] pb-[24px]">
        <PageContainer>
          <div className="inline-block">
            <h2
              className="text-[#00005A] font-bold text-[32px] leading-[36px] mb-[8px] cursor-pointer hover:opacity-80"
              onClick={() => navigate("/", { state: { scrollTo: "sub-vertical" } })}
            >
              Governance Risk &amp; Compliance
            </h2>
            <GradientUnderline />
          </div>
        </PageContainer>
      </section>

      <section className="w-full pt-[24px] pb-[60px] flex-1" style={{ backgroundColor: "#F5F7FA" }}>
        <PageContainer>
          <div className="grid grid-cols-3 gap-[20px] items-start">
            {COLUMNS.map((col, ci) => (
              <div key={ci} className="flex flex-col gap-[20px]">
                {col.map((card, ii) => (
                  <CardBox key={ii} title={card.title} items={card.items} />
                ))}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-[20px] mt-[20px]">
            {BOTTOM_CARDS.map((card, i) => (
              <WideCardBox key={i} title={card.title} rows={card.rows} />
            ))}
          </div>
        </PageContainer>
      </section>

      <Footer />
    </div>
  );
}
