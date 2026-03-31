
export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div
        className="w-full relative overflow-hidden h-[520px] flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/images/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center text-center px-8 max-w-[700px]">
          <h1 className="font-semibold text-[85px] leading-[104px] text-[#000048]">
            BFSI
            <br />
            AI Marketplace
          </h1>
          <p className="mt-6 text-[19px] font-normal leading-none text-[#000048]">
            A centralized AI Marketplace to discover ready-to-use models and powerful
            analytics—everything you need to scale and accelerate your AI journey.
          </p>
        </div>
      </div>
    </section>
  );
}