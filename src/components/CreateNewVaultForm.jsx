import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchBrands } from "../store/feature/brand/actions/searchBrands.action";
import {
  clearBrand,
  selectBrand,
} from "../store/feature/brand/reducers/brandSlice.reducer";

const CreateNewVaultForm = () => {
  const dispatch = useDispatch();
  const { suggestions, selectedBrand, loading } = useSelector(
    (state) => state.brand
  );

  const [loginType, setLoginType] = useState("email");
  const [brandName, setBrandName] = useState("");
  const [domain, setDomain] = useState("");

  const handleBrandSearch = (e) => {
    const value = e.target.value;
    setBrandName(value);

    // **If input empty → remove dropdown + reset selected brand**
    if (!value.trim()) {
      setDomain("");
      dispatch(clearBrand());
      return;
    }

    // Fetch only if length >= 2
    if (value.length >= 2) dispatch(searchBrands(value));
  };

  const handleSelect = (brandInfo) => {
    dispatch(
      selectBrand({
        name: brandInfo?.name,
        domain: brandInfo?.domain,
        logo: brandInfo?.icon,
      })
    );
    setBrandName(brandInfo?.name);
    setDomain(brandInfo?.domain);
  };

  return (
    <div className="flex flex-col h-full w-[90vw] md:w-[600px] mx-auto items-start justify-center">
      <div className="formHeader border-t-transparent rounded-t-md md:rounded-t-xl px-2 py-1 bg-slate-800 w-full">
        <p className="text-xl font-semibold text-white">
          <span className="text-green-500">Create </span> New Vault
        </p>
      </div>
      <div className="dataInput w-full p-4 border-x border-b border-b-slate-800 rounded-b-md md:rounded-b-xl">
        <form className="gap-4 flex flex-col">
          <div className="relative flex flex-col gap-2">
            <label htmlFor="title" className="text-sm">
              App / Web Name
            </label>

            <div className="flex items-center ">
              {selectedBrand?.logo && (
                <img
                  src={selectedBrand.logo}
                  className="w-7 h-7 mr-2 rounded"
                  alt="brand icon"
                />
              )}
              <input
                type="text"
                id="title"
                value={brandName}
                onChange={handleBrandSearch}
                placeholder="Instagram"
                className="flex-1 px-1 py-[0.19rem] outline-none text-[1rem] border border-green-500 bg-green-100 rounded-sm md:rounded-md"
              />
            </div>

            {brandName.trim() && suggestions.length > 0 && !selectedBrand && (
              <ul className="absolute w-full top-16 left-0 bg-slate-800 shadow-lg border rounded-md md:rounded-md max-h-48 overflow-auto z-20">
                {loading && <li className="p-2 text-sm">Searching...</li>}
                {suggestions.map((brandItem) => (
                  <>
                    <li
                      key={brandItem?.domain}
                      onClick={() => handleSelect(brandItem)}
                      className="p-2 cursor-pointer text-white hover:bg-slate-700 flex items-center gap-2"
                    >
                      {brandItem?.icon && (
                        <img src={brandItem.icon} className="w-5 h-5 rounded" />
                      )}

                      {brandItem?.name}
                    </li>
                    <span className="border-[0.1rem] flex w-full border-slate-600"></span>
                  </>
                ))}
              </ul>
            )}
          </div>
          <div className="logoUrl flex flex-col gap-2">
            <label htmlFor="url" className="text-sm">
              App / Web URL
            </label>
            <input
              type="text"
              value={domain}
              id="url"
              onChange={(e) => setDomain(e.target.value)}
              placeholder="instagram.com"
              className="text-[1rem] pl-1 py-[0.19rem] bg-green-100 border-green-500 border outline-none rounded-sm md:rounded-md"
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
                  className="text-[1rem] w-full pl-1 py-[0.19rem] bg-green-100 border-green-500 border outline-none rounded-sm md:rounded-md"
                />
              </div>
            )}

            {loginType === "email" && (
              <div className="inputLoginEmail">
                <input
                  type="email"
                  id="loginType"
                  placeholder="jhonsnow@example.com"
                  className="text-[1rem] w-full pl-1 py-[0.19rem] bg-green-100 border-green-500 border outline-none rounded-sm md:rounded-md"
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
              className="text-[1rem] pl-1 py-[0.19rem] bg-green-100 border-green-500 border outline-none rounded-sm md:rounded-md"
            />
          </div>
          <div className="submitButton flex items-center">
            <button className="bg-green-500 flex items-center justify-center gap-2 px-5 py-1 rounded-full text-black font-semibold">
              <lord-icon
                src="https://cdn.lordicon.com/efxgwrkc.json"
                trigger="hover"
                colors="primary:#000000"
                className="w-5"
              ></lord-icon>
              <p>Save</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewVaultForm;
