import App from "@/App";
import Login from "@/pages/login";
import Task from "@/pages/task";
import Users from "@/pages/users";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Task></Task>,
      },
      {
        path: "users",
        element: <Users></Users>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default routes;
