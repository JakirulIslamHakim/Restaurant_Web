import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import AllMenu from "../Pages/Home/AllMenu/AllMenu";
import OurShop from "../Pages/OurSHop/OurShop/OurShop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "ourMenu",
        element: <Menu></Menu>,
      },
      {
        path: "allMenu",
        element: <AllMenu></AllMenu>,
      },
      {
        path: "/ourShop/:category",
        element: <OurShop></OurShop>,
      },
    ],
  },
]);
