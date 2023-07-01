import { Container } from './style';
import GitHubIcon from "../../assets/icons/Github.svg";
import LinkedInIcon from "../../assets/icons/Linkedin.svg";
import Curriculum from "../../assets/icons/Curri.svg";

export function SocialBtns(){
  return(
    <Container>
      <a href="https://github.com/AugustoDevelop" target="_blank">
        <img src={GitHubIcon} alt="Github" width={40} height={40}/>
      </a>

      <a href="https://www.linkedin.com/in/augusto-souza-72a64b134/" target="_blank">
        <img src={LinkedInIcon} alt="Linkedin" width={40} height={40}/>
      </a>

      <a  href="https://drive.google.com/file/d/1Inv1ynx7WMP7hlLFyNf3DtchBPXYbnAJ/view?usp=sharing" target="_blank">
        <img id='curriculum' src={Curriculum} alt="Curriculum" width={40} height={40}/>
      </a>
     
    </Container>
  )
}