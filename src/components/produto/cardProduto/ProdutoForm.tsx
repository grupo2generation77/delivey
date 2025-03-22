import { useState, useContext, useEffect, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import type Produto from "../../../models/produto/Produto";
import type Categoria from "../../../models/categoria/Categoria";
import { buscar, atualizar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../utils/ToastAlerta";

interface ProdutoFormProps {
  onCadastroProduto: () => void;
  setAbrirFormProduto: (value: boolean) => void;
  idCard?: string;
  produto?: Produto;
}

export function ProdutoForm({
  onCadastroProduto,
  setAbrirFormProduto,
  idCard,
  produto: initialProduto,
}: ProdutoFormProps) {
  const navigate = useNavigate();

  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    descricao: "",
  });
  const [produto, setProduto] = useState<Produto>(
    initialProduto || ({} as Produto)
  );

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  // Funções para buscar dados
  const buscarPostagemPorId = async (id: string) => {
    try {
      await buscar(`/produtos/${id}`, setProduto, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) handleLogout();
    }
  };

  const buscarCategoriaPorId = async (id: string) => {
    try {
      await buscar(`/categorias/${id}`, setCategoria, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) handleLogout();
    }
  };

  const buscarTemas = async () => {
    try {
      await buscar("/categorias", setCategorias, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) handleLogout();
    }
  };

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado", "info");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    buscarTemas();
    if (idCard !== undefined) {
      buscarPostagemPorId(idCard);
    }
  }, [idCard]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
  }, [categoria, navigate]);

  // Atualizar os dados do produto
  const atualizarEstado = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduto({
      ...produto,
      [name]: ["preco", "calorias"].includes(name)
        ? Number(value)
        : value === "true"
        ? true
        : value === "false"
        ? false
        : value,
      categoria: categoria,
    });
  };

  const gerarNovoProduto = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (idCard !== undefined) {
        await atualizar(`/produtos`, produto, setProduto, {
          headers: { Authorization: token },
        });
        ToastAlerta("Produto atualizado com sucesso", "sucesso");
      } else {
        await cadastrar(`/produtos`, produto, setProduto, {
          headers: { Authorization: token },
        });
        ToastAlerta("Produto cadastrado com sucesso", "sucesso");
      }
      onCadastroProduto();
      setAbrirFormProduto(false);
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      } else {
        ToastAlerta("Erro ao processar a solicitação", "erro");
      }
    }
  };

  return (
    <div className=" flex flex-col mx-auto items-center p-4">
      <h1 className="text-2xl md:text-4xl text-center my-4 md:my-8">
        {idCard ? "Editar Produto" : "Cadastrar Produto"}
      </h1>
      <form className="" onSubmit={gerarNovoProduto}>
        {/* Campos do formulário */}
        <div className="flex flex-col gap-2 p-2">
          <input
            type="text"
            placeholder="Nome"
            name="nome"
            required
            className="border-2 border-slate-700 rounded p-2 text-sm md:text-base"
            value={produto.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex flex-col gap-2 p-2">
          <input
            type="number"
            placeholder="Preço"
            name="preco"
            required
            className="border-2 border-slate-700 rounded p-2 text-sm md:text-base"
            value={produto.preco}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex flex-col gap-2 p-2">
          <input
            type="number"
            placeholder="Calorias"
            name="calorias"
            required
            className="border-2 border-slate-700 rounded p-2 text-sm md:text-base"
            value={produto.calorias}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex flex-col gap-2 p-2">
          <label className="text-sm md:text-base">Produto Artesanal?</label>
          <div className="flex flex-col md:flex-row gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="artesanal"
                value="true"
                checked={produto.artesanal === true}
                onChange={atualizarEstado}
                className="w-4 h-4"
              />
              <span className="text-sm md:text-base">Sim</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="artesanal"
                value="false"
                checked={produto.artesanal === false}
                onChange={atualizarEstado}
                className="w-4 h-4"
              />
              <span className="text-sm md:text-base">Não</span>
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-2 p-2">
          <input
            type="text"
            placeholder="URL da Foto"
            name="foto"
            required
            className="border-2 border-slate-700 rounded p-2 text-sm md:text-base"
            value={produto.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex flex-col gap-2 p-2">
          <select
            name="categoria"
            className="border p-2 border-slate-800 rounded text-sm md:text-base"
            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
          >
            <option value="" selected disabled>
              Selecione uma Categoria
            </option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.descricao}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="rounded bg-indigo-400 hover:bg-indigo-800 text-white 
                   font-bold w-full mx-auto py-2 text-sm md:text-base mt-4"
        >
          Salvar
        </button>
      </form>
    </div>
  );
}
