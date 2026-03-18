import { useState } from "react";
import PageContainer from "../layout/PageContainer";
import RightArrow from "../ui/RightArrow";

const SERVICE_SLIDES = [
  [
    {
      title: "AI Readiness Assessment Framework",
      description:
        "Revolutionary machine learning models that reduce loan default rates by 35% while increasing approval rates for underserved communities...",
    },
    {
      title: "AI Governance Framework",
      description:
        "Revolutionary machine learning models that reduce loan default rates by 35% while increasing approval rates for underserved communities...",
    },
    {
      title: "AI based workflow design",
      description:
        "Revolutionary machine learning models that reduce loan default rates by 35% while increasing approval rates for underserved communities...",
    },
  ],
  [
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
  ],
];

export default function ServiceOfferingsSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const isFirstSlide = activeSlide === 0;

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % SERVICE_SLIDES.length);
  };

  return (
    <section className="w-full bg-white py-[60px]">
      <PageContainer>
        <h2 className="text-[#00005A] font-bold text-[32px] leading-[36px] mb-[40px]">
          Our Service Offerings
        </h2>

        {/* Three column layout */}
        <div className="flex gap-[10px] items-center">
          {!isFirstSlide && (
            <button
              type="button"
              onClick={handleNextSlide}
              className="flex-shrink-0 px-[8px] cursor-pointer hover:opacity-80 transition-opacity"
              aria-label="Show previous service offerings slide"
            >
              <RightArrow width={30} height={44} color="#92BBE6" className="rotate-180" />
            </button>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] flex-1">
            {SERVICE_SLIDES[activeSlide].map((service, index) => (
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

          {isFirstSlide && (
            <button
              type="button"
              onClick={handleNextSlide}
              className="flex-shrink-0 px-[8px] cursor-pointer hover:opacity-80 transition-opacity"
              aria-label="Show next service offerings slide"
            >
              <RightArrow width={30} height={44} color="#92BBE6" />
            </button>
          )}
        </div>
      </PageContainer>
    </section>
  );
}
