import PageContainer from "../layout/PageContainer";

export default function EmpowerSection() {
  return (
    <section className="w-full bg-[#000048] py-[60px]">
      <PageContainer>
        {/* Heading */}
        <h2 className="text-white font-normal text-[34px] leading-[42px] mb-[24px]">
          Empower Your Workflow With End-To-End Agentic AI
        </h2>

        {/* Description text */}
        <p className="text-[24px] leading-[30px] text-white max-w-[1440px]">
          <span className="italic font-medium text-[#5B9BD5]">AI marketplace</span>{" "}
          website serves as a centralized digital platform where businesses and developers 
          can discover, buy, and sell{" "}
          <span className="italic font-medium text-[#5B9BD5]">AI models</span>, tools, and algorithms to{" "}
          <span className="italic font-medium text-[#5B9BD5]">accelerate innovation</span>.
        </p>
      </PageContainer>
    </section>
  );
}
