import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: initialState = {
  tasks: [
    {
      id: "2324",
      title: "init",
      description: "create home page and routing",
      dueDate: "2025",
      isCompleted: false,
      priority: "low",
    },
    {
      id: "234",
      title: "init",
      description: "create home page and routing",
      dueDate: "2025",
      isCompleted: false,
      priority: "high",
    },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => state.todo.tasks;
export const selectFilter = (state: RootState) => state.todo.filter;

export default taskSlice.reducer;
