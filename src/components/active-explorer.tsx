import React from "react";
import TagExplorer from "./nue-tag-explorer";
import EntitiesExplorer from "./nue-entity-explorer";
import MochiLogsExplorer from "./mochi-logs-explorer";

export enum NueExplorers {
    TagExplorer,
    EntityExplorer,
    MochiLogs
}

type Props = {
    explorer: NueExplorers
}

export function ActiveExplorer({ explorer }: Props) {
    if (explorer === NueExplorers.TagExplorer) {
        return (
            <TagExplorer />
        );
    } else if (explorer === NueExplorers.EntityExplorer) {
        return (
            <EntitiesExplorer />
        )
    } else if (explorer === NueExplorers.MochiLogs) {
        return (
            <MochiLogsExplorer />
        )
    } else {
        return (
            <div>Unreachable</div>
        )
    }
};
