import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { forgotPassword } from "../store/feature/auth/actions/forgotPassword.action";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return toast.error("Enter a valid email");

    dispatch(forgotPassword(email))
      .unwrap()
      .then(() => toast.success("Password reset email sent 📩"))
      .catch((err) => toast.error(err));
  };

  return (
    <main className="h-screen bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] ">
      <header className="bg-slate-800 flex justify-center items-center h-[6vh]">
        <Navbar></Navbar>
      </header>
      <section className="flex h-[88vh] items-center justify-center">
        <div className="changePaswordBox p-4 md:w-100 w-[85%] text-neutral-600 flex gap-4 flex-col justify-center border border-green-500 bg-green-500/10 rounded-[20px]">
          <div className="changePasword">
            <h2 className="font-semibold text-font-primary text-[1.5rem]">
              Change Password
            </h2>
            <span className="text-sm">
              Change your Password anytime. Your profile will update instantly.
            </span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="inputBoxAndBtn pb-6 flex flex-col gap-2">
              <div className="emailInput flex flex-col gap-1">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jhonsnow@example.com"
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
                    <MiniSpinner size="xs" /> Seding...
                  </>
                ) : (
                  "Send Email"
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
      <footer></footer>
    </main>
  );
};

export default ForgotPassword;
