import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { getUsers } from './services/getUsers';
import { UsersResponse } from './interfaces';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<UsersResponse | null>(null);
  const [page, setPage] = useState(data?.page ?? 1);

  useEffect(() => {
    setIsLoading(true);
    const getUserRequest = async () => {
      try {
        const data: UsersResponse = await getUsers(page.toString());
        setData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getUserRequest();
  }, [page]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    <p>No data</p>;
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
      {data?.data?.map((user) => (
        <p key={user.id}>{user.first_name}</p>
      ))}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <button onClick={() => setPage((prev) => prev + 1)}>Show more</button>
    </>
  );
}

export default App;
