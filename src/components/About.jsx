import { Container } from "react-bootstrap";

export default function About() {
    return (
        <Container fluid>
            <h1>About This Application</h1>
            <p>
                This application is designed to help fantasy football players identify players who are currently trending up or down based on their recent performance compared to their season average.
            </p>

            <h2>Pages</h2>
            
            <h3>Home</h3>
            <p>The home page provides a welcome and an overview of the application.</p>

            <h3>Trending Up</h3>
            <p>This page displays a list of players who have been performing better than their season-long fantasy point average in recent games.</p>

            <h3>Trending Down</h3>
            <p>This page displays a list of players who have been performing worse than their season-long fantasy point average in recent games.</p>

            <h3>Favorites</h3>
            <p>You can add players to your favorites list to easily track their performance. Your favorites are saved in your browser session.</p>
        </Container>
    );
}