import { useState } from 'react';
import Modal from 'react-modal';
import './Cadastro.css';

// Certifique-se de que o CSS para o Modal está incluído
// Você pode adicionar estilos específicos para o Modal
// dentro do seu arquivo Cadastro.css ou em um arquivo separado.

Modal.setAppElement('#root'); // Define o elemento raiz para o Modal

function Cadastro() {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="open-modal-button">
        Cadastre-se
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Cadastro"
        className="modal-content" // Adicione classes para estilização
        overlayClassName="modal-overlay" // Classe para o overlay
      >
        <div className="modal-inner"> {/* Conteúdo interno do modal */}
          <h2 className="text-slate-900 text-5xl">Cadastrar</h2>
          <form className="flex justify-center items-center flex-col w-full gap-3">
            <div className="flex flex-col w-full">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome"
                className="border-2 border-slate-700 rounded p-2"
              />
            </div>
            {/* ... outros campos ... */}
            <div className="flex justify-around w-full gap-8">
              <button
                onClick={() => setIsOpen(false)}
                className="rounded text-white bg-red-400 hover:bg-red-700 w-1/2 py-2"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="rounded text-white bg-indigo-400 hover:bg-indigo-900 w-1/2 py-2 flex justify-center"
              >
                Cadastrar
              </button>
            </div>
          </form>
          <button onClick={() => setIsOpen(false)} className="modal-close-button">
            Fechar
          </button>
        </div>
      </Modal>
    </>
  );
}

export default Cadastro;