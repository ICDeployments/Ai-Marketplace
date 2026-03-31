import PageContainer from "../layout/PageContainer";

export default function EmpowerSection() {
  return (
    <section className="w-full py-[60px] bg-[#F0F8FF]">
      <PageContainer>
        {/* Heading */}
        <h2 className="text-[#000048] font-bold text-[34px] leading-[42px] mb-[24px]">
          Empower Your Workflow With<br />End-To-End Agentic AI
        </h2>

        {/* Description text */}
        <p className="text-[18px] leading-[28px] text-[#000048] max-w-[860px]">
          AI marketplace website serves as a centralized digital platform where businesses and developers
          can discover, buy, and sell AI models, tools, and algorithms to accelerate innovation.
        </p>
      </PageContainer>
    </section>
  );
}
