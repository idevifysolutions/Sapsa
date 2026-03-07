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
             {/* RIGHT IMAGE */}
<div className="hidden lg:flex relative top-79 -translate-y-1/2 z-10 justify-center">

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
       <div
  className="
  absolute bottom-[-50px] md:bottom-[-60px] lg:bottom-20
  left-1/2 -translate-x-1/2
  bg-secondary text-white
  rounded-xl
  px-6 sm:px-8 lg:px-10
  py-5 sm:py-6
  shadow-lg
  flex flex-col md:flex-row
  md:items-center
  justify-between
  gap-5 md:gap-8
  w-[92%] sm:w-[88%] md:w-[85%] lg:w-[900px]
  max-w-[900px]
  flex-wrap
  "
>
  <p className="font-semibold text-base sm:text-lg lg:text-2xl text-foreground">
    From Certified Source to Your Home – Pure & Safe.
  </p>

  <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm sm:text-base lg:text-lg flex-wrap">

    <div className="flex font-semibold items-center gap-2 whitespace-nowrap">
      <span>⚙</span>
      The Best Certifications
    </div>

    <div className="flex font-semibold items-center gap-2 whitespace-nowrap">
      <span>🏅</span>
      The Best Standards
    </div>

  </div>
</div>
        </section>
    );
}