import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestroMenu from "./components/Restromenu";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Grocery = lazy(() => import("./components/Grocery"));
const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path :"/restraunt/:resId",
        element : <RestroMenu/>,
      },
      {
        path:"/grocery",
        element: <Suspense fallback={<h1> We are loading Grocery please wait</h1>}> <Grocery/> </Suspense>,
      }
    ],
    errorElement:<Error/>,
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
