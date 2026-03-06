import React from "react";
import sapImg from "../../assets/about/sap.png";

import DropIcon from "../../assets/about/Drop.svg";
import VectorIcon from "../../assets/about/Vector.svg";
import Vector1Icon from "../../assets/about/Recycling.svg";
import WavesIcon from "../../assets/about/Vector (1).svg";
import CurvyDivider from "../../assets/about/v.svg";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#F5F6F6] py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Title */}
        <h2 className="text-center text-[36px] font-bold text-[#1A1A1A] mb-16">
          Why Choose Us?
        </h2>

        {/* Layout */}
        <div className="grid lg:grid-cols-[55%_45%] gap-10 items-stretch">

          {/* LEFT IMAGE CARD */}
          <div className="rounded-[28px] overflow-hidden shadow-lg h-[480px]">
            <img
              src={sapImg}
              alt="Water is Life"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white rounded-[28px] border border-gray-100 shadow-lg h-[480px] p-10 flex flex-col justify-center relative">

            <h3 className="text-center text-[22px] font-bold mb-12 text-[#1A1A1A]">
              A Trusted Name in Bottled Water Industry
            </h3>

            {/* Features */}
            <div className="grid grid-cols-2 gap-y-12 relative">

              {/* Divider */}
              <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 pointer-events-none">
                <img
                  src={CurvyDivider}
                  alt="divider"
                  className="h-full opacity-30"
                />
              </div>

              <FeatureItem
                icon={DropIcon}
                title="Maximum Purity"
                desc="Our processing plant ensures the best purity"
              />

              <FeatureItem
                icon={VectorIcon}
                title="Chlorine Free"
                desc="Get the chlorine and heavy metal free water"
              />

              <FeatureItem
                icon={Vector1Icon}
                title="5 Step Filtration"
                desc="Multiple step filtering ensure the best quality water"
              />

              <FeatureItem
                icon={WavesIcon}
                title="Healthy Water"
                desc="We maintain a balanced physical PH level of water"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center text-center px-3">
    <div className="mb-4 w-12 h-12 flex items-center justify-center">
      <img src={icon} alt={title} className="w-full h-full object-contain" />
    </div>

    <h4 className="font-bold text-[#1A1A1A] text-base mb-2">
      {title}
    </h4>

    <p className="text-gray-500 text-xs leading-relaxed max-w-[160px]">
      {desc}
    </p>
  </div>
);

export default WhyChooseUs;