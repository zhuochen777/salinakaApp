import Home from "./page/Home";
import Detail from "./page/Detail";
import Shop from "./page/Shop";
import Featured from "./page/Featured";
import Recommended from "./page/Recommended";

let routers = [
  { path: "/", element: <Home /> },
  { path: "/detail/:id", element: <Detail /> },
  { path: "/shop", element: <Shop /> },
  { path: "/featured", element: <Featured /> },
  { path: "/recommended", element: <Recommended /> },
];

export default routers;
