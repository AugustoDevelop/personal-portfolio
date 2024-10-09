import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-family: "Roboto", "Ubuntu", 'Saira Stencil One', cursive, sans-serif;

    --bg-primary: ${props => props.theme.colors.background};
    --bg-header: ${props => props.theme.colors.backgroundHeader};

    --color-switch: ${props => props.theme.colors.switchColor};

    --text-header: ${props => props.theme.text.header};
    --text-title-color: ${props => props.theme.text.title};
    --text-sub-title-color: ${props => props.theme.text.subTitle};
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
  }
`;