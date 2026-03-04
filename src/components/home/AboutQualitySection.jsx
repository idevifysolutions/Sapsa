import Container from "../common/Container";

const AboutQualitySection = () => {
    return (
        <section className="relative bg-[#f5f5f5] overflow-hidden">

            <Container>

                {/* ===== Desktop Layered Layout ===== */}
                <div className="relative hidden lg:block min-h-[980px]">

                    {/* LEFT TEXT */}
                    <div className="max-w-full pt-10 space-y-3 z-20 relative">
                        <h2 className="font-poppins font-semibold text-[36px] leading-tight">
                            SAPSAA – Pure by Nature, Perfected by Science
                        </h2>

                        <p className="font-poppins text-[16px] font-medium text-accent-foreground leading-relaxed max-w-full">
                            Sapsaa is a premium water brand committed to delivering pure, safe, and refreshing drinking water. Our water goes through advanced multi-stage purification, including RO and UV treatment, to remove impurities while maintaining essential minerals. Every bottle is tested to ensure the highest quality and hygiene standards. The name “Sapsaa” represents safety, purity, and trust in every drop.
                        </p>

                        <ul className="space-y-3 pt-4">
                            {[
                                "Commitment to Safety and Taste",
                                "Advanced Purification",
                                "Stringent Process",
                                "Quality Assurance",
                                "Nutritional Enhancement",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <span className="text-yellow-400 text-lg">★</span>
                                    <span className="font-inter text-[16px]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* MODEL IMAGE */}
                    <img
                        src="/images/water7preview.svg"
                        alt="Model"
                        className="
              absolute
              left-[20%]
              top-[-250px]
              w-[600px]
              xl:w-[820px]
              2xl:w-[890px]
              z-20
            "
                    />

                    {/* TEAL PANEL */}
                    <div
                        className="
              absolute
              right-[-100px]
              top-[200px]
              w-[364px]
              h-[750px]
              bg-primary
              rounded-tl-[54px]
              rounded-bl-[54px]
              p-8
              text-white
              z-10
            "
                    >
                        <div className="space-y-10 mt-4">
                            {[
                                {
                                    title: "Naturally Alkaline",
                                    img: "/images/alkaline.png",
                                },
                                {
                                    title: "Minerals and Electrolytes",
                                    img: "/images/minerals.png",
                                },
                                {
                                    title: "Bottled at the Source",
                                    img: "/images/source.png",
                                },
                                {
                                    title: "Infinitely Recyclable",
                                    img: "/images/recycle.png",
                                },
                            ].map((item, i) => (
                                <div key={i} className="text-center space-y-4">

                                    {/* Circle */}
                                    <div className="w-[100px] h-[100px] mx-auto border-2 border-white rounded-full flex items-center justify-center">

                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-[100px] h-[100px] object-cover rounded-full object-center"
                                        />

                                    </div>

                                    <p className="font-poppins text-[20px]">
                                        {item.title}
                                    </p>

                                </div>
                            ))}
                        </div>
                    </div>

                    {/* BENEFITS CARD */}
                    <div
                        className="
              absolute
              bottom-25
              
              w-[450px]
              bg-white
              border border-gray-300
              rounded-[49px]
              p-10
              shadow-sm
              z-10
            "
                    >
                        <h3 className="font-poppins font-semibold text-[24px] mb-8">
                            Benefits & Quality of Sapsaa
                        </h3>

                        <div className="space-y-8">
                            {[
                                "Assured Purity in Every Drop",
                                "Balanced Minerals, Better Health",
                                "Advanced Purification Technology",
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6">
                                    <div className="w-[51px] h-[59px] bg-gray-200 rounded-[10px]"></div>
                                    <div>
                                        <h4 className="font-poppins font-semibold text-[16px]">
                                            {item}
                                        </h4>
                                        <p className="font-poppins text-[14px] mt-2 text-gray-600">
                                            Engineered for ultimate safety.
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* ===== Mobile / Tablet Layout ===== */}
                <div className="lg:hidden py-16 space-y-10">

                    <div className="space-y-6">
                        <h2 className="font-poppins font-semibold text-[26px] leading-tight">
                            SAPSAA – Pure by Nature, Perfected by Science
                        </h2>

                        <p className="font-poppins text-[14px] text-gray-700">
                            Sapsaa is a premium water brand committed to delivering pure,
                            safe drinking water through advanced purification.
                        </p>
                    </div>

                    <img
                        src="/images/water7preview.png"
                        alt="Model"
                        className="w-full max-w-[350px] mx-auto"
                    />

                    <div className="bg-[#2e7f85] rounded-[30px] p-6 text-white">
                        <div className="space-y-8">
                            {[
                                "Naturally Alkaline",
                                "Minerals and Electrolytes",
                                "Bottled at the Source",
                                "Infinitely Recyclable",
                            ].map((item, i) => (
                                <div key={i} className="text-center">
                                    <p className="font-poppins text-[16px]">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </Container>
        </section>
    );
};

export default AboutQualitySection;