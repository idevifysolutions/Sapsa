import Container from "../common/Container";

const testimonials = [
    {
        name: "Sarfaraz Uddin",
        text: "Sapsaa has become our family’s daily choice. The taste is fresh, and we feel confident about the quality.",
    },
    {
        name: "Sameer Jain",
        text: "Sapsaa has become our family’s daily choice. The taste is fresh, and we feel confident about the quality.",
    },
    {
        name: "Parul Garg",
        text: "Sapsaa has become our family’s daily choice. The taste is fresh, and we feel confident about the quality.",
    },
    {
        name: "Shirish Ladke",
        text: "Sapsaa has become our family’s daily choice. The taste is fresh, and we feel confident about the quality.",
    },
];

const Testimonials = () => {
    return (
        <section className="bg-primary-foreground py-12">
            <Container>

                {/* Title */}
                <div className="flex justify-center mb-10">
                    <div className="bg-primary text-white px-12 py-2 rounded-sm font-semibold tracking-wide">
                        TESTIMONIALS
                    </div>
                </div>

                {/* Layout */}
                <div className="grid lg:grid-cols-7 gap-8 items-start">

                    {/* Image (40%) */}
                    <div className="lg:col-span-2 bg-transparent rounded-sm overflow-hidden h-[300px] flex items-center justify-center">
                        <img
                            src="/images/watervideo1.png"
                            alt="Bottle"
                            className="max-h-full w-auto object-contain"
                        />
                    </div>

                    {/* Reviews (60%) */}
                    <div className="lg:col-span-5 grid sm:grid-cols-2 gap-5">

                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md p-4 relative"
                            >

                                {/* Quote Image */}
                                <img
                                    src="/images/QuoteLeft.png"
                                    alt="quote"
                                    className="absolute top-3 left-3 w-5 opacity-40"
                                />

                                <h4 className="font-semibold text-primary mb-1 pl-6">
                                    {item.name}
                                </h4>

                                <p className="text-sm text-gray-600 pl-6">
                                    {item.text}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>

                {/* Slider Dots */}
                <div className="flex justify-center mt-8 gap-2">
                    <span className="w-2 h-2 bg-black rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                </div>

            </Container>
        </section>
    );
};

export default Testimonials;