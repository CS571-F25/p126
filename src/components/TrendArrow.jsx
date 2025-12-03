import React from 'react';

export default function TrendArrow({ trend }) {
    const containerStyle = {
        height: '35px',
        width: '35px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '3rem', // Doubled from 1.5rem
        fontWeight: 'bold',
        borderRadius: '5px',
        lineHeight: '1', // Ensure line height doesn't mess up vertical alignment
    };

    let content = '-';
    let color = '#ffc107'; // warning yellow for SAME

    if (trend === 'UP') {
        content = '↑';
        color = '#28a745'; // success green
    } else if (trend === 'DOWN') {
        content = '↓';
        color = '#dc3545'; // danger red
    }

    return (
        <div style={{ ...containerStyle, color: color }} title={`Trending ${trend}`}>
            {content}
        </div>
    );
}
