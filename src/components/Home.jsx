// This component serves as the home page of the application, providing a welcome message.
import { Container, Spinner } from "react-bootstrap";
import { usePlayerData } from '../hooks/usePlayerData';
import PlayerCard from './PlayerCard';

export default function Home() {
    const { top100Players, isLoading } = usePlayerData();

    return (
        <Container fluid>
            <h1>Top 100 Fantasy Players (PPR)</h1>
            <p>Welcome to the Fantasy Football Player Trends application. Here are the top 100 players based on Points Per Game.</p>
            
            {isLoading ? (
                <div className="text-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                <div>
                    {top100Players.map((player, index) => (
                        <PlayerCard key={player.player_id} player={player} rank={index + 1} />
                    ))}
                </div>
            )}
        </Container>
    );
}