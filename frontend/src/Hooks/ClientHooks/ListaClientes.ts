import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchClientes = async () => {
  const response = await axios.get("http://localhost:3000/clients", {
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

const useFetchClientes = () => {
  return useQuery({
    queryKey: ["clients"],
    queryFn: fetchClientes
  });
};

export default useFetchClientes;
