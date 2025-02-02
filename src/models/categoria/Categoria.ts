import Produto from '../produto/Produto'
export default interface Categoria {
    id: number;
    descricao: string;
    icone: string;
    produto?: Produto | null;
}

export default interface CategoriaForm {
    descricao: string;
    icone: string;
}
