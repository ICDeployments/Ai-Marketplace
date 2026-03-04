import { useParams } from "react-router-dom";
import TopHeader from "../components/layout/TopHeader";
import DarkMarketplaceNav from "../components/layout/DarkMarketplaceNav";
import SecondaryNavBar from "../components/layout/SecondaryNavBar";
import Footer from "../components/layout/Footer";
import PageContainer from "../components/layout/PageContainer";
import RightArrow from "../components/ui/RightArrow";
import GradientUnderline from "../components/ui/GradientUnderline";

// Define solutions for each category
const CATEGORY_SOLUTIONS = {
  "retail-banking": {
    title: "Retail Banking",
    solutions: [
      {
        title: "Real Time Loan Application Fraud Detection",
        description: "",
        image: "rb01.jpg",
        link: "http://real-time-fraud-detection-app.s3-website-us-west-2.amazonaws.com/loan-dashboard"
      },
      {
        title: "AI Powered Smart Fund Lending Platform",
        description: "",
        image: "rb02.png"
      }
    ]
  },
  "commercial-banking": {
    title: "Commercial Banking",
    solutions: [
      {
        title: "Real Time Loan Application Fraud Detection",
        description: "",
        image: "cb01.jpg",
        link: "http://real-time-fraud-detection-app.s3-website-us-west-2.amazonaws.com/loan-dashboard"
      },
      {
        title: "AI Powered Smart Fund Lending Platform",
        description: "",
        image: "cb02.png"
      }
    ]
  },
  "investment-banking": {
    title: "Investment Banking",
    solutions: [
      {
        title: "Real Time Loan Application Fraud Detection",
        description: "",
        image: "ib01.jpg",
        link: "http://real-time-fraud-detection-app.s3-website-us-west-2.amazonaws.com/loan-dashboard"
      },
      {
        title: "AI Powered Smart Fund Lending Platform",
        description: "",
        image: "ib02.png"
      }
    ]
  },
  "cards-payments": {
    title: "Cards and payment",
    solutions: [
      {
        title: "Real Time Loan Application Fraud Detection",
        description: "",
        image: "cap01.jpg",
        link: "http://real-time-fraud-detection-app.s3-website-us-west-2.amazonaws.com/loan-dashboard"
      },
      {
        title: "Credit card transaction fraud detection agent",
        description: "",
        image: "cap02.png"
      }
    ]
  },
  "risk-compliance": {
    title: "Risk & Compliance",
    solutions: [
      {
        title: "Credit card transaction fraud detection agent",
        description: "",
        image: "rac01.png"
      },
      {
        title: "AML SAR Generation Workflow - Agentic AI",
        description: "",
        image: "rac02.png",
        link: "https://n2i9wremfi.us-west-2.awsapprunner.com/"
      },
      {
        title: "AI-Driven document analysis and generation solution - Agentic AI",
        description: "",
        image: "rac03.png",
        link: "https://sjp3mwhjhn.us-west-2.awsapprunner.com/"
      }
    ]
  },
  "asset-wealth-management": {
    title: "Asset and Wealth Management",
    solutions: [
      {
        title: "AI enabled Investment Advisory and Portfolio construction and balancing - Agentic AI",
        description: "",
        image: "awm01.png"
      },
      {
        title: "Common Domain Model",
        description: "",
        image: "awm02.png",
        link: "https://hk9pjj82vm.us-west-2.awsapprunner.com/signin"
      }
    ]
  }
};

export default function CategorySolutionsPage() {
  const { category } = useParams();
  const categoryData = CATEGORY_SOLUTIONS[category];

  // If category not found, show error
  if (!categoryData) {
    return (
      <div className="w-full">
        <TopHeader />
        <DarkMarketplaceNav />
        <SecondaryNavBar />
        <section className="w-full bg-white py-[60px]">
          <PageContainer>
            <h2 className="text-[#00005A] font-bold text-[32px] leading-[36px]">
              Category not found
            </h2>
          </PageContainer>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="w-full">
      <TopHeader />
      <DarkMarketplaceNav />
      <SecondaryNavBar />
      <section className="w-full bg-white py-[60px]">
        <PageContainer>
          <div className="mb-[40px] inline-block">
            <h2 className="text-[#00005A] font-bold text-[32px] leading-[36px] mb-[8px]">
              {categoryData.title}
            </h2>
            <GradientUnderline />
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
            {categoryData.solutions.map((solution, index) => (
              <div
                key={index}
                className="border border-[#D0D0CE] bg-white overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => solution.link && window.open(solution.link, '_blank')}
              >
                {/* Image Container */}
                <div className="w-full h-[200px] bg-gradient-to-br from-[#001F54] to-[#003D8F] flex items-center justify-center overflow-hidden">
                  <img
                    src={`/assets/images/${solution.image}`}
                    alt={solution.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-[24px]">
                  <h3 className="text-[#5B9BD5] font-semibold text-[18px] leading-[22px] hover:underline cursor-pointer">
                    {solution.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>
      <Footer />
    </div>
  );
}
