// This component displays the "About" page, which describes the purpose of the application
// and its various pages.
import { Container } from "react-bootstrap";

export default function About() {
    return (
        <Container fluid>
            <h1>About This Application</h1>
            <p>
                This application is designed to help fantasy football players identify players who are currently trending up or down based on their recent performance compared to their season average.
            </p>
            
            <h3>Home Page</h3>
            <p>The home page displays a ranked list of the top 100 fantasy football players based on their season-long Points Per Game (PPG) average in a PPR (Points Per Reception) format.</p>

            <h3>Trending Up Page</h3>
            <p>This page filters the top 100 list to show only players who are "trending up." A player is considered to be trending up if their current season-long PPG is higher than their season-long PPG from two weeks prior. This indicates a recent surge in performance.</p>

            <h3>Trending Down Page</h3>
            <p>This page filters the top 100 list to show only players who are "trending down." A player is considered to be trending down if their current season-long PPG is lower than their season-long PPG from two weeks prior. This indicates a recent decline in performance.</p>

            <h3>Favorites Page</h3>
            <p>You can add players to your favorites list to easily track their performance. Your favorites are saved in your browser session.</p>
        </Container>
    );
}