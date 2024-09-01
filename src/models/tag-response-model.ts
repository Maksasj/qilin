import { Tag } from "./tag"

export type TagResponseModel = {
    value: Tag,
    parentTagIds: string[]
}