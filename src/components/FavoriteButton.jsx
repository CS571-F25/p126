import React from 'react';

export default function FavoriteButton({ isFavorite, onToggle }) {
    const containerStyle = {
        height: '35px',
        width: '35px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000', // Black background
        border: '1px solid #000000', // Black outline (matches background)
        borderRadius: '5px', // Rounded corners like "Card" shape
        cursor: 'pointer',
        fontSize: '1.5rem',
        lineHeight: '0', // Changed from 1 to 0 to remove line-height bias
        paddingBottom: '3px', // Slight visual adjustment to lift the star
        userSelect: 'none',
        transition: 'all 0.2s ease-in-out'
    };

    const starStyle = {
        color: isFavorite ? '#ffc107' : '#6c757d', // Yellow if favorite, Grey if not
        transition: 'color 0.2s ease-in-out'
    };

    return (
        <div 
            style={containerStyle} 
            onClick={(e) => {
                e.stopPropagation(); // Prevent triggering card click if any
                onToggle();
            }}
            title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        >
            <span style={starStyle}>★</span>
        </div>
    );
}
