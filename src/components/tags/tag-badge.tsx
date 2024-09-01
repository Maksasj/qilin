import { Circle, CircleX } from 'lucide-react';
import './tag-badge.css'

const TagBadge = ({ color, label }: { color: string, label: string }) => {
	return (
		<div style={{ backgroundColor: color }} className="nue-tag-badge-base">
			<div className="nue-tag-badge-name">
				{label}
			</div>
			<CircleX className="nue-tag-badge-remove" />
		</div>
	);
};

export default TagBadge;
