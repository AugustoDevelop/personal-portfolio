import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-family: "Roboto", "Ubuntu", sans-serif;

    --color-primary: ${props => props.theme.colors.secundary};
    --color-secondary: ${props => props.theme.colors.secundary};
    
    
    --step--2: clamp(0.56rem, calc(0.73rem + -0.19vw), 0.69rem);
    --step--1: clamp(0.75rem, calc(0.86rem + -0.12vw), 0.83rem);
    --step-0: clamp(1rem, calc(1rem + 0vw), 1rem);
    --step-1: clamp(1.2rem, calc(1.16rem + 0.19vw), 1.33rem);
    --step-2: clamp(1.44rem, calc(1.34rem + 0.48vw), 1.78rem);
    --step-3: clamp(1.73rem, calc(1.55rem + 0.92vw), 2.37rem);
    --step-4: clamp(2.07rem, calc(1.76rem + 1.55vw), 3.16rem);
    --step-5: clamp(2.49rem, calc(2rem + 2.46vw), 4.21rem);

    --space-3xs: clamp(0.19rem, calc(0.17rem + 0.09vw), 0.25rem);
    --space-2xs: clamp(0.38rem, calc(0.34rem + 0.18vw), 0.5rem);
    --space-xs: clamp(0.56rem, calc(0.51rem + 0.27vw), 0.75rem);
    --space-s: clamp(0.75rem, calc(0.68rem + 0.36vw), 1rem);
    --space-m: clamp(1.13rem, calc(1.02rem + 0.54vw), 1.5rem);
    --space-l: clamp(1.5rem, calc(1.36rem + 0.71vw), 2rem);
    --space-xl: clamp(2.25rem, calc(2.04rem + 1.07vw), 3rem);
    --space-2xl: clamp(3rem, calc(2.71rem + 1.43vw), 4rem);
    --space-3xl: clamp(4.5rem, calc(4.07rem + 2.14vw), 6rem);

    --space-3xs-2xs: clamp(0.19rem, calc(0.1rem + 0.45vw), 0.5rem);
    --space-2xs-xs: clamp(0.38rem, calc(0.27rem + 0.54vw), 0.75rem);
    --space-xs-s: clamp(0.56rem, calc(0.44rem + 0.63vw), 1rem);
    --space-s-m: clamp(0.75rem, calc(0.54rem + 1.07vw), 1.5rem);
    --space-m-l: clamp(1.13rem, calc(0.88rem + 1.25vw), 2rem);
    --space-l-xl: clamp(1.5rem, calc(1.07rem + 2.14vw), 3rem);
    --space-xl-2xl: clamp(2.25rem, calc(1.75rem + 2.5vw), 4rem);
    --space-2xl-3xl: clamp(3rem, calc(2.14rem + 4.29vw), 6rem);

    --space-xl-3xl: clamp(2.25rem, calc(1.18rem + 5.36vw), 6rem);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: ${props => props.theme.colors.background};
    font-size: 14px;
    color: ${props => props.theme.colors.text};
    
  }
`;