import { useState } from "react";

const faqData = [
  {
    question: "How can I know if drinking water is safe to consume?",
    answer:
      "Source water is water collected directly from a natural source like springs, borewells, or underground aquifers. It comes from a specific location before being purified and packaged. This ensures the water has a natural origin and traceable source.",
  },
  {
    question: "What are the common impurities found in drinking water?",
    answer:
      "Common impurities include bacteria, viruses, dissolved salts, heavy metals, and organic contaminants. Modern purification processes remove these to make water safe for consumption.",
  },
  {
    question: "How is packaged drinking water purified before bottling?",
    answer:
      "Packaged drinking water is purified through processes such as filtration, reverse osmosis, UV treatment, and ozonation to ensure safety and quality.",
  },
  {
    question:
      "What is the difference between RO, UV, and UF water purification methods?",
    answer:
      "RO removes dissolved salts and heavy metals, UV kills microorganisms, and UF removes suspended particles and bacteria using a membrane.",
  },
  {
    question: "Does purified water still contain essential minerals?",
    answer:
      "Some purification systems remove minerals, but many packaged water companies add balanced minerals back to improve taste and health benefits.",
  },
  {
    question: "How often should water quality be tested?",
    answer:
      "Water quality should be tested regularly at certified laboratories to ensure it meets safety and quality standards.",
  },
  {
    question:
      "How can I check the quality standards of bottled water before buying?",
    answer:
      "Check the label for certifications such as BIS, FSSAI, and ISO standards, which indicate compliance with safety and quality guidelines.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">FAQ’S</h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left font-medium text-gray-900"
              >
                <span>{faq.question}</span>

                <span className="text-2xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}