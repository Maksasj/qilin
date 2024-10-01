import { Entity } from "./entity";

export type EntitiesPageResponseModel = {
    pageIndex: number;
    itemCount: number;
    entities: Entity[];
};