import { useEffect, useRef, useState } from "react";
import "flag-icons/css/flag-icons.min.css";

/* ── regions data ─────────────────────────────────────────────────────────── */

const COLUMNS = [
  {
    heading: "Americas",
    items: [
      { label: "Brazil - PT",      code: "br", locale: "BR-PT" },
      { label: "Canada - EN",      code: "ca", locale: "CA-EN" },
      { label: "Canada - FR",      code: "ca", locale: "CA-FR" },
      { label: "Chile - ES",       code: "cl", locale: "CL-ES" },
      { label: "Colombia - ES",    code: "co", locale: "CO-ES" },
      { label: "Mexico - ES",      code: "mx", locale: "MX-ES" },
      { label: "US - EN",          code: "us", locale: "US-EN" },
    ],
    extra: {
      heading: "Middle East",
      items: [
        { label: "UAE - EN",          code: "ae", locale: "AE-EN" },
        { label: "Saudi Arabia - EN", code: "sa", locale: "SA-EN" },
      ],
    },
  },
  {
    heading: "Europe",
    items: [
      { label: "Belgium - FR",     code: "be", locale: "BE-FR" },
      { label: "Belgium - NL",     code: "be", locale: "BE-NL" },
      { label: "Denmark - DA",     code: "dk", locale: "DK-DA" },
      { label: "Finland - FI",     code: "fi", locale: "FI-FI" },
      { label: "France - FR",      code: "fr", locale: "FR-FR" },
      { label: "Germany - DE",     code: "de", locale: "DE-DE" },
      { label: "Italy - IT",       code: "it", locale: "IT-IT" },
    ],
  },
  {
    heading: "",
    items: [
      { label: "Netherlands - NL", code: "nl", locale: "NL-NL" },
      { label: "Norway - NO",      code: "no", locale: "NO-NO" },
      { label: "Portugal - PT",    code: "pt", locale: "PT-PT" },
      { label: "Spain - ES",       code: "es", locale: "ES-ES" },
      { label: "Sweden - SV",      code: "se", locale: "SE-SV" },
      { label: "Switzerland - DE", code: "ch", locale: "CH-DE" },
      { label: "UK - EN",          code: "gb", locale: "UK-EN" },
    ],
  },
  {
    heading: "Asia Pacific",
    items: [
      { label: "Australia - EN",   code: "au", locale: "AU-EN" },
      { label: "China - ZH",       code: "cn", locale: "CN-ZH" },
      { label: "India - EN",       code: "in", locale: "IN-EN" },
      { label: "Japan - JA",       code: "jp", locale: "JP-JA" },
      { label: "New Zealand - EN", code: "nz", locale: "NZ-EN" },
      { label: "Singapore - EN",   code: "sg", locale: "SG-EN" },
    ],
  },
];

/* ── sub-components ──────────────────────────────────────────────────────── */

function GlobeIcon({ size = 14, color = "#97999B" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" stroke={color} strokeWidth="1.6" />
      <path d="M2 12H22" stroke={color} strokeWidth="1.6" />
      <path d="M12 2C14.7 4.7 14.7 19.3 12 22C9.3 19.3 9.3 4.7 12 2Z" stroke={color} strokeWidth="1.6" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── main component ──────────────────────────────────────────────────────── */

export default function GlobeDropdown() {
  const [selected, setSelected] = useState({ label: "India - EN", code: "in", locale: "IN-EN" });
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handleOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open]);

  const handleSelect = (item) => {
    setSelected(item);
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-[6px] text-[#97999B] text-[12px] leading-[18px] focus:outline-none"
      >
        <GlobeIcon size={14} />
        <span>{selected.locale}</span>
        <ChevronDown />
      </button>

      {/* Dropdown panel */}
      {open && (
        <div
          className="absolute right-0 mt-2 rounded-[8px] border border-[#E0E0E0] bg-white shadow-xl p-[20px] z-[9999]"
          style={{ minWidth: 600 }}
        >
          <div className="grid grid-cols-4 gap-[20px]">
            {COLUMNS.map((col, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-[10px]">
                {col.heading && (
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#97999B] pb-[4px] border-b border-[#E0E0E0]">
                    {col.heading}
                  </p>
                )}
                <ul className="space-y-[1px]">
                  {col.items.map(({ label, code, locale }) => (
                    <li key={locale}>
                      <button
                        type="button"
                        onClick={() => handleSelect({ label, code, locale })}
                        className="w-full flex items-center gap-[8px] px-[6px] py-[4px] rounded text-[12px] text-[#53565A] hover:bg-[#DEEBF8] hover:text-[#000048] transition-colors focus:outline-none"
                      >
                        <span className={`fi fi-${code}`} style={{ width: 16, height: 12, display: "inline-block", borderRadius: 2, flexShrink: 0 }} />
                        <span>{label}</span>
                      </button>
                    </li>
                  ))}
                </ul>

                {col.extra && (
                  <div className="mt-[6px]">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-[#97999B] pb-[4px] border-b border-[#E0E0E0] mb-[6px]">
                      {col.extra.heading}
                    </p>
                    <ul className="space-y-[1px]">
                      {col.extra.items.map(({ label, code, locale }) => (
                        <li key={locale}>
                          <button
                            type="button"
                            onClick={() => handleSelect({ label, code, locale })}
                            className="w-full flex items-center gap-[8px] px-[6px] py-[4px] rounded text-[12px] text-[#53565A] hover:bg-[#DEEBF8] hover:text-[#000048] transition-colors focus:outline-none"
                          >
                            <span className={`fi fi-${code}`} style={{ width: 16, height: 12, display: "inline-block", borderRadius: 2, flexShrink: 0 }} />
                            <span>{label}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
