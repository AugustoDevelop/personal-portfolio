import { Container, ContainerA, ContainerImg } from './style';
import GitHubIcon from "../../assets/icons/Github.svg";
import GitHubIconDark from "../../assets/icons/GithubDark.svg";
import LinkedInIcon from "../../assets/icons/Linkedin.svg";
import Curriculum from "../../assets/icons/Curri.svg";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export function SocialBtns(){

  const { title } = useContext(ThemeContext);

  const gitIcon = title === "dark" ? GitHubIconDark : GitHubIcon;

  return(
    <Container>
      <ContainerA href="https://github.com/AugustoDevelop" target="_blank">
        <ContainerImg src={gitIcon} alt="Github"/>
      </ContainerA>

      <ContainerA href="https://www.linkedin.com/in/augusto-souza-72a64b134/" target="_blank">
        <ContainerImg src={LinkedInIcon} alt="Linkedin" />
      </ContainerA>

      <ContainerA  href="https://drive.google.com/file/d/1Inv1ynx7WMP7hlLFyNf3DtchBPXYbnAJ/view?usp=sharing" target="_blank">
        <ContainerImg id='curriculum' src={Curriculum} alt="Curriculum"/>
      </ContainerA>
     
    </Container>
  )
}