import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useEffect } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/store";
// import Travel from "./components/Travel";
const Travel = lazy(() => import("./components/Travel"));
const Laptop = lazy(() => {
  return import("./components/Laptop");
});
const Cart=lazy(()=>import("./components/Cart"))
const AppContainer = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const data = {
      name: "Nikitha",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="AppContainer">
          <Header />

          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    children: [
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
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/travel",
        element: (
          <Suspense fallback={<h1>loading travel component</h1>}>
            <Travel />
          </Suspense>
        ),
      },
      {
        path: "/laptop",
        element: (
          <Suspense fallback={<h1>loading laptop component</h1>}>
            <Laptop />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
