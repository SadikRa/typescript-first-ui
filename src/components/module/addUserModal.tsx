import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { useAppDispatch } from "@/redux/hook";
import { IUser } from "@/types";
import { addUser } from "@/redux/features/user/userSlice";

export function AddUserModal() {
  const form = useForm();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    dispatch(addUser(data as IUser));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add User</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogDescription className="sr-only">
          fill up this form to add user
        </DialogDescription>
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-10" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> name</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""}></Input>
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="mt-6">
              <Button type="submit">add User</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
