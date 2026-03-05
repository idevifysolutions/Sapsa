const testimonials = [
    {
        name: "Dina Watson",
        role: "Designer",
        text: "Sapsaa water tastes pure and fresh every single time. We trust it for our family's daily hydration.",
    },
    {
        name: "Dina Watson",
        role: "Designer",
        text: "Sapsaa water tastes pure and fresh every single time. We trust it for our family's daily hydration.",
    },
    {
        name: "Dina Watson",
        role: "Designer",
        text: "Sapsaa water tastes pure and fresh every single time. We trust it for our family's daily hydration.",
    },
];

export default function CustomerReviews() {
    return (
        <section className="relative py-20">

            {/* Wave Background */}
            <img
                src="/images/OurProductWave.png"
                className="absolute bottom-0 left-0 w-full"
                alt=""
            />

            <div className="relative max-w-6xl mx-auto px-6 text-center">

                {/* Title */}
                <h2 className="text-xl font-semibold mb-16">
                    What our Customer says?
                </h2>


                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-10">

                    {testimonials.map((item, i) => (

                        <div
                            key={i}
                            className="
              bg-white/10
              backdrop-blur-sm
              border border-white/30
              rounded-sm
              p-6
              shadow-lg
              text-left
              "
                        >

                            {/* Top Row */}
                            <div className="flex items-center gap-4 mb-3">

                                {/* Avatar */}
                                <img
                                    src="/images/ProductReview.png"
                                    className="w-14 h-14 rounded-full object-cover"
                                    alt=""
                                />

                                {/* Stars */}
                                {[...Array(5)].map((_, i) => (
                                    <img
                                        key={i}
                                        src="/images/ReviewStar.png"
                                        className="h-4 w-4"
                                        alt="star"
                                    />
                                ))}

                            </div>


                            {/* Review Text */}
                            <p className="text-xs text-gray-700 leading-relaxed mb-4">
                                {item.text}
                            </p>


                            {/* User Info */}
                            <div>

                                <p className="font-medium text-sm">
                                    {item.name}
                                </p>

                                <p className="text-xs text-gray-500">
                                    {item.role}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>


                {/* Slider Dots */}
                <div className="flex justify-center mt-10 gap-2">

                    <span className="w-2 h-2 bg-black rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>

                </div>

            </div>

        </section>
    );
}