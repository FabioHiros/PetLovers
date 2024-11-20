import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useTopClientsByProducts = () =>
  useQuery({queryKey:["topClientsByProducts"],queryFn: async () => {
    const { data } = await axios.get("http://localhost:3000/analytics/top-clients-products");
    return data;
  }});
