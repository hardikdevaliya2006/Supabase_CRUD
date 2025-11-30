import { useState } from "react";

const CreateNewVaultForm = () => {
  const [loginType, setLoginType] = useState("email");
  return (
    <div className="flex flex-col h-full w-[90vw] mx-auto items-start justify-center">
      <div className="formHeader border-t-transparent rounded-t-md px-2 py-1 bg-slate-800 w-full">
        <p className="text-xl font-semibold text-white">
          <span className="text-green-500">Create </span> New Vault
        </p>
      </div>
      <div className="dataInput w-full p-4 border-x border-b border-b-slate-800 rounded-b-md">
        <form className="gap-4 flex justify-center flex-col">
          <div className="titleOfAppOrWeb gap-2 flex-col flex justify-center">
            <label htmlFor="title" className="text-sm">
              App / Web Name
            </label>
            <input
              type="text"
              id="title"
              placeholder="Instagram"
              className="text-[1rem] pl-1 py-[0.19rem] bg-green-100 border-green-500 border outline-none rounded-sm"
            />
          </div>
          <div className="logoUrl">
            
          </div>
          <div className="platfromUrl gap-2 flex-col flex justify-center">
            <label htmlFor="title" className="text-sm">
              App / Web Url
            </label>
            <input
              type="text"
              id="title"
              placeholder="instagram.com"
              className="text-[1rem] pl-1 py-[0.19rem] bg-green-100 border-green-500 border outline-none rounded-sm"
            />
          </div>
          <div className="usernameOrEmail flex-col flex gap-2">
            <div className="selectType w-fit gap-2 flex-col flex justify-center">
              <label htmlFor="loginType" className="text-sm">
                Select Login Type
              </label>
              <div className="typeSelection flex gap-6 items-center">
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    value="email"
                    id="email"
                    checked={loginType === "email"}
                    name="loginType"
                    onChange={(e) => setLoginType(e.target.value)}
                    className="peer hidden"
                  />

                  <span className="w-4 h-4 border border-gray-500 rounded-full flex items-center justify-center peer-checked:border-green-600 peer-checked:bg-green-600 relative transition-all">
                    <span className="w-2 h-2 bg-white rounded-full scale-0 peer-checked:scale-100 transition-all"></span>
                  </span>

                  <span className="text-gray-700 peer-checked:text-green-600">
                    Email
                  </span>
                </label>

                <label
                  htmlFor="username"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="loginType"
                    id="username"
                    checked={loginType === "username"}
                    onChange={(e) => setLoginType(e.target.value)}
                    value="username"
                    className="peer hidden"
                  />

                  <span className="w-4 h-4 border border-gray-500 rounded-full flex items-center justify-center peer-checked:border-green-600 peer-checked:bg-green-600 relative transition-all">
                    <span className="w-2 h-2 bg-white rounded-full scale-0 peer-checked:scale-100 transition-all"></span>
                  </span>

                  <span className="text-slate-700">Username</span>
                </label>
              </div>
            </div>
            {loginType === "username" && (
              <div className="inputLoginUsername">
                <input
                  type="text"
                  id="loginType"
                  placeholder="feat.jhonsnow"
                  className="text-[1rem] w-full pl-1 py-[0.19rem] bg-green-100 border-green-500 border outline-none rounded-sm"
                />
              </div>
            )}

            {loginType === "email" && (
              <div className="inputLoginEmail">
                <input
                  type="email"
                  id="loginType"
                  placeholder="jhonsnow@example.com"
                  className="text-[1rem] w-full pl-1 py-[0.19rem] bg-green-100 border-green-500 border outline-none rounded-sm"
                />
              </div>
            )}
          </div>
          <div className="password gap-2 flex-col flex justify-center">
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="XXXXXX"
              className="text-[1rem] pl-1 py-[0.19rem] bg-green-100 border-green-500 border outline-none rounded-sm"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewVaultForm;
