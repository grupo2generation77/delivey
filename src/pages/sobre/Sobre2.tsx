import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const cards = [
  {
    // Card 1: Empresa Biscoitadores
    title: "Biscoitadores",
    description:
      "Empresa de desenvolvimento de softwares. Todos os membros são do estado do Rio de Janeiro.",
    image: "https://via.placeholder.com/150/111", // Altere para a URL da imagem desejada
    link: "https://linkedin.com/company/biscoitadores", // Altere para o link desejado
  },
  {
    // Card 2: Demo de delivery de café Delivey 77
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
  // Efeito parallax opcional para o container dos cards
  const { scrollY } = useViewportScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [50, -50]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Imagem de fundo com efeito parallax */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1920x1080')", // Altere para sua imagem de fundo
        }}
      />

      {/* Conteúdo da página */}
      <div className="relative z-10">
        {/* Seção de título */}
        <div className="h-screen flex items-center justify-center">
          <h1 className="text-5xl text-white font-bold">Sobre Nós</h1>
        </div>

        {/* Container dos cards com efeito parallax global */}
        <motion.div style={{ y: parallaxY }} className="py-10">
          <div className="container mx-auto px-4 space-y-16">
            {cards.map((card, index) => (
              <motion.a
                key={index}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                initial={{ scale: 0.7, filter: "blur(4px)", opacity: 0.6 }}
                whileInView={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.8 }}
              >
                <div className="bg-white bg-opacity-90 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                  <div className="flex flex-col md:flex-row items-center p-4">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full md:mr-6"
                    />
                    <div className="mt-4 md:mt-0 text-center md:text-left">
                      <h2 className="text-xl font-bold">{card.title}</h2>
                      <p className="text-gray-700">{card.description}</p>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Sobre;