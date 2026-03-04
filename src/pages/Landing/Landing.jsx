import HeroSection from "../../components/home/HeroSection";
import AboutQualitySection from "../../components/home/AboutQualitySection";
import ProductsPreview from "../../components/home/ProductsPreview";
import HowItWorks from "../../components/home/HowItWorks";
const Landing = () => {
    return (
        <div className="page landing">
            <HeroSection />
            <AboutQualitySection />
            <ProductsPreview />
            <HowItWorks />
        </div>
    );
};

export default Landing;
