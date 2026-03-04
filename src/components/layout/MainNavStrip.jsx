import PageContainer from "./PageContainer";

export default function MainNavStrip() {
  return (
    <div className="w-full bg-[#000048]">
      <PageContainer>
        <div className="h-[60px] flex items-center pl-[200px]">
          <div className="text-white text-[12px] leading-[18px] font-medium">
            BFSI AI Marketplace
          </div>
        </div>
      </PageContainer>
    </div>
  );
}