import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useCreatePurchase = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:async (purchase: {
      clientId: number;
      petId: number;
      itemId: number;
      quantity: number;
      type: "PRODUCT" | "SERVICE";
    }) => {
      const response = await axios.post("http://localhost:3000/purchases", purchase);
      
      return response.data;
    },
    
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["purchases"] });
        console.log("Purchase created successfully");
      },
      onError: (error) => {
        console.error("Error creating purchase:", error);
      },
    }
  );
};
