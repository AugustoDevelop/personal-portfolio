import React from 'react';
// import { ThemeContext } from 'styled-components';

import { Container } from './style';
import 'react-toggle/style.css';

import Logo from '../../assets/hero-image.png';
// import GitHub from "../../assets/icons/Github.svg";
// import GitHubDark from "../../assets/icons/GithubDark.svg";
// import Linkedin from "../../assets/icons/Linkedin.svg";
// import Curriculum from "../../assets/icons/Curri.svg";
// import Carrossel from '../../components/Carousel';
// import ShortDescription from '../../components/shortDescription';
import MainComponent from '../../components/MainComponent';

interface Props {
  toggleTheme(): void;
}

const HomePage: React.FC<Props> = () => {
  // const { title } = useContext(ThemeContext);
  
  // const githubIcon = title === 'dark' ?  GitHubDark : GitHub;

  return (
    <Container id='home'>
      <Container className="short-description">
        <div>
            <h1>Olá, Eu sou Augusto Daniel 👋</h1>
            <h2>Engenheiro de Software</h2>
        </div>
        <img  className="avatar-home" 
          alt="Foto de Augusto"
          src={Logo} 
          loading="eager" sizes="(max-width: 200px) 100px, 200px"
        />

          <div className="hero__text">
            <h1 className="hero__name">Olá, Me chamo Augusto Daniel</h1>
            <div className="hero__position"><p className='writingText'>Desenvolvedor Fullstack</p></div>
            {/* <ContainerNetworking>
              <a href="https://github.com/AugustoDevelop" target="_blank">
                <img src={githubIcon} alt="Github" />
              </a>

              <a href="https://www.linkedin.com/in/augusto-souza-72a64b134/" target="_blank">
                <img src={Linkedin} alt="Linkedin" />
              </a>

              <a  href="https://drive.google.com/file/d/1Inv1ynx7WMP7hlLFyNf3DtchBPXYbnAJ/view?usp=sharing" target="_blank">
                <img id='curriculum' src={Curriculum} alt="Curriculum" />
              </a>

            </ContainerNetworking> */}
            
          </div>
          
      </Container>
      <MainComponent  />
      
      {/* <Carrossel /> */}
  
    </Container>
  );
};

export default HomePage;
