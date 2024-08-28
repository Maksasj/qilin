import { Entity } from "../models/entity";

const EntityTile = ({ entity }: { entity: Entity }) => {
    return (
        <div className={`nue-tile-base`}>
            <div className="nue-tile-header">
                <div className="nue-tile-entity-name">{entity.name}</div>
                <div className="nue-tile-entity-type">{entity.type}</div>
            </div>
            <div className="nue-tile-preview-container">
                <img className="nue-tile-preview-image" src='src/assets/cute-anime-uptxxcxl4h2zoe9r.jpg'></img>
            </div>
        </div>
    )
}

export default EntityTile;
