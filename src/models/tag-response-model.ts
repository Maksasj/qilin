import { Tag } from "./tag"

export type TagResponseModel = {
    value: Tag,
    parentTags: TagResponseModel
}