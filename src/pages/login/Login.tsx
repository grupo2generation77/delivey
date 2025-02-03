import { SiCoffeescript } from "react-icons/si";
import { motion } from "framer-motion";
import { useState } from "react";

function Login() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen((prev) => !prev); // Garante que a atualização seja baseada no estado anterior
  };

  console.log("Popup aberto?", isPopupOpen); // Verifica mudanças no estado

  return (
    <>
      <div
        className="bg-cafe grid grid-cols-1 lg:grid-cols-2 
                    h-screen place-items-center font-bold"
      >
        <div className="hidden lg:block">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src="https://ik.imagekit.io/lkxant9gz/baixados.png?updatedAt=1738585876127"
              alt="delivery-guy"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          <form className="flex justify-center items-center flex-col gap-4">
            <h2 className="text-slate-900 text-2xl">
              <SiCoffeescript size={150} />
            </h2>
            <div className="flex text-center text-2xl flex-col w-full">
              <label className="p-5" htmlFor="usuario">
                Usuário
              </label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Usuario"
                className="border-2 text-xl border-slate-700 rounded p-2"
              />
            </div>
            <div className="flex text-2xl flex-col text-center w-full">
              <label className="p-5" htmlFor="senha">
                Senha
              </label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                className="border-2 text-xl border-slate-700 rounded p-2"
              />
            </div>
            <button
              type="submit"
              className="rounded bg-orange-400 flex justify-center hover:bg-orange-600 text-white w-1/2 py-2"
            >
              <span>Entrar</span>
            </button>

            <hr className="border-slate-800 w-full" />

            <p>
              <button
                onClick={(e) => {
                  e.preventDefault(); // Evita que o botão cause re-render desnecessário
                  togglePopup();
                }}
                className="text-sonic-dark hover:underline"
              >
                Cadastre-se
              </button>
            </p>
          </form>
        </motion.div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Cadastre-se</h2>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label htmlFor="nome" className="text-lg">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Nome"
                  className="border-2 text-xl border-slate-700 rounded p-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="border-2 text-xl border-slate-700 rounded p-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="senha" className="text-lg">
                  Senha
                </label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  placeholder="Senha"
                  className="border-2 text-xl border-slate-700 rounded p-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="confirmarSenha" className="text-lg">
                  Confirmar Senha
                </label>
                <input
                  type="password"
                  id="confirmarSenha"
                  name="confirmarSenha"
                  placeholder="Confirmar Senha"
                  className="border-2 text-xl border-slate-700 rounded p-2"
                />
              </div>
              <button
                type="submit"
                className="rounded bg-sonic flex justify-center hover:bg-sonic-dark text-white w-full py-2"
              >
                <span>Cadastrar</span>
              </button>
            </form>
            <button
              onClick={togglePopup}
              className="mt-4 px-4 py-2 bg-shadow-ice text-white rounded-lg hover:bg-dark-ice transition"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
