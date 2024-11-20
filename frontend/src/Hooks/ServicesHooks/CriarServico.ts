import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useCreateService = () => {
    const queryClient = useQueryClient();
    return useMutation({
  mutationFn:  async (service: { name: string; description: string; price: number }) => {
      const response = await axios.post('http://localhost:3000/services', service);
      return response.data;
    },
    
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['services'] });
        console.log('Service created successfully');
        // You can add a success message or invalidate queries here if you have a Service list.
      },
      onError: (error) => {
        console.error('Error creating Service:', error);
      },
    }
  );
};
