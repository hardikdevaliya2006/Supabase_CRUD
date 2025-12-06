import { useDispatch } from "react-redux";
import AppRoute from "./routes/AppRoute.Route";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { checkAuth } from "./store/feature/auth/actions/checkAuth.action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <>
      <Toaster
        toastOptions={{
          success: {
            iconTheme: {
              primary: "#00c951",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      ></Toaster>
      <AppRoute></AppRoute>
    </>
  );
};

export default App;
