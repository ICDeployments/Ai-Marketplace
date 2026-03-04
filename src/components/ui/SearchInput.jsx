export default function SearchInput() {
  return (
    <div className="relative w-[220px] h-[32px]">
      <input
        type="text"
        placeholder="Search"
        className="
          w-full h-full
          rounded-[10px]
          border border-[#D0D0CE]
          bg-white
          pl-[12px] pr-[32px]
          text-[12px] leading-[18px]
          outline-none
          placeholder:text-[#97999B]
        "
      />
      <img
        src="/assets/icons/icon-search.png"
        alt="search"
        className="absolute right-[10px] top-1/2 -translate-y-1/2 h-[14px] w-[14px] object-contain opacity-80"
      />
    </div>
  );
}