import TopHeader from "../components/layout/TopHeader";
import MainNavStrip from "../components/layout/MainNavStrip";
import DarkMarketplaceNav from "../components/layout/DarkMarketplaceNav";
import Footer from "../components/layout/Footer";
import AgenticSolutionsSection from "../components/sections/AgenticSolutionsSection";

export default function AgenticSolutionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopHeader />
      <MainNavStrip />

      <DarkMarketplaceNav />

      <div className="flex-1">
        <AgenticSolutionsSection />
      </div>
      <Footer />
    </div>
  );
}