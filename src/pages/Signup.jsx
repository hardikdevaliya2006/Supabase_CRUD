import Navbar from "../components/Navbar";
import SignupForm from "../components/SignupForm";

const Signup = () => {
  return (
    <main className="h-screen bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] ">
      <header className="bg-slate-800 flex justify-center items-center h-[6vh]">
        <Navbar></Navbar>
      </header>
      <section className="flex h-[88vh] items-center justify-center">
        <SignupForm></SignupForm>
      </section>
      <footer></footer>
    </main>
  );
};

export default Signup;
