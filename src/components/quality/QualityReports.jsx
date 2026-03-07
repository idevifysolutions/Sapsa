const reports = [
  {
    label: "FSSAI Report",
    image: "/images/j1.jpg",
  },
  {
    label: "FSSAI Report",
    image: "/images/j1.jpg",
  },
];

const QualityReports = () => {
  return (
    <section className="bg-white py-16">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-10 pl-3">
          Quality Report We have:
        </h2>

        {/* Report List */}
        <div className="flex flex-col gap-12">

          {reports.map((report, i) => (
            <div key={i} className="flex flex-col w-full">

              {/* Label + Download */}
              <div className="flex items-center gap-4 mb-6 pl-3">

                <span className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900">
                  {report.label}
                </span>

                <button
                  title="Download Report"
                  className="hover:scale-105 transition"
                >
                  <img
                    src="/images/download.png"
                    alt="Download"
                    className="w-6 h-6 md:w-7 md:h-7 object-contain"
                  />
                </button>

              </div>

              {/* Certificate */}
              <div className="border border-gray-200 rounded-md overflow-hidden w-full max-w-[900px] mx-auto">

                <img
                  src={report.image}
                  alt={report.label}
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