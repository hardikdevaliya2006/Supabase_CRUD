import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchBrands } from "../store/feature/brand/actions/searchBrands.action";
import {
  clearBrand,
  selectBrand,
} from "../store/feature/brand/reducers/brandSlice.reducer";
import MiniSpinner from "./MiniSpinner";
import { IoEyeOutline } from "react-icons/io5";
import { LuEyeClosed } from "react-icons/lu";
import { createVault } from "../store/feature/crud/actions/createVault.action";
import { useNavigate } from "react-router";

const CreateNewVaultForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { suggestions, selectedBrand, loading } = useSelector(
    (state) => state.brand
  );

  const dropdownRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [loginType, setLoginType] = useState("email");
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    title: "",
    platform_url: "",
    identifier: "",
    password: "",
    logo_url: "",
    isEmailLogin: true,
  });

  const updateForm = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleBrandSearch = (e) => {
    const value = e.target.value;
    updateForm("title", value);

    if (!value.trim()) {
      updateForm("platform_url", "");
      dispatch(clearBrand());
      return;
    }

    if (value.length >= 2) dispatch(searchBrands(value));
    setIsOpen(true);
  };

  const handleSelect = (brand) => {
    dispatch(selectBrand(brand));
    setForm((prev) => ({
      ...prev,
      title: brand?.name,
      platform_url: brand?.domain,
      logo_url: brand?.icon,
      isEmailLogin: loginType === "email",
    }));

    setIsOpen(false);
  };

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setIsOpen(false);
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📦 FINAL FORM DATA:", form);
    dispatch(createVault(form));
    navigate("/");
  };

  return (
    <div className="flex flex-col h-full w-[90vw] md:w-[600px] mx-auto items-start justify-center">
      <div className="formHeader border-t-transparent rounded-t-md md:rounded-t-xl px-2 lg:px-4 lg:py-2 py-1 bg-slate-800 w-full">
        <p className="text-xl lg:text-2xl font-semibold text-white">
          <span className="text-green-500">Create </span> New Vault
        </p>
      </div>

      <div className="dataInput w-full p-4 border-x border-b border-b-slate-800 rounded-b-md md:rounded-b-xl">
        <form onSubmit={handleSubmit} className="gap-4 flex flex-col">
          <div ref={dropdownRef} className="relative flex flex-col gap-2">
            <label className="text-sm lg:text-[1rem]">App or Web Name</label>
            <div className="flex items-center">
              {selectedBrand?.icon && (
                <img
                  src={selectedBrand?.icon}
                  className="w-7 h-7 lg:w-8 lg:h-8 mr-2 rounded"
                  alt="brand"
                />
              )}

              <input
                type="text"
                value={form.title}
                onChange={handleBrandSearch}
                onFocus={() => setIsOpen(true)}
                placeholder="Instagram"
                className="flex-1 lg:text-xl lg:pl-2 px-1 py-[0.19rem] outline-none text-[1rem] border border-green-500 bg-green-100 rounded-sm md:rounded-md"
              />
            </div>

            {isOpen &&
              form.title.trim() &&
              suggestions.length > 0 &&
              !selectedBrand && (
                <ul className="absolute w-full top-16 left-0 bg-slate-800 shadow-lg border rounded-md max-h-48 overflow-auto z-20">
                  {loading ? (
                    <li className="flex items-center justify-center h-8">
                      <MiniSpinner variant="muted" />
                    </li>
                  ) : (
                    suggestions.map((brand) => (
                      <li
                        key={brand.domain}
                        onClick={() => handleSelect(brand)}
                        className="p-2 cursor-pointer text-white hover:bg-slate-700 flex items-center gap-2"
                      >
                        {brand.icon && (
                          <img src={brand.icon} className="w-5 h-5 rounded" />
                        )}
                        {brand.name}
                      </li>
                    ))
                  )}
                </ul>
              )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm lg:text-[1rem]">App / Web URL</label>
            <input
              type="text"
              value={form.platform_url}
              onChange={(e) => updateForm("platform_url", e.target.value)}
              placeholder="instagram.com"
              className="text-[1rem] lg:text-xl lg:pl-2 pl-1 py-[0.19rem] bg-green-100 border-green-500 border outline-none rounded-sm md:rounded-md"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm lg:text-[1rem]">Select Login Type</label>

            <div className="flex gap-6 items-center">
              {["email", "username"].map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    className="peer hidden"
                    checked={loginType === type}
                    value={type}
                    onChange={(e) => {
                      setLoginType(e.target.value);
                      updateForm("isEmailLogin", e.target.value === "email");
                    }}
                  />
                  <span className="w-4 h-4 border border-gray-500 rounded-full flex items-center justify-center peer-checked:border-green-600 peer-checked:bg-green-600 transition-all">
                    <span className="w-2 h-2 bg-white rounded-full scale-0 peer-checked:scale-100 transition-all"></span>
                  </span>
                  <span className="text-gray-700">
                    {type === "email" ? "Email" : "Username"}
                  </span>
                </label>
              ))}
            </div>

            <input
              type={loginType === "email" ? "email" : "text"}
              placeholder={
                loginType === "email" ? "jhonsnow@example.com" : "feat.jhonsnow"
              }
              value={form.identifier}
              onChange={(e) => updateForm("identifier", e.target.value)}
              className="text-[1rem] lg:text-xl lg:pl-2 w-full pl-1 py-[0.19rem] bg-green-100 border-green-500 border outline-none rounded-sm md:rounded-md"
            />
          </div>

          <div className="relative flex flex-col gap-2">
            <label className="text-sm lg:text-[1rem]">Password</label>

            <input
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={(e) => updateForm("password", e.target.value)}
              placeholder="Enter Your Password"
              className="text-[1rem] lg:text-xl lg:pl-2 pl-1 pr-10 py-[0.19rem] bg-green-100 border-green-500 border outline-none rounded-sm md:rounded-md"
            />

            <button
              type="button"
              onClick={() => setShowPassword((p) => !p)}
              className="absolute lg:right-3 lg:bottom-2 right-2 bottom-1.5 text-gray-700 hover:text-black transition-all duration-200"
            >
              {showPassword ? (
                <IoEyeOutline size={20} />
              ) : (
                <LuEyeClosed size={20} />
              )}
            </button>
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
