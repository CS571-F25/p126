// This component displays the "About" page, which describes the purpose of the application
// and its various pages.
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <Container fluid>
            <h1>About This Application</h1>
            <p>
                This application is designed to help fantasy football players identify the NFL players who are currently trending up or down based on their recent performance compared to their season average. Navigate to any page using the tab bar at the top, or by clicking the page links down below. You can save any player as a favorite by clicking the star on their player card, or remove them by doing the same. You can also click on any player card to see their expected and total points for every game this season. A player who is trending up is indicated with an upward green arrow, while a player trending down is indicated with a downward red arrow. Players who are at their season average recently have a yellow dash to indicate that. Search and filter players at the top of any player list, and if you can't find your favorite player in the top 100 list, they may not be performing well enough this season to be included in the current top 100 players in Fantasy Football! Player stats and information are pulled from Sleeper and the Sleeper Fantasy Football API.
            </p>
            
            <h3 className="mt-5 mb-3">Home Page</h3>
            <p>The <Link to="/">Home Page</Link> displays a ranked list of the top 100 fantasy football players based on their season-long Points Per Game (PPG) average in a PPR (Points Per Reception) format.</p>

            <h3 className="mt-5 mb-3">Trending Up Page</h3>
            <p>The <Link to="/trending-up">Trending Up Page</Link> filters the top 100 list to show only players who are "trending up." A player is considered to be trending up if their current season-long PPG is higher than their season-long PPG from two weeks prior. This indicates a recent surge in performance as the player's season points average has increased over the last two weeks.</p>

            <h3 className="mt-5 mb-3">Trending Down Page</h3>
            <p>The <Link to="/trending-down">Trending Down Page</Link> filters the top 100 list to show only players who are "trending down." A player is considered to be trending down if their current season-long PPG is lower than their season-long PPG from two weeks prior. This indicates a recent decline in performance as the player's season points average has decreased over the last two weeks.</p>

            <h3 className="mt-5 mb-3">Favorites Page</h3>
            <p>The <Link to="/favorites">Favorites Page</Link> contains the players you have selected by clicking the yellow star to favorite them. Your favorites are saved in your browser session until you close out so you can compare and easily track your favorite players.</p>
        </Container>
    );
}