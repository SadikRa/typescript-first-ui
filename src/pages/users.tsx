import { AddUserModal } from "@/components/module/addUserModal";
import { UserCard } from "@/components/module/userCard";
import { selectUser } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";

const Users = () => {
  const user = useAppSelector(selectUser);
  return (
    <div>
      <AddUserModal></AddUserModal>

      <div>
        {user.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default Users;
