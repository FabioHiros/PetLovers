import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Client {
  id: number;
  name: string;
}

interface Pet {
  id: number;
  name: string;
}

interface Purchase {
  id: number;
  clientId: number;
  petId: number;
  type: string;
  quantity: number;
  createdAt: string;
  client: Client;
  pet: Pet;
}

const fetchPurchases = async (): Promise<Purchase[]> => {
  const { data } = await axios.get<Purchase[]>("http://localhost:3000/purchases");
  return data;
};

export const useFetchPurchases = () => {
  return useQuery<Purchase[], Error>({queryKey:["purchases"],queryFn: fetchPurchases});
};
