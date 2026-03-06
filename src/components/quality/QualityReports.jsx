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
        <section style={{ backgroundColor: '#ffffff', padding: '60px 0' }}>

            <div style={{ width: '1340px', margin: '0 auto' }}>
                <h2 style={{
                    width: '715px',
                    height: '60px',
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    fontSize: '48px',
                    lineHeight: '100%',
                    color: '#111827',
                    marginBottom: '40px',
                    textAlign: 'left',
                    padding: 0,
                    margin: '0 0 40px 0'
                }}>
                    Quality Report  We have:
                </h2>

                {/* Report List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
                    {reports.map((report, i) => (
                        <div key={i} style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>

                            {/* Label + Download Icon - Aligned to the far left */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px', textAlign: 'left' }}>
                                <span style={{
                                    width: 'fit-content',
                                    height: '72px',
                                    fontFamily: "'Poppins', sans-serif",
                                    fontWeight: 600,
                                    fontSize: '48px',
                                    lineHeight: '100%',
                                    color: '#111827',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    {report.label}
                                </span>
                                <button
                                    title="Download Report"
                                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                                >
                                    <img
                                        src="/images/download.png"
                                        alt="Download"
                                        style={{ width: '40px', height: '40px', objectFit: 'contain' }}
                                    />
                                </button>
                            </div>

                            {/* Certificate Image - 1100x777 CENTERED within the 1340px container */}
                            <div style={{
                                border: '1px solid #e5e7eb',
                                borderRadius: '4px',
                                overflow: 'hidden',
                                width: '1100px',
                                height: '777px',
                                margin: '0 auto' // This centers the certificate specifically
                            }}>
                                <img
                                    src={report.image}
                                    alt={`${report.label} Certificate`}
                                    style={{ width: '1100px', height: '777px', objectFit: 'cover' }}
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
