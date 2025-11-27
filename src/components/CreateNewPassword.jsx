const CreateNewPassword = () => {
  return (
    <section className="w-[97vw] md:w-[70vw] flex items-center justify-center lg:justify-end">
      <button className="bg-green-500 cursor-pointer hover:scale-99 transition-all w-[95%] lg:w-fit lg:px-8 px-4 gap-2 py-2 flex items-center justify-center rounded-full ">
        <span className="flex items-center justify-center">
          <lord-icon
            src="https://cdn.lordicon.com/jqqjtvlf.json"
            trigger="hover"
            colors="primary:#ffffff"
            className="h-7 w-7"
          ></lord-icon>
        </span>
        <p className="text-white text-xl font-bold">Create New Vault</p>
      </button>
    </section>
  );
};

export default CreateNewPassword;
