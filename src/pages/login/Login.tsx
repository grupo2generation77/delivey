import { motion } from "framer-motion"; // Importe AnimatePresence
import { ChangeEvent, useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import UsuarioLogin from "../../models/Usuario/UsuarioLogin";
import { useNavigate } from "react-router-dom";
import { SiCoffeescript } from "react-icons/si";
import { Cadastro } from "./Cadastrar";

function Login() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

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
          <form
            className="flex justify-center items-center flex-col gap-4"
            onSubmit={login}
          >
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
                value={usuarioLogin.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
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
                value={usuarioLogin.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
            </div>
            <button
              type="submit"
              className="rounded bg-orange-400 flex justify-center hover:bg-orange-600 text-white w-1/2 py-2"
              onClick={() => {
                navigate("/");
              }}
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

      {isPopupOpen && <Cadastro setIsPopupOpen={setIsPopupOpen} />}
    </>
  );
}

export default Login;
