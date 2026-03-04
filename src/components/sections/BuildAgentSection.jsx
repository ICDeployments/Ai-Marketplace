import PageContainer from "../layout/PageContainer";
import RightArrow from "../ui/RightArrow";

export default function BuildAgentSection() {
  return (
    <section className="w-full bg-white py-[60px]">
      <PageContainer>
        <div className="relative">
          {/* Image container */}
          <div className="relative w-full max-w-[600px]">
            <img
              src="/assets/images/midImageHome.png"
              alt="Team collaboration"
              className="w-full h-auto object-cover"
            />
            
            {/* Dark blue card overlay positioned on bottom left of image */}
            <div className="absolute left-0 bottom-0 bg-[#000048] p-[32px] max-w-[400px] rounded-tr-[8px]">
              <h2 className="text-white font-bold text-[24px] leading-[30px] mb-[16px]">
                Ready to build your agent?
              </h2>
              
              <p className="text-white text-[14px] leading-[20px] mb-[20px]">
                Bring your ideas—big or small. We're pushing into new possibilities, 
                and together we can define what's next.
              </p>

              <a
                href="#build-agent"
                className="inline-flex items-center gap-[6px] text-[#00E8D6] text-[14px] font-semibold hover:gap-[10px] transition-all"
              >
                Build Your Own Agent
                <RightArrow width={8} height={12} color="#00E8D6" />
              </a>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
