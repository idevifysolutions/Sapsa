import React from 'react';
import QualityHero from "../../components/quality/QualityHero";
import QualityCommitment from "../../components/quality/QualityCommitment";
import QualityAnalysis from "../../components/quality/QualityAnalysis";
import QualityReports from "../../components/quality/QualityReports";

const Quality = () => {

    const pageStyle = {
        width: '100%',
        maxWidth: '1441px',
        margin: '0 auto',
        position: 'relative',
        backgroundColor: '#ffffff',
    };

    return (
        <div className="page quality" style={pageStyle}>
            <QualityHero />
            <QualityCommitment />
            <QualityAnalysis />
            <QualityReports />
        </div>
    );
};

export default Quality;