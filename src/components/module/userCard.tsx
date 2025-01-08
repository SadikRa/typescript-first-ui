import { useAppDispatch } from "@/redux/hook";
import { IUser } from "@/types";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { deleteUser } from "@/redux/features/user/userSlice";

interface IProps {
  user: IUser; 
}

export const UserCard = ({ user }: IProps) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="border px-5 py-3 rounded-md">
        <div className="flex justify-between items-center">
          <div>
            <h2>{user.name}</h2> {/* Display user's name */}
          </div>

          <Button
            onClick={() => dispatch(deleteUser(user.id))}
            variant="link"
            className="p-0 text-red-500"
          >
            <Trash2 className="icon-class" />
          </Button>
        </div>
      </div>
    </div>
  );
};
