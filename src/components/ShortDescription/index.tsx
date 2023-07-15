import { Component } from 'react'
import Logo from '../../assets/hero-image.png';
import { ContainerAll, ContainerSocial, ContainerShortDesc, ContainerTitle, ContainerImg, ContainerCarroseul, TitleH1, TitleH2, TitleH3 } from './style';
import { SocialBtns } from '../SocialBtns';
import Carrossel from '../Carousel';

export default class ShortDescription extends Component {
  
  render() {
    const currentDate = new Date();
    const referenceDate = new Date("2019-06-01");
    const diffInYears = currentDate.getFullYear() - referenceDate.getFullYear();
    return (
      <ContainerAll>

        <ContainerShortDesc>
          <ContainerTitle>
            <TitleH1>Hi, i´m Augusto Daniel! 👋</TitleH1>
            <TitleH2>Software Engineer Full Stack</TitleH2>
            <TitleH3>I have more than {diffInYears} years working as a full stack Software developer, in companies like Accenture, Fundaj and Effetives Sistemas.</TitleH3>
            <ContainerSocial><SocialBtns/></ContainerSocial>
          </ContainerTitle>
          <ContainerImg alt="Photo Augusto" src={Logo}/>
          
        </ContainerShortDesc>
      
        <ContainerCarroseul>
          <Carrossel/>
        </ContainerCarroseul>

      </ContainerAll>
      )
    }
}