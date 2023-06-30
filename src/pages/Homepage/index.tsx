import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Container, ContainerNetworking, Session } from './style';
import 'react-toggle/style.css';

import Logo from '../../assets/hero-image.png';
import GitHub from "../../assets/icons/github.svg";
import GitHubDark from "../../assets/icons/githubDark.svg";
import Linkedin from "../../assets/icons/linkedin.svg";
import Curriculum from "../../assets/icons/Curri.svg";
import Carrossel from '../../components/Carousel';
import About from '../About';
import Contact from '../Contact';
import Projects from '../Projects';

interface Props {
  toggleTheme(): void;
}

const HomePage: React.FC<Props> = () => {
  const { title } = useContext(ThemeContext);
  
  const githubIcon = title === 'dark' ?  GitHubDark : GitHub;

  return (
    <Container className="hero" id='home'>
      <Session className="hero__flex">
      <img  alt="Foto de Augusto"
          src={Logo} 
          loading="eager" sizes="(max-width: 200px) 100px, 200px"
          className="hero__image"/>

          <div className="hero__text">
            <h1 className="hero__name">Olá, Me chamo Augusto Daniel</h1>
            <div className="hero__position"><p className='writingText'>Desenvolvedor Fullstack</p></div>
            <ContainerNetworking>
              <a href="https://github.com/AugustoDevelop" target="_blank">
                <img src={githubIcon} alt="Github" />
              </a>

              <a href="https://www.linkedin.com/in/augusto-souza-72a64b134/" target="_blank">
                <img src={Linkedin} alt="Linkedin" />
              </a>

              <a  href="https://drive.google.com/file/d/1Inv1ynx7WMP7hlLFyNf3DtchBPXYbnAJ/view?usp=sharing" target="_blank">
                <img id='curriculum' src={Curriculum} alt="Curriculum" />
              </a>

            </ContainerNetworking>
            
          </div>
          
      </Session>
      <Carrossel />
      <About />
      <Contact />
      <Projects />
  
    </Container>
  );
};

export default HomePage;
