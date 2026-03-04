import TopHeader from "../components/layout/TopHeader";
import DarkMarketplaceNav from "../components/layout/DarkMarketplaceNav";
import SecondaryNavBar from "../components/layout/SecondaryNavBar";
import Footer from "../components/layout/Footer";
import PageContainer from "../components/layout/PageContainer";

export default function AgentInteractionPage() {
  return (
    <div className="w-full">
      <TopHeader />
      <DarkMarketplaceNav />
      <SecondaryNavBar />
      
      <section className="w-full bg-white py-[100px]">
        <PageContainer>
          <div className="flex flex-col items-center justify-center max-w-[900px] mx-auto">
            {/* Title */}
            <h2 className="text-[24px] leading-[32px] font-normal text-center mb-[60px]">
              <span className="text-[#000048]">Start by </span><span className="text-[#00337F]">uploading a document </span><span className="text-[#2F78C4]">or </span><span className="text-[#5B9BD5]">describing your idea</span><span className="text-[#7BB3E8]">.</span>
            </h2>
            
            {/* Input Container */}
            <div className="w-full bg-[#F5F5F5] rounded-[32px] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
              <div className="flex items-center gap-[16px] p-[16px]">
                {/* Paperclip Icon */}
                <button className="flex-shrink-0 text-[#000048] hover:text-[#2F78C4] transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.44 11.05L12.25 20.24C11.1242 21.3658 9.59718 21.9983 8.005 21.9983C6.41282 21.9983 4.88584 21.3658 3.76 20.24C2.63416 19.1142 2.00166 17.5872 2.00166 15.995C2.00166 14.4028 2.63416 12.8758 3.76 11.75L12.33 3.18C13.0806 2.42944 14.0991 2.00551 15.16 2.00551C16.2209 2.00551 17.2394 2.42944 17.99 3.18C18.7406 3.93056 19.1645 4.94908 19.1645 6.01C19.1645 7.07092 18.7406 8.08944 17.99 8.84L9.41 17.41C9.03472 17.7853 8.52536 17.9972 7.995 17.9972C7.46464 17.9972 6.95528 17.7853 6.58 17.41C6.20472 17.0347 5.99284 16.5254 5.99284 15.995C5.99284 15.4646 6.20472 14.9553 6.58 14.58L15.07 6.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                {/* Input Field */}
                <input
                  type="text"
                  placeholder=""
                  className="flex-1 bg-transparent border-none outline-none text-[16px] text-[#333333] placeholder:text-[#999999]"
                />
                
                {/* Send Icon */}
                <button className="flex-shrink-0 text-[#000048] hover:text-[#2F78C4] transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>
      
      <Footer />
    </div>
  );
}
