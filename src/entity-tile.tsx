import { Tag } from "./tag"

const EntityTile = ({ index, name }: { index: number, name: string }) => {
    return (
        <div className={`nue-tile-base`}>
            <div className="nue-tile-header">
                <div className="nue-tile-entity-name">cute-anime-uptxxcxl4h2zoe9r.jpg</div>
                <div className="nue-tile-entity-type">Web File</div>
            </div>
            <div className="nue-tile-preview-container">
                <img className="nue-tile-preview-image" src='src/cute-anime-uptxxcxl4h2zoe9r.jpg'></img>
            </div>
        </div>
    )
}

export default EntityTile;
