import PageContainer from "./PageContainer";
import SearchInput from "../ui/SearchInput";
import GlobeDropdown from "../ui/GlobeDropdown";
import Divider from "../ui/Divider";

function MenuLink({ label }) {
  return (
    <button type="button" className="text-[22px] leading-[32px] font-semibold text-[#000048] hover:opacity-80">
      {label}
    </button>
  );
}

function UtilityLink({ label, href = "#" }) {
  return (
    <a href={href} className="text-[12px] leading-[18px] text-[#97999B] hover:underline">
      {label}
    </a>
  );
}

export default function TopHeader() {
  return (
    <header className="w-full bg-white">
      <PageContainer>
        <div className="py-[10px]">
          {/* Row 1 utilities (dividers vertically centered) */}
          <div className="flex justify-end items-center gap-[10px]">
            <UtilityLink label="Career" />
            <Divider />
            <UtilityLink label="News" />
            <Divider />
            <UtilityLink label="Events" />
            <Divider />
            <UtilityLink label="Investors" />
            <Divider />
            <GlobeDropdown />
          </div>

          {/* Row 2: logo + menu aligned with search row */}
          <div className="mt-[10px] flex items-center justify-between">
            <div className="flex items-center gap-[34px]">
              <img
                src="/assets/images/logo.png"
                alt="Logo"
                className="h-[46px] w-auto object-contain"
              />

              <nav className="flex items-center gap-[26px]">
                <MenuLink label="Industries" />
                <MenuLink label="Services" />
                <MenuLink label="Insights" />
                <MenuLink label="About" />
              </nav>
            </div>

            <SearchInput />
          </div>
        </div>
      </PageContainer>
    </header>
  );
}