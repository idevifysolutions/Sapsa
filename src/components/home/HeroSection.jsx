import Container from "../common/Container";
import { Leaf, Droplets, Recycle } from "lucide-react";

const HeroSection = () => {
    return (
        <section
            className="w-full min-h-screen bg-no-repeat bg-cover bg-center flex items-center pt-[81px]"
            style={{
                backgroundImage: "url('/images/new%201.svg')"
            }}
        >
            <Container>

                <div className="max-w-[700px]  text-primary space-y-8 py-20">

                    {/* Heading */}
                    <h1 className="font-poppins text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] font-bold">
                        Sapsaa: <span className="underline decoration-[#00A8E8] decoration-4 underline-offset-[12px]">The Standard of Pure Water.</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl max-w-[550px] font-medium text-primary/80">
                        From peak performance to holistic healing—hydration
                        refined by science, perfected by nature.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-6 mt-4">
                        <button className="bg-primary px-8 py-3.5 rounded-xl text-white hover:bg-primary-hover transition-all duration-300 shadow-[0_4px_14px_0_rgba(0,105,114,0.39)] font-semibold">
                            Explore more
                        </button>

                        <button className="bg-white/20 backdrop-blur-lg border border-white/40 px-8 py-3.5 rounded-xl text-primary hover:bg-white/30 transition-all duration-300 shadow-md font-semibold">
                            Shop Now
                        </button>
                    </div>

                    {/* Feature Points */}
                    <div className="mt-16 space-y-6">

                        <div className="flex items-center gap-4 group">
                            <div className="bg-white text-primary w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition-transform group-hover:scale-110">
                                <Leaf size={28} />
                            </div>
                            <p className="font-bold text-lg md:text-xl">EcoFriendly Practices</p>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="bg-white text-primary w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition-transform group-hover:scale-110">
                                <Droplets size={28} />
                            </div>
                            <p className="font-bold text-lg md:text-xl">Water Conservation</p>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="bg-white text-primary w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition-transform group-hover:scale-110">
                                <Recycle size={28} />
                            </div>
                            <p className="font-bold text-lg md:text-xl">Recycling Initiatives</p>
                        </div>

                    </div>

                </div>

            </Container>
        </section>
    );
};

export default HeroSection;
