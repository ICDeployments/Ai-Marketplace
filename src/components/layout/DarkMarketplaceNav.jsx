import PageContainer from "./PageContainer";

export default function DarkMarketplaceNav({ isHomePage = false }) {
  return (
    <div className={`w-full bg-[#000048] text-white ${isHomePage ? 'py-[7px]' : 'py-[4px]'}`}>
      <PageContainer>
        {/* Breadcrumb */}
        <div 
          className={`text-[12px] font-normal mb-[1px] ${
            isHomePage 
              ? "text-[#6AA2DC] leading-[14px]" 
              : "text-[#6AA2DC] leading-[14px]"
          }`}
        >
          {isHomePage ? (
            "Industries / Finance"
          ) : (
            <>
              Industries <span className="text-white">/</span> Finance
            </>
          )}
        </div>

        {/* Title */}
        <div className="text-[14px] leading-[18px] font-semibold">
          AI Marketplace
        </div>
      </PageContainer>
    </div>
  );
}