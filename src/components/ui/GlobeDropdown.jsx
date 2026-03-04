import { useEffect, useMemo, useRef, useState } from "react";
import DownArrow from "./DownArrow";

function GlobeIcon({ size = 14, color = "#97999B" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z"
        stroke={color}
        strokeWidth="1.6"
      />
      <path d="M2 12H22" stroke={color} strokeWidth="1.6" />
      <path
        d="M12 2C14.7 4.7 14.7 19.3 12 22C9.3 19.3 9.3 4.7 12 2Z"
        stroke={color}
        strokeWidth="1.6"
      />
    </svg>
  );
}

export default function GlobeDropdown() {
  const options = useMemo(() => ["IN‑EN", "US‑EN", "UK‑EN"], []);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const ref = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        className="flex items-center gap-[6px] text-[#97999B] text-[12px] leading-[18px]"
        onClick={() => setOpen((v) => !v)}
      >
        <GlobeIcon />
        <span>{selected}</span>
        <DownArrow width={10} height={6} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-[120px] rounded-[8px] border border-[#E0E0E0] bg-white shadow-sm z-50">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              className="w-full text-left px-3 py-2 text-[12px] hover:bg-gray-50"
              onClick={() => {
                setSelected(opt);
                setOpen(false);
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}