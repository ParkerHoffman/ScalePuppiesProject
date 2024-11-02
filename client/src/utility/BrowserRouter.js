import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MockLogin from "./screens/MockLogin/MockLogin"

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
            { // Must be the last route
                path: "*",
                element: <NotFoundScreen/>
            }
        ]
    }
]);