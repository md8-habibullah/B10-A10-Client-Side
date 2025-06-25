// src/routes/PrivateRoute.jsx
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Spinner from "../components/ui/Spinner";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) return <Spinner />;

    if (user) return children;

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
