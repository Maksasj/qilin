import { Tag } from "./tag"
import { TagStyle } from "./tag-style"

export type TagResponseModel = {
    value: Tag,
    style: TagStyle,
    parentTagIds: string[]
}