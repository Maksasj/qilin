import TagExplorer from "./tags/tag-explorer";
import EntitiesExplorer from "./entities/entity-explorer";
import MochiLogsExplorer from "./mochi/mochi-logs-explorer";
import TagGraphExplorer from "./tags/tag-graph-explorer";

export enum NueExplorers {
    TagExplorer,
    TagGraphExplorer,
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
    } else if (explorer === NueExplorers.TagGraphExplorer) {
        return (
            <TagGraphExplorer />
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
