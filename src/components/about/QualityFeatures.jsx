import React from "react";
import deliveryManImg from "../../assets/about/del.svg";

const QualityFeatures = () => {
  const leftCards = [
    {
      title: "Organic Water",
      desc: "Organic water refers to water sourced from natural environments and processed without synthetic chemicals.",
    },
    {
      title: "Sports and Athlete Water",
      desc: "Sports and athlete water is high-quality purified water formulated to support optimal hydration during physical activity.",
    },
  ];

  const rightCards = [
    {
      title: "Healthcare Water",
      desc: "Healthcare water is purified water that meets high safety and hygiene standards for use in medical and healthcare settings.",
    },
    {
      title: "Premium Water",
      desc: "Premium water is high-quality, carefully purified drinking water positioned for superior taste, purity, and refined packaging.",
    },
  ];

  return (
    <section className="relative bg-[#F5F6F6] pt-32 pb-0 overflow-hidden min-h-[850px]">
      
      {/* Controlled Content Width */}
      <div className="max-w-[1100px] mx-auto px-4 relative">
        
        {/* Heading */}
        <div className="flex justify-center mb-24">
          <h2 className="text-center text-[40px] font-bold text-[#1A1A1A] max-w-[600px] leading-[1.2] tracking-tight">
            Protect Your Family With Best Water Filtering System Services.
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-8 items-center relative">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-32 items-end z-20 -mt-20">
            {leftCards.map((card, i) => (
              <FeatureCard key={i} title={card.title} desc={card.desc} />
            ))}
          </div>

          {/* CENTER COLUMN */}
          <div className="relative flex justify-center items-end h-[500px]">

            {/* Concentric Circles */}
            <div className="absolute bottom-[-400px] w-[800px] h-[800px] rounded-full bg-[#9dc6c6] opacity-10 z-0" />
            <div className="absolute bottom-[-320px] w-[640px] h-[640px] rounded-full bg-[#9dc6c6] opacity-20 z-0" />
            <div className="absolute bottom-[-240px] w-[480px] h-[480px] rounded-full bg-[#9dc6c6] opacity-30 z-0" />

            {/* Image */}
            <img
              src={deliveryManImg}
              alt="Delivery Expert"
              className="relative z-10 w-[420px] translate-y-28 object-contain"
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-32 items-start z-20 -mt-20">
            {rightCards.map((card, i) => (
              <FeatureCard key={i} title={card.title} desc={card.desc} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ title, desc }) => (
  <div className="bg-white p-8 rounded-[20px] shadow-[0_40px_80px_rgba(0,0,0,0.08)] max-w-[340px] border border-white/60">
    
    <h4 className="text-[20px] font-bold text-[#1A1A1A] mb-3 tracking-tight">
      {title}
    </h4>

    <p className="text-[#6B7280] text-[15px] leading-[1.6]">
      {desc}
    </p>
  </div>
);

export default QualityFeatures;