import { TagResponseModel } from "./tag-response-model";

export type TagsPageResponseModel = {
    pageIndex: number;
    itemCount: number;
    tags: TagResponseModel[];
};