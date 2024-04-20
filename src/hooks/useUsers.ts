import { User, UsersResponse } from '@/interfaces';
import { getUsers } from '../services/getUsers';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useUsers = () => {
  const { isLoading, isError, data, fetchNextPage } =
    useInfiniteQuery<UsersResponse>({
      queryKey: ['users'],
      queryFn: async ({ pageParam }) => await getUsers(pageParam as string),
      getNextPageParam: (lastPage) => lastPage.page + 1,
      initialPageParam: 1,
    });

  const users: User[] = data?.pages?.flatMap((page) => page.data) || [];
  const isLastPage =
    data?.pages[data.pages.length - 1].page ===
    data?.pages[data.pages.length - 1].total_pages;

  return { isLoading, isError, users, isLastPage, fetchNextPage };
};
