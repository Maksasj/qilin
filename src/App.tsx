import { Button } from "@/components/ui/button"
import EntitiesExplorer from "./components/nue-entity-explorer"
import { PaginationDemo } from "./Pagination"
import { Input } from "./components/ui/input"
import { Toaster } from "sonner"
import { ThemeProvider } from "./components/theme-provider"
import { ModeToggle } from "./components/mode-toggle"
import { NueSide } from "./components/nue-side"
import { NueTopBar } from "./components/nue-top-bar"

import { NueContent } from "./components/nue-content"
import './assets/nue.css';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./components/ui/resizable"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "./components/ui/breadcrumb"
import { Separator } from "./components/ui/separator"
import EntityInformation from "./components/entity-information"

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
            <EntitiesExplorer />
            <PaginationDemo />
          </NueContent>
        </ResizablePanel>
        <ResizableHandle />

        <ResizablePanel defaultSize={10}>
          <EntityInformation />
        </ResizablePanel>
      </ResizablePanelGroup>
      
      <Toaster />
  </ThemeProvider>
    
  )
}
