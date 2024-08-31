import { Tag } from "@/models/tag";

const TagTile = ({ tag }: { tag: Tag }) => {
    return (
        <div className={`nue-tile-base`}>
            <div className="nue-tile-header">
                <div className="nue-tile-entity-name">{tag.title}</div>
                <div className="nue-tile-entity-type">{tag.description}</div>
            </div>
            <div className="nue-tile-preview-container">

            </div>
        </div>
    )
}

export default TagTile;
