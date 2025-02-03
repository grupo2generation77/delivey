import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Configurações do slider
const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  nextArrow: <div style={{ color: "#90EE90", fontSize: "24px" }}>▶</div>,
  prevArrow: <div style={{ color: "#90EE90", fontSize: "24px" }}>◀</div>,
};

const cards = [
  {
    // Card 1: Sobre a empresa Biscoitadores
    title: "Biscoitadores",
    description: "Empresa de desenvolvimento de softwares. Todos os membros são do estado do Rio de Janeiro.",
    image: "https://via.placeholder.com/150/111", // altere para a URL da imagem desejada
    link: "https://linkedin.com/company/biscoitadores", // altere para o link desejado
  },
  {
    // Card 2: Sobre a demo de delivery de café Delivey 77
    title: "Delivey 77",
    description: "Demo de site de delivery de café.",
    image: "https://via.placeholder.com/150/222",
    link: "https://linkedin.com/company/delivey77",
  },
  {
    // Card 3: Membro 1
    title: "Membro 1",
    description: "Descrição do membro 1.",
    image: "https://via.placeholder.com/150/333",
    link: "https://linkedin.com/in/membro1",
  },
  {
    // Card 4: Membro 2
    title: "Membro 2",
    description: "Descrição do membro 2.",
    image: "https://via.placeholder.com/150/444",
    link: "https://linkedin.com/in/membro2",
  },
  {
    // Card 5: Membro 3
    title: "Membro 3",
    description: "Descrição do membro 3.",
    image: "https://via.placeholder.com/150/555",
    link: "https://linkedin.com/in/membro3",
  },
  {
    // Card 6: Membro 4
    title: "Membro 4",
    description: "Descrição do membro 4.",
    image: "https://via.placeholder.com/150/666",
    link: "https://linkedin.com/in/membro4",
  },
  {
    // Card 7: Membro 5
    title: "Membro 5",
    description: "Descrição do membro 5.",
    image: "https://via.placeholder.com/150/777",
    link: "https://linkedin.com/in/membro5",
  },
  {
    // Card 8: Membro 6
    title: "Membro 6",
    description: "Descrição do membro 6.",
    image: "https://via.placeholder.com/150/888",
    link: "https://linkedin.com/in/membro6",
  },
];

const Sobre = () => {
  return (
    <div className="flex flex-col">
      {/* Seção Parallax: imagem de fundo cobrindo toda a tela */}
      <div
        className="h-screen bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1920x1080')", // altere para sua imagem de fundo
        }}
      >
        {/* Você pode incluir um título ou deixar vazio para exibir só a imagem */}
        <div className="h-full flex items-center justify-center bg-black bg-opacity-40">
          <h1 className="text-5xl text-white font-bold">Sobre Nós</h1>
        </div>
      </div>

      {/* Seção do Carrossel de Cards */}
      <div className="bg-white py-10">
        <div className="container mx-auto px-4">
          <Slider {...sliderSettings}>
            {cards.map((card, index) => (
              <a
                key={index}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus:outline-none"
              >
                <div className="flex flex-col md:flex-row items-center bg-gray-100 bg-opacity-90 rounded-lg shadow-lg p-6 m-4 hover:shadow-xl transition duration-300">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full md:mr-6"
                  />
                  <div className="mt-4 md:mt-0 text-center md:text-left">
                    <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                    <p className="text-gray-700">{card.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
