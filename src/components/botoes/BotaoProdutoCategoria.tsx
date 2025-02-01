export const BotaoProdutoCategoria: React.FC = () =>{
    return (
        <>
            <label className="relative inline-flex items-center cursor-pointer">
            <input className="sr-only peer" type="checkbox" />
            <div className="wire-one-regular text-2xl font-bold animate-fade animate-duration-1000 animate-delay-100 animate-ease-in shadow-2xl flex items-center justify-between peer rounded-br-2xl rounded-tl-2xl outline-none
            duration-100 after:duration-500 w-48 h-14 bg-orange-200 peer-focus:outline-none 
            peer-focus:ring-2 peer-focus:ring-orange-300 after:content-['Produtos'] after:absolute 
            after:outline-none after:rounded-br-xl after:rounded-tl-xl after:h-12 after:w-24 
            after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center 
            after:text-orange-900 after:font-bold peer-checked:after:translate-x-22 
            peer-checked:after:content-['Categorias'] peer-checked:after:border-white">
                <div className="flex items-center justify-between gap-10">
                    <p className="ml-4">Produtos</p>
                    <p className="mr-2">Categorias</p>
                </div>
                
            </div>
            </label>
        </>
    )
}
