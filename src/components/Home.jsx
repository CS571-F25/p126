// This component serves as the home page of the application, providing a welcome message.
import { Container, Spinner } from "react-bootstrap";
import { useState } from 'react';
import { usePlayerData } from '../hooks/usePlayerData';
import PlayerCard from './PlayerCard';
import FilterControls from './FilterControls';

export default function Home() {
    const { top100Players, isLoading } = usePlayerData();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedPositions, setSelectedPositions] = useState([]);

    const filteredPlayers = top100Players.filter(player => {
        const matchesName = player.full_name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesPosition = selectedPositions.length === 0 || selectedPositions.includes(player.position);
        return matchesName && matchesPosition;
    });

    return (
        <Container fluid>
            <div className="d-flex justify-content-between align-items-end mb-4">
                <div>
                    <h1>Top 100 Fantasy Players (PPR)</h1>
                    <p className="mb-0">Welcome to the Fantasy Football Player Trends application. Here are the top 100 players based on Points Per Game.</p>
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
            ) : (
                <div>
                    {filteredPlayers.map((player) => {
                        // Find original rank
                        const originalRank = top100Players.findIndex(p => p.player_id === player.player_id) + 1;
                        return <PlayerCard key={player.player_id} player={player} rank={originalRank} />;
                    })}
                </div>
            )}
        </Container>
    );
}