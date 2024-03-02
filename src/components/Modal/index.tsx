import React from 'react';
import { Container } from './styles';

interface ClasseCNAE {
  id: string;
  descricao: string;
  grupo: {
    id: string;
    descricao: string;
    divisao: {
      id: string;
      descricao: string;
      secao: {
        id: string;
        descricao: string;
      };
    };
  };
  observacoes: string[];
}

interface ModalProps {
  isOpen: boolean;
  classe: ClasseCNAE | null;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, classe, onClose }) => {
  if (!isOpen || !classe) return null;

  return (
    <Container>
      <div className="modal-content">
        <button className="close" onClick={onClose}>
          &times;
        </button>
        <h2>Detalhes da Classe CNAE</h2>
        <p>
          <strong>ID:</strong> {classe.id}
        </p>
        <p>
          <strong>Descrição:</strong> {classe.descricao}
        </p>
        <p>
          <strong>Grupo:</strong> {classe.grupo.descricao}
        </p>
        <p>
          <strong>Divisão:</strong> {classe.grupo.divisao.descricao}
        </p>
        <p>
          <strong>Seção:</strong> {classe.grupo.divisao.secao.descricao}
        </p>
        <h3>Observações:</h3>
        <ul>
          {classe.observacoes.map((observacao, index) => (
            <li key={index}>{observacao}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

