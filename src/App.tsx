import { Button } from "@/components/ui/button"
import FileExplorer from "./file-explorer"
import { PaginationDemo } from "./Pagination"
import { Input } from "./components/ui/input"
import { SheetDemo } from "./SheetDemo"
import { MenubarDemo } from "./MenubarDemo"
import { SonnerDemo } from "./SonnerDemo"
import { Toaster } from "sonner"
import { ThemeProvider } from "./components/theme-provider"
import { ModeToggle } from "./components/mode-toggle"
import { NueSide } from "./nue-side"
import { NueTopBar } from "./nue-top-bar"

import { NueContent } from "./nue-content"
import './nue-main.css';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./components/ui/resizable"
import { BreadcrumbDemo } from "./breadcrumb"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "./components/ui/breadcrumb"
import { Pin, Slash } from "lucide-react"
import { Separator } from "./components/ui/separator"

// <SonnerDemo />

export default function Home() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
 

      <NueTopBar>
        <div className="nue-logo">
          🐏 nue
        </div>
        <div className="nue-search">
          <Input className="nue-search-input" type="text" placeholder="Type a tag or search by multiple..." />
          <Button variant="outline">Search</Button>
        </div>
        <div className="nue-right">
          <ModeToggle />
        </div>
      </NueTopBar>
      <Separator/>

      <ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border md:min-w-[450px]">
        <ResizablePanel defaultSize={10}>
          <NueSide />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <NueContent> 
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/components">Entities</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <FileExplorer />
            <PaginationDemo />
          </NueContent>
        </ResizablePanel>
        <ResizableHandle />

        <ResizablePanel defaultSize={10}>
        </ResizablePanel>
      </ResizablePanelGroup>
      
      <Toaster />
  </ThemeProvider>
    
  )
}
