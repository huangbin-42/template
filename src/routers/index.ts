import { lazy } from "react";
import { withLazy } from "@/components";
import { RouteObject } from "react-router-dom";

const Home = lazy(() => import(`@/pages/home`));
const Test = lazy(() => import(`@/pages/test`));

const rootRouter: RouteObject[] = [
    {
        path: "/",
        element: withLazy(Home),
    },
    {
        path: "/test",
        element: withLazy(Test),
    },
]

export default rootRouter