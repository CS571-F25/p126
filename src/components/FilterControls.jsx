import { Form, Dropdown } from 'react-bootstrap';

export default function FilterControls({ searchQuery, setSearchQuery, selectedPositions, setSelectedPositions }) {
    const positions = ['QB', 'RB', 'WR', 'TE', 'K', 'DEF'];

    const handlePositionToggle = (pos) => {
        if (selectedPositions.includes(pos)) {
            setSelectedPositions(selectedPositions.filter(p => p !== pos));
        } else {
            setSelectedPositions([...selectedPositions, pos]);
        }
    };

    return (
        <div className="d-flex gap-2">
            <Form.Control
                type="text"
                placeholder="Search Player Name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ width: '250px' }}
            />
            <Dropdown autoClose="outside">
                <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" className="bg-white text-dark">
                    Positions {selectedPositions.length > 0 ? `(${selectedPositions.length})` : ''}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {positions.map(pos => (
                        <div key={pos} className="px-3 py-1" onClick={() => handlePositionToggle(pos)} style={{ cursor: 'pointer' }}>
                            <Form.Check 
                                type="checkbox"
                                label={pos}
                                checked={selectedPositions.includes(pos)}
                                onChange={() => {}} // Handled by parent div onClick
                                style={{ pointerEvents: 'none' }} // Let the click pass through to the div
                            />
                        </div>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}
