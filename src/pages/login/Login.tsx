import { MdOutlineDeliveryDining } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion"; // Importe AnimatePresence
import { useState } from "react";

function Login() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [foto, setFoto] = useState<string | null>(null); // Estado para armazenar a foto

  const togglePopup = () => {
    setIsPopupOpen((prev) => !prev); // Garante que a atualização seja baseada no estado anterior
  };

  const handleFotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFoto(reader.result as string); // Converte a imagem para base64
      };
      reader.readAsDataURL(file);
    }
  };

  console.log("Popup aberto?", isPopupOpen); // Verifica mudanças no estado

  return (
    <>
      <div
        className="bg-ice grid grid-cols-1 lg:grid-cols-2 
                    h-screen place-items-center font-bold"
      >
        <div className="hidden lg:block">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
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
          <form className="flex justify-center items-center flex-col gap-1">
            <h2 className="text-slate-900 text-2xl">
              <MdOutlineDeliveryDining size={250} />
            </h2>
            <div className="flex text-center text-2xl flex-col w-full">
              <label className="p-1" htmlFor="usuario">
                Usuário
              </label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Usuario"
                className="border-2 text-lg border-slate-700 rounded-lg p-2 w-full"
              />
            </div>
            <div className="flex text-2xl flex-col text-center w-full">
              <label className="p-1" htmlFor="senha">
                Senha
              </label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                className="border-2 text-lg border-slate-700 rounded-lg p-2 w-full"
              />
            </div>
            <button
              type="submit"
              className="rounded-lg bg-sonic flex justify-center hover:bg-sonic-dark text-white w-1/2 py-2 mt-4"
            >
              <span>Entrar</span>
            </button>

            <hr className="border-slate-800 w-full my-4" />

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

      {/* Popup com efeito de animação */}
      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} // Estado inicial: invisível e menor
            animate={{ opacity: 1, scale: 1 }} // Estado animado: visível e tamanho normal
            exit={{ opacity: 0, scale: 0.8 }} // Estado ao sair: invisível e menor
            transition={{ duration: 0.3, ease: "easeInOut" }} // Duração e suavização da animação
            className="fixed inset-0 bg-white/20 backdrop-blur-xs flex justify-center items-center"
          >
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4">Cadastre-se</h2>
              <form className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label htmlFor="nome" className="mb-2 text-lg">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Nome"
                    className="border-2 text-lg border-slate-700 rounded-lg p-2 w-full"
                  />
                </div>

                {/* Campo de Foto */}
                <div className="flex flex-col">
                  <label htmlFor="foto" className="mb-2 text-lg">
                    Foto
                  </label>
                  <label
                    htmlFor="foto"
                    className="border-2 text-lg border-slate-700 rounded-lg p-2 cursor-pointer text-gray-500 hover:bg-gray-100 transition-colors w-full"
                  >
                    Adicione sua foto aqui
                  </label>
                  <input
                    type="file"
                    id="foto"
                    name="foto"
                    accept="image/*"
                    onChange={handleFotoChange}
                    className="hidden"
                  />
                  {foto && (
                    <div className="mt-4">
                      <img
                        src={foto}
                        alt="Foto do usuário"
                        className="w-full max-w-xs rounded-lg border-2 border-slate-700"
                      />
                    </div>
                  )}
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="mb-2 text-lg">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="border-2 text-lg border-slate-700 rounded-lg p-2 w-full"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="senhaCadastro" className="mb-2 text-lg">
                    Senha
                  </label>
                  <input
                    type="password"
                    id="senhaCadastro"
                    name="senhaCadastro"
                    placeholder="Senha"
                    className="border-2 text-lg border-slate-700 rounded-lg p-2 w-full"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="confirmarSenha" className="mb-2 text-lg">
                    Confirmar Senha
                  </label>
                  <input
                    type="password"
                    id="confirmarSenha"
                    name="confirmarSenha"
                    placeholder="Confirmar Senha"
                    className="border-2 text-lg border-slate-700 rounded-lg p-2 w-full"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-lg bg-sonic flex justify-center hover:bg-sonic-dark text-white w-full py-2"
                >
                  <span>Cadastrar</span>
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    togglePopup();
                  }}
                  className="text-sonic-dark hover:underline"
                >
                  Voltar
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Login;