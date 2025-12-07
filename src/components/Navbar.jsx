import { FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const Navbar = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  return (
    <nav className="h-full w-[97vw] md:w-[70vw] flex items-center justify-between">
      <div className="logoSection text-2xl font-bold text-white">
        &lt;<span className="text-green-400">Pass</span>
        <span>crud/&gt;</span>
      </div>
      <div className="navigationBtn flex items-center justify-center gap-2 text-white">
        <Link
          to={"https://github.com/hardikdevaliya2006/Supabase_CRUD"}
          className="githubButton font-semibold text-sm border border-white/50 p-2 rounded-full bg-green-500/50 flex items-center gap-2"
        >
          <FaGithub className="text-xl"></FaGithub>
          <p>Github</p>
        </Link>
        {!!user && isAuthenticated && (
          <Link
            to={`/profile/${user?.user_metadata?.sub}`}
            className="profileCircle"
          >
            <img
              src={`https://api.dicebear.com/9.x/bottts-neutral/svg?seed=${encodeURIComponent(
                user.email
              )}&radius=50`}
              alt="avatar"
              className="w-8 h-8"
            />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
