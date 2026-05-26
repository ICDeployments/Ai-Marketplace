import { CATEGORY_SOLUTIONS } from "../pages/CategorySolutionsPage";

/**
 * Potential ranking per use case. Drives the architecture-diagram box colors:
 *   high   → #2E308E (dark navy)
 *   medium → #7373D8 (purple)
 *   low    → #85A0F9 (light blue)
 *
 * Keys must match the `title` field of solutions in CATEGORY_SOLUTIONS exactly.
 */
export const USECASE_POTENTIALS = {
  "Real Time Loan Application Fraud Detection": "high",
  "AI Powered Smart Fund Lending Platform": "medium",
  "KYC Processing": "high",
  "Commercial Banking - Client Onboarding - Compliance Checks": "high",
  "Common Domain Model": "high",
  "Credit card transaction fraud detection agent": "high",
  "Fraud and Dispute Management": "medium",
  "Invisible Payment Solution": "medium",
  "AML SAR Generation Workflow - Agentic AI": "high",
  "AI-Driven document analysis and generation solution - Agentic AI": "medium",
  "AI enabled Investment Advisory and Portfolio construction and balancing - Agentic AI": "high",
  "Portfolio Rebalancing": "high",
  "User Personalization for Asset & Wealth Management": "high",
  "Portfolio Exception Monitor": "medium",
  "Wealth Management - Life Stage Simulator (POV: Clients and Financial Advisor)": "high",
  "Trade Reconciliation and Exception Management": "high",
  "Synthetic Data Generation": "medium",
};

export const POTENTIAL_COLORS = {
  high: "#2E308E",
  medium: "#7373D8",
  low: "#85A0F9",
};

const POTENTIAL_RANK = { high: 3, medium: 2, low: 1 };

/**
 * Look up the strongest potential for a given category slug. If multiple
 * solutions are mapped to the slug with different potentials, the highest
 * one wins.
 *
 * @param {string} slug - Slug key from CATEGORY_SOLUTIONS
 * @returns {"high" | "medium" | "low" | null}
 */
export function getCategoryPotential(slug) {
  if (!slug) return null;
  const category = CATEGORY_SOLUTIONS[slug];
  if (!category?.solutions?.length) return null;

  let bestRank = 0;
  let bestLevel = null;
  for (const solution of category.solutions) {
    const level = USECASE_POTENTIALS[solution.title];
    const rank = POTENTIAL_RANK[level] || 0;
    if (rank > bestRank) {
      bestRank = rank;
      bestLevel = level;
    }
  }
  return bestLevel;
}

/**
 * Convenience: returns the hex color for a slug's potential, or null if the
 * slug has no mapped solutions / potentials.
 */
export function getCategoryPotentialColor(slug) {
  const level = getCategoryPotential(slug);
  return level ? POTENTIAL_COLORS[level] : null;
}
