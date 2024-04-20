import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { getUsers } from './services/getUsers';
import { User, UsersResponse } from './interfaces';
import { useInfiniteQuery } from '@tanstack/react-query';

function App() {
  const { isLoading, isError, data, fetchNextPage } =
    useInfiniteQuery<UsersResponse>({
      queryKey: ['users'],
      queryFn: async ({ pageParam }) => await getUsers(pageParam as string),
      getNextPageParam: (lastPage) => lastPage.page + 1,
      initialPageParam: 1,
    });

  const users: User[] = data?.pages?.flatMap((page) => page.data) || [];
  const currentPage = data?.pages[data.pages.length - 1].page;
  const totalPages = data?.pages[data.pages.length - 1].total_pages;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!users.length) {
    <p>There is no users</p>;
  }

  if (isError) {
    return <p>There was an error</p>;
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {users?.map((user) => (
        <p key={user.id}>{user.first_name}</p>
      ))}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <button
        disabled={currentPage === totalPages}
        onClick={async () => await fetchNextPage()}
      >
        Show more
      </button>
    </>
  );
}

export default App;
