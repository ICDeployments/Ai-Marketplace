import PageContainer from "../layout/PageContainer";

const EMAIL_ADDRESS = "BFSI_Innovation@cognizant.com";

export default function IntroAndFormSection() {
  const mailToHref = `mailto:${EMAIL_ADDRESS}`;

  return (
    <section className="w-full" style={{ backgroundColor: "#F0F8FF" }}>
      <PageContainer className="py-[48px] flex flex-col items-center text-center">
        <h2 className="text-[#000048] font-bold text-[36px] leading-[44px] mb-[24px]">
          Get In Touch
        </h2>

        <p className="text-[19px] leading-[26px] text-[#000048] max-w-[780px]">
          We welcome innovative ideas and thoughtful suggestions that can help drive meaningful impact.
          {" "}Connect with us to share your insights and collaborate on innovation initiatives.
        </p>

        <div className="mt-[20px] inline-block">
          <a
            href={mailToHref}
            className="flex items-center gap-[4px] group focus:outline-none"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
              style={{ display: "block", marginTop: "3px" }}
            >
              <path
                d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
                fill="#2F78C4"
              />
            </svg>
            <span className="text-[#2F78C4] text-[16px] leading-[24px] font-semibold group-hover:text-[#1a5aa0] transition-colors">
              {EMAIL_ADDRESS.split(/([_@])/).map((part, i) =>
                part === "_" ? (
                  <span key={i} className="px-[1px]" style={{ textDecoration: "none" }}>{part}</span>
                ) : part === "@" ? (
                  <span key={i} style={{ textDecoration: "none" }}>{part}</span>
                ) : (
                  <span key={i} style={{ textDecoration: "underline", textDecorationColor: "currentColor" }}>{part}</span>
                )
              )}
            </span>
          </a>
        </div>
      </PageContainer>
    </section>
  );
}
