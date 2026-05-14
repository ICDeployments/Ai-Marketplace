import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AgenticSolutionsPage from "../pages/AgenticSolutionsPage";
import CategorySolutionsPage from "../pages/CategorySolutionsPage";
import TryYourAgentPage from "../pages/TryYourAgentPage";
import AgentInteractionPage from "../pages/AgentInteractionPage";
import RetailBankingSuitePage from "../pages/RetailBankingSuitePage";
import AssetWealthManagementPage from "../pages/AssetWealthManagementPage";
import CommercialBankingSuitePage from "../pages/CommercialBankingSuitePage";
import WealthManagementSuitePage from "../pages/WealthManagementSuitePage";
import AssetManagementSuitePage from "../pages/AssetManagementSuitePage";
import InvestmentBankingSuitePage from "../pages/InvestmentBankingSuitePage";
import RiskComplianceSuitePage from "../pages/RiskComplianceSuitePage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/agentic-solutions" element={<AgenticSolutionsPage />} />
      <Route path="/try-your-agent" element={<TryYourAgentPage />} />
      <Route path="/agent-interaction/:section" element={<AgentInteractionPage />} />
      <Route path="/category/:category" element={<CategorySolutionsPage />} />
      <Route path="/banking-suite/retail-banking" element={<RetailBankingSuitePage />} />
      <Route path="/banking-suite/asset-wealth-management" element={<AssetWealthManagementPage />} />
      <Route path="/banking-suite/commercial-banking" element={<CommercialBankingSuitePage />} />
      <Route path="/banking-suite/asset-management" element={<AssetManagementSuitePage />} />
      <Route path="/banking-suite/wealth-management" element={<WealthManagementSuitePage />} />
      <Route path="/banking-suite/investment-banking" element={<InvestmentBankingSuitePage />} />
      <Route path="/banking-suite/risk-compliance" element={<RiskComplianceSuitePage />} />
      </Routes>
    </>
  );
}