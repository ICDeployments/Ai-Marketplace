import { useEffect } from "react";

export default function Modal({ isOpen, onClose, title, children }) {
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
      <div className="relative bg-white rounded-[8px] w-[90%] max-w-[1200px] max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white px-[32px] py-[20px]">
          <div className="flex items-center justify-between mb-[16px]">
            <h2 className="text-[#000048] font-semibold text-[24px] leading-[32px]">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="text-[#97999B] hover:text-[#000048] text-[32px] leading-[32px] transition-colors"
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <div className="w-full h-[3px] bg-[#53565A]"></div>
        </div>
        
        {/* Body */}
        <div className="px-[32px] pt-[10px] pb-[24px]">
          {children}
        </div>
      </div>
    </div>
  );
}
