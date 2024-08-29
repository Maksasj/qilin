import {
  Calendar,
  ChevronsLeftRightIcon,
  File,
  Heart,
  LucideTag,
  Plus,
  Settings,
  User,
} from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { CreateTagWindow } from "@/components/create-tag-window";
import React from "react";
import { AddWebFileWindow } from "./add-web-file-window";

export function NueSide() {
  const [openCreateTagWindow, setCreateTagWindow] = React.useState<boolean>(false);
  const [openAddWebFileWindow, setAddWebFileWindow] = React.useState<boolean>(false);

  return (
    <div className="nue-side">
      <Command>
        <CommandInput placeholder="Type a category or search..." />
        <CommandList className="h-4">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem onSelect={() => { if(openCreateTagWindow == false) setCreateTagWindow(true) }}>
              <Plus className="mr-2 h-4 w-4" />
              <span>Create Tag</span>
              <CreateTagWindow open={openCreateTagWindow} setOpen={setCreateTagWindow}/>
            </CommandItem>
            <CommandItem onSelect={() => { if(openAddWebFileWindow == false) setAddWebFileWindow(true) }}>
              <Plus className="mr-2 h-4 w-4" />
              <span>Add Web file</span>
              <AddWebFileWindow open={openAddWebFileWindow} setOpen={setAddWebFileWindow}/>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Explore">
            <CommandItem>
              <File className="mr-2 h-4 w-4" />
              <span>Entities Explorer</span>
            </CommandItem>
            <CommandItem>
              <LucideTag className="mr-2 h-4 w-4" />
              <span>Tag Explorer</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </Command>
    </div>
  );
};
