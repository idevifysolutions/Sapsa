const reports = [
    {
        label: "FSSAI  Report",
        image: "/images/j1.jpg",
    },
    {
        label: "FSSAI Report",
        image: "/images/j1.jpg",
    },
];

const QualityReports = () => {
    return (
        <section className="bg-white py-12 px-4">
            <div className="max-w-[860px] mx-auto">

                {/* Main Heading */}
                <h2 className="text-[22px] md:text-[26px] font-bold text-gray-900 mb-8">
                    Quality Report  We have:
                </h2>

                {/* Report List */}
                <div className="space-y-10">
                    {reports.map((report, i) => (
                        <div key={i}>

                            {/* Label + Download Icon */}
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-[17px] md:text-[19px] font-bold text-gray-900">
                                    {report.label}
                                </span>
                                <button
                                    title="Download Report"
                                    className="w-[30px] h-[30px] flex items-center justify-center hover:opacity-80 transition-opacity"
                                >
                                    <img
                                        src="/images/download.png"
                                        alt="Download"
                                        className="w-[26px] h-[26px] object-contain"
                                    />
                                </button>
                            </div>

                            {/* Certificate Image */}
                            <div className="border border-gray-200 rounded-sm overflow-hidden max-w-[440px]">
                                <img
                                    src={report.image}
                                    alt={`${report.label} Certificate`}
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default QualityReports;
