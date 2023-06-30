import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: ${props => props.theme.colors.primary};
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
    display: inline;
    margin-right: 15px;
  }

  a {
    text-decoration: none;
    color:${props => props.theme.colors.text};
  }

  a:hover {
    color: #fff
  }
  
  div{
    display: flex;
    justify-content: space-between;
  }
  
  .react-toggle-track {
    background-color: var(--color-secondary) !important;
  }

  .react-toggle .react-toggle--checked custom-toggle{
    background-color: var(--color-secondary) !important;
  }

  .react-toggle-track {
    & .react-toggle-track-check {
      & svg {
        color: #000000
      }
    }

    & .react-toggle-track-x{
      & svg {
        color: #000000
      }
    }
  }

  .react-toggle-track-x {
    padding-bottom: 17px;
  }

  #menu {
    display: inline-flex;
    text-transform: capitalize;
    cursor: pointer;
  }
`;


