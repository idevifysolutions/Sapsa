import Container from "../common/Container";

const JoinMovement = () => {
    return (
        <>
            <section className="relative py-20 overflow-hidden">

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/water8.jpg')" }}
                ></div>

                {/* Fade Overlay */}
                <div className="absolute inset-0 bg-white/40 backdrop-brightness-95"></div>

                <Container>
                    <div className="relative flex flex-col items-center text-center max-w-3xl mx-auto">

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Join the Movement
                        </h2>

                        {/* Description */}
                        <p className="text-sm md:text-base text-foreground-700 mb-8 leading-relaxed">
                            Sign up for exclusive offers, impact stories and Proud announcements.
                            Together, we can reduce the use of single-use plastic and make a
                            positive impact on people and planet.
                        </p>

                        {/* Form */}
                        <div className="flex w-full max-w-xl gap-3">

                            <input
                                type="email"
                                placeholder="Your Email..."
                                className="flex-1 px-6 py-3 rounded-md bg-white outline-none shadow-sm"
                            />

                            <button className="bg-[#D4C203] hover:bg-[#D4C203] px-8 py-3 rounded-md font-semibold text-sm shadow-sm">
                                SIGN UP
                            </button>

                        </div>

                    </div>
                </Container>

            </section>
            <div className="p-8 bg-primary-foreground">

            </div>
        </>
    );
};

export default JoinMovement;