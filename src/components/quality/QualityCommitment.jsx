


import React from 'react';

const QualityCommitment = () => {

    const wrapperStyle = {
        width: '100%',
        backgroundColor: '#ffffff',
        padding: '60px 20px',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: "'Inter', 'Poppins', sans-serif",
    };

    const mainContainerStyle = {
        width: '100%',
        maxWidth: '1446px',
        backgroundColor: '#f1f7fa',
        border: '1px solid #e1e8ed',
        borderRadius: '16px',
        padding: '40px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
    };

    const titleStyle = {
        fontSize: 'clamp(24px,4vw,32px)',
        fontWeight: 600,
        fontFamily: "'Poppins', sans-serif",
        color: '#000000',
        marginBottom: '16px',
    };

    const descriptionStyle = {
        fontSize: 'clamp(16px,2vw,20px)',
        fontWeight: 400,
        fontFamily: "'Inter', sans-serif",
        color: '#444444',
        lineHeight: '1.4',
        marginBottom: '40px',
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
        height: '266px',
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        
        
       
    };

    const cardBottomStyle = {
        backgroundColor: '#006972',
        height: '120px',
        width: '100%',
        padding: '20px',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        borderBottomLeftRadius: '16px',
        borderBottomRightRadius: '16px',
        boxSizing: 'border-box',
    };

    const cardTitleStyle = {
        fontWeight: 600,
        fontSize: '22px',
        color: '#FFFFFF',
        marginBottom: '6px',
    };

    const cardSubtextStyle = {
        fontWeight: 400,
        fontSize: '15px',
        color: '#FFFFFF',
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

                            <div style={{
                                height: '260px',
                                width: '100%',
                                backgroundImage: `url(${card.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center 20%',
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: '#e6f0f5',
                               
                              
                            }} />
                            

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