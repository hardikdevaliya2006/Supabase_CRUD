import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <main className="h-screen bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] ">
      <header className="bg-slate-800 flex justify-center items-center h-[5vh]">
        <Navbar></Navbar>
      </header>
      <section className="flex h-[90vh] items-center justify-center">
        <LoginForm></LoginForm>
      </section>
      <footer></footer>
    </main>
  );
};

export default Login;
