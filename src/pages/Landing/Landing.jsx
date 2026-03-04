import HeroSection from "../../components/home/HeroSection";
import AboutQualitySection from "../../components/home/AboutQualitySection";
import ProductsPreview from "../../components/home/ProductsPreview";
const Landing = () => {
    return (
        <div className="page landing">
            <HeroSection />
            <AboutQualitySection />
            <ProductsPreview />
        </div>
    );
};

export default Landing;
