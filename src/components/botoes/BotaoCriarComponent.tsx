import React from "react";

interface BotaoCriarComponentProps {
  tipo: boolean;
}

const BotaoCriarComponent: React.FC<BotaoCriarComponentProps> = ({ tipo }) => {
  return (
    <button className="bg-orange-900 text-white px-4 py-2 rounded-lg hover:bg-orange-800 transition-colors">
      {tipo ? "Criar Produto" : "Criar Categoria"}
    </button>
  );
};

export default BotaoCriarComponent;