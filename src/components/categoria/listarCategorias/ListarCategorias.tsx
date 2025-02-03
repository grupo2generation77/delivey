import { useEffect, useState } from "react";
import Categoria from "../../../models/categoria/Categoria";
import { CardCategoria } from "../cardCategoria/CardCategoria";


const categoriaTeste:Categoria[] = [{
    id: 1,
    descricao: "string",
    icone: "string",
    produto: null
},{
    id: 1,
    descricao: "string",
    icone: "string",
    produto: null
},{
    id: 1,
    descricao: "string",
    icone: "string",
    produto: null
},{
    id: 1,
    descricao: "string",
    icone: "string",
    produto: null
},{
    id: 1,
    descricao: "string",
    icone: "string",
    produto: null
},{
    id: 1,
    descricao: "string",
    icone: "string",
    produto: null
},{
    id: 1,
    descricao: "string",
    icone: "string",
    produto: null
},
]

export function ListarCategorias(){
    const [categorias,setCategorias] = useState<Categoria[]>([])

    useEffect(()=>{
        setCategorias(categoriaTeste)
    },[categorias.length])

    return(
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-5">
            {categorias.map((categoria,index) => (
                CardCategoria(categoria,index)
            ))}
        </div>
        </>

    );
}