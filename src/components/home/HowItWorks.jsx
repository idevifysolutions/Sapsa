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
        icon: "/images/Mission.png",
        title: "Our Mission",
        text:
            "At Sapsaa, our mission is to deliver pure, safe, and hygienic packaged drinking water across Maharashtra using advanced RO and UV purification technology. We are committed to maintaining the highest quality standards while ensuring healthy and reliable hydration for all.",
    },
    {
        icon: "/images/Sustainability.png",
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
                <div className="w-full flex justify-center mt-10">

                    {/* Desktop / Tablet */}
                    <img
                        src="/images/HowItworksteps.png"
                        alt="How it works process"
                        className="hidden md:block w-full max-w-[1000px] object-contain"
                    />

                    {/* Mobile */}
                    <img
                        src="/images/HowItworksteps.png"
                        alt="How it works process"
                        className="md:hidden w-full max-w-[420px] object-contain"
                    />

                </div>
            </Container>

            {/* Bottom Section */}
            <div className="relative mt-20">

                {/* Water Background */}
                <img
                    src="/images/howitwork.png"
                    alt="water"
                    className="absolute bottom-[-80px] md:bottom-[-120px] left-0 w-full z-10 pointer-events-none"
                />
                <Container>
                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center relative z-20">

                        {infoCards.map((card, i) => (
                            <div
                                key={i}
                                className="w-full max-w-[320px] min-h-[280px] lg:min-h-[330px]
        rounded-[120px]
        bg-[linear-gradient(90deg,rgba(194, 194, 194, 0.31)_10%,#6A808A_47.12%)]
        flex flex-col items-center text-center px-8 pt-10 pb-8 shadow-lg"
                            >

                                {/* Icon */}
                                <img
                                    src={card.icon}
                                    alt={card.title}
                                    className="w-10 h-10 mb-4 object-contain"
                                />

                                {/* Title */}
                                <h3 className="font-semibold text-lg mb-3">
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
                </Container>
            </div>

        </section>
    );
};

export default HowItWorks; 