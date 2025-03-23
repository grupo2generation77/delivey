import type React from "react";
import { useState, useEffect, useRef } from "react";
import { BotaoProdutoCategoria } from "../../components/botoes/BotaoProdutoCategoria";
import { ListarProdutos } from "../../components/produto/listarProdutos/ListarProdutos";
import { ListarCategorias } from "../../components/categoria/listarCategorias/ListarCategorias";
import { ProdutoForm } from "../../components/produto/cardProduto/ProdutoForm";
import { CategoriaForm } from "../../components/categoria/cardCategoria/CategoriaForm";
import BotaoCriarComponent from "../../components/botoes/BotaoCriarComponent"; // Importação corrigida

const Catalogo: React.FC = () => {
  const [mostrarCategorias, setMostrarCategorias] = useState<boolean>(false);
  const [criarProduto, setCriarProduto] = useState<boolean>(true);
  const [abrirFormProduto, setAbrirFormProduto] = useState<boolean>(false);
  const [abrirFormCategoria, setAbrirFormCategoria] = useState<boolean>(false);
  const [recarregar, setRecarregar] = useState<boolean>(false);
  const [produtoParaEditar, setProdutoParaEditar] = useState<number | null>(null);
  const [categoriaParaEditar, setCategoriaParaEditar] = useState<number | null>(null);

  const handleCadastroProduto = () => {
    setRecarregar(true);
    setProdutoParaEditar(null);
  };

  const handleCadastroCategoria = () => {
    setRecarregar(true);
    setCategoriaParaEditar(null);
  };

  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setAbrirFormProduto(false);
        setAbrirFormCategoria(false);
        setProdutoParaEditar(null);
        setCategoriaParaEditar(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex w-screen min-h-screen justify-center items-center flex-col p-0 m-0">
      <div className=" flex justify-center items-center flex-col p-0 m-0 mt-22">
        {/* Catálogo */}
        <div
          id="catalogo"
          className="flex justify-center items-start wire-one-regular text-orange-900 font-bold gap-2 select-none flex-wrap "
        >
          <p className="text-[clamp(4rem,24vw,16rem)] animate-fade-up animate-duration-2000 animate-delay-100 hover:scale-110 transition-transform">
            C
          </p>
          <p className="text-[clamp(4rem,24vw,16rem)]  animate-fade-up animate-duration-2000 animate-delay-[150ms] hover:scale-110 transition-transform">
            A
          </p>
          <p className="text-[clamp(4rem,24vw,16rem)] animate-fade-up animate-duration-2000 animate-delay-[200ms] hover:scale-110 transition-transform">
            T
          </p>
          <p className="text-[clamp(4rem,24vw,16rem)]  animate-fade-up animate-duration-2000 animate-delay-[250ms] hover:scale-110 transition-transform">
            Á
          </p>
          <p className="text-[clamp(4rem,24vw,16rem)] animate-fade-up animate-duration-2000 animate-delay-[300ms] hover:scale-110 transition-transform">
            L
          </p>
          <p className="text-[clamp(4rem,24vw,16rem)] animate-fade-up animate-duration-2000 animate-delay-[350ms] hover:scale-110 transition-transform">
            O
          </p>
          <p className="text-[clamp(4rem,24vw,16rem)] animate-fade-up animate-duration-2000 animate-delay-[400ms] hover:scale-110 transition-transform">
            G
          </p>
          <p className="text-[clamp(4rem,24vw,16rem)] animate-fade-up animate-duration-2000 animate-delay-[450ms] hover:scale-110 transition-transform">
            O
          </p>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        className="w-100 animate-fade animate-duration-1000 animate-delay-500"
        viewBox="0 0 4936.000000 808.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* SVG content */}
      </svg>

      <div className="flex justify-center items-center p-0 animate-fade animate-duration-1000 animate-delay-500 animate-ease-in">
        <BotaoProdutoCategoria
          onClick={() => {
            setMostrarCategorias(!mostrarCategorias);
            setCriarProduto(!criarProduto);
          }}
        />
      </div>

      <div
        className="animate-fade-up animate-delay-400"
        onClick={() => {
          criarProduto
            ? setAbrirFormProduto(true)
            : setAbrirFormCategoria(true);
        }}
      >
        <BotaoCriarComponent tipo={criarProduto} />
      </div>

      {/* Cards */}
      {!mostrarCategorias && (
        <ListarProdutos
          recarregar={recarregar}
          setRecarregar={setRecarregar}
          onEdit={(id) => {
            setProdutoParaEditar(id);
            setAbrirFormProduto(true);
          }}
        />
      )}
      {mostrarCategorias && (
        <ListarCategorias
          recarregar={recarregar}
          setRecarregar={setRecarregar}
          onEdit={(id) => {
            setCategoriaParaEditar(id);
            setAbrirFormCategoria(true);
          }}
        />
      )}

      {/* Formulário de Produto */}
      {abrirFormProduto && (
        <div className="fixed inset-0 flex w-full h-full items-center justify-center bg-black/20 bg-opacity-50 p-4">
          <div
            ref={formRef}
            className="bg-white rounded-lg shadow-lg mb-15 border-2 border-orange-900 relative"
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-3xl md:text-4xl"
              onClick={() => {
                setAbrirFormProduto(false);
                setProdutoParaEditar(null);
              }}
            >
              &times;
            </button>
            <ProdutoForm
              onCadastroProduto={handleCadastroProduto}
              setAbrirFormProduto={setAbrirFormProduto}
              idCard={
                produtoParaEditar ? produtoParaEditar.toString() : undefined
              }
            />
          </div>
        </div>
      )}

      {/* Formulário de Categoria */}
      {abrirFormCategoria && (
        <div className="fixed inset-0 flex items-center justify-center scale-75">
          <div
            ref={formRef}
            className="bg-white p-6 rounded-lg shadow-lg w-1/2 relative border-2 border-orange-900"
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-4xl"
              onClick={() => {
                setAbrirFormCategoria(false);
                setCategoriaParaEditar(null);
              }}
            >
              &times;
            </button>
            <CategoriaForm
              onCadastroCategoria={handleCadastroCategoria}
              setAbrirFormCategoria={setAbrirFormCategoria}
              idCard={
                categoriaParaEditar ? categoriaParaEditar.toString() : undefined
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Catalogo;