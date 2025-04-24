import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainDocument from "../template/MainDocument.tsx";
import Error from "../error/Error.tsx"
import Login from "../componsent/Login.tsx";


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

        ]
    },

]);

function Route() {
    return <RouterProvider  router={router} />;
}

export default Route;
