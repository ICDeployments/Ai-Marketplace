import PageContainer from "../layout/PageContainer";
import RightArrow from "../ui/RightArrow";

const SERVICES = [
  {
    title: "VSM Prioritization Approach",
    description:
      "Revolutionary machine learning models that reduce loan default rates by 35% while increasing approval rates for underserved communities...",
  },
  {
    title: "Process vs. Persona based Agentification",
    description:
      "Revolutionary machine learning models that reduce loan default rates by 35% while increasing approval rates for underserved communities...",
  },
  {
    title: "AI Regulatory Assessment Framework",
    description:
      "Revolutionary machine learning models that reduce loan default rates by 35% while increasing approval rates for underserved communities...",
  },
];

export default function ServiceOfferingsSection() {
  return (
    <section className="w-full bg-white py-[60px]">
      <PageContainer>
        <h2 className="text-[#00005A] font-bold text-[32px] leading-[36px] mb-[40px]">
          Our Service Offerings
        </h2>

        {/* Three column layout */}
        <div className="flex gap-[10px] items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] flex-1">
            {SERVICES.map((service, index) => (
              <div key={index}>
                <h3 className="text-[#5B9BD5] font-semibold text-[18px] leading-[22px] mb-[12px] hover:underline cursor-pointer">
                  {service.title}
                </h3>
                <p className="text-[#000048] text-[16px] leading-[20px]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Arrow on the right */}
          <div className="flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
            <RightArrow width={30} height={44} color="#92BBE6" />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
