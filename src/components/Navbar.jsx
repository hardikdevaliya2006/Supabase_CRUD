const Navbar = () => {
  return (
    <nav className="h-full w-[98vw] md:w-[70vw] flex items-center justify-between">
      <div className="logoSection text-xl font-bold text-white">
        &lt;<span className="text-green-400">Pass</span>
        <span>crud.com/&gt;</span>
      </div>
      <div className="navigationBtn text-white">
        <div className="githubButton"></div>
        <div className="profileCircle"></div>
      </div>
    </nav>
  );
};

export default Navbar;
