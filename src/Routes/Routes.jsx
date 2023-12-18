import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/projects",
                element: <Projects></Projects>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ]
    },

]);

export default routes;