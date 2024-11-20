import { useQuery } from "@tanstack/react-query";
import axios from "axios";


export const useMostPopularProducts = () =>
    useQuery(
        {
            queryKey:["mostPopularProducts"],
            queryFn: async () => {
      const { data } = await axios.get("http://localhost:3000/analytics/popular-products");
      return data;
    }});
  