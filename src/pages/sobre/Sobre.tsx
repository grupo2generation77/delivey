import { useEffect, useState } from 'react';

const Sobre = () => {
  // Defina explicitamente o tipo do estado como um array de números
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.card');
      cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight * 0.75 && !visibleCards.includes(index)) {
          setVisibleCards((prev) => [...prev, index]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleCards]);

  const teamMembers = [
    {
      name: "Biscoitadores",
      role: "Empresa de Desenvolvimento de Softwares",
      description: "Somos uma empresa de desenvolvimento de softwares chamada Biscoitadores. Todos os membros são do estado do Rio de Janeiro.",
      image: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      name: "Delivery 77",
      role: "Demo de Site de Delivery de Café",
      description: "Conheça nossa demo de site de delivery de café, a Delivery 77.",
      image: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      name: "Membro 1",
      role: "Desenvolvedor",
      description: "Descrição do Membro 1.",
      image: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      name: "Membro 2",
      role: "Designer",
      description: "Descrição do Membro 2.",
      image: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      name: "Membro 3",
      role: "Gerente de Projetos",
      description: "Descrição do Membro 3.",
      image: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      name: "Membro 4",
      role: "Desenvolvedor",
      description: "Descrição do Membro 4.",
      image: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      name: "Membro 5",
      role: "Desenvolvedor",
      description: "Descrição do Membro 5.",
      image: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      name: "Membro 6",
      role: "Desenvolvedor",
      description: "Descrição do Membro 6.",
      image: "https://via.placeholder.com/150",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Seção com efeito parallax */}
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }}
      ></div>

      {/* Seção dos cards */}
      <div className="container mx-auto px-4 py-8">
        {teamMembers.map((member, index) => (
          <a
            key={index}
            href={member.link}
            className={`card mb-8 p-6 bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-center transition-opacity duration-1000 ${
              visibleCards.includes(index) ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-4 md:mb-0 md:mr-8"
            />
            <div className="text-center md:text-left">
              <h2 className="text-xl font-bold">{member.name}</h2>
              <p className="text-gray-600">{member.role}</p>
              <p className="text-gray-800">{member.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sobre;