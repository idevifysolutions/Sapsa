import React from "react";
import bottleImg from "../../assets/about/b2.svg";

const CertificationsSection = () => {
  const features = [
    {
      title: "Laboratory Control",
      description:
        "Our advanced laboratory control ensures every drop of water is rigorously tested for purity, safety, and quality before reaching you.",
    },
    {
      title: "Great Composition",
      description:
        "Perfectly balanced mineral composition for pure taste, healthy hydration, and refreshing quality in every sip.",
    },
    {
      title: "Nano Filteration Level",
      description:
        "Advanced nanofiltration technology removes microscopic impurities while preserving essential minerals for cleaner, healthier water.",
    },
    {
      title: "Certificates of Quality",
      description:
        "Certified for quality and safety, our water meets strict industry standards to ensure pure and reliable hydration every time.",
      hasDownload: true, // Added flag for the icon
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between max-w-[1200px] mx-auto py-16 px-4 gap-12 lg:gap-20 font-sans bg-white overflow-hidden">
      
      {/* Left Column - Anchored to start */}
      <div className="relative w-full lg:w-1/2 flex justify-start items-center h-[500px] lg:h-[700px]">
  
  {/* 1. The Semi-Circle: Positioned at a specific point from the left */}
  <div 
    className="absolute left-[10%] lg:left-[15%] top-1/2 transform -translate-y-1/2 w-[220px] h-[440px] lg:w-[380px] lg:h-[650px] bg-[#2d878d] rounded-r-full shadow-[10px_0_20px_rgba(0,0,0,0.1)] z-0"
  ></div>
  
  {/* 2. The Bottle: Positioned at the SAME 'left' point as the circle, 
      then shifted left by 50% of its own width using -translate-x-1/2 */}
  <img
    src={bottleImg}
    alt="Mineral Water Bottle"
    className="absolute left-[25%] lg:left-[25%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[480px] lg:h-[620px] object-contain z-10 drop-shadow-2xl"
  />
</div>

      {/* Right Column */}
      <div className="w-full lg:w-1/2 flex flex-col items-center">
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <div className="text-center px-4 max-w-[500px]">
              <div className="flex items-center justify-center gap-3 mb-3">
                <h3 className="text-[24px] font-bold text-[#1a6e74] tracking-wide">
                  {feature.title}
                </h3>
                {/* Render Download Icon if hasDownload is true */}
                {feature.hasDownload && (
                  <button className="bg-[#1a6e74] p-1.5 rounded-md hover:opacity-80 transition-opacity">
                    <svg 
                      width="20" height="20" viewBox="0 0 24 24" 
                      fill="none" stroke="white" strokeWidth="2.5" 
                      strokeLinecap="round" strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </button>
                )}
              </div>
              <p className="text-gray-600 text-[16px] leading-relaxed">
                {feature.description}
              </p>
            </div>

            {index !== features.length - 1 && (
              <div className="w-full max-w-[350px] h-[2px] bg-[#1a6e74] my-8 opacity-40"></div>
            )}
          </React.Fragment>
        ))}
      </div>
      
    </section>
  );
};

export default CertificationsSection;



