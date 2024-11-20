import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const deleteProduct = async (id: number) => {
  await axios.delete(`http://localhost:3000/products/${id}`);
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['products']}); // Refresh product list
    },
    onError: (error) => {
      console.error('Error deleting product:', error);
    },
  });
};
