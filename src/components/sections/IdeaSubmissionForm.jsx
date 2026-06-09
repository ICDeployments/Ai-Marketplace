import { useState } from "react";

// Field config drives both the rendered form and the JSON payload keys.
// The `key` values must match the column names referenced in the Power
// Automate flow (Add a row into a table → Backlog.xlsx) and the trigger schema.
const FIELDS = [
  { key: "use_case_name", label: "Name of the Use Case", type: "text", required: true, wide: true },
  { key: "epic_format", label: "Epic Format", type: "textarea", required: true },
  { key: "problem_statement", label: "Problem Statement", type: "textarea", required: true },
  { key: "description", label: "Brief Description of the Use Case", type: "textarea" },
  { key: "benefit_case", label: "Benefit case for the customer", type: "textarea" },
  { key: "business_area", label: "Business Area / Vertical", type: "text", required: true },
  { key: "client_or_internal", label: "Client Project / Internal", type: "text" },
  { key: "poc", label: "Point of Contact", type: "text", required: true },
  { key: "agent_type", label: "Single Agent / Multi-Agent", type: "text" },
  { key: "total_agents", label: "Number of Total Agents", type: "number" },
  { key: "grounded_agents", label: "Number of Grounded Agents with Synthetic Data", type: "number" },
  { key: "technology", label: "Technology", type: "text" },
];

const EMPTY_FORM = FIELDS.reduce((acc, field) => ({ ...acc, [field.key]: "" }), {});

const inputClasses =
  "w-full border border-[#D0D0CE] rounded-[8px] p-[12px] text-[#000048] text-[14px] leading-[20px] placeholder:text-[#97999B] focus:outline-none focus:border-[#2F78C4]";

export default function IdeaSubmissionForm({ onSuccess }) {
  const [values, setValues] = useState(EMPTY_FORM);
  const [submitStatus, setSubmitStatus] = useState("idle"); // idle | sending | success | error
  const [submitError, setSubmitError] = useState("");

  const setField = (key, value) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Required-field check (use case name + problem statement).
    const missing = FIELDS.filter((f) => f.required && !values[f.key].trim());
    if (missing.length > 0) {
      setSubmitStatus("error");
      setSubmitError(`Please fill the required field(s): ${missing.map((f) => f.label).join(", ")}.`);
      return;
    }

    setSubmitStatus("sending");
    setSubmitError("");

    const payload = {
      ...Object.fromEntries(FIELDS.map((f) => [f.key, values[f.key].trim()])),
      submitted_at: new Date().toISOString(),
    };

    try {
      const flowUrl = import.meta.env.VITE_IDEA_FLOW_URL;
      if (!flowUrl) {
        throw new Error("VITE_IDEA_FLOW_URL is not configured.");
      }

      // The Power Automate trigger validates the body against its JSON schema,
      // so it must arrive as application/json. The powerplatform.com endpoint
      // returns proper CORS headers, so the preflight succeeds.
      const response = await fetch(flowUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setSubmitStatus("success");
      setValues(EMPTY_FORM);
      if (onSuccess) {
        setTimeout(onSuccess, 1500);
      }
    } catch (error) {
      console.error("[Idea submission] submit failed:", error);
      setSubmitStatus("error");
      setSubmitError("Sorry, your idea couldn't be submitted. Please try again later.");
    }
  };

  const isSending = submitStatus === "sending";

  return (
    <form onSubmit={handleSubmit} className="text-left">
      <p className="text-[#000048] text-[14px] leading-[20px] mb-[20px]">
        Share the details of your idea below. Fields marked <span className="text-[#c0392b]">*</span> are required.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
        {FIELDS.map((field) => {
          const isWide = field.type === "textarea" || field.wide;
          return (
            <div key={field.key} className={isWide ? "md:col-span-2" : ""}>
              <label className="block text-[#000048] font-semibold text-[13px] leading-[18px] mb-[6px]">
                {field.label}
                {field.required && <span className="text-[#c0392b]"> *</span>}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  value={values[field.key]}
                  onChange={(e) => setField(field.key, e.target.value)}
                  rows={3}
                  disabled={isSending}
                  className={`${inputClasses} resize-y`}
                />
              ) : field.type === "select" ? (
                <select
                  value={values[field.key]}
                  onChange={(e) => setField(field.key, e.target.value)}
                  disabled={isSending}
                  className={inputClasses}
                >
                  <option value="">Select…</option>
                  {field.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type === "number" ? "number" : "text"}
                  min={field.type === "number" ? 0 : undefined}
                  value={values[field.key]}
                  onChange={(e) => setField(field.key, e.target.value)}
                  disabled={isSending}
                  className={inputClasses}
                />
              )}
            </div>
          );
        })}
      </div>

      {submitStatus === "success" && (
        <p className="text-[#0a7d2f] text-[14px] leading-[20px] mt-[16px]">
          Thank you! Your idea has been submitted.
        </p>
      )}
      {submitStatus === "error" && (
        <p className="text-[#c0392b] text-[14px] leading-[20px] mt-[16px]">{submitError}</p>
      )}

      <div className="mt-[24px] flex justify-end">
        <button
          type="submit"
          disabled={isSending}
          className="bg-[#2F78C4] text-white font-semibold text-[14px] px-[32px] py-[12px] rounded-[24px] hover:bg-[#1a5a9b] transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-[#2F78C4]"
        >
          {isSending ? "Submitting…" : "Submit Idea"}
        </button>
      </div>
    </form>
  );
}
