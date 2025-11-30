import { Link } from "react-router";

const CreateNewPassword = () => {
  return (
    <section className="w-[97vw] md:w-[70vw] flex items-center justify-center lg:justify-end">
      <Link
        to={"/create"}
        className="bg-green-500 cursor-pointer hover:scale-99 transition-all w-[97%] lg:w-fit lg:px-8 gap-2 py-1.5 flex items-center justify-center rounded-full "
      >
        <span className="flex items-center justify-center">
          <lord-icon
            src="https://cdn.lordicon.com/jqqjtvlf.json"
            trigger="hover"
            colors="primary:#fff"
            className="h-6 w-6"
          ></lord-icon>
        </span>
        <p className="text-white text-[1.2rem]">Create New Vault</p>
      </Link>
    </section>
  );
};

export default CreateNewPassword;
