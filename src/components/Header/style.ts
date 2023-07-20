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
  
  ul {
    list-style-type: none;
    margin-right: 15px;
    padding: 0;
    overflow: hidden;
  }

  li {
    margin-right: 15px;
  }

  .submenu {
    display: none;
    position: absolute;
    top: 100%;
    z-index: 1;
  }

  .submenu.visible {
    display: block;
  }

  a {
    text-decoration: none;
    color: var(--text-header);
  }
  
  div{
    display: flex;
    justify-content: space-between;
  }
  
  .react-toggle-track {
    background-color: var(---color-switch) !important;
  }

  .react-toggle-track-x {
    padding-bottom: 17px;
  }

  .react-toggle-track {
    & .react-toggle-track-check {
      & svg {
        color: var(--bg-header);
      }
    }

    & .react-toggle-track-x{
      & svg {
        color: var(--bg-header);
      }
    }
  } 

  #menu {
    display: inline-flex;
    text-transform: capitalize;
    cursor: pointer;
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


