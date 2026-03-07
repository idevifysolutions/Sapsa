export default function ContactSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#b4d3d5]">

      {/* Background */}
      <img
        src="/images/contactbg.png"
        alt="water background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-16 md:pt-20 pb-32 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

        {/* Left Content */}
        <div className="z-10 max-w-xl text-center lg:text-left mx-auto lg:mx-0">

          <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-heading font-bold text-black mb-4">
            Get In Touch With Us
          </h2>

          <p className="text-[14px] sm:text-[15px] text-foreground mb-6 leading-relaxed">
            We’re here to deliver purity to you. <br />
            Contact us for orders, Dealership, or support.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="bg-primary text-white px-6 py-2 font-semibold rounded-sm text-[14px] shadow-sm">
              Call Now
            </button>

            <button className="bg-white text-primary px-6 py-2 font-semibold rounded-sm text-[14px] shadow-sm">
              Send Message
            </button>
          </div>
        </div>

        {/* Bottle Section */}
        <div className="relative hidden lg:flex justify-center lg:justify-end">

          {/* Bottle */}
          <img
            src="/images/contactbottlebg.png"
            alt="water bottle"
            className="max-h-[300px] sm:max-h-[360px] lg:max-h-[420px] z-20 object-contain"
          />

          {/* Bottle Base */}
          <img
            src="/images/waterbottlebase.png"
            alt="water base"
            className="absolute top-60 right-20 w-[250px] sm:w-[240px] lg:w-[280px] z-10 object-contain"
          />

        </div>
      </div>

      {/* Contact Cards */}
      <div className="relative max-w-7xl mx-auto px-6 -mt-20 pb-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* Visit */}
          <div className="flex gap-4 items-start bg-[#7faeb1]/60 p-5 sm:p-6 rounded-sm">

            <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#5d969b] shrink-0">
              <img src="/images/contactLocation.png" className="w-5 h-5" />
            </div>

            <div>
              <h4 className="font-semibold text-[15px] sm:text-[16px] mb-1">
                Visit Us
              </h4>

              <p className="text-[13px] sm:text-[14px] text-black/70 leading-relaxed">
                123 Pure water Road <br />
                Nagpur, Maharashtra-445304
              </p>
            </div>

          </div>

          {/* Call */}
          <div className="flex gap-4 items-start bg-[#7faeb1]/70 p-5 sm:p-6 rounded-sm">

            <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#5d969b] shrink-0">
              <img src="/images/contactCall.png" className="w-5 h-5" />
            </div>

            <div>
              <h4 className="font-semibold text-[15px] sm:text-[16px] mb-1">
                Call Us
              </h4>

              <p className="text-[13px] sm:text-[14px] text-black/70 leading-relaxed">
                +91 9090286765 <br />
                +91 9090286765
              </p>
            </div>

          </div>

          {/* Email */}
          <div className="flex gap-4 items-start bg-[#7faeb1]/70 p-5 sm:p-6 rounded-sm">

            <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#5d969b] shrink-0">
              <img src="/images/contactmail.png" className="w-5 h-5" />
            </div>

            <div>
              <h4 className="font-semibold text-[15px] sm:text-[16px] mb-1">
                Email Us
              </h4>

              <p className="text-[13px] sm:text-[14px] text-black/70 leading-relaxed">
                sapsaa@123gmail.com <br />
                sapsaa@123gmail.com
              </p>
            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/40"></div>

      </div>

    </section>
  );
}