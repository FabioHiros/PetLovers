import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Pet {
  id: number;
  name: string;
  type: string;
  breed: string;
  clientId: number;
  client: {
    id: number;
    name: string;
  };
}

interface GetAllPetsResponse {
  pets: Pet[];
  total: number;
  page: number;
  pageSize: number;
}

interface UseGetAllPetsProps {
  page?: number;
  pageSize?: number;
  search?: string;
}

export const useGetAllPets = ({ page = 1, pageSize = 10, search = '' }: UseGetAllPetsProps) => {
  return useQuery<GetAllPetsResponse>({
    queryKey:['pets', page, pageSize, search],
    queryFn:async () => {
        const response = await axios.get('http://localhost:3000/pets', {
          params: { page, pageSize, search },
        });
        return response.data;
      },
  }
    
    
  );
};
