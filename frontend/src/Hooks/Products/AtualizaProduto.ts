import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

interface UpdateProductParams {
  id: number;
  name?: string;
  description?: string;
  price?: number;
}

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({

    mutationFn:async ({ id, name, description, price }: UpdateProductParams) => {
        const { data } = await axios.patch(`http://localhost:3000/products/${id}`, {
          name,
          description,
          price,
        });
        return data;
      },
      
        onSuccess: () => {
          queryClient.invalidateQueries({queryKey:['products']}); // Refetch the products list after an update
        },
      
  }
    
   
  );
};
