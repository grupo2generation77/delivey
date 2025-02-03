import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  GithubLogo,
} from "@phosphor-icons/react";

function Footer() {
  let data = new Date().getFullYear();

  return (
    <footer className="bg-[#fee5ca] py-8">
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        {/* Logo */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0 flex justify-end">
          <img
            src="https://i.imgur.com/FIjTQiv.png"
            alt="Logo da Delivery Food 77"
          />
        </div>

        {/* Links úteis */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0 text-black">
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm hover:text-gray-600">
                Sobre Nós
              </a>
            </li>
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

        {/* Colaboradores */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-4 text-black">
            Colaboradores
          </h4>
          <div className="flex space-x-4 mb-2">
            <a href="https://www.linkedin.com/in/ivanj%C3%BAlio/">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQFjWcNyZu2Ptg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719620770969?e=1743638400&v=beta&t=TkPfs7_n5gGAVjFBBEHTix6uUAa1aVLMqLk-5_1s7z0"
                alt="Linkedin"
                className="w-8 h-8 rounded-2xl"
              />
            </a>
            <a href="https://www.linkedin.com/in/jaqueline-valle/">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQHhaZoYRKxtsg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729899450213?e=1743638400&v=beta&t=IQKOLXKYW-dgsyhahqEpHNtViFOnW2zfsPOA8NClOq4"
                alt="LinkedIn"
                className="w-8 h-8 rounded-2xl"
              />
            </a>

            <a href="https://www.linkedin.com/in/vitoria-manuela/">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQFLw_w4gY3BXQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724398107767?e=1743638400&v=beta&t=QIed63iRmZxdOK0Dq-KZiN7ESOIK9QQg8uQ9FN14Qnc"
                alt="LinkedIn"
                className="w-8 h-8 rounded-2xl"
              />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/nina-raquel/">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQETZvl8qd4Dyg/profile-displayphoto-shrink_800_800/B4DZQfUeEyHcAc-/0/1735692248536?e=1743638400&v=beta&t=G8wBsIqockdUyoIf_p09bQsP56ZAWLXYq7J8oQFmuqM"
                alt="LinkedIn de Nina Raquel"
                className="w-8 h-8 rounded-2xl"
              />
            </a>
            <a href="https://www.linkedin.com/in/matheus-queiroz/">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQGNuaxckRDF7Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730742826051?e=1743638400&v=beta&t=OEz6bMOclSK3-my6MjeIFoOdt5dcR_8m6Q_6aSdu_hk"
                alt="LinkedIn"
                className="w-8 h-8 rounded-2xl"
              />
            </a>

            <a href="https://www.linkedin.com/in/lucas-vinicius-mendes/">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQEkBH9bPMiTKw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729541301387?e=1743638400&v=beta&t=qXKzsccrOWR6kEaqt_g-pcOy39RU19i5VALw0aiSv-Q"
                alt="LinkedIn"
                className="w-8 h-8 rounded-2xl"
              />
            </a>
          </div>
        </div>

        {/* Contato */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0 text-left md:text-center">
          <h4 className="text-lg font-semibold mb-4">Contato</h4>
          <p className="text-sm">Email: contato@delivery.com</p>
        </div>
      </div>

      {/* Rodapé */}
      <div className="text-left ml-8 mt-8 pt-6 border-t border-gray-700">
        <p className="text-xs text-black">
          © {data} Delivery Food 77. Todos os direitos reservados. <br />
          Av. Tal, n°123 - Rio de Janeiro, RJ
        </p>
      </div>

      {/* Redes Sociais */}
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
  );
}

export default Footer;
