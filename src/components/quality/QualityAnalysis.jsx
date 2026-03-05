const CheckBox = () => (
    <div className="w-[22px] h-[22px] rounded-[4px] border-2 border-[#006972] flex items-center justify-center flex-shrink-0 bg-white">
        <svg className="w-3.5 h-3.5 text-[#006972]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    </div>
);

const params = [
    { label: "Purity Level", value: "99.9% Pure" },
    { label: "PH Level", value: "Optimal PH 7.4" },
    { label: "TDS Level", value: "0.0 PPM Safe" },
    { label: "Bacteria Count", value: "No Bacteria Detected" },
    { label: "Heavy  Metals", value: "Heavy Metals Free" },
    { label: "Chlorine", value: "Chlorine Free" },
];

const QualityAnalysis = () => {
    return (
        <section className="relative w-full overflow-hidden">

            {/* Background — quality bottles with nature */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/quality_bottles.png')" }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-[500px] py-10 px-4 lg:px-20 max-w-[1440px] mx-auto gap-8">

                {/* Left — empty space where bottles in bg image are visible */}
                <div className="hidden lg:block flex-1" />

                {/* Right — White frosted card */}
                <div className="w-full lg:w-[480px] bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl px-8 py-8">

                    {/* Title */}
                    <h2 className="text-[20px] md:text-[24px] font-bold text-gray-900 text-center mb-1">
                        Quality Analysis Report
                    </h2>
                    <p className="text-center text-gray-500 text-[13px] leading-relaxed mb-7">
                        Water Quality Parameters, Sapsaa Checks all<br />Quality Tests.
                    </p>

                    {/* 2-column checklist */}
                    <div className="space-y-4 mb-8">
                        {params.map((p, i) => (
                            <div key={i} className="grid grid-cols-2 gap-4 items-center">
                                {/* Label col */}
                                <div className="flex items-center gap-2.5">
                                    <CheckBox />
                                    <span className="text-[13px] md:text-sm text-gray-800 font-medium">{p.label}</span>
                                </div>
                                {/* Value col */}
                                <div className="flex items-center gap-2.5">
                                    <CheckBox />
                                    <span className="text-[13px] md:text-sm text-gray-700">{p.value}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Download Button */}
                    <button className="w-full bg-[#006972] hover:bg-[#00555e] text-white py-3.5 rounded-xl font-semibold text-[14px] flex items-center justify-center gap-2.5 shadow-md transition-all duration-300 active:scale-95">
                        Download Full Quality Report
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </button>

                </div>
            </div>
        </section>
    );
};

export default QualityAnalysis;
