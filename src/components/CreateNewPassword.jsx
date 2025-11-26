import React from "react";

const CreateNewPassword = () => {
  return (
    <section className="w-full flex items-center justify-center">
      <button className="bg-green-500 w-[90%] px-4 gap-2 py-0.5 flex items-center justify-center rounded-full ">
        <span className="flex items-center justify-center">
          <lord-icon
            src="https://cdn.lordicon.com/awjeikyj.json"
            trigger="hover"
            colors="primary:#ffffff"
            className="h-9 w-9"
          ></lord-icon>
        </span>
        <p className="text-white text-xl font-bold">Create New Vault</p>
      </button>
    </section>
  );
};

export default CreateNewPassword;
