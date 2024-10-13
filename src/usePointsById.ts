import axios from "axios";
import { IPoint } from "./point.types";
import { useQuery } from "@tanstack/react-query";

const getData = async (id: string) => {
  const response = await axios.get<IPoint>(
    `https://665730a89f970b3b36c84dc4.mockapi.io/points/${id}`
  );
  return response.data;
};

export function usePoint(id: string) {
  const { data, error, isLoading, isError } = useQuery<IPoint>({
    queryKey: ["point", id],
    queryFn: () => getData(id),
    enabled: !!id,
  });

  return { data, error, isLoading, isError };
}
