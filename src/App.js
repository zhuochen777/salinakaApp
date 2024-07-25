
import './App.css';
import routers from './router';
import { useRoutes } from 'react-router-dom';

function App() {
  const element = useRoutes(routers)
  return (
    <>
    {element}
    </>
  );
}

export default App;
