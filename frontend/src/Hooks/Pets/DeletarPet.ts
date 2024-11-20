import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useDeletePet = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:async (id: number) => {
        const response = await axios.delete(`http://localhost:3000/pets/${id}`);
        return response.data;
      },
      onSuccess: () => {
        // Invalidate the pets query to refresh the list
        queryClient.invalidateQueries({queryKey:['pets']});
      },
      onError: (error) => {
        console.error('Error deleting pet:', error);
      },
    }
  )}
    
  

