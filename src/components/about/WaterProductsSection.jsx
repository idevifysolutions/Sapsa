import React, { useState } from "react";
import bottleImg from "../../assets/about/b2-cropped.svg";
import can from "../../assets/about/can.svg";

const minerals = [
  { name: "Calcium", top: "35%", left: "40px" },
  { name: "Magnesium", top: "50%", left: "50px" },
  { name: "Potassium", top: "65%", left: "40px" }
];

const WaterProductsSection = () => {

  const [centerProduct, setCenterProduct] = useState(can);

  return (
    <section className="relative w-full min-h-[650px] overflow-hidden bg-[#F5F6F6] lg:bg-transparent">

      {/* BACKGROUND SPLIT */}
      <div className="hidden lg:flex absolute inset-0 -z-10">
        <div className="w-1/2 bg-[#2F7D7C]" />
        <div className="w-1/2 bg-[#F5F6F6]" />
      </div>

      <div className="relative max-w-[1350px] mx-auto grid lg:grid-cols-2 min-h-[650px]">

        {/* LEFT SIDE */}
        <div className="bg-[#2F7D7C] lg:bg-transparent text-white px-6 py-16 lg:px-20 lg:py-24 flex flex-col justify-center">

          <h2 className="text-3xl lg:text-[45px] font-bold mb-6 leading-tight">
            Our Water Products
          </h2>

          <p className="max-w-[450px] mb-10 text-white/90 text-lg leading-relaxed">
            We provide premium packaged drinking water in bottles
            and cans, ensuring safe, pure, and refreshing hydration
            for every need.
          </p>

          <h4 className="font-semibold mb-6 text-xl">
            What Does Water Provide?
          </h4>

          <ul className="grid grid-cols-2 gap-y-4 gap-x-2 text-white/90 mb-12 text-base">
            <li>💧 Hydration</li>
            <li>⚡ Energy Support</li>
            <li>🧠 Brain Function</li>
            <li>🌡 Temp Control</li>
            <li>🧪 Detoxification</li>
            <li>🌿 Healthy Skin</li>
          </ul>

          <div className="flex gap-4">
            <button className="bg-[#F5B841] text-black px-8 py-3 rounded-full font-bold shadow-lg">
              Explore Products
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full font-semibold">
              Shop Now
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex flex-col items-center lg:items-start px-6 py-16 lg:pl-40 lg:pr-16 lg:py-20 bg-[#F5F6F6]">

          {/* WATERMARK */}
          <div className="absolute top-12 left-24 pointer-events-none">
            <h1
              className="text-[130px] font-extrabold text-[#e8e8e8]"
              style={{
                WebkitTextStroke: "1px rgba(0,0,0,0.18)"
              }}
            >
              SAPSAA
            </h1>
          </div>

          {/* PRODUCT CARDS */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full mt-40">

            <ProductCard
              title="Jumbo Can"
              size="5 Litre"
              img={can}
              setCenterProduct={setCenterProduct}
            />

            <ProductCard
              title="Water Bottle"
              size="1 Litre"
              img={bottleImg}
              setCenterProduct={setCenterProduct}
            />

          </div>

        </div>
      </div>

      
{/* CENTER PRODUCT */}
<div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
  <div className="relative group w-[500px] h-[600px] flex justify-center items-center">
    
    <img
      src={centerProduct}
      alt="center product"
      className={`
        /* Increase max-height slightly to 580px */
        max-h-[580px] w-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] 
        transition-all duration-500 ease-in-out
        /* Logic: If it's the 'can', make it 25% larger; otherwise, keep normal size */
        ${centerProduct === can ? 'scale-125 translate-y-[-10px]' : 'scale-100'}
      `}
    />

    {/* MINERAL HOTSPOTS */}
    {minerals.map((mineral, i) => (
      <div
        key={i}
        className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300"
        style={{ 
          top: mineral.top, 
          /* Centering hotspots relative to the middle of the container */
          left: `calc(50% + ${mineral.left})` 
        }}
      >
        <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#2F7D7C] text-xl font-bold cursor-pointer hover:scale-110 transition-transform">
          +
        </div>

        <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-[#2F7D7C] text-white text-sm px-4 py-2 rounded-full whitespace-nowrap shadow-lg">
          {mineral.name}
        </div>
      </div>
    ))}
  </div>
</div>
    </section>
  );
};

const ProductCard = ({ title, size, img, setCenterProduct }) => {

  return (
    <div
      onMouseEnter={() => setCenterProduct(img)}
      className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-50 flex flex-col items-center hover:shadow-xl transition-all"
    >

      <div className="h-40 flex items-center justify-center mb-6">
        <img
          src={img}
          alt={title}
          className="h-full object-contain"
        />
      </div>

      <div className="w-full flex justify-between mb-6">
        <span className="font-bold text-lg">{title}</span>
        <span className="text-gray-400 text-sm">{size}</span>
      </div>

      <button className="w-12 h-12 rounded-full bg-[#2F7D7C] text-white text-2xl flex items-center justify-center">
        +
      </button>

    </div>
  );
};

export default WaterProductsSection;