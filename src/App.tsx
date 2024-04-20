import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useUsers } from './hooks/useUsers';

function App() {
  const { isLoading, isError, users, currentPage, totalPages, fetchNextPage } =
    useUsers();

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

      {currentPage === totalPages ? (
        <p>There is no more users</p>
      ) : (
        <button onClick={async () => await fetchNextPage()}>Show more</button>
      )}
    </>
  );
}

export default App;
