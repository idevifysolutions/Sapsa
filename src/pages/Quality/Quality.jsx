import QualityHero from "../../components/quality/QualityHero";
import QualityCommitment from "../../components/quality/QualityCommitment";
import QualityAnalysis from "../../components/quality/QualityAnalysis";
import QualityReports from "../../components/quality/QualityReports";

const Quality = () => {
    return (
        <div className="page quality">
            <QualityHero />
            <QualityCommitment />
            <QualityAnalysis />
            <QualityReports />
        </div>
    );
};

export default Quality;
