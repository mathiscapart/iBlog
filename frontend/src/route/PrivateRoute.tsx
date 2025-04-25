import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import {JSX} from "react";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default PrivateRoute;
