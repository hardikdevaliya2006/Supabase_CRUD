import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MiniSpinner from "./MiniSpinner";
import { signupUser } from "../store/reducer/actions/signupUser.action";
import { Link, useNavigate } from "react-router";

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, error, loading } = useSelector((state) => state.auth);

  const [form, setForm] = useState({ fullName: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(form));
  };

  useEffect(() => {
    if (user && !error) {
      setTimeout(() => navigate("/", { replace: true }), 2000);
    }
  }, [user, navigate, error]);

  return (
    <section className="h-screen w-full flex justify-center items-center">
      <div className="loginBox p-4 md:w-100 w-[85%] text-neutral-600 flex gap-7 flex-col justify-center border border-green-500 bg-green-500/10 rounded-[20px]">
        <div className="loginHead">
          <h2 className="font-semibold text-font-primary text-[1.5rem]">
            Signup
          </h2>
          <span className="text-sm">Please Signup to access your account</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputBoxAndBtn pb-4 flex flex-col gap-2">
            <div className="nameInput flex flex-col gap-1">
              <label htmlFor="fullName" className="text-sm">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                placeholder="Jhon Snow"
                className="text-[1rem] pl-1 py-[0.19rem] border-green-500 border outline-none rounded-sm"
              />
            </div>
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
                  <MiniSpinner size="xs" /> Signup...
                </>
              ) : (
                "Signup"
              )}
            </button>
            <div className="text-sm subtext">
              <p>
                <span>Have an account? </span>
                <Link
                to={"/login"}
                  className="text-brand-primary text-green-600 underline"
                >
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignupForm;
