import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useTopClientsBySpending = () =>
    useQuery(
        {
            queryKey:["topClientsBySpending"], 
            queryFn:async () => {
      const { data } = await axios.get("http://localhost:3000/analytics/top-clients-spending");
      return data;
    }});
  