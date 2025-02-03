// Home.tsx
import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0; /* Cor de fundo */
`;

const TesteTexto = styled.h1`
  font-size: 3rem;
  color: #333; /* Cor do texto */
  text-align: center;
  max-width: 80%; /* Largura máxima do texto */
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <TesteTexto>
        TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TESTE TEST TEST  
        TESTE TESTE TESTE 
        TESTE TESTE TESTE 
        TESTE TESTE TESTE TESTЕ
      </TesteTexto>
    </HomeContainer>
  );
};

export default Home;