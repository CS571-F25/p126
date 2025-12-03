import { Card, Image } from 'react-bootstrap';
import { useState } from 'react';
import InjuryBadge from './InjuryBadge';
import TrendArrow from './TrendArrow';
import FavoriteButton from './FavoriteButton';
import PlayerModal from './PlayerModal';
import { useFavorites } from '../hooks/useFavorites.jsx';
import './PlayerCard.css';

export default function PlayerCard({ player, rank }) {
    const { isFavorite, toggleFavorite } = useFavorites();
    const [showModal, setShowModal] = useState(false);

    if (!player) {
        return null;
    }

    const logoUrl = player.team 
        ? `https://sleepercdn.com/images/team_logos/nfl/${player.team.toLowerCase()}.png`
        : '';

    return (
        <>
            <Card className="player-card mb-2" onClick={() => setShowModal(true)} style={{ cursor: 'pointer' }}>
                <Card.Body className="d-flex align-items-center py-1 px-3 position-relative">
                    {/* Left Group */}
                    <div className="d-flex align-items-center left-group">
                        <FavoriteButton 
                            isFavorite={isFavorite(player.player_id)} 
                            onToggle={() => toggleFavorite(player.player_id)} 
                        />
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
                        <InjuryBadge status={player.injury_status} />
                        <TrendArrow trend={player.trend} />
                    </div>
                </Card.Body>
            </Card>

            <PlayerModal 
                show={showModal} 
                onHide={() => setShowModal(false)} 
                player={player} 
            />
        </>
    );
}