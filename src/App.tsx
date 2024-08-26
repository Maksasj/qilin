import { Button } from "@/components/ui/button"
import { TableDemo } from "./demo_table"
import FileExplorer from "./FileExplorer"
import { Pagination } from "./components/ui/pagination"
import { PaginationDemo } from "./Pagination"
import { NueWindow } from "./NueWindow"
import { Input } from "./components/ui/input"
import { SheetDemo } from "./SheetDemo"
import { MenubarDemo } from "./MenubarDemo"
import { SonnerDemo } from "./SonnerDemo"
import { Toaster } from "sonner"

export default function Home() {
  return (
    <NueWindow> 
      <div>
      <MenubarDemo />
        <Input type="text" placeholder="Email" />
        <Button>Search</Button>
        <FileExplorer />
        <PaginationDemo />
        <SheetDemo />
      </div>
      <SonnerDemo />
      <Toaster />
    </NueWindow>
  )
}
