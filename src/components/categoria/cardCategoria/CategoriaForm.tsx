import { useState, useEffect, useContext, type ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import type Categoria from "../../../models/categoria/Categoria"
import { buscar, atualizar, cadastrar } from "../../../services/Service"
import { ToastAlerta } from "../../../utils/ToastAlerta"

interface CategoriaFormProps {
    onCadastroCategoria: () => void
    setAbrirFormCategoria: (value: boolean) => void
    idCard?: string
}

export function CategoriaForm({ onCadastroCategoria, setAbrirFormCategoria, idCard }: CategoriaFormProps) {
    const navigate = useNavigate()

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        descricao: "",
        icone: "",
    })

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarCategoriaPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: { Authorization: token },
            })
        } catch (error: any) {
            if (error.toString().includes("403")) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === "") {
            ToastAlerta("Você precisa estar logado", "info")
            navigate("/")
        }
    }, [token, navigate]) // Added navigate to dependencies

    useEffect(() => {
        if (idCard !== undefined) {
            buscarCategoriaPorId(idCard)
        }
    }, [idCard])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        })
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (idCard !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria, {
                    headers: { Authorization: token },
                })
                ToastAlerta("Categoria atualizada com sucesso", "sucesso")
                retornar()
            } catch (error: any) {
                if (error.toString().includes("403")) {
                    handleLogout()
                } else {
                    ToastAlerta("Erro ao atualizar a Categoria", "erro")
                }
            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria, {
                    headers: { Authorization: token },
                })
                ToastAlerta("Categoria cadastrada com sucesso", "sucesso")
                retornar()
            } catch (error: any) {
                if (error.toString().includes("403")) {
                    handleLogout()
                } else {
                    ToastAlerta("Erro ao cadastrar a Categoria", "erro")
                }
            }
        }

        // Reset the form state
        setCategoria({
            id: 0,
            descricao: "",
            icone: "",
        })
    }

    function retornar() {
        onCadastroCategoria()
        setAbrirFormCategoria(false)
        setCategoria({
            id: 0,
            descricao: "",
            icone: "",
        })
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">{idCard ? "Editar Categoria" : "Cadastrar Categoria"}</h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição da Categoria</label>
                    <input
                        type="text"
                        placeholder="Descrição"
                        name="descricao"
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="icone">Ícone da Categoria</label>
                    <input
                        type="text"
                        placeholder="Ícone"
                        name="icone"
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.icone}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
                    type="submit"
                >
                    {idCard ? "Editar" : "Cadastrar"}
                </button>
            </form>
        </div>
    )
}

