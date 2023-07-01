import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-family: "Roboto", "Ubuntu", sans-serif;

    --color-primary: ${props => props.theme.colors.primary};
    --color-secondary: ${props => props.theme.colors.secundary};
    --text-primary: green;
    --text-secondary: red;
    --bg-primary:${props => props.theme.colors.background};
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  html, body {
    max-width: 100vw;
    overflow-x: hidden;
  }
  
  body {
    background: 
    font-size: 14px;
    color: ${props => props.theme.colors.text};
    
  }
`;