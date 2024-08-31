import { FileThumbnailItem } from "@/models/file-thumbnail-item";
import { Entity } from "../models/entity";
import React from "react";
import axios from "axios";

const EntityTile = ({ entity }: { entity: Entity }) => {
    const [state, setState] = React.useState<FileThumbnailItem | null>(null);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        getAllInformation()
    }, []);

    const getAllInformation = async () => {
        setIsLoading(true);

        await axios.get("https://localhost:7256/GetFileThumbnail?fileId=" + entity.id).then(response => {
            setIsLoading(false);

            const allData: FileThumbnailItem = response.data;

            setState(allData);
        })
    };

    if (isLoading || state === null || state.thumbnailUrl === "empty") {
        return (
            <div className={`nue-tile-base`}>
                <div className="nue-tile-header">
                    <div className="nue-tile-entity-name">{entity.name}</div>
                    <div className="nue-tile-entity-type">{entity.type}</div>
                </div>
                <div className="nue-tile-preview-container">
                    <img className="nue-tile-preview-image" src='https://lh3.googleusercontent.com/drive-storage/AJQWtBPfpsJacK-DjrGXLMiWJ39FpP_gtavIren9kbwNJy-cUBEC5COpMU8vP3TkvK47dTJZs_ulDkKGB3c27V1ZTC85pcUy2dlz7OBXuhTidutGzF4=s220'></img>
                </div>
            </div>
        )
    }

    return (
        <div className={`nue-tile-base`}>
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
