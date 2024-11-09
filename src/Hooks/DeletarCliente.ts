import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const deleteClient = async (id: number) => {
  await axios.delete(`http://localhost:32831/cliente/excluir`, { data: {id} });
};

const useDeleteClient = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:deleteClient, 
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:["clients"]}); // Refresh client list after deletion
    },
    onError: (error) => {
      console.error("Error deleting client:", error);
    },
  });
};

export default useDeleteClient;
