// hooks/useEditPet.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

interface EditPetData {
  id: number;
  name?: string;
  type?: string;
  breed?: string;
  clientId?: number;
}

export const useEditPet = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:(updatedPet: EditPetData) =>
        axios.patch(`http://localhost:3000/pets/${updatedPet.id}`, updatedPet),
    onSuccess: () => {
        queryClient.invalidateQueries({queryKey:['pets']}); // Refetch the pets list
      },
  })
    
};
