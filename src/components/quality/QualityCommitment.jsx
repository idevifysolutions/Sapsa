import React from 'react';

const QualityCommitment = () => {
    const wrapperStyle = {
        width: '100%',
        backgroundColor: '#ffffff',
        padding: '60px 0',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: "'Inter', 'Poppins', sans-serif",
    };

    const mainContainerStyle = {
        width: '1446px',
        backgroundColor: '#f1f7fa',
        border: '1px solid #e1e8ed',
        borderRadius: '16px',
        padding: '50px 80px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
    };

 const titleStyle = {
  fontSize: '32px',
  fontWeight: 600,
  fontFamily: "'Poppins', sans-serif",
  color: '#000000',
  marginBottom: '16px',
  textAlign: 'left',
  lineHeight: '1.2',
};

  const descriptionStyle = {
  fontSize: '20px',
  fontWeight: 400,
  fontFamily: "'Inter', sans-serif",
  color: '#444444',
  lineHeight: '1.5',
  marginBottom: '40px',
  textAlign: 'left',
  maxWidth: '100%',
};

    const gridStyle = {
        display: 'flex',
        gap: '24px',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: '40px',
    };

    const cardStyle = {
        width: '266px',
        height: '300px',
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        border: 'none',
        position: 'relative',
    };


    const cardTopStyle = (imagePath) => ({
        height: '180px',
        width: '100%',
        backgroundImage: `url(${imagePath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 20%',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#e6f0f5',
        position: 'relative',
    });

    // Green footer with React text
    const cardBottomStyle = {
        backgroundColor: '#006972',
        height: '120px',
        width: '100%',
        padding: '20px',
        color: '#ffffff',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        zIndex: 10,
        borderBottomLeftRadius: '16px',
        borderBottomRightRadius: '16px',
        boxSizing: 'border-box',
    };

    // Card title style
    const cardTitleStyle = {
        fontFamily: "'Inter', sans-serif",
        fontWeight: 600,
        fontSize: '24px',
        lineHeight: '100%',
        letterSpacing: '0%',
        color: '#FFFFFF',
        margin: '0 0 8px 0',
        width: '100%',
        height: '26px',
        display: 'flex',
        alignItems: 'center',
        whiteSpace: 'nowrap',
    };

    // Card subtitle style
    const cardSubtextStyle = {
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '100%',
        letterSpacing: '0%',
        color: '#FFFFFF',
        margin: '0',
        width: '100%',
        height: '28px',
        display: 'flex',
        alignItems: 'center',
        whiteSpace: 'nowrap',
    };

    const cardsData = [
        {
            id: 1,
            image: '/images/k1.png',
            mainText: '99.9% Pure',
            subText: 'Pristine water With 99% Purity.'
        },
        {
            id: 2,
            image: '/images/k2.png',
            mainText: '100+ Quality Tests',
            subText: 'Rigorous Testing for safety.'
        },
        {
            id: 3,
            image: '/images/k3.png',
            mainText: 'PH Balanced',
            subText: 'Optimal PH level of 7.4'
        },
        {
            id: 4,
            image: '/images/k4.png',
            mainText: 'Triple Filtration',
            subText: 'Advanced triple filtration method.'
        }
    ];

    return (
        <div style={wrapperStyle}>
            <div style={mainContainerStyle}>
                <h2 style={titleStyle}>Our Commitment To Quality</h2>

                <p style={descriptionStyle}>
                    At Sapsaa, We are dedicated to delivering the purest and safest form of water to consumer.
                    Our rigorous testing and state-of-the-art purification processes ensure that every bottle of
                    sapsaa water meets the highest quality standards.
                </p>

                <div style={gridStyle}>
                    {cardsData.map((card) => (
                        <div key={card.id} style={cardStyle}>
                            {/* Top part with background image - only icon visible */}
                            <div style={{
                                height: '180px',
                                width: '100%',
                                backgroundImage: `url(${card.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center 20%',
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: '#e6f0f5',
                            }} />

                            {/* Green footer with React text */}
                            <div style={cardBottomStyle}>
                                <h3 style={cardTitleStyle}>{card.mainText}</h3>
                                <p style={cardSubtextStyle}>{card.subText}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QualityCommitment;