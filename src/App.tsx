import { useRoutes } from 'react-router-dom';
import rootRouter from './routers';
import '@/App.scss'

function App() {
  const AppRoutes = () => useRoutes(rootRouter);

  return (<><AppRoutes /></>)
}

export default App
