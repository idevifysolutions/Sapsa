import Container from "../common/Container";

const commitmentCards = [
    {
        icon: "/images/quality_pure_icon.png",
        title: "99.9% Pure",
        desc: "Pristine water With 99.9% Purity.",
    },
    {
        icon: "/images/quality_test_icon.png",
        title: "100+ Quality Tests",
        desc: "Rigorous Testing for safety.",
    },
    {
        icon: "/images/quality_ph_icon.png",
        title: "PH Balanced",
        desc: "Optimal PH level of 7.4",
    },
    {
        icon: "/images/quality_filter_icon.png",
        title: "Triple Filteration",
        desc: "Advanced triple filteration method.",
    },
];

const QualityCommitment = () => {
    return (
        <section className="bg-[#f0f6ff] py-16 px-4">
            <Container>

                <div className="bg-white rounded-2xl shadow-sm border border-blue-100 px-8 py-10">

                    {/* Heading + Description */}
                    <h2 className="text-[24px] md:text-[28px] font-bold text-gray-900 mb-3">
                        Our Commitment To Quality
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-[900px] mb-10">
                        At Sapsaa, We are dedicated to  delivering the purest and safest form of water to consumer . Our rigorous testing and state-of-the-art
                        purification processes ensure that every bottle of sapsaa water meets the highest quality standards.
                    </p>

                    {/* 4 Feature Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {commitmentCards.map((card, i) => (
                            <div
                                key={i}
                                className="rounded-xl overflow-hidden border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                {/* Icon Area — light blue bg */}
                                <div className="bg-[#dceeff] flex items-center justify-center h-[160px] p-4">
                                    <img
                                        src={card.icon}
                                        alt={card.title}
                                        className="h-[120px] w-[120px] object-contain"
                                    />
                                </div>

                                {/* Label Area — teal bg */}
                                <div className="bg-[#006972] text-white px-4 py-3 text-center">
                                    <h4 className="font-semibold text-sm md:text-base">{card.title}</h4>
                                    <p className="text-xs text-white/80 mt-1">{card.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </Container>
        </section>
    );
};

export default QualityCommitment;
