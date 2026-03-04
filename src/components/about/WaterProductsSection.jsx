import React from "react";
import bottleImg from "../../assets/about/b2.svg";

const WaterProductsSection = () => {
  return (
    <section className="relative w-full min-h-[650px] overflow-hidden bg-[#F5F6F6] lg:bg-transparent">

      {/* ================= BACKGROUND SPLIT ================= */}
      <div className="hidden lg:flex absolute inset-0 -z-10">
        <div className="w-1/2 bg-[#2F7D7C]" />
        <div className="w-1/2 bg-[#F5F6F6]" />
      </div>

      <div className="relative max-w-[1350px] mx-auto grid lg:grid-cols-2 min-h-[650px]">

        {/* ================= LEFT CONTENT ================= */}
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
            <li className="flex items-center gap-2">💧 Hydration</li>
            <li className="flex items-center gap-2">⚡ Energy Support</li>
            <li className="flex items-center gap-2">🧠 Brain Function</li>
            <li className="flex items-center gap-2">🌡 Temp Control</li>
            <li className="flex items-center gap-2">🧪 Detoxification</li>
            <li className="flex items-center gap-2">🌿 Healthy Skin</li>
          </ul>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#F5B841] text-black px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#e0a73a] transition-all">
              Explore Products
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#2F7D7C] transition-all">
              Shop Now
            </button>
          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="relative flex flex-col items-center lg:items-start px-6 py-16 lg:pl-40 lg:pr-16 lg:py-20 bg-[#F5F6F6]">

          {/* ===== SAPSAA WATERMARK ===== */}
          <div className="absolute top-12 left-24 pointer-events-none">
  <h1
    className="text-[90px] md:text-[130px] lg:text-[150px] font-extrabold leading-none select-none text-[#e8e8e8]"
    style={{
      WebkitTextStroke: "1px rgba(0,0,0,0.18)",
      textShadow: "0 6px 15px rgba(0,0,0,0.06)"
    }}
  >
    SAPSAA
  </h1>
</div>

          {/* ===== TABS ===== */}
          <div className="relative z-10 flex flex-wrap justify-center lg:justify-start gap-3 mb-12 mt-32 lg:mt-40 w-full">
            <button className="bg-[#2F7D7C] text-white px-8 py-3 rounded-full text-sm font-bold shadow-md">
              Can
            </button>
            <button className="bg-white text-gray-500 border border-gray-200 px-8 py-3 rounded-full text-sm font-semibold hover:shadow-sm">
              Water bottle
            </button>
            <button className="bg-white text-gray-500 border border-gray-200 px-8 py-3 rounded-full text-sm font-semibold hover:shadow-sm">
              Tulsi water
            </button>
          </div>

          {/* ===== PRODUCT CARDS ===== */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
            <ProductCard title="Jumbo Can" size="5 Litre" />
            <ProductCard title="Water bottle" size="1 Litre" />
          </div>

        </div>
      </div>

      {/* ================= CENTER BOTTLE ================= */}
      {/* ================= CENTER BOTTLE WITH HOTSPOT ================= */}
<div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-[35%] -translate-y-1/2 z-20">

  <div className="relative w-[420px]">

    <img
      src={bottleImg}
      alt="Center Bottle"
      className="w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] object-contain"
    />

    {/* ===== HOTSPOT FIXED TO BOTTLE EDGE ===== */}
   <div className="absolute top-[35%] left-1/2 -translate-x-[120px] group">

      {/* + Button */}
      <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#2F7D7C] text-2xl font-bold cursor-pointer hover:scale-110 transition-all">
        +
      </div>

      {/* Tooltip */}
      <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-[#2F7D7C] text-white text-sm px-5 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap shadow-lg">
        Minerals
      </div>

    </div>

  </div>
</div>

    </section>
  );
};

const ProductCard = ({ title, size }) => {
  return (
    <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-50 flex flex-col items-center group hover:shadow-xl transition-all duration-500">
      
      <div className="h-40 lg:h-52 flex items-center justify-center mb-6">
        <img
          src={bottleImg}
          alt={title}
          className="h-full w-auto object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="w-full text-center">
        <div className="flex justify-between items-center px-2 mb-6">
          <span className="text-gray-900 font-bold text-lg">{title}</span>
          <span className="text-gray-400 font-medium text-sm">{size}</span>
        </div>

        <button className="w-12 h-12 rounded-full bg-[#2F7D7C] text-white flex items-center justify-center text-3xl mx-auto shadow-lg hover:bg-[#246362] active:scale-90 transition-all">
          +
        </button>
      </div>
    </div>
  );
};

export default WaterProductsSection;