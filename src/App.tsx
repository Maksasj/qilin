import { Toaster } from "sonner"
import { ThemeProvider } from "./components/theme-provider"
import { NueSide } from "./components/nue-side"

import './assets/nue.css';

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./components/ui/resizable"
import { Separator } from "./components/ui/separator"
import React from "react"
import { ActiveExplorer, NueExplorers } from "./components/active-explorer"
import TopBar from "./components/top-bar"

export default function Home() {
	const [explorer, setExplorer] = React.useState<NueExplorers>(NueExplorers.EntityExplorer);

	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<TopBar />
			<Separator />
			<ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border md:min-w-[450px]">
				<ResizablePanel defaultSize={10}>
					<NueSide setBrowser={setExplorer} />
				</ResizablePanel>
				<ResizableHandle />

				<ResizablePanel defaultSize={50}>
					<ActiveExplorer explorer={explorer} />
				</ResizablePanel>
			</ResizablePanelGroup>
			<Toaster />
		</ThemeProvider>

	)
}
