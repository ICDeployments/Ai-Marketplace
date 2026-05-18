import { useNavigate } from "react-router-dom";
import { CATEGORY_SOLUTIONS } from "./CategorySolutionsPage";
import TopHeader from "../components/layout/TopHeader";
import DarkMarketplaceNav from "../components/layout/DarkMarketplaceNav";
import Footer from "../components/layout/Footer";
import PageContainer from "../components/layout/PageContainer";
import GradientUnderline from "../components/ui/GradientUnderline";

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

function CardBox({ title, items, columns = 1 }) {
  return (
    <div className="bg-white rounded-[10px] p-[14px]" style={{ border: "1px solid #C7C7C7" }}>
      <p className="text-center font-semibold text-[13px] leading-[18px] mb-[14px]"
         style={{ color: "#000048" }}>
        {title}
      </p>
      <div
        className={columns === 2 ? "grid grid-cols-2 gap-[10px]" : "flex flex-col gap-[10px]"}
      >
        {items.map((item, i) => (
          <ItemBox key={i} label={item.label} slug={item.slug} />
        ))}
      </div>
    </div>
  );
}

/* ─── Page ─── */

export default function PaymentsSuitePage() {
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
              Cards &amp; Payments
            </h2>
            <GradientUnderline />
          </div>
        </PageContainer>
      </section>

      <section className="w-full pt-[24px] pb-[60px] flex-1" style={{ backgroundColor: "#F5F7FA" }}>
        <PageContainer>

          {/* Top banner: INTEGRATED PAYMENT OPERATIONS & COMMAND CENTER */}
          <div className="bg-white rounded-[10px] p-[16px] mb-[20px]" style={{ border: "1px solid #C7C7C7" }}>
            <p className="text-center font-bold text-[14px] leading-[18px] mb-[14px] tracking-[1px]"
               style={{ color: "#2F78C4" }}>
              INTEGRATED PAYMENT OPERATIONS & COMMAND CENTER
            </p>
            <div className="flex flex-wrap gap-[10px] justify-center">
              {[
                { label: "Payment Activity Monitoring" },
                { label: "Channel Analytics" },
                { label: "SLA Reporting" },
                { label: "Payment NOC" },
                { label: "Payment SOC" },
              ].map((item) => (
                <div key={item.label} style={{ minWidth: 160 }}>
                  <ItemBox label={item.label} slug={item.slug} />
                </div>
              ))}
            </div>
          </div>

          {/* 4-column main grid */}
          <div className="grid grid-cols-4 gap-[20px] items-start">

            {/* Column 1 — External Gateways group */}
            <div
              className="bg-white rounded-[10px] p-[14px] flex flex-col gap-[16px]"
              style={{ border: "1px solid #C7C7C7" }}
            >
              <p
                className="text-center font-bold text-[14px] leading-[20px] tracking-[0.3px] px-[8px]"
                style={{ color: "#2F78C4" }}
              >
                EXTERNAL GATEWAYS – API / MQ / MANAGED FILE TRANSFER / HOST-TO-HOST
              </p>
              <CardBox
                title="External Channels"
                items={[
                  { label: "ATM" },
                  { label: "POS" },
                  { label: "Mobile" },
                  { label: "IVR" },
                  { label: "Web" },
                  { label: "Host" },
                  { label: "QR" },
                  { label: "IoT" },
                  { label: "Push to Card" },
                ]}
              />
              <CardBox
                title="CSM"
                items={[
                  { label: "WIRE" },
                  { label: "ACH" },
                  { label: "RTP" },
                  { label: "Peer-to-peer" },
                  { label: "SWIFT" },
                  { label: "Blockchain" },
                  { label: "Non-Banks" },
                  { label: "Exchanges" },
                ]}
              />
              <CardBox
                title="Networks"
                items={[
                  { label: "Visa" },
                  { label: "MasterCard" },
                  { label: "Amex" },
                  { label: "Discover" },
                  { label: "Dispute Gtwy" },
                  { label: "Local Ntwrks" },
                  { label: "Other Ntwrks" },
                ]}
              />
              <CardBox
                title="TPP"
                items={[
                  { label: "TSP" },
                  { label: "EMVSecurity" },
                  { label: "Chip Mgmt" },
                ]}
              />
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-[20px]">
              <CardBox
                title="Internal Channels"
                items={[
                  { label: "Internal Gateways – API / ESB / MQ / Managed File Transfer" },
                  { label: "AP / AR" },
                  { label: "Treasury" },
                  { label: "Core Banking" },
                  { label: "Trade" },
                ]}
              />
              <CardBox
                title="Card Payment Switching"
                items={[
                  { label: "Terminal Driving" },
                  { label: "Message Transformation" },
                  { label: "DCC" },
                  { label: "Routing" },
                  { label: "Advise" },
                  { label: "Authorization", slug: "cap-authorization" },
                  { label: "Warehousing" },
                  { label: "Exception Processing" },
                  { label: "Message parsing" },
                  { label: "Authentication" },
                ]}
              />
              <CardBox
                title="Payments Regulatory Compliance"
                items={[
                  { label: "Transaction Monitoring", slug: "cap-txn-monitoring" },
                  { label: "AML / FATCA" },
                  { label: "KYC Compliance" },
                  { label: "Case Management", slug: "cap-case-mgmt" },
                ]}
              />
              <CardBox
                title="Data Management"
                columns={2}
                items={[
                  { label: "Data Migration" },
                  { label: "Analytics / Reporting" },
                ]}
              />
              <CardBox
                title="Data Management"
                columns={2}
                items={[
                  { label: "Security" },
                  { label: "Dev / Ops" },
                ]}
              />
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-[20px]">
              <CardBox
                title="Merchant Acquiring"
                items={[
                  { label: "Payment Processing" },
                  { label: "Merchant Settlement" },
                  { label: "Merchant Disputes" },
                  { label: "Merchant Billing" },
                  { label: "Merchant Gateway" },
                  { label: "Merchant Boarding" },
                ]}
              />
              <CardBox
                title="A2A (Wire / ACH / SWIFT / RTP) Processing"
                items={[
                  { label: "Payment Order" },
                  { label: "Routing" },
                  { label: "Currency Conversion" },
                  { label: "Account Lookup" },
                  { label: "Warehousing" },
                  { label: "Message Parsing" },
                  { label: "Bulking" },
                  { label: "Validation" },
                  { label: "De / Re -Bulking" },
                  { label: "Auto Repair" },
                  { label: "Fees & Charges" },
                  { label: "Party Identity" },
                  { label: "Message Orchestration" },
                  { label: "CSM Integration" },
                  { label: "Message Transformation" },
                  { label: "Account Posting" },
                  { label: "Exception Processing" },
                  { label: "Transaction Posting" },
                ]}
              />
              <CardBox
                title="Business Process"
                columns={2}
                items={[
                  { label: "Workflow" },
                  { label: "Process Automation" },
                ]}
              />
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-[20px]">
              <CardBox
                title="Card Management"
                items={[
                  { label: "Tokenization" },
                  { label: "Embossing" },
                  { label: "Application Process." },
                  { label: "Activation" },
                  { label: "Dispute Mgmt." },
                  { label: "Rewards" },
                  { label: "Collections" },
                  { label: "Statements" },
                ]}
              />
              <CardBox
                title="Internal Gateways – API / ESB / MQ / Managed File Transfer"
                items={[
                  { label: "Logging" },
                  { label: "Audit" },
                  { label: "Reconciliation" },
                  { label: "Document Mgmt" },
                  { label: "AML" },
                  { label: "Risk Management" },
                  { label: "Analytics" },
                  { label: "Alert & Notification" },
                  { label: "Identity" },
                  { label: "Cash Management" },
                  { label: "Active Directory" },
                  { label: "FX" },
                  { label: "Posting GL" },
                  { label: "Core Banking" },
                  { label: "Billing" },
                  { label: "Reporting" },
                  { label: "Settlement" },
                  { label: "Data Warehouse" },
                ]}
              />
            </div>

          </div>

        </PageContainer>
      </section>

      <Footer />
    </div>
  );
}
