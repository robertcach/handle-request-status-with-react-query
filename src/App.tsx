import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Users } from './components/Users';

function App() {
  return (
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h1>Vite + React</h1>
      <Users />
    </div>
  );
}

export default App;
