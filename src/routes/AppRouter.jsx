// src/routes/AppRouter.jsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddEquipment from "../pages/AddEquipment/AddEquipment";
import AllEquipments from "../pages/AllEquipments/AllEquipments";
// import EquipmentDetails from "../pages/EquipmentDetails/EquipmentDetails";
import MyEquipments from "../pages/MyEquipments/MyEquipments";
import UpdateEquipment from "../pages/UpdateEquipment/UpdateEquipment";
import NotFound from "../pages/NotFound/NotFound";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
            { path: "/all-equipments", element: <AllEquipments /> },
            {
                path: "/add-equipment",
                element: (
                    <PrivateRoute>
                        <AddEquipment />
                    </PrivateRoute>
                ),
            },
            {
                path: "/my-equipments",
                element: (
                    <PrivateRoute>
                        <MyEquipments />
                    </PrivateRoute>
                ),
            },
            // {
            //     path: "/equipment/:id",
            //     element: (
            //         <PrivateRoute>
            //             <EquipmentDetails />
            //         </PrivateRoute>
            //     ),
            // },
            {
                path: "/update-equipment/:id",
                element: (
                    <PrivateRoute>
                        <UpdateEquipment />
                    </PrivateRoute>
                ),
            },
        ],
    },
    { path: "*", element: <NotFound /> },
]);

export default router;
