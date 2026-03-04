import HeroSection from "../../components/home/HeroSection";
import AboutQualitySection from "../../components/home/AboutQualitySection";
import ProductsPreview from "../../components/home/ProductsPreview";
import HowItWorks from "../../components/home/HowItWorks";
import Testimonials from "../../components/home/Testimonials";
import Herocta from "../../components/home/Herocta";
const Landing = () => {
    return (
        <div className="page landing">
            <HeroSection />
            <AboutQualitySection />
            <ProductsPreview />
            <HowItWorks />
            <Testimonials />
            <Herocta />
        </div>
    );
};

export default Landing;
