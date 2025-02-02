import Categoria from "../categoria/Categoria";

export default interface Produto {
    id: number;
    nome: string;
    preco: number;
    calorias: number;
    proteinas: number;
    foto: string;
    categoria: Categoria | null;
}

export default interface ProdutoForm {
    nome: string;
    preco: number;
    calorias: number;
    proteinas: number;
    foto: string;
    categoria: Categoria | null;
}

