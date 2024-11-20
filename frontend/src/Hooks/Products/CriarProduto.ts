import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useCreateProduct = () => {
    const queryClient = useQueryClient();
    return useMutation({
  mutationFn:  async (product: { name: string; description: string; price: number }) => {
      const response = await axios.post('http://localhost:3000/products', product);
      return response.data;
    },
    
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['products'] });
        console.log('Product created successfully');
        // You can add a success message or invalidate queries here if you have a product list.
      },
      onError: (error) => {
        console.error('Error creating product:', error);
      },
    }
  );
};
