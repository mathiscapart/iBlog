import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainDocument from "../template/MainDocument.tsx";
import Error from "../error/Error.tsx"
import Login from "../page/Login.tsx";
import Home from "../page/Home.tsx";
import Logout from "../page/Logout.tsx";
import Article from "../page/Article.tsx";

// const [filter, setFilter] = useState("");

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainDocument />,
        errorElement: <Error />,
        children: [
            /*{
                path: "/articles",
                element: <Articles filter={filter}/>
            },*/
            {
                path: "/article/:articleId",
                element: <Article />
            },
            /*{
                path: "/category",
                element: <Categorys onClick={(e) => setFilter(e)} />
            },*/
            {
                path: "/category/:categoryId",
            },
            /*{
                path: "/category/:articleId",
                element: <Category />
            },*/
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
