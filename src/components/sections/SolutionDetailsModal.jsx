export default function SolutionDetailsModal({ solution }) {
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
    // Placeholder for video functionality - to be implemented later
    alert("Demo video will be loaded here");
  };

  return (
    <div>
      {/* Three Column Layout */}
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

      {/* Action Buttons */}
      <div className="flex gap-[16px]">
        <button
          onClick={handleWatchDemo}
          className="flex items-center gap-[8px] bg-[#2F78C4] text-white font-semibold text-[14px] px-[24px] py-[12px] rounded-[24px] hover:bg-[#1a5a9b] transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
          </svg>
          Watch Demo video
        </button>
        
        <button
          onClick={handleEmailRequest}
          className="flex items-center gap-[8px] bg-white text-[#2F78C4] border-2 border-[#2F78C4] font-semibold text-[14px] px-[24px] py-[12px] rounded-[24px] hover:bg-[#2F78C4] hover:text-white transition-colors"
        >
          Request for Lab Demo
        </button>
      </div>
    </div>
  );
}
