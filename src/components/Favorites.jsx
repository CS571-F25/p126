// This component is the page for displaying players that the user has marked as favorites.
import { Container, Spinner } from "react-bootstrap";
import { useState } from 'react';
import { usePlayerData } from "../hooks/usePlayerData";
import { useFavorites } from "../hooks/useFavorites.jsx";
import PlayerCard from "./PlayerCard";
import FilterControls from './FilterControls';

export default function Favorites() {
    const { top100Players, isLoading } = usePlayerData();
    const { favorites } = useFavorites();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedPositions, setSelectedPositions] = useState([]);

    // Filter players who are in the favorites list
    const favoritePlayers = top100Players.filter(player => favorites.includes(player.player_id));

    const filteredPlayers = favoritePlayers.filter(player => {
        const matchesName = player.full_name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesPosition = selectedPositions.length === 0 || selectedPositions.includes(player.position);
        return matchesName && matchesPosition;
    });

    return (
        <Container fluid>
            <div className="d-flex justify-content-between align-items-end mb-4">
                <div>
                    <h1>My Favorites</h1>
                    <p className="mb-0">
                        Here are the players you are tracking as favorites. If no players are displayed, go to any of the player lists and click the yellow star to favorite them!
                    </p>
                </div>
                <FilterControls 
                    searchQuery={searchQuery} 
                    setSearchQuery={setSearchQuery} 
                    selectedPositions={selectedPositions} 
                    setSelectedPositions={setSelectedPositions} 
                />
            </div>
            
            {isLoading ? (
                <Container fluid className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
                    <Spinner animation="border" role="status" variant="light">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Container>
            ) : filteredPlayers.length === 0 ? (
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
                    <h2 className="display-4 text-center">No Players Available</h2>
                </div>
            ) : (
                filteredPlayers.map((player) => {
                    // Find the original rank in the top 100 list
                    const originalRank = top100Players.findIndex(p => p.player_id === player.player_id) + 1;
                    return (
                        <PlayerCard 
                            key={player.player_id} 
                            player={player} 
                            rank={originalRank} 
                        />
                    );
                })
            )}
        </Container>
    );
}
