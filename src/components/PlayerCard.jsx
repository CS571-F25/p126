import { Card, Image } from 'react-bootstrap';
import './PlayerCard.css';

export default function PlayerCard({ player, rank }) {
    if (!player) {
        return null;
    }

    const logoUrl = player.team 
        ? `https://sleepercdn.com/images/team_logos/nfl/${player.team.toLowerCase()}.png`
        : '';

    return (
        <Card className="player-card mb-2">
            <Card.Body className="d-flex align-items-center py-1 px-3 position-relative">
                {/* Left Group */}
                <div className="d-flex align-items-center left-group">
                    <div className="placeholder-favorite">★</div>
                    <div className="player-rank">{rank}</div>
                    <div className="player-logo">
                        {player.team && <Image src={logoUrl} alt={`${player.team} logo`} />}
                    </div>
                    <div className="player-name">{player.full_name || 'Unknown Player'}</div>
                </div>

                {/* Right Aligned Group */}
                <div className="d-flex align-items-center right-aligned-group">
                    <div className="vertical-line"></div>
                    <div className="player-info">{player.position}</div>
                    <div className="player-info">{player.team || 'N/A'}</div>
                    <div className="player-ppg">
                        <span className="fw-bold">{player.current_ppg}</span>
                        <span className="ms-1 small">PPG</span>
                    </div>
                    <div className="placeholder-injury">INJ</div>
                    <div className="placeholder-trend">↑</div>
                </div>
            </Card.Body>
        </Card>
    );
}