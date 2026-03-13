import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../layout/PageContainer";
import RightArrow from "../ui/RightArrow";

const CARDS = [
  {
    title: "Retail Banking",
    description: "Provides Everyday Financial Services To Individuals, Including Accounts, Loans, And Personal Banking Solutions.",
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
    title: "Investment Banking:",
    description: "Delivers Advisory And Capital-Raising Services, Including Mergers, Acquisitions, And Underwriting.",
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

export default function EmpowerCardsSection() {
  const navigate = useNavigate();

  const handleCardClick = (slug) => {
    navigate(`/category/${slug}`);
  };

  return (
    <section className="w-full bg-white py-[60px]">
      <PageContainer>
        <h2 className="text-[#00005A] font-normal text-[34px] leading-[42px] mb-[40px]">
          Empower Your Workflow With End-To-End Agentic AI
        </h2>

        {/* Cards Grid - 3 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[38px]">
          {CARDS.map((card, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(card.slug)}
              className="group border-1 border-[#D0D0CE] p-[24px] flex flex-col h-[260px] hover:shadow-lg transition-shadow cursor-pointer"
            >
              <h3 className="text-[#2F78C4] group-hover:text-[#000048] font-semibold text-[20px] leading-[26px] mb-[12px] transition-colors">
                {card.title}
              </h3>
              <p className="text-[#000048] text-[17px] leading-[20px] flex-grow">
                {card.description}
              </p>
              <span className="flex items-center gap-[6px] text-[#2F78C4] text-[14px] font-semibold hover:gap-[10px] transition-all mt-[16px]">
                <span className="leading-none">Know more</span>
                <RightArrow width={8} height={12} color="#2F78C4" className="translate-y-[1.5px]" />
              </span>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
