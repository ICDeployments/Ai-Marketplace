import { useState } from "react";
import PageContainer from "../layout/PageContainer";
import Modal from "../ui/Modal";
import IdeaSubmissionForm from "./IdeaSubmissionForm";

const EMAIL_ADDRESS = "BFSI_Innovation@cognizant.com";

export default function IntroAndFormSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

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

        <div className="mt-[24px] flex flex-col items-center gap-[12px]">
          <button
            type="button"
            onClick={() => setIsFormOpen(true)}
            className="bg-[#2F78C4] text-white font-semibold text-[16px] px-[32px] py-[12px] rounded-[24px] hover:bg-[#1a5a9b] transition-colors"
          >
            Share Your Idea
          </button>

          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="text-[#2F78C4] text-[14px] leading-[20px] font-semibold hover:text-[#1a5aa0] transition-colors"
          >
            or email us at {EMAIL_ADDRESS}
          </a>
        </div>
      </PageContainer>

      <Modal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title="Share Your Idea"
      >
        <IdeaSubmissionForm onSuccess={() => setIsFormOpen(false)} />
      </Modal>
    </section>
  );
}
