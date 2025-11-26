import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MiniSpinner from "./MiniSpinner";
import { loginUser } from "../store/reducer/actions/auth/loginUser.action";
import { Link, useNavigate } from "react-router";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, isAuthenticated, error } = useSelector(
    (state) => state.auth
  );

  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(form));
  };

  useEffect(() => {
    if (isAuthenticated && !error && !loading) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate, error, loading]);

  return (
    <section className="h-screen w-full flex justify-center items-center">
      <div className="loginBox p-4 md:w-100 w-[85%] text-neutral-600 flex gap-7 flex-col justify-center border border-green-500 bg-green-500/10 rounded-[20px]">
        <div className="loginHead">
          <h2 className="font-semibold text-font-primary text-[1.5rem]">
            Login
          </h2>
          <span className="text-sm">Please login to access your account</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputBoxAndBtn pb-4 flex flex-col gap-2">
            <div className="emailInput flex flex-col gap-1">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                type="email"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="jhonsnow@example.com"
                className="text-[1rem] pl-2 py-[0.19rem] border-green-500 border outline-none rounded-sm"
              />
            </div>
            <div className="passwordInput flex flex-col gap-1">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                type="password"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="xxxxxx"
                className="text-[1rem] pl-2 py-[0.19rem] border-green-500 border outline-none rounded-sm"
              />
            </div>
          </div>
          <div className="submit flex flex-col gap-2">
            <button
              disabled={loading}
              className={`${
                loading ? "bg-green-500/60" : "bg-green-500"
              } p-2 py-1.5 cursor-pointer font-semibold rounded-sm text-white w-full`}
            >
              {loading ? (
                <>
                  <MiniSpinner size="xs" /> Login...
                </>
              ) : (
                "Login"
              )}
            </button>
            <div className="text-sm subtext">
              <p>
                <span>Not have an account? </span>
                <Link
                  to={"/signup"}
                  className="text-brand-primary text-green-600 underline"
                >
                  Singup here
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
