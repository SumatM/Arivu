import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const AdminRoute = ({ children }) => {
  const userStore = useSelector((store) => store.UserReducer);
  if (userStore?.role == "admin") {
    return <>{children}</>;
  }
  return <Navigate to="/arivu" />;
};
