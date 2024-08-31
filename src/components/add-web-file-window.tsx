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

interface Props {
  open: boolean
  setOpen: (arg: boolean) => void
}

export function AddWebFileWindow(props: Props) {
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
              defaultValue="New Tag"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Create Tag</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
