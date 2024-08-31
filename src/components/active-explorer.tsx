import TagExplorer from "./tags/nue-tag-explorer";
import EntitiesExplorer from "./entities/nue-entity-explorer";
import MochiLogsExplorer from "./mochi/mochi-logs-explorer";

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
