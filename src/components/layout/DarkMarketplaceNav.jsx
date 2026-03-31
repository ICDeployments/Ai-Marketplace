import { useNavigate } from "react-router-dom";
import PageContainer from "./PageContainer";

export default function DarkMarketplaceNav({ isHomePage = false }) {
  const navigate = useNavigate();

  return (
    <div className={`w-full bg-[#000048] text-white ${isHomePage ? 'py-[11px]' : 'py-[12px]'}`}>
      <PageContainer>
        {/* Breadcrumb */}
        <div className="text-[12px] font-medium leading-[14px] text-[#6AA2DC] mb-[6px]">
          <span className="text-[#6AA2DC]">Industries</span>{" "}
          <span className="text-white">/</span>{" "}
          <span className="text-[#6AA2DC]">Finance</span>
        </div>

        {/* Title */}
        <div
          className="text-[15px] leading-[18px] font-semibold cursor-pointer hover:opacity-90"
          onClick={() => navigate("/")}
        >
          AI Marketplace
        </div>
      </PageContainer>
    </div>
  );
}