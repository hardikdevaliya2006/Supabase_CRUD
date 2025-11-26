import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const PublicRoutes = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (isAuthenticated) return <Navigate to="/" replace />;

  return children;
};

export default PublicRoutes;
