import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface Endereco {
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: string;
    codigoPostal: string;
    informacoesAdicionais?: string;
  }
  
  interface Telefone {
    ddd: string;
    numero: string;
  }
  

interface UpdateClientData {
  id: number;
  nome: string;
  nomeSocial?: string;
  email: string;
  endereço: Endereco;
  telefones: Telefone[];
  cpf?: string;
  rgs?: string[];
}

const updateClient = async (clientData: UpdateClientData) => {
  const response = await axios.put("http://localhost:32831/cliente/atualizar", clientData);
  return response.data;
};

const useUpdateClient = () => {
    const queryClient = useQueryClient();  
    return useMutation({
    mutationFn: updateClient,
    onSuccess:()=>{
        console.log('success')
        queryClient.invalidateQueries({ queryKey: ['clients'] });
    },
  });
};

export default useUpdateClient;
