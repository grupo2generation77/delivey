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
      <div className="fixed inset-0 bg-black/20 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
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
                placeholder="Nome"
                className="border-2 text-xl border-slate-700 rounded p-2"
                value={usuario.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="foto">Foto</label>
              <input
                type="text"
                id="foto"
                name="foto"
                placeholder="Foto"
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
                placeholder="Email"
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
              className="rounded bg-sonic flex justify-center hover:bg-sonic-dark text-white w-full py-2"
              onClick={retornar}
            >
              <span>Cadastrar</span>
            </button>
          </form>
          <button
            onClick={() => {
              setIsPopupOpen(false);
            }}
            className="mt-4 px-4 py-2 bg-shadow-ice text-black rounded-lg hover:bg-dark-ice transition"
          >
            Fechar
          </button>
        </div>
      </div>
    </>
  );
}
