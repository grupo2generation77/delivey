import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cards = [
  {
    // Card 1: Empresa Biscoitadores
    title: "Biscoitadores",
    description:
      "Empresa de desenvolvimento de softwares fundada no Rio de Janeiro em dezembro de 2024. O nome foi baseado em uma brincadeira com os colegas de São Paulo, pois todos os membros são do estado do Rio de Janeiro e não falam Bolacha.",
    image:
      "https://ik.imagekit.io/lkxant9gz/rb_82808.png?updatedAt=1738613905001", // Altere para a URL desejada
    link: "https://github.com/grupo2generation7", // Altere para o link desejado
  },
  {
    // Card 2: Demo de delivery de café Delivey 77
    title: "Delivey 77",
    description:
      "Um projeto demonstrativo, com a temática de site de delivery de produtos relacionados a café.",
    image:
      "https://ik.imagekit.io/devivanjulio/_Pngtree_flying%20cup%20of%20coffee%20with_5057949.png?updatedAt=1738624964597",
    link: "https://github.com/grupo2generation77/delivey",
  },
  {
    // Card 3: Membro 1
    title: "Matheus Queiroz",
    description: "Sênior e Tech Lead.",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQGNuaxckRDF7Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730742826051?e=1744243200&v=beta&t=VSB3tNn7pDR8PmpHa-tj2vBCmx7Yba4DvPQHWfYJJIE",
    link: "https://www.linkedin.com/in/matheus-queiroz/",
  },
  {
    // Card 4: Membro 2
    title: "Lucas Oliveira",
    description: "UI/UX Designer e Especialista Frontend.",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQEkBH9bPMiTKw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729541301387?e=1744243200&v=beta&t=uTHHkWjSCn_2yB7aAo_PtlcslPsgGFNEiALP3kg9dA0",
    link: "https://www.linkedin.com/in/lucas-vinicius-mendes/",
  },
  {
    // Card 5: Membro 3
    title: "Vitória Manuela",
    description: "Desenvolvedora Fullstack Jr.",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQFLw_w4gY3BXQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724398107767?e=1744243200&v=beta&t=KGwrQSGIjRd5pc3A-HFlIIVVmFObUNW7f56V1iOX-yk",
    link: "https://www.linkedin.com/in/vitoria-manuela/",
  },
  {
    // Card 6: Membro 4
    title: "Nina Raquel",
    description: "Desenvolvedora Fullstack Jr.",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQETZvl8qd4Dyg/profile-displayphoto-shrink_800_800/B4DZQfUeEyHcAc-/0/1735692248536?e=1744243200&v=beta&t=SNMJjKQisl7csO-zqMIQfeECo6kt9qltZJlpOnwnC8U",
    link: "https://www.linkedin.com/in/nina-raquel/",
  },
  {
    // Card 7: Membro 5
    title: "Jaqueline Costa",
    description: "Desenvolvedora Fullstack Jr.",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQHhaZoYRKxtsg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729899450213?e=1744243200&v=beta&t=SH12qbELitc-EgcylkbB0UVx_apBEGjdQ3dEwPbDmzY",
    link: "https://www.linkedin.com/in/jaqueline-valle/",
  },
  {
    // Card 8: Membro 6
    title: "Ivan Barbosa",
    description: "P.O. e Desenvolvedor Fullstack Jr.",
    image:
      "https://ik.imagekit.io/devivanjulio/IvanMagro.jpg?updatedAt=1738622596666",
    link: "https://www.linkedin.com/in/ivanj%C3%BAlio/",
  },
];

const Sobre = () => {
  // Efeito parallax para o container dos cards (opcional)
  const { scrollY } = useViewportScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [50, -50]);

  // Hook para detectar se a seção do cookie está em foco (centralizada)
  const [cookieRef, inViewCookie] = useInView({
    threshold: 0.8,
  });

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://tokemcasa.tokstok.com.br/wp-content/uploads/2024/07/cafe-da-manha-na-cama.png')", // Altere para sua imagem de fundo
          filter: inViewCookie ? "blur(8px)" : "blur(0px)",
          transition: "filter 0.5s",
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
        className="min-h-screen flex items-center justify-center bg-white/20 backdrop-blur-xs"
      >
        <motion.img
          src="https://ik.imagekit.io/lkxant9gz/rb_82808.png?updatedAt=1738613905001" // Substitua pela imagem de um cookie americano
          alt="Cookie"
          className="w-48 h-48 object-contain origin-center animate-spin-slow" // Adicione a classe animate-spin-slow
          style={{
            filter: inViewCookie ? "blur(0px)" : "blur(4px)",
            transition: "filter 0.5s",
          }}
        />
      </motion.div>
    </div>
  );
};

export default Sobre;
