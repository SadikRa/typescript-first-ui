import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

interface initialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: initialState = {
  tasks: [
    {
      id: "3232l323j32j3l32",
      title: "sadik",
      description: "I am a developer",
      dueDate: "24january2025",
      isCompleted: false,
      priority: "high",
    },
  ],
  filter: "all",
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
  return { id: nanoid(), isCompleted: false, ...taskData };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toggleCompleteState: (state, action: PayloadAction<string>) => {
      console.log(action);
      state.tasks.forEach((task) =>
        task.id == action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateFilter: (
      state,
      action: PayloadAction<"all" | "low" | "medium" | "high">
    ) => {
      state.filter = action.payload;
    },
  },
});

export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;

  if (filter == "low") {
    return state.todo.tasks.filter((task) => task.priority == "low");
  } else if (filter == "medium") {
    return state.todo.tasks.filter((task) => task.priority == "medium");
  } else if (filter == "high") {
    return state.todo.tasks.filter((task) => task.priority == "high");
  } else {
    return state.todo.tasks;
  }
};

export const selectFilter = (state: RootState) => state.todo.filter;

export const { addTask, toggleCompleteState, deleteTask, updateFilter } =
  taskSlice.actions;

export default taskSlice.reducer;
