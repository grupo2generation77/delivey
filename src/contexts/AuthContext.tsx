import { ReactNode, createContext, useState, useEffect } from "react";
import UsuarioLogin from "../models/Usuario/UsuarioLogin";
import { login } from "../services/Service";
import { ToastAlerta } from "../components/utils/ToastAlerta";

interface AuthContextProps {
    usuario: UsuarioLogin;
    handleLogout(): void;
    handleLogin(usuario: UsuarioLogin): Promise<void>;
    isLoading: boolean;
}

interface AuthProvidersProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProvidersProps) {
    const [usuario, setUsuario] = useState<UsuarioLogin>(() => {
        const storageUser = localStorage.getItem('usuario');
        return storageUser ? JSON.parse(storageUser) : {
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: "",
        };
    });

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (usuario.token) {
            localStorage.setItem('usuario', JSON.stringify(usuario));
        } else {
            localStorage.removeItem('usuario');
        }
    }, [usuario]);

    async function handleLogin(usuarioLogin: UsuarioLogin) {
        setIsLoading(true);
        try {
            await login(`/usuarios/logar`, usuarioLogin, setUsuario);
            ToastAlerta("Usuário autenticado com sucesso!", "sucesso");
        } catch (error) {
            ToastAlerta("Dados do usuário inconsistentes!", "erro");
        }
        setIsLoading(false);
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: "",
        });
    }

    return (
        <AuthContext.Provider
            value={{ usuario, handleLogin, handleLogout, isLoading }}
        >
            {children}
        </AuthContext.Provider>
    );

}

