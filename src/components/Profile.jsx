import { useDispatch, useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineDateRange } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";
import { LuPencil } from "react-icons/lu";
import { IoExitOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { Link, useNavigate } from "react-router";
import { logoutUser } from "../store/feature/auth/actions/logoutUser.action.js";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function toIST(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  }

  const logOut = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <>
      <div className="userNameAndPhoto flex-col flex items-center justify-center md:gap-4 gap-2">
        <div>
          <img
            src={`https://api.dicebear.com/9.x/bottts-neutral/svg?seed=${encodeURIComponent(
              user?.email
            )}&radius=50`}
            alt="avatar"
            className="sm:w-32 w-28"
          />
        </div>
        <div className="text-2xl font-semibold">
          <p>👋🏻 Wellcome {user?.user_metadata?.fullName}</p>
        </div>
      </div>
      <div className="userData md:w-100 w-[85%] gap-2 flex-col flex items-center justify-center">
        <div className="nameInput w-full flex flex-col gap-1">
          <label htmlFor="fullName" className="text-sm">
            Full Name
          </label>
          <div className="flex items-center gap-2 pl-2 py-1 border-green-500 border rounded-md">
            <CgProfile className="text-xl text-green-500"></CgProfile>
            <input
              type="text"
              id="fullName"
              value={user?.user_metadata?.fullName}
              readOnly
              className="w-full md:text-xl outline-none"
            />
          </div>
        </div>
        <div className="emailInput w-full flex flex-col gap-1">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <div className="flex items-center gap-2 pl-2 py-1 border-green-500 border rounded-md">
            <HiOutlineMail className="text-xl text-green-500"></HiOutlineMail>
            <input
              type="email"
              id="email"
              value={user?.user_metadata?.email}
              readOnly
              className="w-full md:text-xl outline-none"
            />
          </div>
        </div>
        <div className="timeInput w-full flex flex-col gap-1">
          <label htmlFor="time" className="text-sm">
            Last Login
          </label>
          <div className="flex items-center gap-2 pl-2 py-1 border-green-500 border rounded-md">
            <MdOutlineDateRange className="text-xl text-green-500"></MdOutlineDateRange>
            <input
              type="text"
              id="time"
              value={toIST(user?.last_sign_in_at)}
              readOnly
              className="w-full md:text-xl outline-none"
            />
          </div>
        </div>
      </div>
      <div className="userMamgement md:w-100 w-[85%]">
        <div class="flex flex-col gap-2 items-center justify-center">
          <Link
            to={`/profile/${user?.id}/forgot-password`}
            className="p-1 flex items-center justify-center gap-2 font-semibold w-full text-yellow-400 border border-yellow-500/50 bg-yellow-500/10 rounded-lg"
          >
            <span>Forgot My Password</span>
            <span>
              <MdOutlineLock />
            </span>
          </Link>
          <Link
            to={`/profile/${user?.id}/updateName`}
            className="p-1 flex items-center justify-center gap-2 font-semibold w-full text-blue-400 border border-blue-500/50 bg-blue-500/10 rounded-lg"
          >
            <span>Change Name</span>
            <span>
              <LuPencil />
            </span>
          </Link>
          <button
            onClick={logOut}
            className="p-1 flex items-center justify-center gap-2 font-semibold w-full text-green-400 border border-green-500/50 bg-green-500/10 rounded-lg"
          >
            <span>Logout</span>
            <span>
              <IoExitOutline />
            </span>
          </button>
          <button className="p-1 flex items-center justify-center gap-2 font-semibold w-full text-red-400 border border-red-500/40 bg-red-500/10 rounded-lg cursor-pointer">
            <span>Delete My Account</span>
            <span>
              <AiOutlineDelete />
            </span>
          </button>
        </div>
      </div>
      <div className="text-sm text-gray-400">
        Account created At {toIST(user?.created_at)}
      </div>
    </>
  );
};

export default Profile;
