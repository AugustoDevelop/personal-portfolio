import { Link } from "react-router-dom";
import styled from 'styled-components';

export const Session = styled.section`

`;

export const Container = styled.div`
  z-index: 1;

  .hero__flex {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
  }

  .hero__image {
    max-height: 400px;
    max-width: 400px;
    box-shadow: 2px -4px 0 4px ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.primary};
    border-radius: 100%;
  

    @media (max-width: 960px) {
      & {
        max-height: 160px;
        max-width: 160px;
      }
    }
  }

  .hero__text {
    display: grid;
    text-align: center;
    align-content: center;
    line-height: 1.5;
  }

  .hero__name {
    font-size: var(--step-4);
  }

  .hero__position {
    justify-content: center;
    display: flex;
    font-size: var(--step-3);
    margin-top: var(--space-xs);
    margin-bottom: var(--space-m);
  }

  .writingText{
    border-right: 2px solid #000;
    padding-right: 3px;
    width: 20ch;
    white-space: nowrap;
    overflow: hidden;
    animation:blinking infinite .8s, writing 1.5s steps(19) both;
  }

  @keyframes blinking {
    50% {
      border-color: transparent;
    }
  }

  @keyframes writing {
    from {
      width: 0;
    }
  }

  .hero__button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .botoes-home{
    margin-top: 30px;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .contact {
    text-decoration: none;
    color: white;
    background-color:  ${props => props.theme.colors.primary};
    height: 50px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    border-radius: 6px;
    border: 1px solid white;

  }

  .contact:hover{
    color: black;
    background-color: ${props => props.theme.colors.secundary};
    transition: 0.5s;
  }

  
`;

export const Button = styled(Link)`
  color: #BF4F74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  display: block;
  width: 200px;
  height: 60px;
  border: 2px solid ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.secundary};
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${props => props.theme.colors.primary}
  }
`;

export const ContainerNetworking = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: auto;
  a {
    display: flex;
    align-items: center;
  }

  img{
    max-width: 80px;
    width: auto;
    height: auto;
  }

  #curriculum {
    max-height: 70%;
    height: auto;
  }
`;
