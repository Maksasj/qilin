import { Entity } from "@/models/entity";
import TagBadge from "../tags/tag-badge";
import { FileThumbnailItem } from "@/models/file-thumbnail-item";
import React from "react";
import axios, { all } from "axios";
import { format } from 'date-fns';

import './selected-entity-tab.css'
import { CirclePlus, Pen } from "lucide-react";
import { RenameEntityWindow } from "./rename-entity-window";
import { EntityResponseModel } from "@/models/entity-response.model";
import { Tag } from "@/models/tag";
import { TagResponseModel } from "@/models/tag-response-model";

const EntityIsNotSelected = () => {
    return (
        <div>Entity is not selected</div>
    );
}

type EntityProps = {
    entity: Entity
}

const EntityOverallInfo = ({ entity }: EntityProps) => {
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

            <div className="nue-selected-entity-type">ID: {entity.id}</div>
            <div className="nue-selected-entity-type">Type: {entity.type}</div>

            <div className="nue-selected-entity-overall-date-container">
                <div>Added to Database: {format(new Date(entity.addedToDbDate), 'yyyy-MM-dd HH:mm')}</div>
                <div>Last modification: {format(new Date(entity.lastModificationDate), 'yyyy-MM-dd HH:mm')}</div>
            </div>
        </div>
    );
}


const EntityDirectTags = ({ tags }: { tags: TagResponseModel[] }) => {
    return (
        <>
            <div className="nue-selected-entity-tag-container-label ">
                Tags
            </div>
            <div className="nue-selected-entity-tag-container">
                {tags.map(tag => {
                    return (<TagBadge tag={tag} />)
                })}

                <CirclePlus className="mr-2 h-4 w-4 nue-selected-entity-add-tag" />
            </div>
        </>
    );
}

const EntityTransitiveTags = ({ tags }: { tags: TagResponseModel[] }) => {
    return (
        <>
            <div className="nue-selected-entity-tag-container-label">
                Transitive Tags
            </div>

            <div className="nue-selected-entity-tag-container">

            </div>
        </>
    );
}

const EntityTags = ({ tagIds }: { tagIds: string[] }) => {
    const [state, setTags] = React.useState<TagResponseModel[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        getTagsData();
    }, []);

    const getTagsData = async () => {
        setIsLoading(true);

        var tags: Array<TagResponseModel> = [];

        await Promise.all(tagIds.map(async (id) => {
            await axios.get("https://localhost:7283/GetTag?tagId=" + id).then(response => {
                const allData: TagResponseModel = response.data;
                tags.push(allData);
            });
        }));

        setTags(tags);
        setIsLoading(false);
    }

    if (isLoading)
        return (<div>Loading</div>);

    return (
        <div className="nue-selected-entity-tags-wrapper">
            <EntityDirectTags tags={state} />
            <EntityTransitiveTags tags={state} />
        </div>
    );
}

const SelectedEntityThumbnail = ({ entity }: EntityProps) => {
    const [state, setState] = React.useState<FileThumbnailItem | null>(null);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        getFileThumbnail();
    }, []);

    const getFileThumbnail = async () => {
        setIsLoading(true);

        await axios.get("https://localhost:7256/GetFileThumbnail?fileId=" + entity.id).then(response => {
            setIsLoading(false);
            const allData: FileThumbnailItem = response.data;
            setState(allData);
        })
    };

    if (isLoading || state === null)
        return (<EntityIsNotSelected />);

    return (
        <div className="nue-selected-entity-preview">
            <img className="nue-selected-entity-image-preview" src={state.thumbnailUrl}></img>
        </div>
    );
}

const EntitySpecificInfo = ({ entity }: EntityProps) => {
    return (
        <div>
            <div className="nue-selected-entity-name-wrapper">
                <div className="nue-selected-entity-name">Information</div>
            </div>

            <div className="nue-selected-entity-type">Provider: 🐦‍🔥 Hoo</div>
            <div className="nue-selected-entity-type">File type: Web file</div>
            <div className="nue-selected-entity-type">AccessUri: https://cdn.donmai.us/sample/1b/9a/__original_drawn_by_kagematsuri__sample-1b9ab66710cde25d6841ce8524c1eec7.jpg</div>

            <div className="nue-selected-entity-overall-date-container">
                <div>Created date: {format(new Date(entity.addedToDbDate), 'yyyy-MM-dd HH:mm')}</div>
                <div>Last modification: {format(new Date(entity.lastModificationDate), 'yyyy-MM-dd HH:mm')}</div>
            </div>
        </div>
    );
}

const SelectedEntityTab = ({ entity }: { entity: Entity }) => {
    const [state, setState] = React.useState<EntityResponseModel | null>(null);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        getEntityInfo();
    }, [entity]);

    const getEntityInfo = async () => {
        setIsLoading(true);
        await axios.get("https://localhost:7283/GetEntity?entityId=" + entity.id).then(response => {
            const allData: EntityResponseModel = response.data;
            setState(allData);
            setIsLoading(false);
        })
    };

    if (isLoading || state === null)
        return (<EntityIsNotSelected />);

    return (
        <div className="nue-selected-entity-base">
            <SelectedEntityThumbnail entity={state.value} />
            <EntityOverallInfo entity={state.value} />
            <EntityTags tagIds={state.tagIds} />
            <EntitySpecificInfo entity={state.value} />
        </div>
    );
}

export default SelectedEntityTab;