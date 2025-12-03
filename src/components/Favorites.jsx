// This component is the page for displaying players that the user has marked as favorites.
import { Container, Spinner } from "react-bootstrap";
import { usePlayerData } from "../hooks/usePlayerData";
import { useFavorites } from "../hooks/useFavorites.jsx";
import PlayerCard from "./PlayerCard";

export default function Favorites() {
    const { top100Players, isLoading } = usePlayerData();
    const { favorites } = useFavorites();

    // Filter players who are in the favorites list
    const favoritePlayers = top100Players.filter(player => favorites.includes(player.player_id));

    return (
        <Container fluid>
            <h1>My Favorites</h1>
            <p>
                Here are the players you are tracking. Keep an eye on their performance and trends!
            </p>
            
            {isLoading ? (
                <Container fluid className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
                    <Spinner animation="border" role="status" variant="light">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Container>
            ) : favoritePlayers.length === 0 ? (
                <p className="text-white">You haven't favorited any players from the Top 100 yet.</p>
            ) : (
                favoritePlayers.map((player) => {
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
