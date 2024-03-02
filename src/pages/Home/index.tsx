import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { Modal } from '../../components/Modal';
import { fetchClassesCNAE } from '../../services/ibgeAPI';

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

export const Home: React.FC = () => {
  const [classesCNAE, setClassesCNAE] = useState<ClasseCNAE[]>([]);
  const [filteredClassesCNAE, setFilteredClassesCNAE] = useState<ClasseCNAE[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedClasse, setSelectedClasse] = useState<ClasseCNAE | null>(null);
  const [error, setError] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchClassesCNAE();
        setClassesCNAE(data);
        setFilteredClassesCNAE(data);
      } catch (error) {
        handleError(error);
      }
    };

    fetchData();
  }, []);

  const handleClasseClick = (classe: ClasseCNAE) => {
    setSelectedClasse(classe);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedClasse(null);
  };

  const handleError = (error: any) => {
    if (error.response) {
      // O servidor respondeu com um status de erro (por exemplo, 404, 500)
      setError(`Erro ${error.response.status}: ${error.response.data}`);
    } else if (error.request) {
      // A requisição foi feita, mas não recebeu resposta
      setError('Erro de conexão: Não foi possível receber uma resposta do servidor');
    } else {
      // Ocorreu um erro durante a configuração da requisição
      setError('Erro ao enviar a requisição');
    }
  };

  const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    const filtered = classesCNAE.filter((classe) =>
      classe.descricao.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredClassesCNAE(filtered);
  };

  return (
    <S.Container>
     <div className='header'>
     <h1>Classes CNAE</h1>
      <input
        type="text"
        placeholder="Buscar CNAE..."
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
     </div>
      {error ? (
        <p>Ocorreu um erro ao buscar as classes CNAE: {error}</p>
      ) : (
        <ul>
          {filteredClassesCNAE.map((classe) => (
            <li key={classe.id} className='item'>
              <button onClick={() => handleClasseClick(classe)}>
                <strong>ID:</strong> {classe.id} - <strong>Descrição:</strong> {classe.descricao}
              </button>
            </li>
          ))}
        </ul>
      )}
      <Modal isOpen={modalOpen} classe={selectedClasse} onClose={closeModal} />
    </S.Container>
  );
};
