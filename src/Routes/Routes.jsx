import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import BoookServices from "../Pages/BoookServices/BoookServices";
import Booking from "../Pages/BoookServices/Booking/Booking";
import PrivetRoute from "../PrivetRouter/PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/book/:id",
        element: <BoookServices></BoookServices>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/bookings",
        element: (
          <PrivetRoute>
            <Booking></Booking>{" "}
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default router;
