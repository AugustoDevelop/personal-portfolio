import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: var(--bg-header);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  z-index: 1;

  .menu {
    display: inline-flex;
    text-transform: capitalize;
    cursor: pointer;
  }

  .logo{
    font-family: 'Saira Stencil One', cursive;
    
    text-decoration: none;

    h1, span {
      font-size: 2rem !important;
    }

    span {
      color: var(--color-switch);
    }

    h1 {
      color: var(--text-header);
    }
  }
  

`;

export const Nav = styled.nav`
  .menus {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    list-style: none;
  }

  z-index: 10;
`;

