import { Link } from "react-router-dom";
import PageContainer from "../layout/PageContainer";
import RightArrow from "../ui/RightArrow";

const CARDS = [
  {
    title: "Retail Banking",
    description: "Provides Everyday Financial Services To Individuals, Including Accounts, Loans, And Personal Banking Solutions.",
    slug: "retail-banking"
  },
  {
    title: "Commercial Banking",
    description: "Offers Businesses Tailored Financial Products Such As Credit, Treasury Services, And Cash-Management Solutions.",
    slug: "commercial-banking"
  },
  {
    title: "Investment Banking:",
    description: "Delivers Advisory And Capital-Raising Services, Including Mergers, Acquisitions, And Underwriting.",
    slug: "investment-banking"
  },
  {
    title: "Cards & Payments",
    description: "Enables Secure, Fast, And Seamless Digital And Card-Based Transactions For Consumers And Businesses.",
    slug: "cards-payments"
  },
  {
    title: "Risk & Compliance",
    description: "Ensures Organizations Operate Safely And Ethically By Identifying Risks, Enforcing Regulations, And Maintaining Regulatory Standards.",
    slug: "risk-compliance"
  },
  {
    title: "Asset & Wealth Management:",
    description: "Manages And Grows Client Portfolios Through Strategic Investment Planning And Advisory Services.",
    slug: "asset-wealth-management"
  }
];

export default function EmpowerCardsSection() {
  return (
    <section className="w-full bg-white py-[60px]">
      <PageContainer>
        <h2 className="text-[#2F78C4] font-normal text-[34px] leading-[42px] mb-[40px]">
          Empower Your Workflow With End-To-End Agentic AI
        </h2>

        {/* Cards Grid - 3 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[38px]">
          {CARDS.map((card, index) => (
            <Link
              key={index}
              to={`/category/${card.slug}`}
              className="border-1 border-[#D0D0CE] p-[32px] flex flex-col h-full min-h-[220px] hover:shadow-lg transition-shadow cursor-pointer"
            >
              <h3 className="text-[#2F78C4] font-semibold text-[20px] leading-[26px] mb-[12px]">
                {card.title}
              </h3>
              <p className="text-[#000048] text-[17px] leading-[20px] mb-[16px] flex-grow">
                {card.description}
              </p>
              <span className="inline-flex items-center gap-[6px] text-[#2F78C4] text-[14px] font-semibold hover:gap-[10px] transition-all">
                Know more
                <RightArrow width={8} height={12} color="#2F78C4" />
              </span>
            </Link>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
