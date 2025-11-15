// This component is the page for displaying players who are "trending down" in performance.
import { Container, Spinner } from "react-bootstrap";
import { usePlayerData } from '../hooks/usePlayerData';
import PlayerCard from './PlayerCard';

export default function TrendingDown() {
    const { top100Players, isLoading } = usePlayerData();

    const trendingDownPlayers = top100Players.filter(p => p.trend === 'DOWN');

    return (
        <Container fluid>
            <h1>Trending Down Players (from Top 100)</h1>
            <p>This page displays players from the top 100 list who are currently performing worse than their recent baseline.</p>
            
            {isLoading ? (
                <div className="text-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                <div>
                    {trendingDownPlayers.map((player) => (
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