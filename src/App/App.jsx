import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";

import Layout from "../components/Layout/Layout.jsx";
import Landing from "../screens/Landing/Landing.jsx";
import RouteError from "../screens/Errors/ErrorPage.jsx";
import LoginPage from "../screens/Login/LoginPage.jsx";
import ForgotPassword from "../screens/ForgotPassword/ForgotPassword.jsx";
import ResetPassword from "../screens/ResetPassword/ResetPassword.jsx";
import StudentPanel from "../screens/StudentPanel";
import { MenuDetail } from "../screens/DetailArticle/MenuDetail";
import RegisterPage from "../screens/Register/RegisterPage.jsx";
import NewsArticle from "../screens/NewsArticle/NewsArticle.jsx";
import Courses from "../screens/Courses/Courses.jsx";
import CoursesDetail from "../screens/CoursesDetail/CoursesDetail.jsx";
import { CourseMenuDetail } from "../screens/DetailCourses/CourseMenuDetail.jsx";
import NewRegister from "../screens/NewRegister.jsx/NewRegister.jsx";
import NewLogin from "../screens/NewLogin/NewLogin.jsx";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getItem } from "../core/services/common/storage.services.js";
import { onTokenChange } from "../redux/user.js";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Landing />,
        errorElement: <RouteError />,
      },
      {
        path: "/login",
        element: <NewLogin />,
        errorElement: <RouteError />,
      },
      {
        path: "/register",
        element: <NewRegister />,
        errorElement: <RouteError />,
      },
      {
        path: "/forgotPassword",
        element: <ForgotPassword />,
        errorElement: <RouteError />,
      },
      {
        path: "/NewsArticle/menudetail/:id",
        element: <MenuDetail />,
        errorElement: <RouteError />,
      },
      {
        path: "/NewsArticle",
        element: <NewsArticle />,
        errorElement: <RouteError />,
      },
      {
        path: "/resetPassword",
        element: <ResetPassword />,
        errorElement: <RouteError />,
      },
      {
        path: "/courses",
        element: <Courses />,
        errorElement: <RouteError />,
      },
      {
        path: "/CourseMenuDetail/:id",
        element: <CourseMenuDetail />,
        errorElement: <RouteError />,
      },
      {
        path: "*",
        element: <RouteError />,
      },
    ],
    errorElement: <RouteError />,
  },
  {
    path: "/studentPanel",
    element: <StudentPanel />,
    errorElement: <RouteError />,
  },
]);

function App() {
  const dispach = useDispatch();
  const client = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false, staleTime: 1000 * 6 * 5 },
      mutations: {},
    },
  });

  useEffect(() => {
    getItem("token") && onTokenChange(getItem("token"));
  }, []);

  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} />
    </QueryClientProvider>
  );
}

export default App;
