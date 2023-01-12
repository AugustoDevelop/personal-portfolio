import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;

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
`;


