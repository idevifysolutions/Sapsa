import React, { useState } from 'react';

// Checkbox component with state
const CheckBox = ({ checked = false, onClick }) => (
    <div
        onClick={onClick}
        style={{
            width: '22px',
            height: '22px',
            borderRadius: '4px',
            border: '2px solid #006972',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            backgroundColor: checked ? '#006972' : 'transparent',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
        }}
    >
        {checked && (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 13l4 4L19 7" />
            </svg>
        )}
    </div>
);

const QualityAnalysis = () => {
    // State for checkboxes
    const [checkedItems, setCheckedItems] = useState({
        purityLabel: false,
        purityValue: false,
        phLabel: false,
        phValue: false,
        tdsLabel: false,
        tdsValue: false,
        bacteriaLabel: false,
        bacteriaValue: false,
        heavyMetalsLabel: false,
        heavyMetalsValue: false,
        chlorineLabel: false,
        chlorineValue: false,
    });

    const toggleCheckbox = (key) => {
        setCheckedItems(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };


    const containerStyle = {
        width: '100vw',              // Viewport width
        height: '736px',
        position: 'relative',
        overflow: 'hidden',
        // Yeh teen properties center karne ke saath full width karengi
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        left: 0,
        right: 0,
    };

    // Background style - ab ye poori width cover karega
    const backgroundStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: "url('/images/back_bottle.png')",
        backgroundSize: 'cover',      // 'cover' rakhenge taaki image properly fit ho
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 1,
    };

    const contentStyle = {
        position: 'relative',
        zIndex: 2,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: '80px',

    };

    const cardStyle = {
        width: '598px',
        height: '635px',
        backgroundColor: 'rgba(125, 243, 253, 0.62)',
        opacity: 0.71,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderRadius: '10px',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        padding: '40px 32px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        display: 'flex',
        flexDirection: 'column',
    };

    const titleStyle = {
        width: '402px',
        height: '47px',
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        fontSize: '32px',
        lineHeight: '100%',
        color: '#000000',
        textAlign: 'center',
        margin: '0 auto 8px auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const subtitleStyle = {
        width: '514px',
        height: '157px',
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400,
        fontSize: '24px',
        lineHeight: '100%',
        color: '#000000',
        textAlign: 'center',
        margin: '0 auto 40px auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const paramsContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        marginBottom: '32px',
    };

    const rowStyle = {
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
        gap: '20px',
        alignItems: 'center',
    };

    const cellStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    };

    const labelStyle = {
        width: '252px',
        height: '29px',
        fontFamily: "'Inter', sans-serif",
        fontSize: '24px',
        fontWeight: 400,
        lineHeight: '100%',
        color: '#000000',
        textShadow: '0 1px 2px rgba(0,0,0,0.2)',
        display: 'flex',
        alignItems: 'center',
    };

    const valueStyle = {
        width: '252px',
        height: '29px',
        fontFamily: "'Inter', sans-serif",
        fontSize: '24px',
        fontWeight: 400,
        lineHeight: '100%',
        color: '#000000',
        textShadow: '0 1px 2px rgba(0,0,0,0.2)',
        display: 'flex',
        alignItems: 'center',
    };

    const buttonStyle = {
        width: '546px',
        height: '48px',
        backgroundColor: '#006972',
        color: 'white',
        borderRadius: '10px',
        fontWeight: 600,
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        alignSelf: 'center',
        border: '1px solid rgba(255, 255, 255, 0.1)',
    };

    return (
        <div style={containerStyle}>
            <div style={backgroundStyle} />
            <div style={contentStyle}>
                <div style={cardStyle}>
                    <h2 style={titleStyle}>
                        Quality Analysis Report
                    </h2>
                    <p style={subtitleStyle}>
                        Water Quality Parameters, Sapsaa Checks all<br />Quality Tests.
                    </p>

                    <div style={paramsContainerStyle}>
                        {/* Purity Level */}
                        <div style={rowStyle}>
                            <div style={cellStyle}>
                                <CheckBox
                                    checked={checkedItems.purityLabel}
                                    onClick={() => toggleCheckbox('purityLabel')}
                                />
                                <span style={labelStyle}>Purity Level</span>
                            </div>
                            <div style={cellStyle}>
                                <CheckBox
                                    checked={checkedItems.purityValue}
                                    onClick={() => toggleCheckbox('purityValue')}
                                />
                                <span style={valueStyle}>99.9% Pure</span>
                            </div>
                        </div>

                        {/* PH Level */}
                        <div style={rowStyle}>
                            <div style={cellStyle}>
                                <CheckBox
                                    checked={checkedItems.phLabel}
                                    onClick={() => toggleCheckbox('phLabel')}
                                />
                                <span style={labelStyle}>PH Level</span>
                            </div>
                            <div style={cellStyle}>
                                <CheckBox
                                    checked={checkedItems.phValue}
                                    onClick={() => toggleCheckbox('phValue')}
                                />
                                <span style={valueStyle}>Optimal PH 7.4</span>
                            </div>
                        </div>

                        {/* TDS Level */}
                        <div style={rowStyle}>
                            <div style={cellStyle}>
                                <CheckBox
                                    checked={checkedItems.tdsLabel}
                                    onClick={() => toggleCheckbox('tdsLabel')}
                                />
                                <span style={labelStyle}>TDS Level</span>
                            </div>
                            <div style={cellStyle}>
                                <CheckBox
                                    checked={checkedItems.tdsValue}
                                    onClick={() => toggleCheckbox('tdsValue')}
                                />
                                <span style={valueStyle}>0.0 PPM Safe</span>
                            </div>
                        </div>

                        {/* Bacteria Count */}
                        <div style={rowStyle}>
                            <div style={cellStyle}>
                                <CheckBox
                                    checked={checkedItems.bacteriaLabel}
                                    onClick={() => toggleCheckbox('bacteriaLabel')}
                                />
                                <span style={labelStyle}>Bacteria Count</span>
                            </div>
                            <div style={cellStyle}>
                                <CheckBox
                                    checked={checkedItems.bacteriaValue}
                                    onClick={() => toggleCheckbox('bacteriaValue')}
                                />
                                <span style={valueStyle}>No Bacteria Detected</span>
                            </div>
                        </div>

                        {/* Heavy Metals */}
                        <div style={rowStyle}>
                            <div style={cellStyle}>
                                <CheckBox
                                    checked={checkedItems.heavyMetalsLabel}
                                    onClick={() => toggleCheckbox('heavyMetalsLabel')}
                                />
                                <span style={labelStyle}>Heavy Metals</span>
                            </div>
                            <div style={cellStyle}>
                                <CheckBox
                                    checked={checkedItems.heavyMetalsValue}
                                    onClick={() => toggleCheckbox('heavyMetalsValue')}
                                />
                                <span style={valueStyle}>Heavy Metals Free</span>
                            </div>
                        </div>

                        {/* Chlorine */}
                        <div style={rowStyle}>
                            <div style={cellStyle}>
                                <CheckBox
                                    checked={checkedItems.chlorineLabel}
                                    onClick={() => toggleCheckbox('chlorineLabel')}
                                />
                                <span style={labelStyle}>Chlorine</span>
                            </div>
                            <div style={cellStyle}>
                                <CheckBox
                                    checked={checkedItems.chlorineValue}
                                    onClick={() => toggleCheckbox('chlorineValue')}
                                />
                                <span style={valueStyle}>Chlorine Free</span>
                            </div>
                        </div>
                    </div>

                    <button
                        style={buttonStyle}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d5dfe0ff'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#006972'}
                        onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                        onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        Download Full Quality Report
                        <img
                            src="/images/download.png"
                            alt="Download Icon"
                            style={{ width: '28px', height: '28px', marginLeft: '10px' }}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QualityAnalysis;