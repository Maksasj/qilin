import { LogMessageItem } from "./log-message-item";

export type LogMessageItemPageResponseModel = {
    pageIndex: number;
    itemCount: number;
    messages: LogMessageItem[];
};