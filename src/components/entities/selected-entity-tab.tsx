import { Entity } from "@/models/entity";
import TagBadge from "../tags/tag-badge";
import { FileThumbnailItem } from "@/models/file-thumbnail-item";
import React from "react";
import axios from "axios";
import { format } from 'date-fns';

import './selected-entity-tab.css'
import { CirclePlus, Pen } from "lucide-react";
import { RenameEntityWindow } from "./rename-entity-window";

const EntityIsNotSelected = () => {
    return (
        <div>Entity is not selected</div>
    );
}

type SelectedEntityProps = {
    entity: Entity
}

const EntityOverallInfo = ({ entity }: SelectedEntityProps) => {
    const [openRenameEntityWindow, setRenameEntityWindow] = React.useState<boolean>(false);

    return (
        <div>
            <div className="nue-selected-entity-name-wrapper">
                <Pen onClick={() => { if (openRenameEntityWindow == false) setRenameEntityWindow(true) }} className="mr-2 h-4 w-4 nue-selected-entity-change-name" />
                <RenameEntityWindow entity={entity} open={openRenameEntityWindow} setOpen={setRenameEntityWindow} />
                <div className="nue-selected-entity-name">
                    {entity.name}
                </div>
            </div>

            <div className="nue-selected-entity-type">Type: {entity.type}</div>

            <div className="nue-selected-entity-overall-date-container">
                <div>Added to Database: {format(new Date(entity.addedToDbDate), 'yyyy-MM-dd HH:mm')}</div>
                <div>Last modification: {format(new Date(entity.lastModificationDate), 'yyyy-MM-dd HH:mm')}</div>
            </div>
        </div>
    );
}

const EntityTags = ({ entity }: SelectedEntityProps) => {
    return (
        <div className="nue-selected-entity-tag-wrapper">
            <div className="nue-selected-entity-tag-container-label ">
                Tags
            </div>
            <div className="nue-selected-entity-tag-container">
                <TagBadge color={"#FF7F50"} label={"Picture"} />
                <TagBadge color={"#FF7F50"} label={"Bikini"} />
                <TagBadge color={"#FF69B4"} label={"❤️ Waifu"} />
                <TagBadge color={"#F0E68C"} label={"🎨 Art work"} />
                <CirclePlus className="mr-2 h-4 w-4 nue-selected-entity-add-tag" />
            </div>

            <div className="nue-selected-entity-tag-container-label">
                Transitive Tags
            </div>

            <div className="nue-selected-entity-tag-container">
                <TagBadge color={"#FF69B4"} label={"❤️ Cute"} />
                <TagBadge color={"#F0E68C"} label={"Female"} />
                <TagBadge color={"#F0E68C"} label={"Anime"} />
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