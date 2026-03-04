import Container from "../common/Container";

const ExploreHero = () => {
  return (
    <section
      className="relative bg-cover bg-center pt-[81px] py-26 md:py-38 lg:py-46"
      style={{ backgroundImage: "url('/images/dropfall.png')" }}
    >
      <Container>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-12">

          {/* Left Content */}
          <div className="max-w-md">

            <div className="flex items-start gap-4">

              {/* Vertical Line */}
              <div className="w-[3px] bg-teal-500 h-16 mt-1"></div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  PURITY
                </h2>

                <h3 className="text-lg md:text-xl font-medium mb-4">
                  In Every Drop
                </h3>

                <p className="text-sm md:text-base  text-foreground leading-tight">
                  SAPSAA is a trusted packed drinking water brand committed to delivering clean, refreshing, and safe hydration across Maharashtra. Our multi-stage purification process ensures the removal of impurities while retaining essential minerals for balanced taste and health.
                </p>
              </div>

            </div>

          </div>

          {/* Right Content */}
          <div className="lg:text-right">

            <div className="flex items-center gap-4 lg:justify-end">

              <div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  SAPSAA.
                </h2>

                <p className="text-lg md:text-xl">
                  REHYDRATE.
                </p>

                <p className="text-lg md:text-xl">
                  REFRESH.
                </p>
              </div>

              {/* Vertical Line */}
              <div className="w-[3px] bg-teal-500 h-20"></div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default ExploreHero;