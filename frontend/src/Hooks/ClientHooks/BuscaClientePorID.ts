import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchClientById = async (id: number) => {
  const response = await axios.get(`http://localhost:3000/clients/${id}`, {
    validateStatus: function (status) {
    
      if (status === 302) {
        // console.log('ESSA COISA TA COM PROBLEMA DE CORS');
    
        return true 
      }
      return true; 
    }
  });
  // console.log(response.data)
  return response.data;
};

const useFetchClientById = (id: number) => {
  return useQuery({
    queryKey:["clients", id], 
    queryFn: () =>fetchClientById(id),
    enabled: !!id
    });
};

export default useFetchClientById;
