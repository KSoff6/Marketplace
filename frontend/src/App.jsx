import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "@pages/Home";
import LoginPage from "@pages/Login";
import Register from "@pages/Register";
import Cart from "@pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
