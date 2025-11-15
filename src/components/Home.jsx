// This component serves as the home page of the application, providing a welcome message.
import { Container, Table, Spinner } from "react-bootstrap";
import { usePlayerData } from '../hooks/usePlayerData';

export default function Home() {
    const { top100Players, isLoading } = usePlayerData();

    return (
        <Container fluid>
            <h1>Top 100 Fantasy Players (PPR)</h1>
            <p>Welcome to the Fantasy Football Player Trends application. Here are the top 100 players based on Points Per Game.</p>
            
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
                        {top100Players.map((player, index) => (
                            <tr key={player.player_id}>
                                <td>{index + 1}</td>
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