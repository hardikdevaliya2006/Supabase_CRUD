import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineDateRange } from "react-icons/md";

const UserProfile = () => {
  const { user } = useSelector((state) => state.auth);

  function toIST(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  }

  console.log(toIST("2025-11-26T06:20:28.402082Z"));

  return (
    <main className="h-screen bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] ">
      <header className="bg-slate-800 flex justify-center items-center h-[6vh]">
        <Navbar></Navbar>
      </header>
      <section className="flex h-[88vh] flex-col gap-10 items-center justify-center">
        <div className="userNameAndPhoto flex-col flex items-center justify-center gap-4">
          <div>
            <img
              src={`https://api.dicebear.com/9.x/bottts-neutral/svg?seed=${encodeURIComponent(
                user?.email
              )}&radius=50`}
              alt="avatar"
              className="w-32 h-32"
            />
          </div>
          <div className="text-2xl font-semibold">
            <p>👋🏻 Wellcome {user?.user_metadata?.fullName}</p>
          </div>
        </div>
        <div className="userData w-[85%] gap-4 flex-col flex items-center justify-center">
          <div className="nameInput w-full flex flex-col gap-1">
            <label htmlFor="fullName" className="text-sm">
              Full Name
            </label>
            <div className="flex items-center gap-2 pl-2 py-1 border-green-500 border rounded-md">
              <CgProfile className="text-2xl text-green-500"></CgProfile>
              <input
                type="text"
                id="fullName"
                value={user?.user_metadata?.fullName}
                readOnly
                className="text-xl w-full outline-none"
              />
            </div>
          </div>
          <div className="emailInput w-full flex flex-col gap-1">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <div className="flex items-center gap-2 pl-2 py-1 border-green-500 border rounded-md">
              <HiOutlineMail className="text-2xl text-green-500"></HiOutlineMail>
              <input
                type="email"
                id="email"
                value={user?.user_metadata?.email}
                readOnly
                className="text-xl w-full outline-none"
              />
            </div>
          </div>
          <div className="timeInput w-full flex flex-col gap-1">
            <label htmlFor="time" className="text-sm">
              Last Login
            </label>
            <div className="flex items-center gap-2 pl-2 py-1 border-green-500 border rounded-md">
              <MdOutlineDateRange className="text-2xl text-green-500"></MdOutlineDateRange>
              <input
                type="text"
                id="time"
                value={toIST(user?.last_sign_in_at)}
                readOnly
                className="text-xl w-full outline-none"
              />
            </div>
          </div>
        </div>
        <div className="userMamgement"></div>
      </section>
      <footer></footer>
    </main>
  );
};

export default UserProfile;
