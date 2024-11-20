import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const usePopularItemsByPetTypeAndBreed = () =>
    useQuery({queryKey:["popularItemsByPetTypeAndBreed"],queryFn: async () => {
      const { data } = await axios.get("http://localhost:3000/analytics/popular-items-pets");
      return data;
    }});
  