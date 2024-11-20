import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const deleteService = async (id: number) => {
  await axios.delete(`http://localhost:3000/services/${id}`);
};

export const useDeleteService = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteService,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['services']}); // Refresh Service list
    },
    onError: (error) => {
      console.error('Error deleting Service:', error);
    },
  });
};
