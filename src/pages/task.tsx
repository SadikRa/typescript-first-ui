import TaskCard from "@/components/module/taskCard";
import {  selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Task = () => {
  const tasks = useAppSelector(selectTasks);
  

  console.log(tasks);
 

  return (
    <div>
      <div> Tasks </div>
      <div className="space-y-5 mt-5">
        {
          tasks.map((task) => (
            <TaskCard task={task} />
          ))
        }
       
      </div>
    </div>
  );
};

export default Task;
