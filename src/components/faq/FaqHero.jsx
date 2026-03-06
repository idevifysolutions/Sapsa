export default function FaqHero() {
  return (
    <section className="relative mt-20 w-full h-[240px] sm:h-[300px] md:h-[380px] lg:h-[420px] overflow-hidden">

      {/* Background Image */}
      <img
        src="/images/Faqbg.png"
        alt="FAQ Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Teal overlay */}
      <div className="absolute inset-0 bg-secondary/30"></div>

    </section>
  );
}