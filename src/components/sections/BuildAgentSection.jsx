export default function BuildAgentSection() {
  return (
    <section className="w-full flex items-stretch overflow-hidden" style={{ minHeight: "320px", backgroundColor: "#7373D8" }}>

      {/* Left — clipped image */}
      <div
        className="flex-shrink-0 w-[50%] relative"
        style={{
          clipPath: "polygon(0 0, 88% 0, 100% 50%, 88% 100%, 0 100%)",
        }}
      >
        <img
          src="/assets/images/midImageHome.png"
          alt="Team collaboration"
          className="w-full h-full object-cover"
          style={{ minHeight: "320px" }}
        />
      </div>

      {/* Right — text content */}
      <div className="flex flex-col justify-center px-[60px] py-[48px]">
        <h2 className="text-white font-bold text-[36px] leading-[44px] mb-[20px]">
          Ready to build<br />your agent?
        </h2>

        <p className="text-white text-[16px] leading-[26px] mb-[28px] max-w-[420px]">
          Bring your ideas—big or small. We're pushing into new
          possibilities, and together we can define what's next.
        </p>

        <a
          href="#build-agent"
          className="flex items-center gap-[8px] text-[15px] font-semibold hover:gap-[12px] transition-all w-fit"
          style={{ color: "#ffffff" }}
        >
          <span>Build Your Own Agent</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="3,2 11,7 3,12" stroke="white" strokeWidth="1.2" fill="none" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

    </section>
  );
}
