import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import MiniSpinner from "../components/MiniSpinner";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  if (loading) {
    return (
      <div className="h-screen gap-2 bg-green-50 flex items-center justify-center text-lg">
        <div className="loading flex items-center justify-center">
          <MiniSpinner size={"xs"} variant={"muted"}></MiniSpinner>
        </div>
        <div className="text-black text-xl">Loading</div>
      </div>
    );
  }
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;
