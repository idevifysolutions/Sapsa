
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
    <section style={{ backgroundColor: "#ffffff", padding: "40px 20px" }}>
      <div style={{ maxWidth: "1340px", margin: "0 auto" }}>

        <h5
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(26px, 5vw, 48px)",
            color: "#111827",
            marginBottom: "40px",
            paddingLeft: "30px",
          }}
        >
          Quality Report We have:
        </h5>

        <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
          {reports.map((report, i) => (
            <div key={i} style={{ width: "100%" }}>

              {/* Label + Download */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                  marginBottom: "20px",
                  paddingLeft: "30px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(22px,4vw,42px)",
                    color: "#111827",
                  }}
                >
                  {report.label}
                </span>

                <button
                  title="Download Report"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src="/images/download.png"
                    alt="Download"
                    style={{
                      width: "28px",
                      height: "28px",
                    }}
                  />
                </button>
              </div>

              {/* Certificate Image */}
              <div
                style={{
                  width: "100%",
                  maxWidth: "900px",
                  margin: "0 auto",
                  border: "1px solid #e5e7eb",
                  borderRadius: "6px",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
              >
                <img
                  src={report.image}
                  alt={`${report.label} Certificate`}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
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