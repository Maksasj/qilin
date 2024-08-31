import { Tag } from "@/models/tag";
import { TagRelationsResponseModel } from "@/models/tag-relations-response-model";
import { TagResponseModel } from "@/models/tag-response-model";
import axios from "axios";
import React from "react";

import { ForceGraph3D } from 'react-force-graph';
import SpriteText from 'three-spritetext';

const nodeThreeObject = (node: any) => {
    const sprite = new SpriteText(node.title);
    sprite.color = node.color;
    sprite.textHeight = 8;
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
        if (relations === null)
            return;

        setIsLoadingTags(true);

        let queue: Array<string> = [];

        relations.relations.forEach(relation => {
            if (!queue.includes(relation.tagId))
                queue.push(relation.tagId);

            if (!queue.includes(relation.parentId))
                queue.push(relation.parentId);
        });

        var tags: Tag[] = [];

        for (var i = 0; i < queue.length; ++i) {
            await axios.get("https://localhost:7283/GetTag?tagId=" + queue[i]).then(response => {
                const tagReponse: TagResponseModel = response.data;
                tags[tags.length] = tagReponse.value;
            })
        }

        setTags(tags);

        setIsLoadingTags(false);
    }

    if (isLoadingRelations || isLoadingTags) {
        return (
            <div>
                Loading
            </div>
        );
    }

    console.log(relations);


    let queue: Array<any> = [];

    relations?.relations.forEach(relation => {
        queue.push({
            "source": relation.tagId,
            "target": relation.parentId
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
            nodeThreeObject={nodeThreeObject}
        />
    );
}

export default TagGraphExplorer;
