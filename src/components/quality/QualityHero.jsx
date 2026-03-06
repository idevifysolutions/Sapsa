import React from 'react';

const QualityHero = () => {
  return (
    <div style={{
      position: 'relative',
      width: '100vw',
      marginLeft: 'calc(-50vw + 50%)',
      marginRight: 'calc(-50vw + 50%)',
      left: 0,
      right: 0
    }}>
      <img
        src="/images/quality_report.jpg"
        alt="Quality Report"
        style={{
          width: '100%',
          height: '730px',
          display: 'block'
        }}
      />
    </div>
  );
};

export default QualityHero;