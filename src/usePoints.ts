import axios from "axios";
import { IPoint } from "./point.types";
import { useQuery } from "@tanstack/react-query";

const getData = async () => {
  const response = await axios.get<IPoint[]>(
    "https://665730a89f970b3b36c84dc4.mockapi.io/points"
  );
  return response.data;
};

export function usePoints() {
  const { data, error, isLoading, isError } = useQuery<IPoint[]>({
    queryKey: ["points"],
    queryFn: getData,
  });

  return { data, error, isLoading, isError };
}
