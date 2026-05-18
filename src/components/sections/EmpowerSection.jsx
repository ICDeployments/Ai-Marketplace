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
        <p className="text-[18px] leading-[32px] text-[#000048] max-w-[720px]">
          This marketplace brings together AI agents, tools, and reusable building blocks so BFSI organizations
          can accelerate innovation—from discovery to deployment.
        </p>
        <p className="text-[18px] leading-[32px] text-[#000048] max-w-[720px] mt-[16px]">
          Our offerings span the full AI lifecycle: ready-to-deploy agents, agentic orchestration, seamless
          integration with existing systems, and advanced analytics for continuous improvement.
        </p>
        <ul className="mt-[20px] ml-[32px] max-w-[720px] flex flex-col gap-[10px]">
          {[
            "Curated catalog of BFSI use-case agents (Retail, Commercial, Capital Markets, Payments, Risk)",
            "Secure deployment patterns with human-in-the-loop controls and audit trails",
            "Integration accelerators for data, APIs, workflows, and model governance",
            "Measurement and analytics to track value, risk, and operational performance",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-[10px] text-[17px] leading-[28px] text-[#000048]">
              <span className="mt-[10px] flex-shrink-0" style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: "#2F78C4", display: "inline-block" }} />
              {item}
            </li>
          ))}
        </ul>
      </PageContainer>
    </section>
  );
}
