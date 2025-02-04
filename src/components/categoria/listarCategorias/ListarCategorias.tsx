import { useEffect, useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import type Categoria from "../../../models/categoria/Categoria"
import { buscar, deletar } from "../../../services/Service"
import { ToastAlerta } from "../../utils/ToastAlerta"
import { CardCategoria } from "../cardCategoria/CardCategoria"

interface ListarCategoriasProps {
    recarregar: boolean
    setRecarregar: (value: boolean) => void
    onEdit: (id: number) => void
}

export function ListarCategorias({ recarregar, setRecarregar, onEdit }: ListarCategoriasProps) {
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const { usuario, handleLogout } = useContext(AuthContext)
    const navigate = useNavigate()
    const token = usuario.token
    const [termoBusca, setTermoBusca] = useState('');

    async function buscarCategorias() {
        try {
            await buscar("/categorias", setCategorias, {
                headers: {
                    Authorization: token,
                },
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
        } else {
            buscarCategorias()
        }
    }, [token, navigate, handleLogout]) // Added missing dependencies

    useEffect(() => {
        if (recarregar) {
            buscarCategorias()
            setRecarregar(false)
        }
    }, [recarregar, buscarCategorias]) // Added missing dependency

    const handleDelete = async (id: number) => {
        try {
            await deletar(`/categorias/${id}`, {
                headers: {
                    Authorization: token,
                },
            })
            ToastAlerta("Categoria deletada com sucesso", "sucesso")
            setRecarregar(true)
        } catch (error: any) {
            if (error.toString().includes("403")) {
                handleLogout()
            } else {
                ToastAlerta("Erro ao deletar a categoria", "erro")
            }
        }
    }

    const filtrarCategorias = () => {
        return categorias.filter((categoria) => {
            // Filtro por termo de busca
            const matchTermo =
                categoria.descricao.toLowerCase().includes(termoBusca.toLowerCase()) ||
                categoria.id.toString().includes(termoBusca);

            return matchTermo;
        });
    };

    return (
        <>

            <div className="m-4 flex items-center animate-fade-up animate-delay-400">
                <input
                    type="text"
                    placeholder="Buscar categoria por descricao, ID"
                    value={termoBusca}
                    onChange={(e) => setTermoBusca(e.target.value)}
                    className="w-100 p-2 border rounded-full border-orange-900"
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-5">
                {filtrarCategorias().map((categoria, index) => (
                    <CardCategoria
                        key={categoria.id}
                        categoria={categoria}
                        item={index}
                        onEdit={onEdit}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
        </>
    )
}

