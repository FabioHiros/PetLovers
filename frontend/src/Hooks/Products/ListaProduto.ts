import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductsResponse {
  products: Product[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalProducts: number;
  };
}

interface UseGetProductsProps {
  search?: string;
  page?: number;
  limit?: number;
}

export const useGetProducts = ({ search = '', page = 1, limit = 10 }: UseGetProductsProps) => {
  return useQuery({
    queryKey:['products', { search, page, limit }],
    queryFn:async () => {
        const { data } = await axios.get<ProductsResponse>('http://localhost:3000/products', {
          params: { search, page, limit },
        });
        return data;
      },
  }
    
  );
};
