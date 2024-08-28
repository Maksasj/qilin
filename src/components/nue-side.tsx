import {
  Calendar,
  File,
  Heart,
  LucideTag,
  Plus,
  Settings,
  Smile,
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

export function NueSide() {
  return (
    <div className="nue-side">
      <Command>
        <CommandInput placeholder="Type a category or search..." />
        <CommandList className="h-4">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Favorites">
            <CommandItem>
              <LucideTag className="mr-2 h-4 w-4" />
              <span>One Piece</span>
            </CommandItem>
            <CommandItem>
              <LucideTag className="mr-2 h-4 w-4" />
              <span>Drawing</span>
            </CommandItem>
            <CommandItem>
              <LucideTag className="mr-2 h-4 w-4" />
              <span>Home work</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Overall">
            <CommandItem>
              <Calendar className="mr-2 h-4 w-4" />
              <span>Metrics & Statistics</span>
            </CommandItem>
            <CommandItem>
              <Heart className="mr-2 h-4 w-4" />
              <span>Health</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Actions">
            <CommandItem>
              <Plus className="mr-2 h-4 w-4" />
              <span>Create Tag</span>
              <CommandShortcut>⌘T+</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Plus className="mr-2 h-4 w-4" />
              <span>Add Web file</span>
              <CommandShortcut>⌘W+</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Explore">
            <CommandItem>
              <File className="mr-2 h-4 w-4" />
              <span>Entities Explorer</span>
              <CommandShortcut>⌘E</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <LucideTag className="mr-2 h-4 w-4" />
              <span>Tag Explorer</span>
              <CommandShortcut>⌘T</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};
