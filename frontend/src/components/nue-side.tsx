import {
	File,
	Logs,
	LucideTag,
	Network,
	Plus,
} from "lucide-react"

import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from "@/components/ui/command"
import { CreateTagWindow } from "@/components/tags/create-tag-window";
import React from "react";
import { AddWebFileWindow } from "./add-web-file-window";
import { NueExplorers } from "./active-explorer";

interface Props {
	setBrowser: (arg: NueExplorers) => void
}

export function NueSide(props: Props) {
	const [openCreateTagWindow, setCreateTagWindow] = React.useState<boolean>(false);
	const [openAddWebFileWindow, setAddWebFileWindow] = React.useState<boolean>(false);

	return (
		<div className="nue-side">
			<Command>
				<CommandInput placeholder="Type a category or search..." />
				<CommandGroup heading="Overall">
					<CommandItem onSelect={() => { props.setBrowser(NueExplorers.MochiLogs) }}>
						<Logs className="mr-2 h-4 w-4" />
						<span>Mochi logs</span>
					</CommandItem>
				</CommandGroup>
				<CommandSeparator />
				<CommandList className="h-4">
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandGroup heading="Actions">
						<CommandItem onSelect={() => { if (openCreateTagWindow == false) setCreateTagWindow(true) }}>
							<Plus className="mr-2 h-4 w-4" />
							<span>Create Tag</span>
							<CreateTagWindow open={openCreateTagWindow} setOpen={setCreateTagWindow} />
						</CommandItem>
						<CommandItem onSelect={() => { if (openAddWebFileWindow == false) setAddWebFileWindow(true) }}>
							<Plus className="mr-2 h-4 w-4" />
							<span>Add Web file</span>
							<AddWebFileWindow open={openAddWebFileWindow} setOpen={setAddWebFileWindow} />
						</CommandItem>
					</CommandGroup>
					<CommandSeparator />

					<CommandGroup heading="Explore">
						<CommandItem onSelect={() => { props.setBrowser(NueExplorers.EntityExplorer) }}>
							<File className="mr-2 h-4 w-4" />
							<span>Entities Explorer</span>
						</CommandItem>
						<CommandItem onSelect={() => { props.setBrowser(NueExplorers.TagExplorer) }}>
							<LucideTag className="mr-2 h-4 w-4" />
							<span>Tag Explorer</span>
						</CommandItem>
						<CommandItem onSelect={() => { props.setBrowser(NueExplorers.TagGraphExplorer) }}>
							<Network className="mr-2 h-4 w-4" />
							<span>Tag Graph Explorer</span>
						</CommandItem>
					</CommandGroup>
				</CommandList>
			</Command>
		</div>
	);
};
