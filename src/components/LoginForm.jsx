import React from "react";

const LoginForm = () => {
  return (
    <section className="h-screen w-full flex justify-center items-center">
      <div className="loginBox p-4 md:w-100 w-[85%] text-neutral-600 flex gap-7 flex-col justify-center border border-green-500 bg-green-500/10 rounded-[20px]">
        <div className="loginHead">
          <h2 className="font-semibold text-font-primary text-[1.5rem]">
            Login
          </h2>
          <span className="text-sm">Please login to access your account</span>
        </div>
        <div className="inputBoxAndBtn flex flex-col gap-2">
          <div className="emailInput flex flex-col gap-1">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              type="email"
              // onChange={(e) => setEmail(e.target.value)}
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
              // onChange={(e) => setPassword(e.target.value)}
              placeholder="xxxxxx"
              className="text-[1rem] pl-2 py-[0.19rem] border-green-500 border outline-none rounded-sm"
            />
          </div>
        </div>
        <div className="submit flex flex-col gap-2">
          <button
            className="bg-green-500 font-semibold p-2 py-1.5 cursor-pointer rounded-sm text-white w-full"
            // onClick={loginUser}
            // className={`${
            //   loading ? "bg-[#5f6fffd2]" : "bg-brand-primary"
            // } p-2 py-1.5 cursor-pointer rounded-[4px] text-white w-full`}
          >
            {/* {loading ? (
                <>
                  <MiniSpinner size="xs" /> Login...
                </>
              ) : (
                "Login"
              )} */}
            Login
          </button>
          <div className="text-sm subtext">
            <p>
              <span>Not have an account? </span>
              <a
                href="#"
                className="text-brand-primary text-green-600 underline"
              >
                Singup here
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
