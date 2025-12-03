import { useState, useEffect, createContext, useContext } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState(() => {
        const stored = sessionStorage.getItem('fantasyFavorites');
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        sessionStorage.setItem('fantasyFavorites', JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (playerId) => {
        setFavorites(prev => {
            if (prev.includes(playerId)) {
                return prev.filter(id => id !== playerId);
            } else {
                return [...prev, playerId];
            }
        });
    };

    const isFavorite = (playerId) => favorites.includes(playerId);

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    return useContext(FavoritesContext);
}
