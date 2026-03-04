import { useMemo, useState } from "react";
import PageContainer from "../layout/PageContainer";
import DownArrow from "../ui/DownArrow";
import RightArrow from "../ui/RightArrow";

const COUNTRY_OPTIONS = [
  "United States",
  "United Kingdom",
  "Australia",
  "Canada",
  "Germany",
  "India",
  "France",
  "Netherlands",
  "Singapore",
  "Switzerland",
];

const INQUIRY_OPTIONS = [
  "Request a Demo",
  "Product Pricing & Licensing",
  "Partnership Opportunities",
  "Technical Support",
  "General Information",
  "Media/Press Inquiry",
];

const SUBMIT_BG = "#00E8D6";
const SUBMIT_BG_DISABLED = "#BFEDEA";

/* Input shell with thicker border (2px) + light fill */
function InputShell({ children, error }) {
  return (
    <div
      className={[
        "h-[44px] w-full rounded-[6px]",
        "border-2",
        error ? "border-[#D93025]" : "border-[#D0D0CE]",
        "bg-[#F7F7F3]",
        "flex items-center px-[12px]",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function TextInput({ placeholder, value, onChange }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-transparent outline-none text-[12px] leading-[18px] text-[#000048] placeholder:text-[#000048]"
    />
  );
}

function SelectInput({ placeholder, value, onChange, options = [], arrowSize = 13 }) {
  return (
    <div className="w-full flex items-center justify-between gap-2">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={[
          "w-full bg-transparent outline-none",
          "text-[12px] leading-[18px]",
          value ? "text-[#000048]" : "text-[#000048]", // keep same color as placeholder
          "cursor-pointer",
          "appearance-none", // hide native arrow
        ].join(" ")}
      >
        {/* Placeholder */}
        <option value="" disabled>
          {placeholder}
        </option>

        {/* Options */}
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      <DownArrow
        width={arrowSize}
        height={Math.max(6, Math.round(arrowSize * 0.62))}
        className="shrink-0"
      />
    </div>
  );
}

/* Single combined captcha-style box (UI placeholder only) */
function CaptchaSingleBox({ checked, onChange }) {
  return (
    <div className="w-[300px] h-[70px] border-2 border-[#D0D0CE] rounded-[6px] bg-white flex items-center justify-between px-[12px]">
      <div className="flex items-center gap-[10px]">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="h-[18px] w-[18px] border border-[#97999B] rounded-[2px]"
        />
        <div className="text-[12px] leading-[18px] text-[#000048]">I’m not a robot</div>
      </div>

      <div className="flex flex-col items-end justify-center">
        <div className="text-[11px] leading-[14px] font-semibold text-[#000048]">reCAPTCHA</div>
        <div className="text-[9px] leading-[12px] text-[#97999B]">Privacy - Terms</div>
      </div>
    </div>
  );
}

export default function IntroAndFormSection() {
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [inquiryType, setInquiryType] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [captchaChecked, setCaptchaChecked] = useState(false);
  const errors = useMemo(() => {
    const e = {};
    if (!submitted) return e;

    if (!email.trim()) e.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(email.trim())) e.email = "Enter a valid email.";

    if (!country.trim()) e.country = "Country is required.";
    if (!inquiryType.trim()) e.inquiryType = "Inquiry Type is required.";

    // message optional in your screenshot (keep optional)
    if (!consent) e.consent = "Consent is required.";

    return e;
  }, [submitted, email, country, inquiryType, consent]);

 const canSubmit =
  email.trim() &&
  /^\S+@\S+\.\S+$/.test(email.trim()) &&
  country.trim() &&
  inquiryType.trim() &&
  consent &&
  captchaChecked;

  const handleSubmit = () => {
    setSubmitted(true);
    
    if (canSubmit) {
      // Submit the form
      console.log('Form submitted:', { email, country, inquiryType, message });
      setIsSuccess(true);
    }
  };

  // Show success screen after submission
  if (isSuccess) {
    return (
      <section className="w-full bg-white">
        <PageContainer className="py-[60px]">
          <div className="max-w-[900px] mx-auto text-center">
            <div className="mb-[24px] flex justify-center">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="40" fill="#00E8D6"/>
                <path d="M25 40L35 50L55 30" stroke="#000048" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="text-[#000048] font-bold text-[36px] leading-[42px] mb-[16px]">
              Thank You for Your Submission!
            </h2>
            <p className="text-[16px] leading-[24px] text-[#000048] mb-[32px]">
              We have received your inquiry and our team will get back to you shortly.
            </p>
            <button
              type="button"
              onClick={() => {
                setIsSuccess(false);
                setEmail("");
                setCountry("");
                setInquiryType("");
                setMessage("");
                setConsent(false);
                setCaptchaChecked(false);
                setSubmitted(false);
              }}
              style={{ backgroundColor: "#00E8D6" }}
              className="inline-flex items-center justify-center h-[36px] rounded-full px-[24px] gap-[8px] text-[14px] font-semibold text-[#000048] hover:opacity-90 transition-opacity"
            >
              Submit Another Inquiry
              <RightArrow width={8} height={12} color="#000048" />
            </button>
          </div>
        </PageContainer>
      </section>
    );
  }

  return (
    <section className="w-full bg-white">
      <PageContainer className="py-[36px]">
        <h2 className="text-[#000048] font-medium text-[36px] leading-[38px]">
          Take the first step
        </h2>

        <p className="mt-[18px] text-[16px] leading-[18px] text-[#000048] max-w-[940px]">
          Serving customers by looking forward as well as back is a big promise, but the power of today’s new digital
          capabilities is vast and growing.
        </p>

        <p className="mt-[18px] text-[16px] leading-[18px] text-[#000048] max-w-[940px]">
          Let’s talk about how digital can work for your business.
        </p>
        <br></br>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] max-w-[900px]">
          <div>
            <InputShell error={errors.email}>
              <TextInput placeholder="Email *" value={email} onChange={setEmail} />
            </InputShell>
            {errors.email && <div className="mt-[6px] text-[12px] text-[#D93025]">{errors.email}</div>}
          </div>

          <div>
            <InputShell error={errors.country}>
              <SelectInput
                placeholder="Country *"
                value={country}
                onChange={setCountry}
                options={COUNTRY_OPTIONS}
                arrowSize={13}
              />
            </InputShell>
            {errors.country && <div className="mt-[6px] text-[12px] text-[#D93025]">{errors.country}</div>}
          </div>

          <div>
            <InputShell error={errors.inquiryType}>
              <SelectInput
                placeholder="Inquiry Type *"
                value={inquiryType}
                onChange={setInquiryType}
                options={INQUIRY_OPTIONS}
                arrowSize={13}
              />
            </InputShell>
            {errors.inquiryType && (
              <div className="mt-[6px] text-[12px] text-[#D93025]">{errors.inquiryType}</div>
            )}
          </div>

          <div>
            <InputShell>
              <TextInput placeholder="Message" value={message} onChange={setMessage} />
            </InputShell>
          </div>
        </div>

        <div className="mt-[16px] flex items-start gap-[8px] max-w-[900px]">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-[2px] h-[16px] w-[16px] rounded-[2px] border border-[#97999B] flex-shrink-0"
          />
          <p className="text-[12px] leading-[16px] text-[#000048]">
            *I would like Cognizant to contact me based on the information provided above. For information about
            Cognizant's privacy practices, please visit the{" "}
            <a href="#" className="text-[#5B9BD5] underline underline-offset-2">
              Privacy Notice
            </a>
            .
          </p>
        </div>
        {submitted && errors.consent && <div className="mt-[6px] text-[12px] text-[#D93025]">{errors.consent}</div>}

        <div className="mt-[16px]">
          <CaptchaSingleBox checked={captchaChecked} onChange={setCaptchaChecked} />
        </div>

        {/* Submit button */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!canSubmit}
          style={{ backgroundColor: "#00E8D6" }}
          className={[
            "mt-[20px] inline-flex items-center justify-center",
            "h-[36px] rounded-full",
            "px-[24px]",
            "gap-[8px]",
            "text-[14px] font-semibold",
            "transition-opacity",
            "text-[#000048]",
            canSubmit ? "hover:opacity-90" : "cursor-not-allowed",
          ].join(" ")}
        >
          Submit
          <RightArrow width={8} height={12} color="#000048" />
        </button>
      </PageContainer>
    </section>
  );
}