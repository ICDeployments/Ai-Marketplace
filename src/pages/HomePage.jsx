import TopHeader from "../components/layout/TopHeader";
import DarkMarketplaceNav from "../components/layout/DarkMarketplaceNav";
import SecondaryNavBar from "../components/layout/SecondaryNavBar";
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
      <SecondaryNavBar />
      <div id="sub-vertical"><EmpowerSection /><EmpowerCardsSection /></div>
      <div id="build-agent"><ReadyToBuildSection /></div>
      <div id="service-offerings"><ServiceOfferingsSection /></div>
      <div id="contact"><IntroAndFormSection /></div>
      <Footer />
    </div>
  );
}