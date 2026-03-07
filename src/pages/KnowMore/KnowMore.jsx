import React from 'react';
import bottleImg from '../../assets/about/bottle.png';

const KnowMore = () => {
    return (
        <div className="w-full bg-[#4D8C90] text-white font-['Poppins'] pt-[40px]">

            {/* 1. Hero Section */}
            <section className="max-w-[1440px] mx-auto px-6 py-12 md:py-20">
                {/* Outer Card Container */}
                <div className=" flex flex-col md:flex-row items-center py-8 md:py-0 px-6 md:px-0 md:pl-[119px] gap-8 md:gap-10 overflow-hidden">

                    {/* Left: Image with loc.png Background */}
                    <div className="relative flex flex-col items-center flex-shrink-0 w-[650px] h-auto mt-[-100px]">
                        {/* loc.png Background Shape */}
                        <img
                            src="/images/loc.png"
                            alt="Location Pin"
                            className="w-full h-auto object-contain drop-shadow-[-10px_3px_20.7px_rgba(0,0,0,0.25)] relative z-10"
                        />
                        {/* Floor Shadow */}
                        <div
                            style={{
                                width: "256px",
                                height: "14px",
                                backgroundColor: "#756969",
                                opacity: "0.26",
                                borderRadius: "50%",
                                marginTop: "-45px",
                                marginLeft: "-250px",
                                position: "relative",
                                zIndex: "0"
                            }}
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="flex flex-col gap-8 flex-1 pt-0 pb-12">
                        <div>
                            <span className="font-semibold text-[36px] leading-[100%] text-black" style={{ fontFamily: "Poppins", fontWeight: "600", display: "block" }}>Your Daily</span>
                            <h1 style={{ fontFamily: "Poppins", fontWeight: "800", fontSize: "96px", lineHeight: "100%", color: "#FFFFFF", opacity: "0.72" }}>
                                WATER
                            </h1>
                            <h2 style={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "96px", lineHeight: "100%", color: "#FFFFFF", margin: "0", marginTop: "-12px" }}>
                                DELIVERED
                            </h2>
                        </div>

                        <p className="text-[16px] text-[#1A1A1A] font-medium leading-[1.6] max-w-[550px]">
                            Sapsaa provides purified, mineral-balanced packed drinking water with
                            reliable home, office, and bulk delivery services—ensuring safe,
                            fresh, and convenient hydration every day.
                        </p>

                        <div className="flex flex-col gap-5">
                            <h3 className="text-[28px] font-bold text-[#1A1A1A]">OUR SERVICES</h3>
                            <ul className="flex flex-col gap-4 text-[#1A1A1A] font-medium">
                                <li className="flex items-center gap-4 text-[16px]">
                                    <span className="w-2 h-2 bg-[#1A1A1A] rounded-full shrink-0"></span>
                                    Fast and Reliable Home Delivery
                                </li>
                                <li className="flex items-center gap-4 text-[16px]">
                                    <span className="w-2 h-2 bg-[#1A1A1A] rounded-full shrink-0"></span>
                                    100% Purified Drinking water
                                </li>
                                <li className="flex items-center gap-4 text-[16px]">
                                    <span className="w-2 h-2 bg-[#1A1A1A] rounded-full shrink-0"></span>
                                    Flexible Subscription Plan
                                </li>
                                <li className="flex items-center gap-4 text-[16px]">
                                    <span className="w-2 h-2 bg-[#1A1A1A] rounded-full shrink-0"></span>
                                    Emergency Service Available
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Working Process Section */}
            <section className="bg-[#4D8C90] pb-32 px-6 pt-10">
                <div className="max-w-[1440px] mx-auto flex flex-col items-center">

                    <div className="text-center mb-24 text-white">
                        <h2 className="text-[36px] md:text-[45px] font-bold mb-5 drop-shadow-sm">Our Working Process</h2>
                        <p className="max-w-[650px] mx-auto text-[16px] md:text-[18px] leading-relaxed">
                            We've made ordering pure drinking water easy and hassle-free.<br />
                            Just follow three simple steps and your hydration is taken care of.
                        </p>
                    </div>

                    {/* Steps Container - Merged Cards Style, No Gaps */}
                    <div className="w-full max-w-[1100px] mt-6 relative pb-10">
                        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-8 relative z-10">

                            {/* Step 1: Chat With Us */}
                            <div className="relative bg-white rounded-[10px] p-6 pt-12 w-[376px] h-[261px] flex flex-col items-center text-center text-[#1a4d4d] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] z-0 flex-shrink-0">
                                <div className="absolute -top-[50px] left-1/2 -translate-x-1/2 w-[100px] h-[100px] bg-[#0A564E] rounded-full flex items-center justify-center border-[4px] border-[#4D8C90] shadow-md">
                                    <img src="/images/i1.png" alt="Chat" className="w-[50px] h-[50px] object-contain" />
                                </div>
                                <h4 className="text-[22px] font-bold mb-4 text-[#1A1A1A]">Chat With Us</h4>
                                <div className="text-[16px] leading-[100%] text-gray-700 font-['Inter'] font-semibold">
                                    Have questions or ready to order? <span className="font-normal">Click "Chat With Us" and share your requirements — quantity, delivery address, and schedule.</span> Our team will respond promptly and process your order with care.
                                </div>
                            </div>

                            {/* Step 2: Order Getting Ready */}
                            <div className="relative bg-[#006972] p-6 pt-12 w-[376px] h-[261px] flex flex-col items-center text-center text-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] z-10 rounded-[10px] flex-shrink-0">
                                {/* Overlapping Icon */}
                                <div className="absolute -top-[45px] left-1/2 -translate-x-1/2 w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center shadow-md border-[4px] border-[#4D8C90]">
                                    <img src="/images/i2.png" alt="Order" className="w-[50px] h-[50px] object-contain" />
                                </div>
                                <h4 className="text-[22px] font-bold mb-4">Order Getting Ready</h4>
                                <div className="text-[16px] leading-[100%] text-white/95 font-['Inter'] font-semibold">
                                    Your request has been received and our team is preparing your order with care. <span className="font-normal">You will receive confirmation and delivery details shortly.</span> Pure hydration is on its way.
                                </div>
                            </div>

                            {/* Step 3: Delivery At your Doorstep */}
                            <div className="relative bg-white rounded-[10px] p-6 pt-12 w-[376px] h-[261px] flex flex-col items-center text-center text-[#1a4d4d] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] z-0 flex-shrink-0">
                                {/* Overlapping Icon */}
                                <div className="absolute -top-[50px] left-1/2 -translate-x-1/2 w-[100px] h-[100px] bg-[#0A564E] rounded-full flex items-center justify-center border-[4px] border-[#4D8C90] shadow-md">
                                    <img src="/images/i3.png" alt="Delivery" className="w-[50px] h-[50px] object-contain" />
                                </div>
                                <h4 className="text-[22px] font-bold mb-4 text-[#1A1A1A]">Delivery At your Doorstep</h4>
                                <div className="text-[16px] leading-[100%] text-gray-700 font-['Inter'] font-semibold">
                                    Enjoy safe and pure hydration without stepping out. <span className="font-normal">We deliver fresh, quality-checked water bottles directly to your home or office — on time, every time.</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default KnowMore;
