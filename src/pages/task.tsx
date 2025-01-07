import { AddTaskModal } from "@/components/module/addTaskModal";
import TaskCard from "@/components/module/taskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

const Task = () => {
  const tasks = useAppSelector(selectTasks);

  const dispatch = useAppDispatch();

  console.log(tasks);

  return (
    <div className="mx-auto mx-w-7xl px-5 mt-20">
      <div className="flex justify-end items-center gap-5">
        <h1 className="mr-auto">Tasks</h1>
        <Tabs defaultValue={"all"}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              onClick={() => {
                dispatch(updateFilter("all"));
              }}
              value="all"
            >
              all
            </TabsTrigger>
            <TabsTrigger
              onClick={() => {
                dispatch(updateFilter("low"));
              }}
              value="low "
            >
              low
            </TabsTrigger>
            <TabsTrigger
              onClick={() => {
                dispatch(updateFilter("medium"));
              }}
              value="medium"
            >
              medium
            </TabsTrigger>
            <TabsTrigger
              onClick={() => {
                dispatch(updateFilter("high"));
              }}
              value="high"
            >
              high
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal></AddTaskModal>
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default Task;
