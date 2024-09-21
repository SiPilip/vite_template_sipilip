import { Navigate, createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/layout/AppLayout";
import Home from "./pages/home/page";
import Competitions from "./pages/competitions/page";
import AboutUs from "./pages/about_us/page";
import Registration from "./pages/registration/page";
import FAQ from "./pages/faq/page";

const RouterBuilder = () => {
  const generalRoutes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
    {
      path: "/competitions",
      element: <Competitions />,
    },
    {
      path: "/registration",
      element: <Registration />,
    },
    {
      path: "/faq",
      element: <FAQ />,
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ];

  const routes = createBrowserRouter([
    {
      element: <AppLayout />,
      children: generalRoutes,
    },
  ]);

  return routes;
};

export default RouterBuilder;
