const WaterProductsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12">
          Our Water Products
        </h3>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-blue-50 rounded-xl shadow">
            <h4 className="font-semibold">500ml Bottle</h4>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl shadow">
            <h4 className="font-semibold">1L Bottle</h4>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl shadow">
            <h4 className="font-semibold">20L Jar</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaterProductsSection;