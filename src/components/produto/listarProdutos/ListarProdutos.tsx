import { useEffect, useState } from "react";
import Produto from "../../../models/produto/Produto";
import { CardProduto } from "../cardProduto/CardProduto";


const produtoTeste:Produto[] = [{
    id:1,
    nome: "teste",
    preco: 123 ,
    calorias: 123, 
    proteinas: 123,
    foto: "asdasd",
    categoria: null
},{
    id:1,
    nome: "teste",
    preco: 123 ,
    calorias: 123, 
    proteinas: 123,
    foto: "asdasd",
    categoria: null
},{
    id:1,
    nome: "teste",
    preco: 123 ,
    calorias: 123, 
    proteinas: 123,
    foto: "asdasd",
    categoria: null
},{
    id:1,
    nome: "teste",
    preco: 123 ,
    calorias: 123, 
    proteinas: 123,
    foto: "asdasd",
    categoria: null
},{
    id:1,
    nome: "teste",
    preco: 123 ,
    calorias: 123, 
    proteinas: 123,
    foto: "asdasd",
    categoria: null
},{
    id:1,
    nome: "teste",
    preco: 123 ,
    calorias: 123, 
    proteinas: 123,
    foto: "asdasd",
    categoria: null
},{
    id:1,
    nome: "teste",
    preco: 123 ,
    calorias: 123, 
    proteinas: 123,
    foto: "asdasd",
    categoria: null
},{
    id:1,
    nome: "teste",
    preco: 123 ,
    calorias: 123, 
    proteinas: 123,
    foto: "asdasd",
    categoria: null
},{
    id:1,
    nome: "teste",
    preco: 123 ,
    calorias: 123, 
    proteinas: 123,
    foto: "asdasd",
    categoria: null
},{
    id:1,
    nome: "teste",
    preco: 123 ,
    calorias: 123, 
    proteinas: 123,
    foto: "asdasd",
    categoria: null
},{
    id:1,
    nome: "teste",
    preco: 123 ,
    calorias: 123, 
    proteinas: 123,
    foto: "asdasd",
    categoria: null
},{
    id:1,
    nome: "teste",
    preco: 123 ,
    calorias: 123, 
    proteinas: 123,
    foto: "asdasd",
    categoria: null
},{
    id:1,
    nome: "teste",
    preco: 123 ,
    calorias: 123, 
    proteinas: 123,
    foto: "asdasd",
    categoria: null
},

]

export function ListarProdutos(){
    const [produtos,setProdutos] = useState<Produto[]>([])

    useEffect(()=>{
        setProdutos(produtoTeste)
    },[produtos.length])

    return(
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-5">
        {produtos.map((produto, index) => (
            <CardProduto key={produto.id} item={index} produto={produto} />
        ))}
        </div>
        </>

    );
}