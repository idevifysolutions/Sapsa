const faqs = [
    "Why is water essential for humans life?",
    "How long can bottled water be stored?",
    "Why is clean drinking water important?",
    "How do you check if water is safe to drink?",
    "How is packaged drinking water purified?"
];

export default function FaqForm() {
    return (
        <section className="py-20 bg-muted">

            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

                {/* FAQ LEFT */}
                <div className="space-y-4">

                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="
              flex justify-between items-center
              border border-border
              rounded-tl-md
              rounded-br-md
              px-5 py-3
              bg-white
              shadow-xs
              cursor-pointer
              "
                        >
                            <p className="text-sm text-foreground">
                                {faq}
                            </p>

                            <span className="text-primary text-lg font-semibold">
                                +
                            </span>
                        </div>
                    ))}

                </div>


                {/* FORM RIGHT */}
                <div className="bg-primary text-primary-foreground rounded-tl-[40px] rounded-br-[40px] p-8 shadow-lg">

                    <h3 className="font-semibold mb-6">
                        Fill The Form
                    </h3>

                    <form className="grid grid-cols-2 gap-4">

                        <input
                            type="text"
                            placeholder="Name"
                            className="px-3 py-2 text-sm bg-white text-black outline-none"
                        />

                        <input
                            type="text"
                            placeholder="Email"
                            className="px-3 py-2 text-sm bg-white text-black outline-none"
                        />

                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="px-3 py-2 text-sm bg-white text-black outline-none"
                        />

                        <input
                            type="text"
                            placeholder="Address"
                            className="px-3 py-2 text-sm bg-white text-black outline-none"
                        />

                        <input
                            type="text"
                            placeholder="No. of Bottle"
                            className="px-3 py-2 text-sm bg-white text-black outline-none"
                        />

                        {/* Submit */}
                        <button
                            type="submit"
                            className="
              col-span-2
              bg-[#fcc028]
              text-primary-foreground
              py-2
              text-sm
              font-medium
              mt-2
              "
                        >
                            Submit
                        </button>

                    </form>

                </div>

            </div>

        </section>
    );
}