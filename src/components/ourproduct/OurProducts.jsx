const products = [
    {
        name: "Mineral Water Bottle",
        size: "1 Litre",
    },
    {
        name: "Premium water Bottle",
        size: "1 Litre",
    },
    {
        name: "Organic water Bottle",
        size: "1 Litre",
    },
];

const benefits = [
    "Clinically Proven Benefits",
    "4X Hydration",
    "40% improved detoxification",
    "Boosts Immunity",
];

const OurProducts = () => {
    return (
        <section className="bg-muted py-20">

            <div className="max-w-6xl mx-auto px-6">

                {/* Title */}
                <h2 className="text-3xl font-semibold text-center mb-12">
                    <span className="border-b-2 border-black pb-1">
                        Our Products
                    </span>
                </h2>

                {/* Product Row */}
                <div className="relative flex items-center justify-center">

                    {/* Left Arrow */}
                    <button className="absolute left-0">
                        <img src="/images/ChevronLeft.png" className="w-10" />
                    </button>

                    {/* Cards */}
                    <div className="grid md:grid-cols-3 gap-12">

                        {products.map((item, i) => (

                            <div
                                key={i}
                                className="relative bg-white rounded-md shadow-md w-[230px] pb-10"
                            >

                                {/* Image */}
                                <div className="p-3">
                                    <div className="rounded-md overflow-hidden">
                                        <img
                                            src="/images/ourproductbottle.png"
                                            className="w-full h-[220px] object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="px-4 pt-3 text-center">

                                    <p className="font-medium text-sm mb-2">
                                        {item.name}
                                    </p>

                                    <div className="flex justify-between text-xs text-foreground">
                                        <span>Case of 30 Bottles</span>
                                        <span>{item.size}</span>
                                    </div>

                                </div>

                                {/* Floating Button */}
                                <button className="absolute left-1/2 -translate-x-1/2 -bottom-4 bg-primary text-primary-foreground text-xs px-5 py-2 rounded-md shadow-md">
                                    Yes I'm Interested
                                </button>

                            </div>

                        ))}

                    </div>

                    {/* Right Arrow */}
                    <button className="absolute right-0">
                        <img src="/images/ChevronRight.png" className="w-10" />
                    </button>

                </div>


                {/* Benefits */}
                <div className="flex items-center justify-center gap-14 mt-16">

                    {benefits.map((item, i) => (

                        <div key={i} className="flex items-center gap-4">

                            <span className="text-base font-semibold">
                                {item}
                            </span>

                            <img
                                src="/images/CheckMark.png"
                                className="w-6 h-6"
                                alt=""
                            />

                            {i !== benefits.length - 1 && (
                                <img
                                    src="/images/curldiv.png"
                                    className="h-10 ml-6"
                                    alt=""
                                />
                            )}

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default OurProducts;