export function MegaDropdown({ openDropdown, selectedSidebar, setSelectedSidebar, menuData }) {
  if (!openDropdown) return null;

  const selectedMenu = menuData.find((m) => m.id === selectedSidebar) || menuData[0];
  const sections = selectedMenu?.sections ?? [];
  const firstSection = sections[0];
  const lastSection = sections.length > 1 ? sections[sections.length - 1] : undefined;

  return (
    <div className="absolute flex left-8 right-8 top-[111px] items-stretch bg-white shadow-lg z-50">
      {/* Sidebar */}
      <div className="w-1/4 bg-[#DEEBF8] flex flex-col">
        <ul>
          {menuData.map((menuNav) => (
            <li key={menuNav.id}>
              <button
                className={`block w-full text-left py-3 px-4 text-[13px] transition-colors hover:bg-[#2F78C4]/20 ${
                  selectedSidebar === menuNav.id
                    ? "bg-white border-l-4 border-[#2F78C4] font-semibold text-[#000048]"
                    : "text-[#333333]"
                }`}
                onClick={() => setSelectedSidebar(menuNav.id)}
              >
                {menuNav.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Content area */}
      <div className="w-3/4 flex items-stretch">
        {/* Middle: description + items grid */}
        <div className="w-2/3 flex flex-col justify-start pt-5 px-6 h-full border-r border-[#E0E0E0] overflow-y-auto max-h-[480px]">
          {firstSection && (
            <div>
              <h6 className="text-[18px] font-semibold text-[#2F78C4] mb-3">
                {firstSection.heading}
              </h6>
              {firstSection.description && (
                <p className="text-[12px] text-[#333333] mb-4 leading-relaxed">
                  {firstSection.description}
                </p>
              )}
              {firstSection.buttonTitle && (
                <button className="bg-[#2F78C4] rounded-full py-2 px-5 text-white text-[13px] mb-4">
                  {firstSection.buttonTitle}
                </button>
              )}
              {firstSection.items.length > 0 && (
                <>
                  <div className="mb-5 h-px w-full bg-[#E0E0E0]" />
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-3 pb-5">
                    {firstSection.items.map((item, index) => (
                      <li key={index}>
                        {item.type === "cta" ? (
                          item.buttonTitle && (
                            <button className="text-[#2F78C4] underline text-[12px]">
                              {item.buttonTitle}
                            </button>
                          )
                        ) : (
                          <div className="py-1">
                            {item.title && (
                              <p className="text-[14px] font-semibold text-[#2F78C4] hover:text-[#000048] cursor-pointer transition-colors">
                                {item.title}
                              </p>
                            )}
                            {item.description && (
                              <p className="mt-1 text-[11px] text-[#555555] leading-relaxed">
                                {item.description}
                              </p>
                            )}
                            {item.buttonTitle && (
                              <button className="text-[#2F78C4] underline text-[11px] mt-1">
                                {item.buttonTitle}
                              </button>
                            )}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}
        </div>

        {/* Right: image + CTA */}
        <div
          className={`w-1/3 flex flex-col px-6 py-5 h-full overflow-y-auto max-h-[480px] ${
            lastSection?.imageurl ? "bg-[#F7F7F5]" : "bg-white"
          }`}
        >
          {lastSection && (
            <div className="flex flex-col h-full">
              {lastSection.imageurl && (
                <img
                  src={lastSection.imageurl}
                  alt={lastSection.heading}
                  className="mb-4 object-contain w-full"
                  style={{ maxHeight: 180 }}
                />
              )}
              {lastSection.imageHeading && (
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#97999B] mb-2">
                  {lastSection.imageHeading}
                </p>
              )}
              <p className="text-[14px] font-semibold text-[#2F78C4] mb-2">
                {lastSection.heading}
              </p>
              {lastSection.description && (
                <p className="text-[11px] text-[#333333] mb-4 leading-relaxed">
                  {lastSection.description}
                </p>
              )}
              {lastSection.items?.map((item, index) => (
                <div key={index}>
                  {item.type === "cta" && item.buttonTitle && (
                    <button className="text-[#2F78C4] font-semibold text-[13px] hover:underline transition-all">
                      {item.buttonTitle}
                    </button>
                  )}
                  {item.type === "text" && item.title && (
                    <div className="mb-2">
                      <p className="text-[#2F78C4] font-semibold text-[14px]">{item.title}</p>
                      {item.description && (
                        <p className="text-[11px] text-[#333333] mt-1">{item.description}</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex-grow" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
