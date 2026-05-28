import { useEffect } from "react";

export default function Modal({ isOpen, onClose, title, onBack, headerExtra, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-[12px] w-[90%] max-w-[1200px] max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="bg-white px-[32px] py-[20px] flex-shrink-0">
          <div className="flex items-center justify-between mb-[16px] gap-[16px]">
            <div className="flex items-center gap-[12px] flex-1 min-w-0">
              {onBack && (
                <button
                  onClick={onBack}
                  className="text-[#000048] hover:text-[#2F78C4] transition-colors flex-shrink-0"
                  aria-label="Back"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              )}
              <h2 className="text-[#000048] font-semibold text-[24px] leading-[32px] truncate">
                {title}
              </h2>
              {headerExtra && (
                <div className="flex-shrink-0">
                  {headerExtra}
                </div>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-[#97999B] hover:text-[#000048] text-[32px] leading-[32px] transition-colors flex-shrink-0"
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <div className="w-full h-[3px] bg-[#53565A]"></div>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1 px-[32px] pt-[10px] pb-[24px]">
          {children}
        </div>
      </div>
    </div>
  );
}
