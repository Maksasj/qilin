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
import { Entity } from "@/models/entity"

interface Props {
	entity: Entity
	open: boolean
	setOpen: (arg: boolean) => void
}

export function RenameEntityWindow(props: Props) {
	return (
		<Dialog open={props.open} onOpenChange={props.setOpen}>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Rename entity</DialogTitle>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="name" className="text-right">
							Entity name
						</Label>
						<Input
							id="name"
							defaultValue={props.entity.name}
							className="col-span-3"
						/>
					</div>
				</div>
				<DialogFooter>
					<Button onClick={async () => {
						var formData = new FormData();

						formData.append('tagTitle', 'New tag');
						formData.append('tagDescription', 'Cool description');

						await axios({
							method: "post",
							url: "https://localhost:7283/CreateTag",
							data: formData,
							headers: { "Content-Type": "multipart/form-data" },
						})

						props.setOpen(false);
					}}>Rename</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
