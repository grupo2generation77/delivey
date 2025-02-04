import Footer from "../../components/footer/Footer";
import { CatalogoHome } from "../../components/homecatalogo/HomeCatalogo";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function Home() {
  return (
    <>
      <Parallax pages={6}>
        <ParallaxLayer speed={0.5}>
          <div
            id="delivery-cafe"
            className="flex justify-center pt-15 items-start wire-one-regular text-orange-900 p-5 font-bold gap-2 select-none max-w-full flex-wrap"
          >
            {["D", "E", "L", "I", "V", "E", "Y", " ", "C", "A", "F", "É"].map(
              (letter, index) => (
                <p
                  key={index}
                  className={`text-[clamp(2rem,10vw,8rem)] animate-fade-up animate-duration-1000 animate-delay-${
                    100 + index * 50
                  } hover:scale-110 transition-transform`}
                >
                  {letter}
                </p>
              )
            )}
          </div>

          <div className="flex bg-cafe flex-col items-center justify-center px-4">
            {/* Título */}
            <img
              className="h-16 pt-6 w-auto"
              src="/src/assets/barra.svg"
              alt=""
            />

            {/* Imagem */}
            <div className="bg-orange-200 shadow-lg rounded-2xl p-4 w-full sm:w-3/4 md:w-1/2 flex justify-center mb-6">
              <img
                src="https://ik.imagekit.io/lkxant9gz/pack-de-pessoas-sentadas-em-um-cafe_52683-19613.jpg?updatedAt=1738586544596"
                alt="Logo café"
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div className="px-4 text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-900">
                O Delivey Café se encontra no Rio há mais de 10 anos trazendo o
                melhor café da região com o melhor atendimento do Rio.
              </p>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer speed={0.5} offset={2}>
          <CatalogoHome />
        </ParallaxLayer>

        <ParallaxLayer speed={0.5} offset={3}>
          <div className="bg-orange-200 shadow-lg rounded-2xl p-4 w-full flex flex-col md:flex-row justify-center items-center text-center mb-6">
            <img
              className="w-full md:w-1/2"
              src="https://ik.imagekit.io/lkxant9gz/rb_11242.png?updatedAt=1738600814169"
              alt=""
            />
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-900 p-4">
              Um excelente lugar para um encontro com os amigos.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer speed={0.5} offset={4}>
          <div className="bg-orange-200 shadow-lg rounded-2xl p-4 w-full flex flex-col md:flex-row justify-center items-center text-center mb-6">
            <img
              className="w-full md:w-1/2"
              src="https://ik.imagekit.io/lkxant9gz/rb_2149088290.png?updatedAt=1738600882402"
              alt=""
            />
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-900 p-4">
              Venha conhecer o nosso café! 🤎🤎🤎
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={5} speed={0.5}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default Home;
