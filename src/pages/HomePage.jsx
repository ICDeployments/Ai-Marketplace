import TopHeader from "../components/layout/TopHeader";
import DarkMarketplaceNav from "../components/layout/DarkMarketplaceNav";
import Hero from "../components/sections/HeroDesktopAutolayout";
import EmpowerSection from "../components/sections/EmpowerSection";
import EmpowerCardsSection from "../components/sections/EmpowerCardsSection";
import ReadyToBuildSection from "../components/sections/ReadyToBuildSection";
import ServiceOfferingsSection from "../components/sections/ServiceOfferingsSection";
import IntroAndFormSection from "../components/sections/IntroAndFormSection";
import Footer from "../components/layout/Footer";

export default function HomePage() {
  return (
    <div className="w-full">
      <TopHeader />
      <DarkMarketplaceNav isHomePage={true} />
      <Hero />
      <EmpowerSection />
      <EmpowerCardsSection />
      <ReadyToBuildSection />
      <ServiceOfferingsSection />
      <IntroAndFormSection />
      <Footer />
    </div>
  );
}