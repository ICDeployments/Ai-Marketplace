import PageContainer from "../layout/PageContainer";
import RightArrow from "../ui/RightArrow";

export default function ReadyToBuildSection() {
  return (
    <section className="w-full bg-[#000048]">
      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch h-[360px]">
          {/* LEFT: Image with diagonal mask */}
          <div className="relative h-full overflow-hidden rounded-[8px] clip-diagonal-right">
            <img
              src="/assets/images/midImageHome.png"
              alt="Team collaboration"
              className="absolute inset-0 w-full h-full object-cover object-right"
            />
          </div>

          {/* RIGHT: Text */}
          <div className="flex flex-col justify-center px-[24px] lg:px-[48px]">
            <h3 className="text-white font-semibold text-[36px] leading-[42px] mb-[20px]">
              Ready to build
              <br />
              your agent?
            </h3>

            <p className="text-white text-[18px] leading-[26px] mb-[24px] max-w-[420px]">
              Bring your ideas—big or small.
              <br />
              We&apos;re pushing into new
              <br />
              possibilities, and together we
              <br />
              can define what&apos;s next.
            </p>

            <a
              href="#build-agent"
              className="flex items-center gap-[6px] text-[#00E8D6] text-[16px] font-semibold hover:gap-[10px] transition-all"
            >
              <span className="leading-none">Build Your Own Agent</span>
              <RightArrow width={8} height={14} color="#00E8D6" className="translate-y-[1.5px]" />
            </a>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
