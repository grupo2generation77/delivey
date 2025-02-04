import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  GithubLogo,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Footer() {
  let data = new Date().getFullYear();

  return (
    <footer className="bg-[#fee5ca] py-8">
      <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-x-16 text-center">
        <div className="w-full md:w-1/4 flex justify-center ">
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
              className=" hover:underline font-semibold"
            >
              contato@delivey.com
            </a>
          </p>
        </div>
      </div>

      <div className="text-left ml-8 mt-8 pt-6 border-t border-gray-700">
        <p className="text-xs text-black">
          © {data} Delivey. Todos os direitos reservados. <br />
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
  );
}

export default Footer;
