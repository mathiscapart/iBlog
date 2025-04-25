import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainDocument from "../template/MainDocument.tsx";
import Error from "../error/Error.tsx"
import Login from "../componsent/Login.tsx";
import PrivateRoute from "./PrivateRoute.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainDocument />,
        errorElement: <Error />,
        children: [

            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/home",
                element: (
                    <PrivateRoute>
                        <div>Page protégée</div>
                    </PrivateRoute>
                ),
            },
        ]
    },

]);

function Route() {
    return <RouterProvider  router={router} />;
}

export default Route;
