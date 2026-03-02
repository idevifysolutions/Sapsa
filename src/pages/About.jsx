import AboutHero from "../components/about/AboutHero";

import ServicesCards from "../components/about/ServicesCards";
import CertificationsSection from "../components/about/CertificationsSection";
import QualityFeatures from "../components/about/QualityFeatures";
import DeliverySection from "../components/about/DeliverySection";
import WaterProductsSection from "../components/about/WaterProductsSection";
import WhyChooseUs from "../components/about/WhyChooseUs";

const About = () => {
  return (
    <>
      <AboutHero />
      <ServicesCards />
      <CertificationsSection />
      <QualityFeatures />
      <DeliverySection />
      <WaterProductsSection />
      <WhyChooseUs />
    </>
  );
};

export default About;