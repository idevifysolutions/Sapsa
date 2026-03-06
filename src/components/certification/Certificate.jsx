const governmentCertificates = [
  {
    title: "BIS Certified",
    subtitle: "Bureau Of Indian standards Approved",
    logo: "/images/BisLogo.png",
    certificate: "/images/BIScertificate.png",
  },
  {
    title: "FSSAI License",
    subtitle: "Food Safety Standards Authority",
    logo: "/images/fssailogo.png",
    certificate: "/images/FassaiCerti.png",
  },
  {
    title: "ISI Mark Certification",
    subtitle: "ISI Mark Licensed Product",
    logo: "/images/ISIMark.png",
    certificate: "/images/BIScertificate.png",
  },
];

const qualityCertificates = [
  {
    title: "ISO 9001 Certified",
    subtitle: "",
    logo: "/images/ISOlogo.png",
    certificate: "/images/BIScertificate.png",
  },
  {
    title: "BIS Certified",
    subtitle: "",
    logo: "/images/BisLogo.png",
    certificate: "/images/BIScertificate.png",
  },
  {
    title: "BIS Certified",
    subtitle: "",
    logo: "/images/BisLogo.png",
    certificate: "/images/BIScertificate.png",
  },
];

function CertificateCard({ item }) {
  return (
    <div className="bg-white rounded-sm p-4 shadow-sm border border-border hover:shadow-md transition flex gap-4 items-start">

      {/* Certificate Preview */}
      <div className="w-[90px] h-[120px] bg-muted rounded-md overflow-hidden flex-shrink-0">
        <img
          src={item.certificate}
          alt={`${item.title} Certificate`}
          className="w-full h-full object-cover"
        />
      </div>


      {/* Content */}
      <div className="flex flex-col flex-1">

        {/* Header */}
        <div className="flex items-center gap-2 mb-2">

          <img
            src={item.logo}
            alt=""
            className="h-6"
          />

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {item.title}
            </h3>

            {item.subtitle && (
              <p className="text-xs text-muted-foreground leading-tight">
                {item.subtitle}
              </p>
            )}
          </div>

        </div>


        {/* Buttons */}
        <div className="flex flex-col gap-2 mt-2">

          {/* View Certificate */}
          <button className="bg-primary text-white text-xs py-1.5 rounded-md flex items-center justify-center gap-2">
            View Certificate
            <span>👁</span>
          </button>


          {/* Download Certificate */}
          <button className="border border-primary text-primary text-xs py-1.5 rounded-md flex items-center justify-center gap-2">

            Download Certificate

            <img
              src="/images/DownloadCertificate.png"
              className="h-3"
              alt=""
            />

          </button>

        </div>

      </div>

    </div>
  );
}

export default function Certificate() {
  return (
    <section className="bg-background py-20">

      <div className="max-w-6xl mx-auto px-6">

        {/* GOVERNMENT */}
        <h2 className="font-semibold text-lg mb-6">
          Government Certificates:
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-14">

          {governmentCertificates.map((item, i) => (
            <CertificateCard key={i} item={item} />
          ))}

        </div>


        {/* QUALITY */}
        <h2 className="font-semibold text-lg mb-6">
          Quality & Safety Certificates:
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {qualityCertificates.map((item, i) => (
            <CertificateCard key={i} item={item} />
          ))}

        </div>


        {/* Bottom Text */}
        <div className="text-center mt-16">

          <h3 className="text-3xl font-semibold text-primary">
            Certified By the Best. Purified with Sapsaa.
          </h3>

        </div>

      </div>

    </section>
  );
}