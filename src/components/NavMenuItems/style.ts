import styled from 'styled-components';

export const NavItems = styled.nav`
  .menu-items {
    position: relative;
    font-size: 14px;
  }
  
  .menu-items a {
    display: block;
    font-size: inherit;
    color: inherit;
    text-decoration: none;
  }
  
  .menu-items button {
    display: flex;
    align-items: center;
    color: inherit;
    font-size: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
    width: 100%;
  }

  button {
    text-transform: capitalize;
  }
  
  button span {
    margin-left: 3px;
  }
  
  .menu-items > a, .menu-items button {
    text-align: left;
    padding: 0.7rem 1rem;
  }
  
  .menu-items a:hover,
  .menu-items button:hover {
    border-bottom: 2px solid var(--color-switch);
  }
  
  .arrow::after {
    content: "";
    display: inline-block;
    margin-left: 0.28em;
    vertical-align: 0.09em;
    border-top: 0.42em solid;
    border-right: 0.32em solid transparent;
    border-left: 0.32em solid transparent;
  }
`;


