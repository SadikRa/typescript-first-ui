import {  selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Task = () => {
  const tasks = useAppSelector(selectTasks);
  

  console.log(tasks);
 

  return (
    <div>
      <h1 className="text-6xl border-y-green-900"> this is task page</h1>
    </div>
  );
};

export default Task;
