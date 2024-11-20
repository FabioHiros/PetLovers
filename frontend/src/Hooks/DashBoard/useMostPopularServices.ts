import { useQuery } from "@tanstack/react-query";
import axios from "axios";



export const useMostPopularServices = () =>
    useQuery({queryKey:["mostPopularServices"],queryFn: async () => {
      const { data } = await axios.get("http://localhost:3000/analytics/popular-services");
      return data;
    }});
  