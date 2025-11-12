// This component serves as the home page of the application, providing a welcome message.
import { Container } from "react-bootstrap";

export default function Home(props) {
  return (
    <Container fluid>
      <h1>Fantasy Football Player Trends</h1>
      <p>Welcome to the Fantasy Football Player Trends application. Use the navigation bar to explore players who are trending up, trending down, or to view your favorite players.</p>
    </Container>
  );
}