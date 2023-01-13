import { ThemeProvider, DefaultTheme } from 'styled-components';
import { BrowserRouter, Routes,Route  } from "react-router-dom";
import usePeristedState from './utils/usePersistedState'

import light from './styles/themes/light';
import dark from './styles/themes/dark';
import GlobalStyle from './styles/global';

import Header from './components/Header';

import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

const App = () => {
  
  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <Header toggleTheme={toggleTheme}/>
          <div className="App">
            <GlobalStyle />
          </div>
          <Routes>
            <Route element={<Home/>} path="/" />
            <Route element={<About/>} path="/about" />
            <Route element={<Experience/>} path="/experience" />
            <Route element={<Projects/>} path="/projects" />
          </Routes>
       </BrowserRouter>
      
    </ThemeProvider>
  );
}

export default App;