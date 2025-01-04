import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  tasks: ITask[];
}

const initialState: initialState = {
  tasks: [
    {
      id: "2324",
      title: "init",
      description: "create home page and routing",
      dueDate: "2025",
      isCompleted: false,
      priority: "high",
    },
    {
      id: "2234",
      title: "create git hub",
      description: "create home page and routing",
      dueDate: "2025",
      isCompleted: false,
      priority: "high",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
