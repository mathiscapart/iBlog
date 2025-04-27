import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainDocument from "../template/MainDocument.tsx";
import Error from "../error/Error.tsx"
import Login from "../componsent/Login.tsx";
import Home from "../componsent/Home.tsx";
import Logout from "../componsent/Logout.tsx";
import Articles from "../componsent/Articles.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainDocument />,
        errorElement: <Error />,
        children: [
            {
                path: "/articles",
                element: <Articles />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/home",
                element: (
                    <>
                        <Home />
                    </>
                ),
            },
            {
                path: "/logout",
                element: (
                    <>
                        <Logout />
                    </>
                )
            }
        ]
    },

]);

function Route() {
    return <RouterProvider  router={router} />;
}

export default Route;
