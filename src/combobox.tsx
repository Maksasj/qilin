"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Smile } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
    Calculator,
    Calendar,
  } from "lucide-react"
  
export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false)

  return (
    <Command className="rounded-lg border shadow-md md:min-w-[450px]">
        <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
            <CommandInput placeholder="Type a command or search..." />
        </PopoverTrigger>
        <PopoverContent>
            <CommandList>
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandItem>
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                    <Smile className="mr-2 h-4 w-4" />
                    <span>Search Emoji</span>
                </CommandItem>
                <CommandItem disabled>
                    <Calculator className="mr-2 h-4 w-4" />
                    <span>Calculator</span>
                </CommandItem>
            </CommandList>
        </PopoverContent>
        </Popover>
    </Command>
  )
}
