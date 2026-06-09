import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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

const HOME_SCROLL_KEY = "homeScrollY";

export default function HomePage() {
  const location = useLocation();

  // Continuously remember the home scroll position so we can return the user to
  // exactly where they were when they navigated away (e.g. via the breadcrumb).
  useEffect(() => {
    const saveScroll = () => {
      sessionStorage.setItem(HOME_SCROLL_KEY, String(window.scrollY));
    };
    window.addEventListener("scroll", saveScroll, { passive: true });
    return () => window.removeEventListener("scroll", saveScroll);
  }, []);

  useEffect(() => {
    const target = location.state?.scrollTo || (location.hash ? location.hash.slice(1) : null);
    if (target) {
      requestAnimationFrame(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }

    // Returning via the "Ai Marketplace" breadcrumb: restore the saved position.
    // Read synchronously here (before ScrollToTop's async scroll event can
    // overwrite it), then apply after layout settles to beat the reset-to-top.
    if (location.state?.restoreScroll) {
      const saved = Number(sessionStorage.getItem(HOME_SCROLL_KEY) || 0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo({ top: saved, left: 0, behavior: "auto" });
        });
      });
    }
  }, [location]);

  return (
    <div className="w-full">
      <TopHeader />
      <DarkMarketplaceNav isHomePage={true} />
      <Hero />
      <SecondaryNavBar />
      <div id="overview"><EmpowerSection /></div>
      <div id="sub-vertical"><EmpowerCardsSection /></div>
      <div id="build-agent"><ReadyToBuildSection /></div>
      <div id="service-offerings"><ServiceOfferingsSection /></div>
      <div id="contact"><IntroAndFormSection /></div>
      <Footer />
    </div>
  );
}