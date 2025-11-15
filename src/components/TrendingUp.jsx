// This component is the page for displaying players who are "trending up" in performance.
import { Container, Table, Spinner } from "react-bootstrap";
import { usePlayerData } from '../hooks/usePlayerData';

export default function TrendingUp() {
    const { top100Players, isLoading } = usePlayerData();

    const trendingUpPlayers = top100Players.filter(p => p.trend === 'UP');

    return (
        <Container fluid>
            <h1>Trending Up Players (from Top 100)</h1>
            <p>This page displays players from the top 100 list who are currently performing better than their recent baseline along with their season rank in PPG.</p>
            
            {isLoading ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Team</th>
                            <th>PPG</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trendingUpPlayers.map((player) => (
                            <tr key={player.player_id}>
                                <td>{top100Players.findIndex(p => p.player_id === player.player_id) + 1}</td>
                                <td>{player.full_name}</td>
                                <td>{player.position}</td>
                                <td>{player.team || 'N/A'}</td>
                                <td>{player.current_ppg}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </Container>
    );
}