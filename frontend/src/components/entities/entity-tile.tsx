import { FileThumbnailItem } from "@/models/file-thumbnail-item";
import { Entity } from "../../models/entity";
import React from "react";
import axios from "axios";
import './entity-tile.css';

type Props = {
    entity: Entity
    setSelectedEntity: (theme: Entity) => void
}

const EntityTile = ({ entity, setSelectedEntity }: Props) => {
    const [state, setState] = React.useState<FileThumbnailItem | null>(null);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        getFileThumbnail()
    }, []);

    const getFileThumbnail = async () => {
        setIsLoading(true);

        await axios.get("https://localhost:7256/GetFileThumbnail?fileId=" + entity.id).then(response => {
            setIsLoading(false);

            const allData: FileThumbnailItem = response.data;

            setState(allData);
        })
    };

    if (isLoading || state === null || state.thumbnailUrl === "empty") {
        return (
            <div className={`nue-tile-base`} onClick={() => setSelectedEntity(entity)}>
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

    return (
        <div className={`nue-tile-base`} onClick={() => setSelectedEntity(entity)}>
            <div className="nue-tile-header">
                <div className="nue-tile-entity-name">{entity.name}</div>
                <div className="nue-tile-entity-type">{entity.type}</div>
            </div>
            <div className="nue-tile-preview-container">
                <img className="nue-tile-preview-image" src={state.thumbnailUrl}></img>
            </div>
        </div>
    )
}

export default EntityTile;
