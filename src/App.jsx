import './App.css'

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
            <Route element={<Experience/>} path="/#experience" />
            <Route element={<Projects/>} path="/#projects" />
            <Route element={<Contact/>} path="/contact" />
          </Routes>
       </BrowserRouter>
      
    </ThemeProvider>
  );
}

export default App
