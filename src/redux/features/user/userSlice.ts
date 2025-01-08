import { RootState } from "@/redux/store";
import { IUser } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface initialState {
  user: IUser[];
}

const initialState: initialState = {
  user: [],
};

type DraftTask = Pick<IUser, "name">;

const createUser = (userData: DraftTask): IUser => {
  return { id: nanoid(), ...userData };
};

const userSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      const userData = createUser(action.payload);
      state.user.push(userData);
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.user = state.user.filter((user) => user.id !== action.payload);
    },
  },
});

export const selectUser = (state: RootState) => state.user.user; 


export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
