import axios, { AxiosResponse } from 'axios';
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
export const fetchClassesCNAE = async () => {
  try {
    const response: AxiosResponse<ClasseCNAE[]> = await axios.get('https://servicodados.ibge.gov.br/api/v2/cnae/classes');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar classes CNAE:', error);
    throw error;
  }
};
