import { MoveRight, MoveLeft } from 'lucide-react';


const products = [
    "Sports Water Bottle",
    "Organic water Bottle",
    "Sapsaa Water Bottle",
    "Sapsaa Mini Water Bottle",
    "Sapsaa Water Bottle",
    "Premium Water Bottle",
];

const bottomProducts = [
    "Mineral Water Bottle",
    "Premium Water Bottle",
    "Organic Water Bottle",
    "Sports Water Bottle",
];

const ProductRange = () => {
    return (
        <section className="bg-muted py-16">

            <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT SIDE */}
                <div className="relative">

                    <h2 className="text-4xl font-bold mb-4">
                        Our Product Range
                    </h2>

                    <ul className="space-y-2 text-sm text-foreground mb-6">
                        {products.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>

                    <button className="bg-secondary text-primary-foreground px-6 py-2 rounded-[6px] text-sm flex items-center gap-2">
                        Enquire Now <MoveRight />
                    </button>

                    {/* Decorative Star */}
                    <img
                        src="/images/Star1.png"
                        className="absolute right-[-30px] top-16 w-16 opacity-80"
                    />

                </div>


                {/* RIGHT STACKED BOTTLES */}
                <div className="relative h-[300px] flex items-end justify-center">

                    {/* BACK CARD */}
                    <div className="absolute right-1 bottom-0 bg-accent rounded-t-[40px] rounded-bl-xl w-[150px] h-[200px] flex items-center justify-center z-10">
                        <img
                            src="/images/ProductRange.png"
                            className="h-28"
                        />
                    </div>

                    {/* MIDDLE CARD */}
                    <div className="absolute right-28 bottom-0 bg-secondary rounded-t-[40px] rounded-bl-xl w-[170px] h-[230px] flex items-center justify-center z-20">
                        <img
                            src="/images/ProductRange.png"
                            className="h-32"
                        />
                    </div>

                    {/* FRONT CARD */}
                    <div className="absolute right-58 bottom-0 bg-primary text-white rounded-tr-[45px] w-[200px] h-[260px] flex flex-col items-center justify-center z-30 shadow-lg">

                        <img
                            src="/images/ProductRange.png"
                            className="h-70 mb-1 relative bottom-12"
                        />

                        <p className="text-xs font-medium">
                            Mineral Water Bottle
                        </p>

                        {/* <div className="w-16 p-2 bg-white my-2"></div> */}

                        <p className="text-[11px] flex items-center gap-1">
                            Available in 3 sizes  <MoveRight />
                        </p>

                    </div>


                    {/* NAVIGATION */}
                    <div className="absolute bottom-[-30px] right-24 flex items-center gap-6 text-sm">

                        <span className="cursor-pointer"><MoveLeft /></span>

                        <span className="font-medium">1/3</span>

                        <span className="cursor-pointer"><MoveRight /></span>

                    </div>

                </div>

            </div>

            {/* BOTTOM PRODUCT STRIP */}
           <div className="max-w-6xl mt-16 flex items-center gap-8">

  {/* LEFT FEATURE CARD */}
  <div className="relative bg-primary text-white rounded-tr-[45px] w-[600px] h-[260px] flex  items-center p-6 ">

    {/* Bottle */}
    <img
      src="/images/BottomStrip.png"
      className="absolute -left-0 -top-35 h-[480px] "
      alt=""
    />

    {/* Text */}
    <div className="ml-60">

      <div className="flex gap-1 text-yellow-400 text-2xl">
        ★★★★★
      </div>

      <p className="text-lg font-medium mt-2 leading-snug">
        Shop our most loved
        <br />
        Sapsaa bottle and bring
        <br />
        smile in your life.
      </p>

    </div>

  </div>


  {/* PRODUCT CARDS */}
  {bottomProducts.map((item, i) => (

  <div
    key={i}
    className="relative bg-[#A8D3D3] rounded-2xl w-[150px] h-[150px] flex flex-col items-center justify-end pb-4 group"
  >

    {/* Bottle */}
    <img
      src="/images/ProductRange.png"
      className="absolute -top-16 h-[160px]"
      alt=""
    />

    {/* Title */}
    <p className="text-xs text-center leading-tight px-2">
      {item}
    </p>


    {/* PLUS ICON */}
    <div className="absolute top-2 -right-18 flex items-center group/icon">

      <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold cursor-pointer">
        +
      </div>

      {/* ORDER NOW TAG */}
      <span
        className="
        ml-2 bg-primary text-white text-[10px] px-3 py-1 z-10 rounded-full
        opacity-0 translate-x-2
        group-hover/icon:opacity-100
        group-hover/icon:translate-x-0
        transition-all duration-300
        whitespace-nowrap
        "
      >
        Order Now
      </span>

    </div>

  </div>

))}

</div>

        </section>
    );
};

export default ProductRange;