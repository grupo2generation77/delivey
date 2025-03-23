import Categoria from "../categoria/Categoria";

export default interface Produto {
  id: number;
  nome: string;
  preco: number;
  calorias: number;
  artesanal: boolean;
  foto: string;
  categoria: Categoria | null;
}

export default interface ProdutoForm {
  nome: string;
  preco: number;
  calorias: number;
  descricao: string;
  artesanal: boolean;
  foto: string;
  categoria: Categoria | null;
}
