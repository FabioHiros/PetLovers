import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

interface UpdateServicesParams {
  id: number;
  name?: string;
  description?: string;
  price?: number;
}

export const useUpdateService = () => {
  const queryClient = useQueryClient();

  return useMutation({

    mutationFn:async ({ id, name, description, price }: UpdateServicesParams) => {
        const { data } = await axios.patch(`http://localhost:3000/services/${id}`, {
          name,
          description,
          price,
        });
        return data;
      },
      
        onSuccess: () => {
          queryClient.invalidateQueries({queryKey:['services']}); // Refetch the Servicess list after an update
        },
      
  }
    
   
  );
};
