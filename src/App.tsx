import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { getUsers } from './services/getUsers';
import { User, UsersResponse } from './interfaces';

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUserRequest = async () => {
      const data: UsersResponse = await getUsers('1');

      setUsers(data.data);
    };

    getUserRequest();
  }, []);

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
      {users.map((user) => (
        <p key={user.id}>{user.first_name}</p>
      ))}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
