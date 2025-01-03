import App from "@/App";
import Login from "@/pages/login";
import { Users } from "lucide-react";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
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
