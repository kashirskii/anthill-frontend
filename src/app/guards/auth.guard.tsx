import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store";

export const AuthGuard = () => {
  const { isAuthorized } = useAppSelector((state) => state.user);
  return isAuthorized ? <Outlet /> : <Navigate to="/" />;
};
