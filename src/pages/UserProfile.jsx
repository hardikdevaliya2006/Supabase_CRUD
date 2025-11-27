import Navbar from "../components/Navbar";
import Profile from "../components/Profile";

const UserProfile = () => {
  return (
    <main className="h-screen bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] ">
      <header className="bg-slate-800 flex justify-center items-center h-[6vh]">
        <Navbar></Navbar>
      </header>
      <section className="flex h-[88vh] flex-col gap-10 items-center justify-center">
        <Profile></Profile>
      </section>
      <footer></footer>
    </main>
  );
};

export default UserProfile;
