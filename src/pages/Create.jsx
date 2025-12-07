import CreateNewVaultForm from "../components/CreateNewVaultForm";
import Navbar from "../components/Navbar";

const Create = () => {
  return (
    <main className="h-screen bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] ">
      <header className="bg-slate-800 flex justify-center items-center h-[6vh]">
        <Navbar></Navbar>
      </header>
      <section className="h-[92vh] mt-4">
        <CreateNewVaultForm></CreateNewVaultForm>
      </section>
    </main>
  );
};

export default Create;
