import { useState } from "react";
import MiniSpinner from "./MiniSpinner";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { updateFullName } from "../store/feature/auth/actions/updateFullName.action";

const UpdateUserName = () => {
  const { loading, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState(user?.user_metadata?.fullName || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName.trim()) return;
    dispatch(updateFullName(fullName));
    navigate(`/profile/${user.id}`);
  };

  return (
    <>
      <div className="loginBox p-4 md:w-100 w-[85%] text-neutral-600 flex gap-4 flex-col justify-center border border-green-500 bg-green-500/10 rounded-[20px]">
        <div className="loginHead">
          <h2 className="font-semibold text-font-primary text-[1.5rem]">
            Change Name
          </h2>
          <span className="text-sm">
            Change your name anytime. Your profile will update instantly.
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputBoxAndBtn pb-6 flex flex-col gap-2">
            <div className="nameInput flex flex-col gap-1">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="New Name"
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
                  <MiniSpinner size="xs" /> Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateUserName;
