// This component is the page for displaying players who are "trending up" in performance.
import { Container, Spinner } from "react-bootstrap";
import { usePlayerData } from '../hooks/usePlayerData';
import PlayerCard from './PlayerCard';

export default function TrendingUp() {
    const { top100Players, isLoading } = usePlayerData();

    const trendingUpPlayers = top100Players.filter(p => p.trend === 'UP');

    return (
        <Container fluid>
            <h1>Trending Up Players (from Top 100)</h1>
            <p>This page displays players from the top 100 list who are currently performing better than their recent baseline.</p>
            
            {isLoading ? (
                <div className="text-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                <div>
                    {trendingUpPlayers.map((player) => (
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