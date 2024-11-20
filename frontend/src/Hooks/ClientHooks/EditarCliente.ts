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
  rgs?: string;
}

const updateClient = async (clientData: UpdateClientData) => {
  const {id ,...dataToUpdate} = clientData

  console.log(clientData)
  const response = await axios.patch(`http://localhost:3000/clients/${id}`, dataToUpdate);
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
