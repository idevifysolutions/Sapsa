import React from "react";
import riderImg from "../../assets/about/rider.svg";

const DeliverySection = () => {
  return (
    <section className="relative overflow-hidden">
      
      {/* Background Gradient */}
      <div className="bg-gradient-to-r from-[#0f6c6c] to-[#7fb3b3] py-24">
        
        <div className="max-w-[1100px] mx-auto px-6 grid lg:grid-cols-2 items-center gap-12">
          
          {/* LEFT - Rider Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={riderImg}
              alt="Delivery Rider"
              className="w-[520px] max-w-full object-contain"
            />
          </div>

          {/* RIGHT - Content */}
          <div className="text-white">
            
            <h2 className="text-[34px] font-semibold leading-[1.3] mb-6">
              Ready to get our Premium <br />
              Water delivery service.
            </h2>

            <p className="text-white/80 mb-8 max-w-[480px] leading-[1.6]">
              Ready to experience our premium water delivery service, bringing pure,
              refreshing hydration straight to your doorstep?
            </p>

            {/* Bullet Points */}
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">
                  ✓
                </span>
                Free delivery
              </li>

              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">
                  ✓
                </span>
                7 Days in a week service
              </li>

              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">
                  ✓
                </span>
                40% off over bulk orders
              </li>
            </ul>

            {/* Button */}
            <button className="bg-white text-[#0f6c6c] px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition duration-300">
              Our Services
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;