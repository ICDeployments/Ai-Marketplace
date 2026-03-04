import { Link } from "react-router-dom";
import TopHeader from "../components/layout/TopHeader";
import DarkMarketplaceNav from "../components/layout/DarkMarketplaceNav";
import SecondaryNavBar from "../components/layout/SecondaryNavBar";
import Footer from "../components/layout/Footer";
import PageContainer from "../components/layout/PageContainer";
import RightArrow from "../components/ui/RightArrow";

const AGENT_SECTIONS = [
  { id: 1, title: "Consumption", color: "from-[#001B3D] to-[#00234D]" },
  { id: 2, title: "Ecosystem", color: "from-[#00234D] to-[#002B5D]" },
  { id: 3, title: "Business Development", color: "from-[#002B5D] to-[#00336D]" },
  { id: 4, title: "Product Fulfilment", color: "from-[#00336D] to-[#003B7D]" },
  { id: 5, title: "Cross Platform Service", color: "from-[#003B7D] to-[#00438D]" },
  { id: 6, title: "Service Operations and Execution", color: "from-[#00438D] to-[#004B9D]" },
  { id: 7, title: "Reg. Compliance & Risk Management", color: "from-[#004B9D] to-[#2B5BA8]" },
  { id: 8, title: "Finance & Reg Reporting", color: "from-[#2B5BA8] to-[#3D6BB8]" },
  { id: 9, title: "Financial Risk Management", color: "from-[#3D6BB8] to-[#4F7BC8]" },
  { id: 10, title: "Business Process Integration", color: "from-[#4F7BC8] to-[#618BD8]" },
  { id: 11, title: "Data & Analytics", color: "from-[#618BD8] to-[#739BE8]" },
  { id: 12, title: "Infra Structure & Hosting", color: "from-[#739BE8] to-[#85ABF8]" },
  { id: 13, title: "Enterprise Enablement", color: "from-[#85ABF8] to-[#97BBFF]" }
];

export default function TryYourAgentPage() {
  return (
    <div className="w-full">
      <TopHeader />
      <DarkMarketplaceNav />
      <SecondaryNavBar />
      <section className="w-full bg-white py-[60px]">
        <PageContainer>
          <h2 className="text-[#00005A] font-bold text-[32px] leading-[36px] mb-[40px]">
            Experience Your Agent In Action
          </h2>
          
          {/* Navigation Container with Gradient */}
          <div className="w-full rounded-[12px] overflow-hidden">
            {AGENT_SECTIONS.map((section, index) => (
              <div
                key={section.id}
                className={`bg-gradient-to-b ${section.color} border-b border-white/10 last:border-b-0`}
              >
                <Link
                  to={`/agent-interaction/${section.id}`}
                  className="w-full flex items-center justify-between px-[32px] py-[20px] text-white hover:bg-white/5 transition-all"
                >
                  <span className="text-[16px] leading-[24px] font-medium text-left">
                    {section.title}
                  </span>
                  <div>
                    <RightArrow width={14} height={20} color="#FFFFFF" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>
      <Footer />
    </div>
  );
}
