import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/Authcontext";

const ProtectedRoute = () => {
  const { user } = useAuth();

  return user ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
