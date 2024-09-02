import { Circle, CircleX } from 'lucide-react';
import './tag-badge.css'
import { Tag } from '@/models/tag';
import { TagResponseModel } from '@/models/tag-response-model';

const TagBadge = ({ tag }: { tag: TagResponseModel }) => {
	return (
		<div style={{ backgroundColor: tag.style.color }} className="nue-tag-badge-base">
			<div className="nue-tag-badge-name">
				{tag.value.title}
			</div>
			<CircleX className="nue-tag-badge-remove" />
		</div>
	);
};

export default TagBadge;
