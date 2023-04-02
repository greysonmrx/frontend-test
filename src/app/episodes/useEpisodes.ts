import React from "react";
import { useInfiniteQuery } from "react-query";

import { IEpisode } from "@/models/Episode";

import { useDebounce } from "@/hooks/useDebounce";

import { EpisodesService } from "@/services/EpisodesService";

import { IPagination } from "@/interfaces/IPagination";

interface UseEpisodesData {
  isError: boolean;
  isLoading: boolean;
  hasNextPage: boolean;
  episodes: IEpisode[];
  handleChangeName: (text: string) => void;
  handleLoadMoreResults: () => void;
}

export const useEpisodes = (): UseEpisodesData => {
  const [name, setName] = React.useState<string>();

  const debouncedName = useDebounce(name, 1000);
  const {
    data,
    isError,
    isLoading,
    hasNextPage,
    fetchNextPage: handleLoadMoreResults,
  } = useInfiniteQuery({
    queryKey: ["episodes", debouncedName],
    queryFn: ({ pageParam = 1 }) =>
      EpisodesService.getAll({
        name: debouncedName,
        page: pageParam,
      }),
    getNextPageParam: (lastPage: IPagination<IEpisode>, allPages) => {
      if (lastPage.info.next) {
        return allPages.length + 1;
      }

      return undefined;
    },
  });

  return {
    episodes: data?.pages.flatMap((page) => page.results) || [],
    isError,
    isLoading,
    hasNextPage: !!hasNextPage,
    handleChangeName: setName,
    handleLoadMoreResults,
  };
};
