import { useNavigate } from "react-router-dom";
import { CATEGORY_SOLUTIONS } from "./CategorySolutionsPage";
import TopHeader from "../components/layout/TopHeader";
import DarkMarketplaceNav from "../components/layout/DarkMarketplaceNav";
import Footer from "../components/layout/Footer";
import PageContainer from "../components/layout/PageContainer";
import GradientUnderline from "../components/ui/GradientUnderline";

/* ─── Shared UI primitives (same look as RiskComplianceSuitePage) ─── */

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
      onClick={() => on && navigate(`/category/${slug}`)}
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

function GroupWrapper({ title, children }) {
  return (
    <div className="bg-white rounded-[10px] p-[14px] h-full" style={{ border: "1px solid #C7C7C7" }}>
      <p className="text-center font-bold text-[12px] leading-[16px] mb-[12px] tracking-[0.5px]"
         style={{ color: "#000048" }}>
        {title}
      </p>
      {children}
    </div>
  );
}

function SectionWrapper({ title, children }) {
  return (
    <div className="bg-white rounded-[10px] p-[16px] mb-[20px]" style={{ border: "1px solid #C7C7C7" }}>
      <p className="text-center font-bold text-[14px] leading-[18px] mb-[14px] tracking-[1px]"
         style={{ color: "#2F78C4" }}>
        {title}
      </p>
      {children}
    </div>
  );
}

/* ─── Page ─── */

export default function MarketInfrastructureSuitePage() {
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
              onClick={() => navigate("/", { state: { scrollTo: "category-cards" } })}
            >
              Market Infrastructure
            </h2>
            <GradientUnderline />
          </div>
        </PageContainer>
      </section>

      <section className="w-full pt-[24px] pb-[60px] flex-1" style={{ backgroundColor: "#F5F7FA" }}>
        <PageContainer>

          {/* EXCHANGE */}
          <SectionWrapper title="EXCHANGE">
            <div className="grid grid-cols-3 gap-[16px] items-start">
              <div className="col-span-1">
                <GroupWrapper title="INFRASTRUCTURE SERVICES">
                  <CardBox
                    title="Connectivity And Security"
                    items={[
                      { label: "Low Latency Networks" },
                      { label: "Data Centers" },
                      { label: "Backup and DR" },
                      { label: "Cloud Adoption" },
                      { label: "Co Location Services" },
                      { label: "Cyber Security" },
                      { label: "Environment Management" },
                    ]}
                  />
                </GroupWrapper>
              </div>
              <div className="col-span-2">
                <GroupWrapper title="LISTING AND PARTICIPANTS">
                  <div className="grid grid-cols-3 gap-[12px] items-start">
                    <CardBox
                      title="Membership"
                      items={[
                        { label: "New Membership" },
                        { label: "Membership Surrender" },
                        { label: "Membership Maintenance" },
                        { label: "Enablement" },
                      ]}
                    />
                    <CardBox
                      title="Listing"
                      items={[
                        { label: "Issue Registration – Listing / Delisting" },
                        { label: "Issue Bidding Management" },
                        { label: "Corporate Announcements" },
                        { label: "Digital Issuance" },
                      ]}
                    />
                    <CardBox
                      title="Corporate Services"
                      items={[
                        { label: "Corporate Intelligence" },
                        { label: "Media Services" },
                      ]}
                    />
                  </div>
                </GroupWrapper>
              </div>
            </div>
          </SectionWrapper>

          {/* CLEARING */}
          <SectionWrapper title="CLEARING">
            <GroupWrapper title="INVESTOR SERVICES">
              <div className="grid grid-cols-3 gap-[12px] items-start">
                <CardBox
                  title="Investor Centre"
                  items={[
                    { label: "Investor Education" },
                    { label: "Circulars" },
                    { label: "Investment Tools" },
                    { label: "Complaints" },
                    { label: "Arbitration Framework" },
                    { label: "Research" },
                  ]}
                />
                <CardBox
                  title="Market Data"
                  items={[
                    { label: "Real Time Prices / Quotes" },
                    { label: "Regulatory Reporting" },
                    { label: "ESG data" },
                    { label: "Historical Data" },
                    { label: "Data Analytics", slug: "mi-data-analytics" },
                    { label: "Risk Analytics" },
                  ]}
                />
                <CardBox
                  title="Index Management"
                  items={[
                    { label: "Index Definition" },
                    { label: "Index Management" },
                    { label: "Index Computation" },
                    { label: "Index Data Dissemination" },
                  ]}
                />
              </div>
            </GroupWrapper>
          </SectionWrapper>

          {/* INFORMATION PROVIDER */}
          <SectionWrapper title="INFORMATION PROVIDER">
            <div className="grid grid-cols-3 gap-[16px] items-start">
              <div className="col-span-1">
                <GroupWrapper title="EXECUTION  SERVICES">
                  <CardBox
                    title="Order Management And Trading"
                    items={[
                      { label: "Order Management" },
                      { label: "Quote Management" },
                      { label: "Order Book Management" },
                      { label: "Auction Market Management" },
                      { label: "Price formation" },
                      { label: "Order Matching" },
                      { label: "Dark Pools" },
                      { label: "Pre Trade Compliance" },
                      { label: "Market Controls" },
                    ]}
                  />
                </GroupWrapper>
              </div>
              <div className="col-span-2 flex flex-col gap-[16px]">
                <GroupWrapper title="CLEARING AND RISK MANAGEMENT">
                  <div className="grid grid-cols-3 gap-[12px] items-start">
                    <CardBox
                      title="Surveillance"
                      items={[
                        { label: "Counterparty Surveillance" },
                        { label: "Rules" },
                        { label: "Member Surveillance" },
                        { label: "Alerts / Warnings" },
                      ]}
                    />
                    <CardBox
                      title="Clearing"
                      items={[
                        { label: "Netting" },
                        { label: "Cash / Position Management" },
                        { label: "Member Obligation" },
                        { label: "Exercise / Assignment / Novation" },
                      ]}
                    />
                    <CardBox
                      title="Risk Management"
                      items={[
                        { label: "Margin Calculations" },
                        { label: "Mark to Market" },
                        { label: "Collateral Management" },
                        { label: "Cross Margining" },
                        { label: "Limits Management" },
                        { label: "Default Management" },
                      ]}
                    />
                  </div>
                </GroupWrapper>
                <GroupWrapper title="SETTLEMENT AND CUSTODY">
                  <div className="grid grid-cols-2 gap-[12px] items-start">
                    <CardBox
                      title="Settlement"
                      items={[
                        { label: "Instruction Management" },
                        { label: "Cash / Securities Settlement" },
                        { label: "Matching" },
                        { label: "Settlement Reporting" },
                        { label: "Settlement Discipline (E.g., Penalties)" },
                      ]}
                    />
                    <CardBox
                      title="Depository Services"
                      items={[
                        { label: "Safekeeping" },
                        { label: "Securities Lending and Borrowing" },
                        { label: "Corporate Actions" },
                        { label: "Collateral Management" },
                        { label: "Fee calculations & invoicing" },
                      ]}
                    />
                  </div>
                </GroupWrapper>
              </div>
            </div>
          </SectionWrapper>

          {/* Bottom row: 2 cards + 2 standalone pills, no outer group title */}
          <div className="grid grid-cols-4 gap-[16px] items-start">
            <CardBox
              title="Data Management"
              items={[
                { label: "Securities Reference Data" },
                { label: "Member / Client Reference Data" },
                { label: "Order / quote / trade data" },
                { label: "Market Data (Real time / Historical)" },
                { label: "Corporate Actions Data" },
                { label: "Positions / Holding Data" },
                { label: "MIS Reporting" },
                { label: "Regulatory Reporting" },
              ]}
            />
            <CardBox
              title="Business Process"
              items={[
                { label: "Workflow" },
                { label: "Process Measurement" },
                { label: "Portals and Consent Management" },
                { label: "Business Activity Monitoring" },
                { label: "Exception Management" },
              ]}
            />
            <ItemBox label="Identity & Access Management" />
            <ItemBox label="HR/Legal/Procurement" />
          </div>

        </PageContainer>
      </section>

      <Footer />
    </div>
  );
}
