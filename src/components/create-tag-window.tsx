import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "./ui/textarea"
import axios from "axios"

interface Props {
  open: boolean
  setOpen: (arg: boolean) => void
}

export function CreateTagWindow(props: Props) {
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
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Tag Description
            </Label>
            <Textarea className="nue-create-tag-window-textarea"/>
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
          }}>Create Tag</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
