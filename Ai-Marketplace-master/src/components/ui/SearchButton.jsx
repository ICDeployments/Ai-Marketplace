export default function SearchButton() {
  return (
    <button
      type="button"
      className="w-[245px] h-[40px] rounded-[12px] bg-[var(--color-accent-3)]
                 px-[24px] py-[8px] flex items-center justify-between"
      style={{ columnGap: 72 }}
    >
      <span className="text-[17px] leading-[25.5px] font-medium text-[var(--color-accent-4)]">
        Search
      </span>

      <img
        src="/assets/icons/icon-search.png"
        alt="Search"
        className="w-[18px] h-[18px] object-contain"
      />
    </button>
  );
}