import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MockLogin from "./screens/MockLogin/MockLogin";
import Dashboard from "./screens/logged-in/Dashboard/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MockLogin/>
    },
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Dashboard/>
            },
            {
                path: "/herds",
                element: <Herds/>
            },
            { // Must be the last route
                path: "*",
                element: <NotFoundScreen/>
            }
        ]
    }
]);