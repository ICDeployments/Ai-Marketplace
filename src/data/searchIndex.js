export const SEARCH_ITEMS = [
  {
    title: "Retail Banking",
    description: "Customer facing AI agents for onboarding, servicing, fraud detection",
    keywords: "retail banking onboarding servicing fraud detection front office",
    path: "/banking-suite/retail-banking",
  },
  {
    title: "Commercial Banking",
    description: "Corporate and SME agents for Trade finance, Credit underwriting",
    keywords: "commercial banking corporate sme trade finance credit underwriting relationship",
    path: "/banking-suite/commercial-banking",
  },
  {
    title: "Investment Banking",
    description: "Capital raising, advisory, deal-making and payments command center",
    keywords: "investment banking capital raising advisory deals payments command center treasury",
    path: "/banking-suite/investment-banking",
  },
  {
    title: "Cards & Payments",
    description: "Real time agents for authorisation, fraud, FX and SWIFT validation",
    keywords: "cards payments authorisation authorization fraud fx swift cross border",
    path: "/banking-suite/cards-payments",
  },
  {
    title: "Risk & Compliance",
    description: "Agents for AML, sanctions, regulatory reporting and trade surveillance",
    keywords: "risk compliance aml sanctions regulatory reporting trade surveillance sar fincen audit",
    path: "/banking-suite/risk-compliance",
  },
  {
    title: "Asset Management",
    description: "Portfolio optimization, risk management, and long-term value creation",
    keywords: "asset management portfolio optimization investment strategy forecasting performance",
    path: "/banking-suite/asset-management",
  },
  {
    title: "Market Infrastructure",
    description: "Post-trade, compliance and resilience agents for exchanges and clearing",
    keywords: "market infrastructure exchange clearing depository settlement custody surveillance post trade",
    path: "/banking-suite/market-infrastructure",
  },
  {
    title: "Wealth Management",
    description: "Client-centric, goal-based advisory and personalized AI insights",
    keywords: "wealth management advisory client engagement personalized insights goal based",
    path: "/banking-suite/wealth-management",
  },
  {
    title: "Asset & Wealth Management",
    description: "Combined asset and wealth management suite overview",
    keywords: "asset wealth management combined suite",
    path: "/banking-suite/asset-wealth-management",
  },
  {
    title: "Agentic Solutions",
    description: "Browse all agentic AI solutions across BFSI",
    keywords: "agentic solutions agents ai bfsi solutions catalog",
    path: "/agentic-solutions",
  },
  {
    title: "Try Your Agent",
    description: "Interactive playground to try an AI agent",
    keywords: "try your agent playground demo interactive build",
    path: "/try-your-agent",
  },
  {
    title: "Overview",
    description: "Empower your business with AI agents",
    keywords: "overview home empower business",
    path: "/",
    hash: "overview",
  },
  {
    title: "Service Offerings",
    description: "Explore Cognizant service offerings",
    keywords: "service offerings cognizant capabilities",
    path: "/",
    hash: "service-offerings",
  },
  {
    title: "Contact Us",
    description: "Get in touch with our team",
    keywords: "contact us form get in touch reach out",
    path: "/",
    hash: "contact",
  },
];

export function searchItems(query, limit = 8) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const tokens = q.split(/\s+/).filter(Boolean);

  const scored = SEARCH_ITEMS.map((item) => {
    const haystack = `${item.title} ${item.description} ${item.keywords}`.toLowerCase();
    let score = 0;
    for (const t of tokens) {
      if (!haystack.includes(t)) return null;
      if (item.title.toLowerCase().includes(t)) score += 3;
      if (item.description.toLowerCase().includes(t)) score += 2;
      if (item.keywords.toLowerCase().includes(t)) score += 1;
      if (item.title.toLowerCase().startsWith(t)) score += 2;
    }
    return { item, score };
  }).filter(Boolean);

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.item);
}
