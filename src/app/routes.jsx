import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AgenticSolutionsPage from "../pages/AgenticSolutionsPage";
import CategorySolutionsPage from "../pages/CategorySolutionsPage";
import TryYourAgentPage from "../pages/TryYourAgentPage";
import AgentInteractionPage from "../pages/AgentInteractionPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/agentic-solutions" element={<AgenticSolutionsPage />} />
      <Route path="/try-your-agent" element={<TryYourAgentPage />} />
      <Route path="/agent-interaction/:section" element={<AgentInteractionPage />} />
      <Route path="/category/:category" element={<CategorySolutionsPage />} />
    </Routes>
  );
}