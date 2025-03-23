import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { cadastrarUsuario } from "../../services/Service";
import Usuario from "../../models/Usuario/Usuario";
import { ToastAlerta } from "../../components/utils/ToastAlerta";

export function Cadastro({ setIsPopupOpen }: any) {
  const navigate = useNavigate();

  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();
    }
  }, [usuario]);

  function retornar() {
    navigate("/login");
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
        ToastAlerta("Usuário cadastrado com sucesso!", "sucesso");
      } catch (error) {
        ToastAlerta("Erro ao cadastrar o usuário!", "erro");
      }
    } else {
      ToastAlerta(
        "Dados estão inconsistentes. Verifique as informações do cadastro",
        "erro"
      );
      setUsuario({ ...usuario, senha: "" });
      setConfirmaSenha("");
    }
  }

  return (
    <>
      <div className="fixed inset-0 bg-white/20 backdrop-blur-xs bg-opacity-50 flex justify-center items-center">
        <div
          className="bg-black p-6 rounded-lg shadow-lg"
          style={{ backgroundColor: "#fee5ca" }}
        >
          <h2 className="text-2xl font-bold mb-4">Cadastre-se</h2>
          <form className="flex flex-col gap-4" onSubmit={cadastrarNovoUsuario}>
            <div className="flex flex-col">
              <label htmlFor="nome" className="text-lg">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome Completo"
                className="border-2 text-xl border-slate-700 rounded p-2"
                value={usuario.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="foto">Foto (URL)</label>
              <input
                type="text"
                id="foto"
                name="foto"
                placeholder="Cole o link da foto"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.foto}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="usuario"
                placeholder="exemplo@email.com"
                className="border-2 text-xl border-slate-700 rounded p-2"
                value={usuario.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
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
                value={usuario.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
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
                value={confirmaSenha}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleConfirmarSenha(e)
                }
              />
            </div>
            <button
              type="submit"
              className="rounded-lg flex justify-center text-white w-full py-2 transition-colors duration-200"
              style={{ backgroundColor: "#b00e2f" }} // Cor normal
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#8a0b24")
              } // Cor hover
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#b00e2f")
              } // Volta à cor normal
            >
              <span>Cadastrar</span>
            </button>
          </form>
          <button
            onClick={() => {
              setIsPopupOpen(false);
            }}
            className="rounded-lg flex justify-center text-white w-full py-2 bg-gray-500 mt-4 hover:bg-gray-700 transition-colors duration-200"
          >
            Voltar
          </button>
        </div>
      </div>
    </>
  );
}
