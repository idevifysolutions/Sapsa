import React from 'react';
import bottleImg from '../../assets/about/bottle.png';
import aboutSideImg from '../../assets/about/about_side.svg';

const AboutHero = () => {
  return (
    <div className="w-full bg-white font-['Poppins']">
      
      {/* 1. Hero Section - Now truly edge-to-edge */}
      <section className="w-full">
        <div className="w-full h-[400px] md:h-[694px] overflow-hidden">
          <img
            src={bottleImg}
            alt="Sapsaa Water Hero"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* 2. About Us Content Section - Removed pt-[60px] to close the gap */}
      <section className="w-full mx-auto flex flex-col items-center pt-12 pb-16 px-6">
        
        {/* Section Heading */}
        <div className="flex justify-center mb-10">
          <h2 className="text-[32px] font-semibold text-center border-b-[3px] border-black pb-1 leading-none inline-block">
            About Us
          </h2>
        </div>

        {/* Content Layout Grid - Max width applied only to content for readability */}
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-start justify-center gap-10 lg:gap-[52px] w-full">
          
          {/* Left Column: Side Image */}
          <div className="shrink-0">
            <img
              src={aboutSideImg}
              alt="Hydration Lifestyle"
              className="w-[289px] h-[327px] rounded-[10px] object-cover shadow-sm"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full md:flex-1 flex flex-col gap-6 text-gray-900 pt-2">
            <p className="text-[16px] md:text-[18px] leading-[1.6] font-normal">
              Sapsaa Water delivers premium packaged drinking water processed in advanced purification 
              plants. We follow strict standards set by the Bureau of Indian Standards (BIS) and the Food Safety 
              and Standards Authority of India (FSSAI) to ensure safety and quality. Our advanced multi-stage 
              purification system includes sediment filtration, activated carbon treatment, RO purification, UV 
              disinfection, and ozonization to remove impurities and harmful microorganisms.
            </p>
            <p className="text-[16px] md:text-[18px] leading-[1.6] font-normal">
              Every batch is regularly tested in certified laboratories to maintain balanced TDS levels, ideal pH, 
              and refreshing taste. Packed in hygienic, food-grade bottles using automated systems, Sapsaa 
              ensures clean, safe, and trusted hydration for your family and workplace.
            </p>
          </div>
          
        </div>
      </section>
      
    </div>
  );
};

export default AboutHero;