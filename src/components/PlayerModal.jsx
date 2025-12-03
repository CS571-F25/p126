import { Modal, Table, Button } from 'react-bootstrap';

export default function PlayerModal({ show, onHide, player }) {
    if (!player) return null;

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>{player.full_name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3">
                    <h5>{player.position} - {player.team || 'FA'}</h5>
                </div>
                <Table striped bordered hover size="sm" className="text-center">
                    <thead>
                        <tr>
                            <th>Week</th>
                            <th>Projected Points</th>
                            <th>Actual Points (PPR)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {player.gameLog && player.gameLog.map((game) => (
                            <tr key={game.week}>
                                <td>{game.week}</td>
                                <td>{game.proj_ppr ? game.proj_ppr.toFixed(2) : '---'}</td>
                                <td>{game.played ? game.pts_ppr.toFixed(2) : '---'}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div className="mt-3 text-center">
                    <strong>Season Average: {player.current_ppg} PPG</strong>
                </div>
            </Modal.Body>
        </Modal>
    );
}
