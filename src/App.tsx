import { useRoutes } from 'react-router-dom';
import rootRouter from './routers';
import '@/App.scss'
import { useEffect } from 'react';
import useTheme from './hooks/theme';

function App() {
  const AppRoutes = () => useRoutes(rootRouter);

  /** 主题修改 */
  const { theme } = useTheme();
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-prefers-color-scheme",
      theme ?? "light"
    );
  }, [theme]);

  return (<><AppRoutes /></>)
}

export default App
