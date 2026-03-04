import PageContainer from "../layout/PageContainer";

function PlayIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M10 8.5V15.5L16 12L10 8.5Z" fill="white" />
    </svg>
  );
}

function VideoCard({ title, subtitle }) {
  return (
    <div className="w-full rounded-[4px] border border-[#E6E7EB] bg-white overflow-hidden">
      {/* thumbnail placeholder */}
      <div className="relative h-[130px] w-full bg-gradient-to-b from-[#C9CBFF] to-[#F2F3FF]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[36px] w-[36px] rounded-full border border-white/70 bg-white/20 flex items-center justify-center">
            <PlayIcon />
          </div>
        </div>
      </div>

      <div className="p-[12px]">
        <div className="text-[12px] leading-[16px] text-[#2F78C4] font-medium hover:underline cursor-pointer">
          {title}
        </div>
        {subtitle ? (
          <div className="mt-[4px] text-[10px] leading-[14px] text-[#6B7280]">
            {subtitle}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function CardsRow({ items }) {
  return (
    <div className="mt-[12px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
      {items.map((x) => (
        <VideoCard key={x.title} title={x.title} subtitle={x.subtitle} />
      ))}
    </div>
  );
}

export default function AgenticSolutionsSection() {
  const cognizantOwned = [
    { title: "KYC Verification", subtitle: "KYC Verification" },
    { title: "Fraud and Dispute Management", subtitle: "Payment / back office" },
    { title: "Portfolio Construction", subtitle: "Payment / back office" },
  ];

  const partneredWith3rdParty = [
    { title: "Contact Center", subtitle: "" },
    { title: "Credit Memo Generation", subtitle: "" },
    { title: "Personalised Financial Wellness", subtitle: "" },
  ];

  const partnerSolution = [
    { title: "RM Assistant", subtitle: "" },
    { title: "MSME Loan Verification", subtitle: "" },
    { title: "Trade Reconciliation & Exception Management", subtitle: "" },
  ];

  return (
    <section className="w-full bg-white">
      <PageContainer className="py-[16px]">
        {/* breadcrumb */}
        {/* <div className="text-[11px] leading-[14px] text-[#6B7280]">
          <span className="hover:underline cursor-pointer">Industries</span>
          <span className="mx-[6px]">/</span>
          <span className="hover:underline cursor-pointer">Marketplace</span>
          <span className="mx-[6px]">/</span>
          <span className="text-[#000048] font-medium">Agentic Solutions</span>
        </div> */}

        {/* secondary menu row
        <div className="mt-[10px] flex flex-wrap items-center gap-[14px] text-[11px] leading-[14px] text-[#000048]">
          <span className="underline underline-offset-4 font-medium cursor-pointer">
            Agentic Solutions
          </span>
          <span className="hover:underline cursor-pointer">Try our Agent</span>
          <span className="hover:underline cursor-pointer">Build Your AI Agents</span>
          <span className="hover:underline cursor-pointer">Workforce AI Assistants</span>
          <span className="hover:underline cursor-pointer">Contact</span>
        </div> */}

        {/* first heading (same style as screenshot) */}
        <div className="mt-[16px]">
          <div className="text-[11px] leading-[14px] text-[#2F78C4] hover:underline cursor-pointer">
            Business Development
          </div>
          <div className="mt-[8px] text-[14px] leading-[18px] font-semibold text-[#000048]">
            Cognizant Owned
          </div>
        </div>

        <CardsRow items={cognizantOwned} />

        {/* section 2 */}
        <div className="mt-[26px] text-[12px] leading-[16px] font-semibold text-[#000048]">
          Partnered with 3rd Party
        </div>
        <CardsRow items={partneredWith3rdParty} />

        {/* section 3 */}
        <div className="mt-[26px] text-[12px] leading-[16px] font-semibold text-[#000048]">
          Partner solution
        </div>
        <CardsRow items={partnerSolution} />
      </PageContainer>
    </section>
  );
}