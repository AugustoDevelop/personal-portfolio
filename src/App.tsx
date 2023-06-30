
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import './App.css'

import GlobalStyle from './styles/Global';

import dark from './styles/themes/dark';
import light from './styles/themes/light';

import usePeristedState from './utils/usePersistedState'

import Contact from './pages/Contact';
import Home from './pages/Home';
import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  
  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light);

  const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <Header toggleTheme={toggleTheme}/>
          <div className="App">
            <GlobalStyle />
          </div>
          <Routes>
            <Route element={<Home toggleTheme={toggleTheme}/>} path="/" />
            <Route element={<About/>} path="/#about" />
            <Route element={<Projects/>} path="/#projects" />
            <Route element={<Contact/>} path="/contact" />
          </Routes>
       </BrowserRouter>
      
    </ThemeProvider>
  );
}

export default App;