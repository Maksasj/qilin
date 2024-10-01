import { Tag } from "@/models/tag";
import { TagRelationsResponseModel } from "@/models/tag-relations-response-model";
import { TagsPageResponseModel } from "@/models/tags-page-response-model";
import axios from "axios";
import React from "react";

import { ForceGraph3D } from 'react-force-graph';
import SpriteText from 'three-spritetext';

const nodeThreeObject = (node: any) => {
    const sprite = new SpriteText(node.title);
    return sprite;
}

const TagGraphExplorer = () => {
    const [relations, setRelations] = React.useState<TagRelationsResponseModel | null>(null);
    const [isLoadingRelations, setIsLoadingRelations] = React.useState(true);

    const [tags, setTags] = React.useState<Tag[] | null>(null);
    const [isLoadingTags, setIsLoadingTags] = React.useState(true);

    React.useEffect(() => {
        getRelationData();
    }, []);

    React.useEffect(() => {
        getTagsData()
    }, [relations]);

    const getRelationData = async () => {
        setIsLoadingRelations(true);

        await axios.get("https://localhost:7283/GetTagRelations").then(response => {
            const allData: TagRelationsResponseModel = response.data;
            setRelations(allData);
        })

        setIsLoadingRelations(false);
    };

    const getTagsData = async () => {
        setIsLoadingTags(true);

        await axios.get("https://localhost:7283/GetTags?pageIndex=0&itemsPerPage=1000000").then(response => {
            const allData: TagsPageResponseModel = response.data;
            setTags(allData.tags);
        })

        setIsLoadingTags(false);
    }

    if (isLoadingRelations || isLoadingTags) {
        return (
            <div>
                Loading
            </div>
        );
    }

    let queue: Array<any> = [];

    relations?.relations.forEach(relation => {
        queue.push({
            "source": relation.parentId,
            "target": relation.tagId
        })
    });

    const data: any =
    {
        "nodes": tags,
        "links": queue
    }

    return (
        <ForceGraph3D
            graphData={data}
            nodeAutoColorBy="group"
            linkDirectionalArrowLength={3.5}
            linkDirectionalArrowRelPos={1}
            nodeThreeObject={nodeThreeObject}
        />
    );
}

export default TagGraphExplorer;
