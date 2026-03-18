import { useState } from "react";

export default function SolutionDetailsModal({ solution }) {
  const [showNoLinkPopup, setShowNoLinkPopup] = useState(false);

  const handleEmailRequest = () => {
    const subject = encodeURIComponent(`Lab Demo Request - ${solution.title}`);
    const body = encodeURIComponent(`Hello Team,


I would like to request access to view the: ${solution.title}
${solution.description}
Please provide the necessary permissions or share the demo details so I can proceed further. 


Thank you!`);
    
    window.location.href = `mailto:SyedHidayatullah.Aneef@cognizant.com?subject=${subject}&body=${body}`;
  };

  const handleWatchDemo = () => {
    if (solution.link) {
      window.open(solution.link, "_blank", "noopener,noreferrer");
    } else {
      setShowNoLinkPopup(true);
    }
  };

  const hasDetailedSections = solution.idea && solution.benefits && solution.demonstration;

  return (
    <div>
      {hasDetailedSections ? (
        /* Three Column Layout */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] mb-[32px]">
          {/* Idea Section */}
          <div className="border border-[#D0D0CE] rounded-[8px] p-[24px]">
            <h3 className="text-[#2F78C4] font-semibold text-[18px] leading-[24px] mb-[16px]">
              Idea
            </h3>
            <ul className="space-y-[12px] text-[#000048] text-[14px] leading-[20px]">
              {solution.idea.map((item, index) => (
                <li key={index} className="flex gap-[8px]">
                  <span className="text-[#2F78C4] font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits Section */}
          <div className="border border-[#D0D0CE] rounded-[8px] p-[24px]">
            <h3 className="text-[#2F78C4] font-semibold text-[18px] leading-[24px] mb-[16px]">
              Benefits
            </h3>
            <ul className="space-y-[12px] text-[#000048] text-[14px] leading-[20px]">
              {solution.benefits.map((item, index) => (
                <li key={index} className="flex gap-[8px]">
                  <span className="text-[#2F78C4] font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Demonstration Section */}
          <div className="border border-[#D0D0CE] rounded-[8px] p-[24px]">
            <h3 className="text-[#2F78C4] font-semibold text-[18px] leading-[24px] mb-[16px]">
              Demonstration
            </h3>
            <ul className="space-y-[12px] text-[#000048] text-[14px] leading-[20px]">
              {solution.demonstration.map((item, index) => (
                <li key={index} className="flex gap-[8px]">
                  <span className="text-[#2F78C4] font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        /* Description Only Layout */
        <div className="border border-[#D0D0CE] rounded-[8px] p-[24px] mb-[32px]">
          <h3 className="text-[#2F78C4] font-semibold text-[18px] leading-[24px] mb-[16px]">
            Description
          </h3>
          <p className="text-[#000048] text-[14px] leading-[24px]">
            {solution.fullDescription}
          </p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-[16px]">
        <button
          onClick={handleWatchDemo}
          className="flex items-center gap-[4px] bg-[#2F78C4] text-white font-semibold text-[14px] px-[24px] py-[12px] rounded-[24px] hover:bg-[#1a5a9b] transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M8 5v14l11-7L8 5z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          </svg>
          Watch Demo
        </button>
        
        {/* <button
          onClick={handleEmailRequest}
          className="flex items-center gap-[8px] bg-white text-[#2F78C4] border-2 border-[#2F78C4] font-semibold text-[14px] px-[24px] py-[12px] rounded-[24px] hover:bg-[#2F78C4] hover:text-white transition-colors"
        >
          Request for Lab Demo
        </button> */}
      </div>

      {showNoLinkPopup && (
        <div
          className="fixed inset-0 z-[80] bg-black/40 flex items-center justify-center px-[16px]"
          onClick={() => setShowNoLinkPopup(false)}
        >
          <div
            className="w-full max-w-[420px] bg-white border border-[#D0D0CE] rounded-[12px] p-[24px]"
            onClick={(event) => event.stopPropagation()}
          >
            <h4 className="text-[#00005A] font-semibold text-[20px] leading-[26px] mb-[8px]">
              Demo link coming soon
            </h4>
            <p className="text-[#000048] text-[14px] leading-[22px]">
              We are currently updating the demo URL for this solution. Please check back shortly.
            </p>

            <div className="mt-[20px] flex justify-end">
              <button
                type="button"
                onClick={() => setShowNoLinkPopup(false)}
                className="bg-[#2F78C4] text-white font-semibold text-[14px] px-[20px] py-[10px] rounded-[20px] hover:bg-[#1a5a9b] transition-colors"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
