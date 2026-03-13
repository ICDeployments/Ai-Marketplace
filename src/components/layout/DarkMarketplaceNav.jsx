import PageContainer from "./PageContainer";

export default function DarkMarketplaceNav({ isHomePage = false }) {
  return (
    <div className={`w-full bg-[#000048] text-white ${isHomePage ? 'py-[7px]' : 'py-[4px]'}`}>
      <PageContainer>
        {/* Breadcrumb */}
        <div className="text-[12px] font-normal leading-[14px] text-[#6AA2DC] mb-[6px]">
          <span className="text-[#6AA2DC]">Industries</span>{" "}
          <span className="text-white">/</span>{" "}
          <span className="text-[#6AA2DC]">Finance</span>
        </div>

        {/* Title */}
        <div className="text-[15px] leading-[18px] font-semibold">
          AI Marketplace
        </div>
      </PageContainer>
    </div>
  );
}