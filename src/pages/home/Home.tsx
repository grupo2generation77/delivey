import { CatalogoHome } from "../../components/homecatalogo/HomeCatalogo";
import { useState } from "react";
function Home() {
  const images = [
    "https://source.unsplash.com/800x600/?nature",
    "https://source.unsplash.com/800x600/?city",
    "https://source.unsplash.com/800x600/?ocean",
    "https://source.unsplash.com/800x600/?forest",
    "https://source.unsplash.com/800x600/?space",
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <>
      <div className="flex bg-cafe flex-col items-center justify-center min-h-screen p-6">
        {/* Título */}
        <h1 className="text-4xl font-bold mb-6">Delivey Café</h1>

        {/* Imagem */}
        <div className="bg-orange-200 shadow-lg rounded-2xl p-4 w-1/2 flex justify-center mb-6">
          <img
            src="https://ik.imagekit.io/lkxant9gz/pack-de-pessoas-sentadas-em-um-cafe_52683-19613.jpg?updatedAt=1738586544596"
            alt="Logo café"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex gap-4 overflow-x-auto p-4 w-full max-w-screen-lg mx-auto">
          <CatalogoHome />
        </div>
      </div>
    </>
  );
}

export default Home;
