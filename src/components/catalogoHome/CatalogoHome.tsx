export const CatalogoHome: React.FC = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col p-0">
        {/* Catálogo */}
        <div
          id="catalogo"
          className="flex justify-center items-start wire-one-regular text-orange-900 p-5 font-bold gap-2 select-none flex-wrap "
        >
          <p className="text-[clamp(4rem,24vw,16rem)] animate-fade-up animate-duration-1000 animate-delay-100 hover:scale-110 transition-transform">
            C
          </p>
          <p className="text-[clamp(4rem,24vw,16rem)] animate-fade-up animate-duration-1000 animate-delay-[150ms] hover:scale-110 transition-transform">
            A
          </p>
          <p className="text-[clamp(4rem,24vw,16rem)] animate-fade-up animate-duration-1000 animate-delay-[200ms] hover:scale-110 transition-transform">
            T
          </p>
          <p className="text-[clamp(4rem,24vw,16rem)] animate-fade-up animate-duration-1000 animate-delay-[250ms] hover:scale-110 transition-transform">
            Á
          </p>
          <p className="text-[clamp(4rem,24vw,16rem)] animate-fade-up animate-duration-1000 animate-delay-[300ms] hover:scale-110 transition-transform">
            L
          </p>
          <p className="text-[clamp(4rem,24vw,16rem)] animate-fade-up animate-duration-1000 animate-delay-[350ms] hover:scale-110 transition-transform">
            O
          </p>
          <p className="text-[clamp(4rem,24vw,16rem)] animate-fade-up animate-duration-1000 animate-delay-[400ms] hover:scale-110 transition-transform">
            G
          </p>
          <p className="text-[clamp(4rem,24vw,16rem)] animate-fade-up animate-duration-1000 animate-delay-[450ms] hover:scale-110 transition-transform">
            O
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-5">
          <div className="bg-white drop-shadow-lg h-fill md:w-70 lg:w-full rounded-tl-4xl rounded-bl-4xl flex flex-col items-center hover:scale-105 transition-transform animate-fade-up animate-duration-1000 animate-delay-500">
            <img
              src="https://cdn.pixabay.com/photo/2019/10/21/00/16/coffee-4564897_960_720.jpg"
              alt="Café espresso"
              className="h-fit w-fit object-cover rounded-md"
            />
            <h2 className="text-lg font-bold mt-2">Café Espresso</h2>
            <p className="text-gray-600 text-center">
              Café espresso é uma bebida de café concentrada, preparada sob alta
              pressão, com café moído
            </p>
          </div>

          <div className="bg-white drop-shadow-lg h-fill md:w-70 lg:w-full rounded-tr-4xl rounded-br-4xl flex flex-col items-center hover:scale-105 transition-transform animate-fade-up animate-duration-1000 animate-delay-500">
            <img
              src="https://ik.imagekit.io/lkxant9gz/person-serving-cup-coffee.jpg?updatedAt=1742773031702"
              alt="Capuccino"
              className="h-fit w-fit object-cover rounded-md"
            />
            <h2 className="text-lg font-bold mt-2">Capuccino</h2>
            <p className="text-gray-600 text-center">
              O cappuccino é uma bebida clássica de espresso com leite.
            </p>
          </div>

          <div className="bg-white drop-shadow-lg h-fill md:w-70 lg:w-full rounded-tl-4xl rounded-bl-4xl flex flex-col items-center hover:scale-105 transition-transform animate-fade-up animate-duration-1000 animate-delay-500">
            <img
              src="https://ik.imagekit.io/lkxant9gz/chocolate-chip-cookie-white.jpg?updatedAt=1742773124792"
              alt="Cookies variados"
              className="h-fit w-fit object-cover rounded-md"
            />
            <h2 className="text-lg font-bold mt-2">Cookies Variados</h2>
            <p className="text-gray-600 text-center">
              Cookies deliciosos e crocantes, com gotas de chocolate, amêndoas e
              nozes.
            </p>
          </div>

          <div className="bg-white drop-shadow-lg h-fill md:w-70 lg:w-full rounded-tr-4xl rounded-br-4xl flex flex-col items-center hover:scale-105 transition-transform animate-fade-up animate-duration-1000 animate-delay-500">
            <img
              src="https://ik.imagekit.io/lkxant9gz/bolos-de-copo_1203-6823.jpg?updatedAt=1742773136574"
              alt="Muffin de nozes"
              className="h-fit w-fit object-cover rounded-md"
            />
            <h2 className="text-lg font-bold mt-2">Muffin de Nozes</h2>
            <p className="text-gray-600 text-center">
              Muffin de nozes com cobertura de caramelo e nozes caramelizadas.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
