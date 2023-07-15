import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-family: "Roboto", "Ubuntu", sans-serif;

    --bg-primary: ${props => props.theme.colors.background};
    --color-primary: ${props => props.theme.colors.primary};
    --color-secondary: ${props => props.theme.colors.secundary};

    --text-title-color: ${props => props.theme.text.title};
    --text-sub-title-color: ${props => props.theme.text.main};

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
    background: ${props => props.theme.colors.background};
    font-size: 14px;
    color: ${props => props.theme.colors.primary};
  }
`;