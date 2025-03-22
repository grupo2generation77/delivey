import { useEffect, useState, useContext } from "react";
import type Produto from "../../../models/produto/Produto";
import { CardProduto } from "../cardProduto/CardProduto";
import { ToastAlerta } from "../../utils/ToastAlerta";
import { buscar, deletar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { BotaoChek } from "../../botoes/BotaoChek";

interface ListarProdutosProps {
  recarregar: boolean;
  setRecarregar: (value: boolean) => void;
  onEdit: (id: number) => void;
}

export function ListarProdutos({
  recarregar,
  setRecarregar,
  onEdit,
}: ListarProdutosProps) {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const { usuario, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  const token = usuario.token;
  const [termoBusca, setTermoBusca] = useState("");
  const [filtroArtesanal, setFiltroArtesanal] = useState(false);
  async function buscarProdutos() {
    try {
      await buscar("/produtos", setProdutos, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado", "info");
      navigate("/");
    } else {
      buscarProdutos();
    }
  }, [token, navigate, handleLogout]); // Added missing dependencies

  useEffect(() => {
    if (recarregar) {
      buscarProdutos();
      setRecarregar(false);
    }
  }, [recarregar, buscarProdutos]); // Added missing dependency

  const handleDelete = async (id: number) => {
    try {
      await deletar(`/produtos/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      ToastAlerta("Produto deletado com sucesso", "sucesso");
      setRecarregar(true);
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      } else {
        ToastAlerta("Erro ao deletar o produto", "erro");
      }
    }
  };

  const filtrarProdutos = () => {
    return produtos.filter((produto) => {
      // Filtro por termo de busca
      const matchTermo =
        produto.nome.toLowerCase().includes(termoBusca.toLowerCase()) ||
        produto.id.toString().includes(termoBusca);

      // Filtro por produtos artesanais
      const matchArtesanal = filtroArtesanal ? produto.artesanal : true;

      return matchTermo && matchArtesanal;
    });
  };

  return (
    <>
      <div className="m-4 flex items-center animate-fade-up animate-delay-400">
        <input
          type="text"
          placeholder="Buscar produto por nome, ID"
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
          className="w-100 p-2 border rounded-full border-orange-900"
        />
        <BotaoChek
          checked={filtroArtesanal}
          onChange={setFiltroArtesanal}
          label="Artesanais"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-5">
        {filtrarProdutos().map((produto, index) => (
          <CardProduto
            key={produto.id}
            item={index}
            produto={produto}
            onEdit={onEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
}
