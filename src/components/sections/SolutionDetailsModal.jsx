import { useEffect, useRef, useState } from "react";

function detectTechnology(...urls) {
  const combined = urls.filter(Boolean).join(" ").toLowerCase();
  if (!combined) return null;
  if (combined.includes("amazonaws") || combined.includes("awsapprunner")) return "AWS";
  if (combined.includes("azure")) return "Azure";
  return null;
}

function LabeledField({ label, value }) {
  if (!value) return null;
  return (
    <li className="flex gap-[8px]">
      <span className="text-[#2F78C4] font-bold flex-shrink-0">•</span>
      <span>
        <strong className="text-[#000048] font-semibold">{label}:</strong>{" "}
        <span className="text-[#000048]">{value}</span>
      </span>
    </li>
  );
}

function BulletList({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <ul className="space-y-[12px] text-[#000048] text-[14px] leading-[20px]">
      {items.map((item, index) => (
        <li key={index} className="flex gap-[8px]">
          <span className="text-[#2F78C4] font-bold flex-shrink-0">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function SolutionDetailsModal({ solution, isCasestudyView }) {
  const [showPopupBlockedPopup, setShowPopupBlockedPopup] = useState(false);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [submitStatus, setSubmitStatus] = useState("idle"); // idle | sending | success | error
  const [submitError, setSubmitError] = useState("");
  const popupCloseWatcherRef = useRef(null);

  useEffect(() => {
    return () => {
      if (popupCloseWatcherRef.current) {
        clearInterval(popupCloseWatcherRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setShowFeedbackForm(false);
    setFeedbackText("");
    setSubmitStatus("idle");
    setSubmitError("");
  }, [solution?.title]);

  const openLink = (url) => {
    if (!url) return;
    const popupWidth = 1280;
    const popupHeight = 800;
    const left = Math.max((window.screen.width - popupWidth) / 2, 0);
    const top = Math.max((window.screen.height - popupHeight) / 2, 0);

    const popup = window.open(
      url,
      "demoWindow",
      `popup=yes,width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=yes,scrollbars=yes`
    );

    if (popup) {
      popup.focus();
      if (popupCloseWatcherRef.current) {
        clearInterval(popupCloseWatcherRef.current);
      }
      popupCloseWatcherRef.current = setInterval(() => {
        if (popup.closed) {
          clearInterval(popupCloseWatcherRef.current);
          popupCloseWatcherRef.current = null;
          window.focus();
        }
      }, 500);
    } else {
      setShowPopupBlockedPopup(true);
    }
  };

  const handleShareFeedback = () => {
    setShowFeedbackForm(true);
    setSubmitStatus("idle");
    setSubmitError("");
  };

  const handleSubmitFeedback = async (event) => {
    event.preventDefault();
    const trimmed = feedbackText.trim();
    if (!trimmed) return;

    // Mimic flow: simulate a network round-trip without actually sending anywhere.
    // Log payload to console so devs can inspect submissions during the mock period.
    setSubmitStatus("sending");
    setSubmitError("");

    console.log("[Feedback mimic] would submit:", {
      solution_title: solution.title,
      feedback: trimmed,
      submitted_at: new Date().toISOString(),
    });

    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitStatus("success");
    setFeedbackText("");
    setTimeout(() => {
      setShowFeedbackForm(false);
      setSubmitStatus("idle");
    }, 1200);
  };

  const demoLink = solution.demoLink || null;
  const videoLink = solution.link && solution.link.includes("sharepoint.com") ? solution.link : null;
  const technology = solution.technology || detectTechnology(solution.demoLink, solution.link);
  const idea = solution.idea && typeof solution.idea === "object" && !Array.isArray(solution.idea)
    ? solution.idea
    : null;
  const hasStructuredContent = Boolean(
    solution.problemStatement || idea || solution.benefits || solution.demonstration
  );

  return (
    <div>
      {/* Problem Statement */}
      {solution.problemStatement && (
        <div className="mb-[24px]">
          <h3 className="text-[#2F78C4] font-semibold text-[18px] leading-[24px] mb-[8px]">
            Problem Statement:
          </h3>
          <p className="text-[#000048] text-[14px] leading-[22px]">
            {solution.problemStatement}
          </p>
        </div>
      )}

      {hasStructuredContent ? (
        isCasestudyView ? (
          /* Casestudy expanded view — content intentionally empty for now */
          <div className="border border-[#D0D0CE] rounded-[8px] p-[24px] mb-[32px]">
            <h3 className="text-[#2F78C4] font-semibold text-[18px] leading-[24px] mb-[16px]">
              Case Study
            </h3>
            <p className="text-[#97999B] text-[14px] leading-[22px] italic">
              Case study will be added soon.
            </p>
          </div>
        ) : (
          /* Main 3-column view (image 1) */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] mb-[32px]">
            {/* IDEA */}
            <div className="border border-[#D0D0CE] rounded-[8px] p-[24px]">
              <h3 className="text-[#2F78C4] font-semibold text-[18px] leading-[24px] mb-[16px]">
                IDEA
              </h3>
              <ul className="space-y-[12px] text-[14px] leading-[20px]">
                <LabeledField label="Opportunity" value={idea?.opportunity} />
                <LabeledField label="Personas" value={idea?.personas} />
                <LabeledField label="Scope" value={idea?.scope} />
              </ul>
            </div>

            {/* BENEFITS */}
            <div className="border border-[#D0D0CE] rounded-[8px] p-[24px]">
              <h3 className="text-[#2F78C4] font-semibold text-[18px] leading-[24px] mb-[16px]">
                BENEFITS:
              </h3>
              <BulletList items={solution.benefits} />
              {idea?.approach && (
                <div className="mt-[20px]">
                  <h4 className="text-[#000048] font-semibold text-[15px] leading-[20px] mb-[8px]">
                    Approach (Agentic Design):
                  </h4>
                  <p className="text-[#000048] text-[14px] leading-[20px]">
                    {idea.approach}
                  </p>
                </div>
              )}
              {solution.specializedAgents && solution.specializedAgents.length > 0 && (
                <div className="mt-[20px]">
                  <h4 className="text-[#000048] font-semibold text-[15px] leading-[20px] mb-[12px]">
                    Specialized Agents
                  </h4>
                  <BulletList items={solution.specializedAgents} />
                </div>
              )}
            </div>

            {/* DEMONSTRATION */}
            <div className="border border-[#D0D0CE] rounded-[8px] p-[24px]">
              <h3 className="text-[#2F78C4] font-semibold text-[18px] leading-[24px] mb-[16px]">
                DEMONSTRATION
              </h3>
              <BulletList items={solution.demonstration} />
              {technology && (
                <p className="mt-[16px] text-[#000048] text-[14px] leading-[20px]">
                  <span className="font-semibold">Technology :</span> {technology}
                </p>
              )}
            </div>
          </div>
        )
      ) : (
        /* Fallback: fullDescription only */
        <div className="border border-[#D0D0CE] rounded-[8px] p-[24px] mb-[32px]">
          <h3 className="text-[#2F78C4] font-semibold text-[18px] leading-[24px] mb-[16px]">
            Description
          </h3>
          <p className="text-[#000048] text-[14px] leading-[24px]">
            {solution.fullDescription}
          </p>
        </div>
      )}

      {/* Feedback Form (shown below content when Share Feedback is clicked) */}
      {showFeedbackForm && (
        <form
          onSubmit={handleSubmitFeedback}
          className="border border-[#2F78C4] rounded-[8px] p-[24px] mb-[24px]"
        >
          <h3 className="text-[#2F78C4] font-semibold text-[18px] leading-[24px] mb-[16px]">
            Add your Comments / Suggestions
          </h3>
          <textarea
            value={feedbackText}
            onChange={(event) => setFeedbackText(event.target.value)}
            placeholder="Please share your thoughts, feedback ,or suggestions here..."
            rows={6}
            className="w-full border border-[#D0D0CE] rounded-[8px] p-[16px] text-[#000048] text-[14px] leading-[20px] placeholder:text-[#97999B] focus:outline-none focus:border-[#2F78C4] resize-y mb-[16px]"
            disabled={submitStatus === "sending"}
          />

          {submitStatus === "success" && (
            <p className="text-[#0a7d2f] text-[14px] leading-[20px] mb-[16px]">
              Thank you for your feedback!
            </p>
          )}
          {submitStatus === "error" && (
            <p className="text-[#c0392b] text-[14px] leading-[20px] mb-[16px]">
              {submitError}
            </p>
          )}

          <div className="flex flex-wrap gap-[16px]">
            <button
              type="submit"
              disabled={!feedbackText.trim() || submitStatus === "sending"}
              className="bg-[#2F78C4] text-white font-semibold text-[14px] px-[32px] py-[12px] rounded-[24px] hover:bg-[#1a5a9b] transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-[#2F78C4]"
            >
              {submitStatus === "sending" ? "Sending..." : "Submit Feedback"}
            </button>
            <button
              type="button"
              onClick={() => openLink(demoLink)}
              disabled={!demoLink}
              className="flex items-center gap-[8px] border border-[#2F78C4] text-[#2F78C4] font-semibold text-[14px] px-[24px] py-[12px] rounded-[24px] hover:bg-[#2F78C4] hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#2F78C4]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M8 5v14l11-7L8 5z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              </svg>
              Watch Demo
            </button>
            <button
              type="button"
              onClick={() => openLink(videoLink)}
              disabled={!videoLink}
              className="flex items-center gap-[8px] border border-[#2F78C4] text-[#2F78C4] font-semibold text-[14px] px-[24px] py-[12px] rounded-[24px] hover:bg-[#2F78C4] hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#2F78C4]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M8 5v14l11-7L8 5z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              </svg>
              Watch Video
            </button>
          </div>
        </form>
      )}

      {/* Action Buttons (hidden once feedback form is open to avoid duplicate buttons) */}
      {!showFeedbackForm && (
        <div className="flex flex-wrap gap-[16px]">
          <button
            onClick={handleShareFeedback}
            className="bg-[#2F78C4] text-white font-semibold text-[14px] px-[32px] py-[12px] rounded-[24px] hover:bg-[#1a5a9b] transition-colors"
          >
            Share Feedback
          </button>
          <button
            onClick={() => openLink(demoLink)}
            disabled={!demoLink}
            className="flex items-center gap-[8px] border border-[#2F78C4] text-[#2F78C4] font-semibold text-[14px] px-[24px] py-[12px] rounded-[24px] hover:bg-[#2F78C4] hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#2F78C4]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M8 5v14l11-7L8 5z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
            Watch Demo
          </button>
          <button
            onClick={() => openLink(videoLink)}
            disabled={!videoLink}
            className="flex items-center gap-[8px] border border-[#2F78C4] text-[#2F78C4] font-semibold text-[14px] px-[24px] py-[12px] rounded-[24px] hover:bg-[#2F78C4] hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#2F78C4]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M8 5v14l11-7L8 5z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
            Watch Video
          </button>
        </div>
      )}

      {showPopupBlockedPopup && (
        <div
          className="fixed inset-0 z-[80] bg-black/40 flex items-center justify-center px-[16px]"
          onClick={() => setShowPopupBlockedPopup(false)}
        >
          <div
            className="w-full max-w-[420px] bg-white border border-[#D0D0CE] rounded-[12px] p-[24px]"
            onClick={(event) => event.stopPropagation()}
          >
            <h4 className="text-[#00005A] font-semibold text-[20px] leading-[26px] mb-[8px]">
              Popup blocked
            </h4>
            <p className="text-[#000048] text-[14px] leading-[22px]">
              Your browser blocked opening the demo window. Please allow popups for this site and try again.
            </p>
            <div className="mt-[20px] flex justify-end">
              <button
                type="button"
                onClick={() => setShowPopupBlockedPopup(false)}
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
