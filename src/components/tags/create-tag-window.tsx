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
import { Textarea } from "../ui/textarea"
import axios from "axios"
import React from "react"

interface Props {
	open: boolean
	setOpen: (arg: boolean) => void
}

export function CreateTagWindow(props: Props) {
	const [title, setTitle] = React.useState("New Tag");
	const [description, setDescription] = React.useState<string>("");

	return (
		<Dialog open={props.open} onOpenChange={props.setOpen}>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Create Tag</DialogTitle>
					<DialogDescription>
						Create a new tag
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="name" className="text-right">
							Tag Title
						</Label>
						<Input
							id="name"
							defaultValue="New Tag"
							className="col-span-3"
							onChange={(event) => {
								setTitle(event.target.value)
							}}
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="username" className="text-right">
							Tag Description
						</Label>
						<Textarea className="nue-create-tag-window-textarea" onChange={(event) => {
							setDescription(event.target.value)
						}} />
					</div>
				</div>
				<DialogFooter>
					<Button onClick={async () => {
						var formData = new FormData();

						formData.append('tagTitle', title);
						formData.append('tagDescription', description);

						await axios({
							method: "post",
							url: "https://localhost:7283/CreateTag",
							data: formData,
							headers: { "Content-Type": "multipart/form-data" },
						})

						props.setOpen(false);
					}}>Create Tag</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
