import Container from "../common/Container";
const products = [
    {
        title: "Organic Water Bottle",
        size: "1000 ML",
        image: "/images/landingAboutproduct.png",
    },
    {
        title: "Healthcare Water Bottle",
        size: "1000 ML",
        image: "/images/landingAboutproduct.png",
    },
    {
        title: "Premium Water Bottle",
        size: "1000 ML",
        image: "/images/landingAboutproduct.png",
    },
];

const ProductsPreview = () => {
    return (
        <section className="relative py-8 bg-gradient-to-b from-accent/40 to-primary/90 overflow-hidden">

            <Container>

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-[26px] md:text-[32px] font-heading font-semibold">
                        Our Products
                    </h2>

                    <p className="text-[14px] md:text-[16px] text-foreground mt-2">
                        Explore our refreshing range of naturally alkaline drinking water.
                    </p>
                </div>

                {/* Slider Wrapper */}
                <div className="relative flex items-center justify-center">

                    {/* Left Arrow */}
                    <button className="absolute left-2 md:left-0 lg:-left-10 z-20">
                        <img
                            src="/images/BackTo.png"
                            alt="Previous"
                            className="w-[52px] md:w-[58px]"
                        />
                    </button>

                    {/* Products Grid */}
                    <div className="
  grid
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-3
  gap-10
  justify-items-center
">

                        {products.map((item, index) => (
                            <div
                                key={index}
                                className="
  relative
  w-[260px]
  h-[330px]
  rounded-[12px]
  border border-white/40
  bg-white/10
  backdrop-blur-md
  flex
  flex-col
  items-center
  pt-6
  pb-4
  shadow-md
  mb-2
"
                            >

                                {/* Size */}
                                <p className="text-[20px] font-semibold">
                                    {item.size}
                                </p>

                                {/* Bottle Wrapper */}
                                <div className="relative flex justify-center items-center">

                                    {/* Bottle */}
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-[250px] object-cover"
                                    />

                                    {/* Minerals Badge */}
                                    <div className="
      absolute
      right-[-10px]
      bottom-[70px]
      flex
      items-center
      gap-1
      bg-white
      text-[10px]
      px-2
      py-[2px]
      rounded-full
      shadow
    ">
                                        <span className="text-[12px] font-bold">+</span>
                                        Minerals
                                    </div>

                                </div>

                                {/* Title */}
                                <p className="mt-auto mb-2 text-[14px] font-medium text-center">
                                    {item.title}
                                </p>

                            </div>
                        ))}

                    </div>

                    {/* Right Arrow */}
                    <button className="absolute right-2 md:right-0 lg:-right-10 z-20">
                        <img
                            src="/images/NextPage.png"
                            alt="Next"
                            className="w-[52px] md:w-[58px]"
                        />
                    </button>

                </div>

                {/* Explore Button */}
                <div className="text-center flex justify-center mt-12">
                    <button className="
           bg-white/10
            text-primary-foreground
            px-6
            py-2
            rounded-[6px]
            text-[14px]
            font-medium
            shadow-md
            hover:bg-secondary
            transition
           flex
           items-center
           gap-2
          ">
                        <span className=" 
            text-foreground
            px-6
            py-2
            text-[16px]
            font-semibold
            ">Explore Products</span><span className="ml-2"><img src="/images/BackArrow.png" alt="" /></span>
                    </button>
                </div>

            </Container>

        </section>
    );
};

export default ProductsPreview;