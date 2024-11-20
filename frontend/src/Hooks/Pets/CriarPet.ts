import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

interface CreatePetPayload {
  name: string;
  type: string;
  breed?: string;
  clientId: number;
}

const createPet = async (petData: CreatePetPayload) => {
    console.log(petData)
  const response = await axios.post('http://localhost:3000/pets', petData);
  return response.data;
};

export const useCreatePet = () => {
    const queryClient = useQueryClient();
    return useMutation({
    mutationFn:createPet, 
    onSuccess: (data) => {
      console.log('Pet created successfully:', data);
      queryClient.invalidateQueries({ queryKey: ['pets'] });
    },
    onError: (error) => {
      console.error('Error creating pet:', error);
      // You can show an error notification here
    },
  });
};
