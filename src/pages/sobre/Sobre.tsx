import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  GithubLogo,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const cards = [
  {
    title: "Biscoitadores",
    description:
      "Empresa de desenvolvimento de softwares fundada no Rio de Janeiro em dezembro de 2024. O nome foi baseado em uma brincadeira com os colegas de São Paulo, pois todos os membros são do estado do Rio de Janeiro e não falam Bolacha.",
    image: "https://ik.imagekit.io/lkxant9gz/rb_82808.png?updatedAt=1738613905001",
    link: "https://github.com/grupo2generation7",
  },
  {
    title: "Delivey 77",
    description: "Um projeto demonstrativo, com a temática de site de delivery de produtos relacionados a café.",
    image: "https://ik.imagekit.io/devivanjulio/_Pngtree_flying%20cup%20of%20coffee%20with_5057949.png?updatedAt=1738624964597",
    link: "https://github.com/grupo2generation77/delivey",
  },
  {
    title: "Matheus Queiroz",
    description: "Desenvolvedor Sênior e Tech Lead na Biscoitadores e Desenvolvedor na CI&T.",
    image: "https://ik.imagekit.io/devivanjulio/MatheusQ.jpg?updatedAt=1742657678026",
    link: "https://www.linkedin.com/in/matheus-queiroz/",
  },
  {
    title: "Lucas Oliveira",
    description: "UI/UX Designer e Especialista Frontend na Biscoitadores.",
    image: "https://ik.imagekit.io/devivanjulio/LucasO.jpg?updatedAt=1742657625194",
    link: "https://www.linkedin.com/in/lucas-vinicius-mendes/",
  },
  {
    title: "Vitória Manuela",
    description: "Desenvolvedora Fullstack na Biscoitadores.",
    image: "https://ik.imagekit.io/devivanjulio/Vit%C3%B3riaM.jpg?updatedAt=1742658152186",
    link: "https://www.linkedin.com/in/vitoria-manuela/",
  },
  {
    title: "Nina Raquel",
    description: "Desenvolvedora Fullstack na Biscoitadores.",
    image: "https://ik.imagekit.io/devivanjulio/Nina.jpg?updatedAt=1742657836221",
    link: "https://www.linkedin.com/in/nina-raquel/",
  },
  {
    title: "Jaqueline Costa",
    description: "Desenvolvedora Fullstack na Biscoitadores.",
    image: "https://ik.imagekit.io/devivanjulio/Jaque.jpg?updatedAt=1742657548708",
    link: "https://www.linkedin.com/in/jaqueline-valle/",
  },
  {
    title: "Ivan Barbosa",
    description: "PO, SCRUM Master e Desenvolvedor Fullstack na Biscoitadores.",
    image: "https://ik.imagekit.io/devivanjulio/EuUltimoDiaDeGeneration.png?updatedAt=1738849193680",
    link: "https://www.linkedin.com/in/ivanj%C3%BAlio/",
  },
];

const Sobre = () => {
  const { scrollY } = useViewportScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [50, -50]);

  const [cookieRef, inViewCookie] = useInView({
    threshold: 0.8,
  });

  return (
    <div className="relative min-h-screen">
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('https://tokemcasa.tokstok.com.br/wp-content/uploads/2024/07/cafe-da-manha-na-cama.png')",
          filter: inViewCookie ? "blur(8px)" : "blur(0px)",
          transition: "filter 0.5s",
          zIndex: -1, // Garante que a imagem de fundo fique atrás de todo o conteúdo
        }}
      />

      {/* Conteúdo da página */}
      <div className="relative z-10">
        {/* Seção de título */}
        <div className="h-screen flex items-center justify-center">
          <h1 className="text-5xl text-red-800 font-bold relative overflow-hidden group shadow-[2px_2px_0px_rgba(155,44,44,1)] bg-pink-50">
            <span className="absolute inset-0 bg-red-800 transform translate-y-full group-hover:translate-y-0 transition-all duration-300"></span>
            <span className="relative z-10 text-red-800 group-hover:text-white transition-colors duration-300 px-8 py-8">
              Sobre Nós
            </span>
          </h1>
        </div>
      </div>

      {/* Container dos cards com efeito parallax */}
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

      {/* Seção do Cookie */}
      <motion.div
        ref={cookieRef}
        className="min-h-screen flex items-center justify-center bg-white/20 backdrop-blur-xs mb-10"
      >
        <motion.img
          src="https://ik.imagekit.io/lkxant9gz/rb_82808.png?updatedAt=1738613905001"
          alt="Cookie"
          className="w-48 h-48 object-contain origin-center animate-spin-slow"
          style={{
            filter: inViewCookie ? "blur(0px)" : "blur(4px)",
            transition: "filter 0.5s",
          }}
        />
      </motion.div>

      {/* Footer */}
      <footer className="bg-[#fee5ca] py-8 relative z-20"> {/* Adicione z-20 para garantir que o Footer fique acima da imagem de fundo */}
        <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-x-16 text-center">
          <div className="w-full md:w-1/4 flex justify-center">
            <img src="https://i.imgur.com/jQ4FgFU.png" alt="Logo da Delivery" />
          </div>

          <div className="w-full md:w-1/4 text-black">
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-gray-600">
                  Cardápio
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-600">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-600">
                  Termos de Serviço
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 flex flex-col items-center">
            <p className="text-lg font-semibold mb-2">Conheça nossa equipe</p>
            <Link to={"/sobre"}>
              <img
                src="https://i.imgur.com/eLlt9Sp.png"
                alt="Biscoito"
                className="w-20 h-20 animate-spin-slow"
              />
            </Link>
          </div>

          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <p className="text-sm">
              <span className="mr-1">Email:</span>
              <a
                href="mailto:contato@delivery.com"
                className="hover:underline font-semibold"
              >
                contato@delivey.com
              </a>
            </p>
          </div>
        </div>

        <div className="text-left ml-8 mt-8 pt-6 border-t border-gray-700">
          <p className="text-xs text-black">
            © {new Date().getFullYear()} Delivey. Todos os direitos reservados. <br />
            Av. Tal, n°123 - Rio de Janeiro, RJ
          </p>
        </div>

        <div className="flex justify-center gap-3 mt-4">
          <a
            href="https://www.linkedin.com/school/generationbrasil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLogo
              size={32}
              weight="bold"
              className="text-black hover:text-gray-700"
            />
          </a>
          <a
            href="https://www.instagram.com/generationbrasil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramLogo
              size={32}
              weight="bold"
              className="text-black hover:text-gray-700"
            />
          </a>
          <a
            href="https://www.facebook.com/generationbrasil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookLogo
              size={32}
              weight="bold"
              className="text-black hover:text-gray-700"
            />
          </a>
          <a
            href="https://github.com/grupo2generation77/delivey"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogo
              size={32}
              weight="bold"
              className="text-black hover:text-gray-700"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Sobre;