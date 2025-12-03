// This component is the page for displaying players who are "trending up" in performance.
import { Container, Spinner } from "react-bootstrap";
import { useState } from 'react';
import { usePlayerData } from '../hooks/usePlayerData';
import PlayerCard from './PlayerCard';
import FilterControls from './FilterControls';

export default function TrendingUp() {
    const { top100Players, isLoading } = usePlayerData();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedPositions, setSelectedPositions] = useState([]);

    const trendingUpPlayers = top100Players.filter(p => p.trend === 'UP');

    const filteredPlayers = trendingUpPlayers.filter(player => {
        const matchesName = player.full_name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesPosition = selectedPositions.length === 0 || selectedPositions.includes(player.position);
        return matchesName && matchesPosition;
    });

    return (
        <Container fluid>
            <div className="d-flex justify-content-between align-items-end mb-4">
                <div>
                    <h1>Trending Up Players (from Top 100)</h1>
                    <p className="mb-0">This page displays the football players from the top 100 list who are currently performing better in recent weeks than their season average.</p>
                </div>
                <FilterControls 
                    searchQuery={searchQuery} 
                    setSearchQuery={setSearchQuery} 
                    selectedPositions={selectedPositions} 
                    setSelectedPositions={setSelectedPositions} 
                />
            </div>
            
            {isLoading ? (
                <div className="text-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : filteredPlayers.length === 0 ? (
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
                    <h2 className="display-4 text-center">No Players Available</h2>
                </div>
            ) : (
                <div>
                    {filteredPlayers.map((player) => (
                        <PlayerCard 
                            key={player.player_id} 
                            player={player} 
                            rank={top100Players.findIndex(p => p.player_id === player.player_id) + 1} 
                        />
                    ))}
                </div>
            )}
        </Container>
    );
}