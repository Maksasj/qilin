import { FileThumbnailItem } from "@/models/file-thumbnail-item";
import { Entity } from "../models/entity";
import React from "react";
import axios from "axios";
import { Tag } from "@/models/tag";

const TagTile = ({ tag }: { tag: Tag }) => {
    /*
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
    */

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
