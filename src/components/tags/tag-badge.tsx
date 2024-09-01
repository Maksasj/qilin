import './tag-badge.css'

const TagBadge = ({ color, label }: { color: string, label: string }) => {
	return (
		<div style={{ backgroundColor: color }} className="nue-tag-badge">
			{label}
		</div>
	);
};

export default TagBadge;
