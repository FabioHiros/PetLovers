
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

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
  
  interface Cliente {
    nome: string;
    nomeSocial?: string;
    email: string;
    endereço: Endereco;
    telefones: Telefone[];
    cpf?: string;
    rgs?: string[];
  }
  

const createCliente = async (data: Cliente) =>{
    // console.log(data)
    const response = await axios.post('http://localhost:3000/clients',data)
    // console.log(response.data)
    return response.data
}


const useCadastrarCliente = () => {
  const queryClient = useQueryClient();
    return useMutation({
    mutationFn: createCliente,
    onSuccess:()=>{
        console.log('success')
        queryClient.invalidateQueries({ queryKey: ['clients'] });
    },
    onError: (error) =>{
        console.log(error.message)
    }
  }
  );
};

export default useCadastrarCliente;
