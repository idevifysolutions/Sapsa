import React from 'react';
// Correct imports based on your assets/about folder structure
import searchIcon from '../../assets/about/Search.svg';
import treatIcon from '../../assets/about/Supplement_Bottle.svg';
import consultationIcon from '../../assets/about/Consultation.svg';
// Assuming the blue wave graphic is saved as wave-bg.svg
import waveBg from '../../assets/about/waves.svg'; 

const services = [
  {
    title: "Search For Service",
    desc: "Sapsaa's smart water search helps you easily find the perfect bottle size and delivery option based on your needs. With quick and accurate results, it ensures a smooth and hassle-free hydration experience every time.",
    icon: searchIcon,
  },
  {
    title: "Treat your Water",
    desc: "Sapsaa offers advanced purified packaged drinking water with balanced minerals, ensuring safe, hygienic, and healthy daily hydration.",
    icon: treatIcon,
  },
  {
    title: "Water Consultation",
    desc: "Get expert guidance from Sapsaa to choose the right purified packaged drinking water for your home or business, ensuring a safe, hygienic, and reliable water supply made simple.",
    icon: consultationIcon,
  },
];

const ServicesCards = () => {
  return (
    <section className="relative w-full py-20 bg-white font-['Poppins'] overflow-hidden">
      
      {/* 1. Wave Background - Matches the blue curved graphic in Figma image_340698.png */}
      <div className="absolute top-[45%] left-0 w-full h-auto z-0 pointer-events-none transform -translate-y-1/2">
        <img 
          src={waveBg} 
          alt="Wave Background" 
          className="w-full object-cover opacity-80" 
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 flex flex-col items-center">
        
        {/* Section Heading - Matches 196x41px visual ratio */}
        <div className="text-center mb-6">
          <h3 className="text-[32px] md:text-[40px] font-bold inline-block border-b-[5px] border-black pb-2 leading-tight">
            Our Products and Services
          </h3>
        </div>
        
        {/* Sub-description - Constraints to 926px width */}
        <p className="max-w-[926px] text-center text-gray-800 text-[16px] md:text-[18px] mb-16 leading-relaxed font-normal">
          Our packed drinking water is purified through advanced RO and UV filtration to ensure every drop is clean, safe, 
          and refreshing. Hygienically bottled and quality tested, we deliver purity you can trust every day.
        </p>

        {/* 2. Cards Grid - Matches 321x356px Figma dimensions */}
        <div className="flex flex-wrap justify-center gap-[40px] lg:gap-[55px]">
          {services.map((item, index) => (
            <div
              key={index}
              className="w-[321px] h-[356px] bg-white border border-[#BEB3B3] rounded-[10px] p-8 flex flex-col items-center shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300"
            >
              {/* Icon Container - Matches Figma 115x126px */}
              <div className="w-[115px] h-[126px] mb-6 flex items-center justify-center">
                <img 
                  src={item.icon} 
                  alt={item.title} 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title - Matches Inter SemiBold 20px */}
              <h4 className="font-['Inter'] font-semibold text-[20px] mb-4 text-[#1a4d4d] text-center">
                {item.title}
              </h4>

              {/* Description - Matches Inter 14px centered */}
              <p className="font-['Inter'] text-[14px] text-gray-600 leading-[1.6] text-center px-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 3. "Know More" Button - Matches Figma Pill Outline */}
        <div className="mt-16">
          <button className="px-14 py-3 border-[1.5px] border-[#1a4d4d] text-[#1a4d4d] rounded-full text-[18px] font-medium hover:bg-[#1a4d4d] hover:text-white transition-all duration-300 active:scale-95">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;