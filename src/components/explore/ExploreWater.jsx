import Container from "../common/Container";

const ExploreWater = () => {
    return (
        <section className="bg-secondary/40 w-full">


            {/* Banner */}
            <div className="relative font-sans bg-primary text-primary-foreground  px-10 py-10 flex items-center justify-between  shadow-lg">

                {/* Left Content */}
                <div>
                    <h2 className="text-3xl font-semibold mb-6 max-w-2xl">
                        Transform Your Daily water Drinking Cycle with
                        Sapsaa Water.
                    </h2>

                    <button className="bg-accent text-foreground px-6 py-2 rounded-full font-medium shadow-sm">
                        Shop Now
                    </button>
                </div>

                {/* Right Image */}
                <img
                    src="/images/Maskgroup.png"
                    className="absolute right-0 top-0 h-full object-contain"
                    alt="Drinking Water"
                />

            </div>
            <Container>


                {/* Feature Icons */}
                <div className="relative flex justify-center gap-16 -mt-10">

                    {/* Item */}
                    <div className="text-center relative">
                        <div className="bg-secondary w-20 h-20 flex items-center justify-center rounded-full shadow-md border-4 border-white">
                            <img src="/images/Nature.png" className="h-8" />
                        </div>
                        <p className="text-sm mt-3">
                            All Natural <br /> Ingredients
                        </p>
                    </div>

                    {/* Item */}
                    <div className="text-center relative">
                        <div className="bg-secondary w-20 h-20 flex items-center justify-center rounded-full shadow-md border-4 border-white">
                            <img src="/images/Eco-friendlyCleaning.png" className="h-8" />
                        </div>
                        <p className="text-sm mt-3">
                            Chemical <br /> Free
                        </p>
                    </div>

                    {/* Item */}
                    <div className="text-center relative">
                        <div className="bg-secondary w-20 h-20 flex items-center justify-center rounded-full shadow-md border-4 border-white">
                            <img src="/images/Ecology.png" className="h-8" />
                        </div>
                        <p className="text-sm mt-3">
                            Safe & <br /> Trusted
                        </p>
                    </div>

                </div>


                {/* Sweat Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mt-20">

                    <img
                        src="/images/gym.png"
                        className="rounded-lg shadow-md"
                        alt="Gym Hydration"
                    />

                    <div>

                        <h2 className="text-5xl font-extrabold text-foreground">
                            SWEAT <span className="text-primary-foreground ">IT OUT.</span>
                        </h2>

                        <p className="font-semibold text-4xl mt-2">
                            WHILESS HYDRATION
                        </p>

                        <p className="text-xl  font-normal  text-foreground mt-4 leading-relaxed">
                            To provide high-quality, hygienic, and mineral-balanced drinking
                            water through advanced purification technology and strict
                            quality standards.
                        </p>


                        {/* Stats */}
                        <div className="flex gap-6 mt-6">

                            <div className="bg-primary text-primary-foreground px-6 py-3 rounded-lg text-center shadow-sm">
                                <p className="font-bold">24+</p>
                                <p className="text-xs">Categories</p>
                            </div>

                            <div className="bg-primary text-primary-foreground px-6 py-3 rounded-lg text-center shadow-sm">
                                <p className="font-bold">2500+</p>
                                <p className="text-xs">Products</p>
                            </div>

                            <div className="bg-primary text-primary-foreground px-6 py-3 rounded-lg text-center shadow-sm">
                                <p className="font-bold">99%</p>
                                <p className="text-xs">Satisfied Customers</p>
                            </div>

                        </div>

                    </div>

                </div>


                {/* Products */}
                <div className="mt-20 text-center">

                    <h3 className="text-2xl font-semibold mb-16">
                        Special Water Range
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                        {[
                            "Premium Drinking water",
                            "Organic Drinking water",
                            "Sports & Athlete Drinking water",
                            "HealthCare Drinking water",
                        ].map((item, i) => (

                            <div key={i} className="relative">

                                {/* Bottle */}
                                <img
                                    src="/images/waterbottle.png"
                                    className="absolute left-1/2 -translate-x-1/2 -top-22 h-42 z-10"
                                    alt="Water Bottle"
                                />

                                {/* Card */}
                                <div className="bg-card rounded-xl pt-20 pb-6 px-6 shadow-md">

                                    <p className="text-sm font-medium mb-4">
                                        {item}
                                    </p>

                                    {/* Stars */}
                                    <div className="flex justify-center items-center gap-1 mb-4 text-yellow-400 text-sm">
                                        ★ ★ ★ ★ ★
                                        <span className="text-xs text-muted-foreground ml-1">(169)</span>
                                    </div>

                                    <button className="bg-primary text-primary-foreground text-xs px-4 py-2 rounded-md">
                                        Yes I'm Interested
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                    {/* Slider dots */}
                    <div className="flex justify-center gap-2 mt-10">
                        <span className="w-2 h-2 bg-white rounded-full opacity-60"></span>
                        <span className="w-2 h-2 bg-white rounded-full opacity-60"></span>
                        <span className="w-2 h-2 bg-white rounded-full opacity-60"></span>
                        <span className="w-2 h-2 bg-white rounded-full opacity-60"></span>
                        <span className="w-2 h-2 bg-white rounded-full opacity-60"></span>
                    </div>

                </div>

            </Container>

        </section>
    );
};

export default ExploreWater;