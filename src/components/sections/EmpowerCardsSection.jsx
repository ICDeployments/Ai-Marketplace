import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../layout/PageContainer";


const CARDS = [
  {
    title: "Retail Banking",
    description: "Offers Businesses Tailored Financial Products Such As Credit, Treasury Services, And Cash-Management Solutions.",
    image: "/assets/images/RetailBanking.jpg",
    slug: "retail-banking",
    idea: [
      "Problem statement/opportunity: Increase in the cases of fraud and financial crime.",
      "Persona: Front office operations staff",
      "Scope: Initiate fraud detection and remediation on real time.",
      "Approach: AI Agent implementation to trigger the workflows for real time fraud detection and initiating the steps to prevent those. Traditional and existing algorithms such as pattern recognition etc. will be used, which AI agent will invoke as per the need."
    ],
    benefits: [
      "Reduced risk due to real time fraud prevention.",
      "Cost saving by reducing human intervention."
    ],
    demonstration: [
      "Simulate a fraud scenario – example – identity theft for account opening.",
      "Show visual representation of the AI agents and activities triggered in real time.",
      "Show how the remedial actions are taken in case of fraud on screen."
    ]
  },
  {
    title: "Commercial Banking",
    description: "Offers Businesses Tailored Financial Products Such As Credit, Treasury Services, And Cash-Management Solutions.",
    image: "/assets/images/CommercialBanking.jpg",
    slug: "commercial-banking",
    idea: [
      "Problem statement/opportunity: Customers are sold unwanted banking products. They are not offered the needed products.",
      "They cannot take risk with certain decision as they don't understand how to mitigate that risk. Also, the customer may end up taking risk that was not anticipated.",
      "They don't know how to best use the banking product.",
      "Customer those have bought banking product without proper understanding make lead to dissatisfaction as that product may not be right fit or realizing of a lost opportunity of right usage of the product."
    ],
    benefits: [
      "Retail banks will be able to sell more and relevant products to the customer. Better cross-selling and up-selling.",
      "With customer being aware of the pros and cons of the products and the risk scenarios, banks will reduce the risk exposure.",
      "Better customer retention.",
      "Better CLTV - Customer lifetime value.",
      "Better customer engagement and insights.",
      "Through other industry integrations, banks can provide value added service to the businesses in the commercial bank division."
    ],
    demonstration: [
      "Theme of the Digital twin game will be life in a city.",
      "Customer's actual financial data and other demographic details will be captured.",
      "Options for Home, travel, commute, and shop will be provided.",
      "Customer will choose one option such as home and enter that context.",
      "Based on the customer choices, they would see the balanced scorecard across Finance, Health, and Social scale.",
      "Customer can view how they have performed and how to improve."
    ]
  },
  {
    title: "Investment Banking",
    description: "Offers Businesses Tailored Financial Products Such As Credit, Treasury Services, And Cash-Management Solutions.",
    image: "/assets/images/InvestmentBanking.jpg",
    slug: "investment-banking",
    idea: [
      "Problem statement/opportunity: The Integrated Payment Command Center is a real-time, AI-powered dashboard that serves as a centralized space to monitor and control critical payment operations.",
      "Scope: Should be able to capture real time data from underlying various payment systems for providing a unified view to the payments operations administration through its different layers and components for decision support to respond to the real time events.",
      "Persona: Operations head, Risk & Compliance team, Treasury & Cash Management"
    ],
    benefits: [
      "Holistic representation of Payment Operations",
      "Highlight performance against business SLAs",
      "Raise alerts for exception and incidents",
      "Pattern analysis drives efficiency and predictive ops",
      "Real-time fund flow visibility enables optimal liquidity management"
    ],
    demonstration: [
      "Scenario Setup for the client",
      "Live Dashboard Demonstration with Real-time transactions across all payment modes",
      "Visual alerts on failed/delayed transactions",
      "Root Cause Analysis (via AI Assistant)",
      "Action Trigger Demo - User clicks on alert: Escalates to payment ops, Auto-initiates retry for failed transactions",
      "Insights Dashboard - Historical data trends show: Which branch/corridor has most delays, Volume spike predictions for next 24 hours, Heatmap of anomalies"
    ]
  },
  {
    title: "Cards & Payments",
    description: "Enables Secure, Fast, And Seamless Digital And Card-Based Transactions For Consumers And Businesses.",
    image: "/assets/images/cards and payment.jpeg",
    slug: "cards-payments",
    idea: [
      "Problem statement/opportunity: New types of payment frauds are happening leaving scope for zero-day vulnerability.",
      "Still all frauds are not caught on time.",
      "False-positive cases may stop genuine payment scenario"
    ],
    benefits: [
      "Fraud detection percentage will improve.",
      "False-positive cases will be reduced.",
      "Identify new ways to commit the fraud to prevent those. This will help the bank stay ahead of curve and reduce the risk of zero-day vulnerability.",
      "Reduction in personnel cost over the time, as AI agent matures."
    ],
    demonstration: [
      "Goal oriented AI agents with following objectives",
      "Agent 1: Identify new models and/or parameters by analyzing existing known fraud scenarios.",
      "Agent 2: Identify avenues to commit fraud by generating new scenarios based on the process documentation and transaction or other data.",
      "Agent 3: Create description about the analysis done and scenarios generated by Agent 1 and 2.",
      "These agents will be provided with the historic data and models used for fraud detection.",
      "Human in the loop – Fraud risk management team will review the potential threat signal and provide feedback."
    ]
  },
  {
    title: "Risk & Compliance",
    description: "Ensures Organizations Operate Safely And Ethically By Identifying Risks, Enforcing Regulations, And Maintaining Regulatory Standards.",
    image: "/assets/images/risk and compliance.jpeg",
    slug: "risk-compliance",
    idea: [
      "Problem statement/opportunity: Use Generative AI to extract key details, summarize cases accurately, and rank them based on urgency and impact.",
      "This ensures faster decision-making, enhanced compliance, and improved customer satisfaction, while reducing operational inefficiencies i.e., false positive",
      "Scope: Detect, investigate, and report potentially suspicious transactions to regulators like FIU-IND (India) or FinCEN (USA)",
      "Personas: Banks and financial entities, managing a high volume of customer cases and regulatory inquiries, Audit & Risk teams, Compliance managers"
    ],
    benefits: [
      "Cost Savings: Reduced manual effort for SAR drafting and QA",
      "Regulatory Compliance: Lower risk of non-compliance fines and regulatory scrutiny",
      "Actionable Insights: Enhanced strategic decision-making based on SAR trends and analytics",
      "Accelerating Investigation & Reporting Timelines"
    ],
    demonstration: [
      "User authentication",
      "Upload/Simulate a Suspicious Case",
      "Use AI for Document / input files Analysis",
      "Generate SAR Narrative Using LLM",
      "Display Editable SAR Draft for human approval",
      "Export or File to the authority"
    ]
  },
  {
    title: "Asset & Wealth Management:",
    description: "Manages And Grows Client Portfolios Through Strategic Investment Planning And Advisory Services.",
    image: "/assets/images/asset management.jpeg",
    slug: "asset-wealth-management",
    idea: [
      "Problem statement/opportunity: Provide cost-effective human like interaction for low to middle income groups during creation of customer profile and investment strategy.",
      "Persona: Tech savvy wealth management customer",
      "Scope: Create customer profile and investment strategy using digital avatar of relationship manager and conversational AI.",
      "Approach: Role of AI is to just converse with the customer. Investment strategy will be prepared with traditional approach."
    ],
    benefits: [
      "Cost saving by reducing human involvement to serve the masses.",
      "Enhanced customer experience as compared to simple form-based website."
    ],
    demonstration: [
      "Set up will involve a big TV screen and a smart table in Customer service zone.",
      "Visitor will be displayed a digital avatar on a big screen.",
      "Smart table will be used to capture and show the customer details and display investment strategy."
    ]
  }
];

const CARDS_PER_PAGE = 3;

export default function EmpowerCardsSection() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(CARDS.length / CARDS_PER_PAGE);
  const visibleCards = CARDS.slice(currentPage * CARDS_PER_PAGE, (currentPage + 1) * CARDS_PER_PAGE);

  const handleCardClick = (slug) => {
    navigate(`/category/${slug}`);
  };

  return (
    <section className="w-full py-[60px] bg-white">
      <PageContainer>
        {/* Centered heading */}
        <h2 className="text-[#000048] font-bold text-[40px] leading-[50px] mb-[20px] text-center">
          Empower Your Workflow With<br />End-To-End Agentic AI
        </h2>

        {/* Centered subtitle */}
        <p className="text-[#000048] text-[19px] leading-[34px] text-center max-w-[760px] mx-auto mb-[48px]">
          Our service offerings span the full AI lifecycle—from ready-to-deploy models and agentic
          orchestration to seamless integration and advanced analytics.
        </p>

        {/* Cards with side arrows */}
        <div className="relative">

          {/* Left arrow — absolutely positioned outside cards */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
            className="absolute left-[-48px] top-1/2 -translate-y-1/2 disabled:opacity-30 transition-opacity hover:opacity-70"
            aria-label="Previous page"
          >
            <svg width="32" height="32" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="15,2 5,10 15,18" stroke="#000048" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-3 gap-[24px]">
            {visibleCards.map((card, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(card.slug)}
                className="relative overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                style={{ height: "265px", borderRadius: "12px" }}
              >
                {/* Background image */}
                {card.image ? (
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute w-full h-full object-cover"
                    style={{ top: "-79px" }}
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#000216]" />
                )}

                {/* Info panel — solid dark with frosted top edge */}
                <div
                  className="absolute bottom-0 left-0 right-0 flex flex-col gap-[10px] px-[18px] py-[16px]"
                  style={{
                    height: "56%",
                    background: "rgba(0, 2, 22, 0.75)",
                    backdropFilter: "blur(4px)",
                    WebkitBackdropFilter: "blur(4px)",
                    borderTop: "1px solid rgba(255, 255, 255, 0.18)",
                  }}
                >
                  <h3 className="text-white font-semibold text-[17px] leading-[22px] whitespace-nowrap overflow-hidden text-ellipsis">
                    {card.title}
                  </h3>
                  <p
                    className="text-[#C8D4E8] text-[12px] leading-[18px]"
                    style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}
                  >
                    {card.description}
                  </p>
                  <div className="flex items-center gap-[6px] mt-auto">
                    <span className="text-white text-[11px] font-normal">Explore Usecases</span>
                    <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                      <polygon points="3,2 11,7 3,12" stroke="white" strokeWidth="1.2" fill="none" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right arrow — absolutely positioned outside cards */}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
            disabled={currentPage === totalPages - 1}
            className="absolute right-[-48px] top-1/2 -translate-y-1/2 disabled:opacity-30 transition-opacity hover:opacity-70"
            aria-label="Next page"
          >
            <svg width="32" height="32" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="5,2 15,10 5,18" stroke="#000048" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
            </svg>
          </button>

        </div>
      </PageContainer>
    </section>
  );
}
