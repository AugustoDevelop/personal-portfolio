import { useCallback } from 'react';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import './App.css'

import GlobalStyle from './styles/Global';

import dark from './styles/themes/dark';
import light from './styles/themes/light';

import usePersistedState from './utils/usePersistedState'
import Header from './components/Header';
import MainComponent from './components/MainComponent';
import About from './pages/About/About';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = useCallback((themeValue: string) => {
    setTheme(themeValue === 'light' ? light : dark);
  }, [setTheme]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header toggleTheme={toggleTheme} />
        <div className="App">
          <GlobalStyle />
        </div>
        <Routes>
          <Route element={<MainComponent />} path="/" />
          <Route element={<About />} path="/about" />
          {/* ... (outras rotas) */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
