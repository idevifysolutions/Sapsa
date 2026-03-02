import React from "react";
import sapImg from "../../assets/about/sap.png";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#F5F6F6] py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-center text-[32px] font-semibold text-[#1A1A1A] mb-16">
          Why Choose Us?
        </h2>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT IMAGE */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src={sapImg}
              alt="Water is Life"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT CARD */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-md p-10 relative">
            
            <h3 className="text-center text-[20px] font-semibold mb-10">
              A Trusted Name in Bottled Water Industry
            </h3>

            {/* Two Column Features */}
            <div className="grid grid-cols-2 gap-y-10 relative">

              {/* Vertical Divider */}
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-300 -translate-x-1/2"></div>

              {/* Left Column */}
              <div className="text-center px-6">
                <h4 className="font-semibold mb-2">Maximum Purity</h4>
                <p className="text-gray-600 text-sm leading-[1.6]">
                  Our processing plant ensures the best purity
                </p>
              </div>

              <div className="text-center px-6">
                <h4 className="font-semibold mb-2">Chlorine Free</h4>
                <p className="text-gray-600 text-sm leading-[1.6]">
                  Get the chlorine and heavy metal free water
                </p>
              </div>

              <div className="text-center px-6">
                <h4 className="font-semibold mb-2">5 Step Filtration</h4>
                <p className="text-gray-600 text-sm leading-[1.6]">
                  Multiple step filtering ensure the best quality water
                </p>
              </div>

              <div className="text-center px-6">
                <h4 className="font-semibold mb-2">Healthy Water</h4>
                <p className="text-gray-600 text-sm leading-[1.6]">
                  We maintain a balanced physical PH level of water
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;