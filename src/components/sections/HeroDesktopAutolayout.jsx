import PageContainer from "../layout/PageContainer";

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div
        className="w-full relative overflow-hidden h-[520px]"
        style={{
          backgroundImage: "url('/assets/images/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <PageContainer className="relative h-full">
          {/* Title positioned on the left */}
          <div className="absolute left-0 top-[80px]">
            <h1 className="text-[#000048] font-bold text-[62px] leading-[70px] pl-[110px]">
              BFSI
              <br />
              AI Marketplace
            </h1>
          </div>

          {/* Grey overlay box at the bottom */}
          <div 
            className="absolute bottom-0 bg-[#D9D9D9]/95 max-w-[900px] px-[32px] py-[24px]"
            style={{
              left: "var(--page-gutter)"
            }}
          >
            <p className="text-[24px] leading-[30px] text-[#000048]">
              Our <span className="font-semibold">AI Marketplace</span> offers a centralized hub for exploring and integrating 
              cutting-edge AI capabilities. From ready-to-use models to powerful analytics 
              tools, everything you need to scale your AI journey is right here.
            </p>
          </div>
        </PageContainer>
      </div>
    </section>
  );
}