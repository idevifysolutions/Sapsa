import Container from "../common/Container";
import React from "react";

const steps = [
    {
        title: "Top Source Water Quality",
        text: "Carefully sourced natural water ensuring purity and freshness.",
    },
    {
        title: "Filtration",
        text: "Multiple filtration systems remove impurities and enhance purity.",
    },
    {
        title: "Ultra-Filtration",
        text: "Advanced membranes remove micro-particles and bacteria.",
    },
    {
        title: "Reverse Osmosis",
        text: "High precision purification removing dissolved impurities.",
    },
    {
        title: "UV Sterilization",
        text: "UV treatment ensures elimination of harmful microorganisms.",
    },
    {
        title: "Sanitized Filling Room",
        text: "Bottles are filled in a completely sanitized environment.",
    },
];

const infoCards = [
  {
    icon: "/images/Goal.png",
    title: "Our Vision",
    text:
      "At Sapsaa, our vision is to be Maharashtra’s most trusted packaged drinking water brand. We deliver pure, safe, and hygienic water through advanced purification technology. Our goal is to ensure healthy hydration while setting new standards of quality and trust.",
  },
  {
    icon:"/images/Mission.png",
    title: "Our Mission",
    text:
      "At Sapsaa, our mission is to deliver pure, safe, and hygienic packaged drinking water across Maharashtra using advanced RO and UV purification technology. We are committed to maintaining the highest quality standards while ensuring healthy and reliable hydration for all.",
  },
  {
    icon:"/images/Sustainability.png",
    title: "Core Values",
    text: [
      "Purity First",
      "Quality Assurance",
      "Trust & Transparency",
      "Health & Safety",
      "Sustainability & Responsibility",
    ],
  },
];

const HowItWorks = () => {
    return (
        <section className="relative bg-white py-20 overflow-hidden">

            <Container>

                {/* Title */}
                <h2 className="text-[26px] md:text-[32px] font-heading font-semibold mb-14">
                    How It Works?
                </h2>

                {/* Timeline */}
                <div className="grid grid-cols-[1fr_auto_1fr] gap-y-10 items-center relative mt-16">

                    {/* Center Timeline */}
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-[90px] bg-primary rounded-[40px] z-0"></div>

                    {[...Array(6)].map((_, i) => {
                        const step = steps[i];
                        const isLeft = i % 2 === 0;

                        return (
                            <React.Fragment key={i}>

                                {/* Left Side */}
                                <div className={`flex ${isLeft ? "justify-end pr-6" : "opacity-0"}`}>
                                    {isLeft && (
                                        <div className="bg-accent text-white px-6 py-4 rounded-l-[40px] rounded-r-[10px] max-w-[320px] shadow">
                                            <h4 className="font-semibold text-sm">{step.title}</h4>
                                            <p className="text-xs mt-1 opacity-90">{step.text}</p>
                                        </div>
                                    )}
                                </div>

                                {/* Number */}
                                <div className="flex justify-center z-10">
                                    <div className="w-[60px] h-[60px] flex items-center justify-center text-white font-bold text-lg">
                                        {i + 1}
                                    </div>
                                </div>

                                {/* Right Side */}
                                <div className={`flex ${!isLeft ? "justify-start pl-6" : "opacity-0"}`}>
                                    {!isLeft && (
                                        <div className="bg-accent text-white px-6 py-4 rounded-r-[40px] rounded-l-[10px] max-w-[320px] shadow">
                                            <h4 className="font-semibold text-sm">{step.title}</h4>
                                            <p className="text-xs mt-1 opacity-90">{step.text}</p>
                                        </div>
                                    )}
                                </div>

                            </React.Fragment>
                        );
                    })}

                </div>

                {/* Bottom Section */}
                <div className="relative mt-22 ">

                    {/* Water Background */}
                    <img
                        src="/images/howitwork.png"
                        alt="water"
                        className="absolute bottom-[-150px] left-0 w-full z-10 pointer-events-none"
                    />

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-14 justify-items-center relative z-20">

                        {infoCards.map((card, i) => (
                            <div key={i} className=" w-[280px] md:w-[300px] lg:w-[350px] h-[300px] md:h-[300px] lg:h-[350px] rounded-[160px] bg-[linear-gradient(90deg,rgba(112, 130, 133, 0.47)_10%,#6A808A_47.12%)] flex flex-col items-center text-center px-10 pt-12 shadow-lg " >

                                {/* Icon */}
                             
<img
  src={card.icon}
  alt={card.title}
  className="w-[42px] h-[42px] mb-4 object-contain"
/>

                                {/* Title */}
                                <h3 className="font-semibold text-[20px] mb-4">
                                    {card.title}
                                </h3>

                                {/* Content */}
                                {Array.isArray(card.text) ? (
                                    <ul className="text-sm space-y-1 text-foreground">
                                        {card.text.map((item, idx) => (
                                            <li key={idx}>• {item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-sm leading-relaxed text-foreground">
                                        {card.text}
                                    </p>
                                )}

                            </div>
                        ))}

                    </div>

                </div>

            </Container>

        </section>
    );
};

export default HowItWorks; 