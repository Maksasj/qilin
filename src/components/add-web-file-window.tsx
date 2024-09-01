import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"
import React from "react"

interface Props {
	open: boolean
	setOpen: (arg: boolean) => void
}

export function AddWebFileWindow(props: Props) {
	const [fileUrl, setFileUrl] = React.useState("");

	return (
		<Dialog open={props.open} onOpenChange={props.setOpen}>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Add Web File</DialogTitle>
					<DialogDescription>
						Add a new web file
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="name" className="text-right">
							File Access Url
						</Label>
						<Input
							id="name"
							className="col-span-3"
							onChange={(event) => {
								setFileUrl(event.target.value)
							}}
						/>
					</div>
				</div>
				<DialogFooter>
					<Button onClick={async () => {
						var formData = new FormData();

						formData.append('fileUri', fileUrl);

						await axios({
							method: "post",
							url: "https://localhost:7256/AddWebFile",
							data: formData,
							headers: { "Content-Type": "multipart/form-data" },
						})

						props.setOpen(false);
					}}>Add new web file</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
