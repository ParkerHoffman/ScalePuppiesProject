import { createBrowserRouter } from "react-router-dom";
import App from "./App";

export const router = createBrowserRouter([
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