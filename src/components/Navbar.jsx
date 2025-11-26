const Navbar = () => {
  return (
    <nav className="h-full w-[97vw] md:w-[70vw] flex items-center justify-between">
      <div className="logoSection text-2xl font-bold text-white">
        &lt;<span className="text-green-400">Pass</span>
        <span>crud/&gt;</span>
      </div>
      <div className="navigationBtn text-white">
        <div className="githubButton"></div>
        <div className="profileCircle"></div>
      </div>
    </nav>
  );
};

export default Navbar;
