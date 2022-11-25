import { RouterProvider } from "react-router-dom";
import { RoutesList } from "./router";

export const AppRouter = ({ loading, setAuth }) => {
    return (
        <RouterProvider router={RoutesList} />
    );
}