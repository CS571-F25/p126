// This component is the page for displaying players who are "trending down" in performance.
import { Container } from "react-bootstrap";

export default function TrendingDown() {
    return (
        <Container fluid>
            <h1>Trending Down Players</h1>
            <p>This page will display players who are performing worse than their season average.</p>
        </Container>
    );
}
