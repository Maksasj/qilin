import { Tag } from "./tag";

export type TagsPageResponseModel = {
    pageIndex: number;
    itemCount: number;
    tags: Tag[];
};