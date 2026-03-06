const certifications = [
    "Government Certifications",
    "Quality & Safety Certifications",
    "Lab Testing & Quality Reports",
    "Environmental & Sustainability Certifications",
];

export default function CertificationHero() {
    return (
        <section className="relative overflow-hidden">

            {/* Background */}
            <img
                src="/images/CertificationBg.png"
                className="absolute inset-0 w-full h-full object-cover"
                alt=""
            />

            <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-40 grid md:grid-cols-2 items-center">

                {/* LEFT CONTENT */}
                <div className="text-white">

                    <div className="flex items-center gap-3 mb-4">
                        <h1 className="text-5xl font-bold">
                            Certifications
                        </h1>

                        <img
                            src="/images/Diploma.png"
                            className="w-8"
                            alt=""
                        />
                    </div>

                    <h2 className="text-2xl font-semibold mb-6">
                        We Own:
                    </h2>

                    <ul className="space-y-3 text-sm">
                        {certifications.map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-white rounded-full"></span>
                                {item}
                            </li>
                        ))}
                    </ul>

                </div>


                {/* RIGHT IMAGE */}
                <div className="relative top-79 -translate-y-1/2 ri z-10 flex justify-center">

                    <img
                        src="/images/CertificationImage.png"
                        className="h-[420px] object-contain"
                        alt=""
                    />

                </div>

            </div>


            {/* Bottom Curve */}
            <div className="absolute bottom-0 left-0 w-full h-[120px] bg-background rounded-t-[100%]"></div>


            {/* Floating Card */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-secondary text-white rounded-xl px-10 py-6 shadow-lg flex flex-col items-start justify-between gap-10 w-[900px] max-w-[90%]">

                <p className="font-semibold text-foreground text-2xl">
                    From Certified Source to Your Home – Pure & Safe.
                </p>

                <div className="flex gap-8 text-lg">

                    <div className="flex font-semibold items-center gap-2">
                        <span>⚙</span>
                        The Best Certifications
                    </div>

                    <div className="flex font-semibold items-center gap-2">
                        <span>🏅</span>
                        The Best Standards
                    </div>

                </div>

            </div>
        </section>
    );
}