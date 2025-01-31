import { Link } from "react-router-dom";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { motion } from "framer-motion";

function Login() {
  return (
    <>
      <div
        className="bg-ice grid grid-cols-1 lg:grid-cols-2 
                    h-screen place-items-center font-bold "
      >
        <div className=" hidden lg:block">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {" "}
            <img
              src="https://ik.imagekit.io/lkxant9gz/rb_2149442162.png?updatedAt=1738340839229"
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
              <MdOutlineDeliveryDining size={250} />
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
              className="rounded bg-sonic flex justify-center hover:bg-sonic-dark text-white w-1/2 py-2"
            >
              <span>Entrar</span>
            </button>

            <hr className="border-slate-800 w-full" />

            <p>
              {" "}
              <Link to="/cadastro" className="text-sonic-dark hover:underline">
                Cadastre-se
              </Link>
            </p>
          </form>
        </motion.div>
      </div>
    </>
  );
}

export default Login;
