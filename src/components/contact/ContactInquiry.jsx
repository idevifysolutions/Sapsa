export default function ContactInquiry() {
    return (
        <section className="w-full bg-[#b4d3d5] py-16">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">

                {/* LEFT SIDE */}
                <div className="h-full flex flex-col justify-between">

                    <div>
                        <h3 className="text-[24px] font-semibold text-[#1e3a3d] mb-3">
                            Have a question or bulk order inquiry?
                        </h3>

                        <p className="text-[16px] text-[#1e3a3d] mb-8 leading-relaxed">
                            Fill out the form and our team will contact you within <br />
                            24 hours.
                        </p>
                    </div>

                    {/* Map Section */}
                    <div>

                        <div className="flex items-center gap-3 mb-4">
                            <img src="/images/contactLocation.png" className="w-5 h-5" />
                            <span className="font-semibold text-[14px] text-[#1e3a3d]">
                                Find Us Here
                            </span>
                        </div>

                        <div className="rounded-md overflow-hidden shadow-sm border border-white/40">
                            <img
                                src="/images/contactmap.png"
                                alt="map"
                                className="w-full h-[220px] object-cover"
                            />
                        </div>

                    </div>

                </div>

                {/* RIGHT SIDE FORM */}
                <div className="flex justify-center lg:justify-end">

                    <div className="bg-card p-8 rounded-lg shadow-md w-full max-w-[500px]">

                        <form className="space-y-5">

                            {/* Name */}
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-1">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    className="w-full bg-input border border-border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-ring outline-none"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-1">
                                    Phone Number
                                </label>

                                <input
                                    type="text"
                                    className="w-full bg-input border border-border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-ring outline-none"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-1">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    className="w-full bg-input border border-border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-ring outline-none"
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-1">
                                    Subject
                                </label>

                                <textarea
                                    rows="4"
                                    className="w-full bg-input border border-border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-ring outline-none resize-none"
                                />
                            </div>

                            {/* Button */}
                            <div className="flex justify-center pt-2">
                                <button
                                    type="submit"
                                    className="bg-primary text-primary-foreground px-14 py-2 rounded-sm font-semibold shadow-sm hover:opacity-90 transition"
                                >
                                    Submit Enquiry
                                </button>
                            </div>

                        </form>

                    </div>

                </div>

            </div>
        </section>
    );
}