import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Service {
  id: number;
  name: string;
  price: number;
}

interface ServicesResponse {
  Services: Service[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalServices: number;
  };
}

interface UseGetServicesProps {
  search?: string;
  page?: number;
  limit?: number;
}

export const useGetServices = ({ search = '', page = 1, limit = 10 }: UseGetServicesProps) => {
  return useQuery({
    queryKey:['services', { search, page, limit }],
    queryFn:async () => {
        const { data } = await axios.get<ServicesResponse>('http://localhost:3000/services', {
          params: { search, page, limit },
        });
        return data;
      },
  }
    
  );
};
