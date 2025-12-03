import { Badge } from 'react-bootstrap';

export default function InjuryBadge({ status }) {
    // If no status is provided, assume healthy
    const currentStatus = status || 'Healthy';

    let variant = 'success'; // Default to green for Healthy
    let label = 'HLT';

    switch (currentStatus) {
        case 'Questionable':
        case 'Doubtful':
            variant = 'warning';
            label = 'QUES';
            break;
        case 'Out':
            variant = 'danger';
            label = 'OUT';
            break;
        case 'IR':
            variant = 'danger';
            label = 'IR';
            break;
        case 'Suspended':
            variant = 'dark';
            label = 'SUSP';
            break;
        case 'Healthy':
            variant = 'success';
            label = 'HLTH';
            break;
        default:
            variant = 'secondary';
            label = currentStatus.substring(0, 4).toUpperCase();
    }

    // Custom style for orange if needed, otherwise rely on variant
    const style = { 
        fontSize: '0.8rem', 
        minWidth: '45px',
        color: '#fff'
    };

    return (
        <Badge bg={variant} className="me-2 d-flex align-items-center justify-content-center" style={style}>
            {label}
        </Badge>
    );
}
