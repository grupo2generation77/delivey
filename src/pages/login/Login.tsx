import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SiCoffeescript } from "react-icons/si";

function Login() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [foto, setFoto] = useState<string | null>(null); // Estado para armazenar a foto
  const [senhaCadastro, setSenhaCadastro] = useState(""); // Estado para armazenar a senha
  const [confirmarSenha, setConfirmarSenha] = useState(""); // Estado para armazenar a confirmação da senha
  const [alertMessage, setAlertMessage] = useState(""); // Estado para armazenar a mensagem de alerta

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

  const handleSubmitCadastro = (e: React.FormEvent) => {
    e.preventDefault();

    // Verificar se a senha tem pelo menos 8 caracteres
    if (senhaCadastro.length < 8) {
      setAlertMessage("A senha deve ter pelo menos 8 caracteres.");
      return;
    }

    // Verificar se as senhas coincidem
    if (senhaCadastro !== confirmarSenha) {
      setAlertMessage("As senhas não coincidem.");
      return;
    }

    // Se tudo estiver correto, exibe o alerta de "Usuário Cadastrado"
    setAlertMessage("Usuário cadastrado com sucesso!");
  };

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
              alt="loja de café"
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
              <SiCoffeescript size={150} />
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
              className="rounded-lg bg-orange-400 flex justify-center hover:bg-orange-600 text-white w-1/2 py-2 mt-4"
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
                className="text-lucas hover:underline"
              >
                Cadastre-se
              </button>
            </p>
          </form>
        </motion.div>
      </div>

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
              className="p-8 rounded-2xl shadow-lg"
              style={{ backgroundColor: "#fee5ca" }} // Cor de fundo alterada
            >
              <h2 className="text-2xl font-bold mb-4">Cadastre-se</h2>
              <form className="flex flex-col gap-4" onSubmit={handleSubmitCadastro}>
                <div className="flex flex-col">
                  <label htmlFor="nome" className="mb-2 text-lg">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Nome Completo"
                    className="border-2 text-lg border-slate-700 rounded-lg p-2 w-full"
                  />
                </div>

                {/* Campo de Foto - URL da Imagem */}
                <div className="flex flex-col">
                  <label htmlFor="fotoUrl" className="mb-2 text-lg">
                    Foto (URL)
                  </label>
                  <input
                    type="text"
                    id="fotoUrl"
                    name="fotoUrl"
                    placeholder="Cole o link aqui"
                    className="border-2 text-lg border-slate-700 rounded-lg p-2 w-full"
                    onChange={(e) => setFoto(e.target.value)} // Atualiza o estado com o link inserido
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
                    placeholder="exemplo@email.com"
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
                    value={senhaCadastro}
                    onChange={(e) => setSenhaCadastro(e.target.value)}
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
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                  />
                </div>
                {alertMessage && (
                  <div className="text-red-500 mt-4">
                    <span>{alertMessage}</span>
                  </div>
                )}
                <button
                  type="submit"
                  className="rounded-lg flex justify-center text-white w-full py-2 transition-colors duration-200"
                  style={{ backgroundColor: "#b00e2f" }} // Cor normal
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#8a0b24"} // Cor hover
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#b00e2f"} // Volta à cor normal
                >
                  <span>Cadastrar</span>
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    togglePopup();
                  }}
                  className="text-sonic-dark hover:underline"
                  style={{ color: "black" }}
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