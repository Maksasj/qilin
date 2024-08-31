import { Entity } from "@/models/entity";
import TagBadge from "../tags/tag-badge";
import { FileThumbnailItem } from "@/models/file-thumbnail-item";
import React from "react";
import axios from "axios";

import './selected-entity-tab.css'

const EntityIsNotSelected = () => {
    return (
        <div>Entity is not selected</div>
    );
}

type SelectedEntityProps = {
    entity: Entity
}

const EntityOverallInfo = ({ entity }: SelectedEntityProps) => {
    return (
        <div>
            <div className="nue-tile-entity-name">{entity.name}</div>
            <div className="nue-tile-entity-type">{entity.type}</div>
        </div>
    );
}

const EntityTags = ({ entity }: SelectedEntityProps) => {
    return (
        <div className="nue-selected-entity-tag-wrapper">
            Tags
            <div className="nue-selected-entity-tag-container">
                <TagBadge color={"#FFDEAD"} label={"📁 File"} />
                <TagBadge color={"tomato"} label={"Some tag"} />
                <TagBadge color={"blue"} label={"One piece"} />
                <TagBadge color={"#6495ED"} label={"A"} />
                <TagBadge color={"#FF7F50"} label={"Web file"} />
                <TagBadge color={"#FF69B4"} label={"❤️ Cute"} />
                <TagBadge color={"#F0E68C"} label={"🎨 Art work"} />
                <TagBadge color={"#20B2AA"} label={"nice"} />
            </div>
        </div>
    );
}

const SelectedEntityThumbnail = ({ entity }: SelectedEntityProps) => {
    const [state, setState] = React.useState<FileThumbnailItem | null>(null);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        getFileThumbnail();
    }, [entity]);

    const getFileThumbnail = async () => {
        setIsLoading(true);
        console.log("Re rendering");

        await axios.get("https://localhost:7256/GetFileThumbnail?fileId=" + entity.id).then(response => {
            setIsLoading(false);

            const allData: FileThumbnailItem = response.data;

            setState(allData);
        })
    };

    if (isLoading || state === null) {
        return (
            <div className="nue-selected-entity-preview">
                <img className="nue-selected-entity-image-preview" src="src/assets/cute-anime-uptxxcxl4h2zoe9r.jpg"></img>
            </div>
        );
    }

    return (
        <div className="nue-selected-entity-preview">
            <img className="nue-selected-entity-image-preview" src={state.thumbnailUrl}></img>
        </div>
    );
}

const EntitySpecificInfo = ({ entity }: SelectedEntityProps) => {
    return (<div></div>);
}

const SelectedEntity = ({ entity }: SelectedEntityProps) => {
    return (
        <div className="nue-selected-entity-base">
            <SelectedEntityThumbnail entity={entity} />
            <EntityOverallInfo entity={entity} />
            <EntityTags entity={entity} />
            <EntitySpecificInfo entity={entity} />
        </div>
    );
}

type EntityInformationProps = {
    entity: Entity | null
}

const SelectedEntityTab = ({ entity }: EntityInformationProps) => {
    if (entity === null)
        return (<EntityIsNotSelected />);
    else
        return (<SelectedEntity entity={entity}></SelectedEntity>)
}

export default SelectedEntityTab;