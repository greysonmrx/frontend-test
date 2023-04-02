import React from "react";
import { useInfiniteQuery } from "react-query";

import { ILocation } from "@/models/Location";

import { useDebounce } from "@/hooks/useDebounce";

import { LocationsService } from "@/services/LocationsService";

import { IPagination } from "@/interfaces/IPagination";

interface UseLocationsData {
  isError: boolean;
  isLoading: boolean;
  hasNextPage: boolean;
  locations: ILocation[];
  handleChangeName: (text: string) => void;
  handleLoadMoreResults: () => void;
}

export const useLocations = (): UseLocationsData => {
  const [name, setName] = React.useState<string>();

  const debouncedName = useDebounce(name, 1000);
  const {
    data,
    isError,
    isLoading,
    hasNextPage,
    fetchNextPage: handleLoadMoreResults,
  } = useInfiniteQuery({
    queryKey: ["locations", debouncedName],
    queryFn: ({ pageParam = 1 }) =>
      LocationsService.getAll({
        name: debouncedName,
        page: pageParam,
      }),
    getNextPageParam: (lastPage: IPagination<ILocation>, allPages) => {
      if (lastPage.info.next) {
        return allPages.length + 1;
      }

      return undefined;
    },
  });

  return {
    locations: data?.pages.flatMap((page) => page.results) || [],
    isError,
    isLoading,
    hasNextPage: !!hasNextPage,
    handleChangeName: setName,
    handleLoadMoreResults,
  };
};
