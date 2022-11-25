import { createBrowserRouter } from "react-router-dom";
import HomeComponent from "../containers/home";
import LoginComponent from "../containers/login";
import ErrorPage from "../layouts/ErrorLayout/ErrorPage";
import MainLayout from '../layouts/MainLayout'

export const RoutesList = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout Children={HomeComponent} />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: <LoginComponent />,
        errorElement: <ErrorPage />,
    }
])
