import { Container, ContainerA, ContainerImg, Message } from './style';
import GitHubIcon from "../../assets/icons/svg/Github.svg";
import GitHubIconDark from "../../assets/icons/svg/GithubDark.svg";
import LinkedInIcon from "../../assets/icons/svg/Linkedin.svg";
import Curriculum from "../../assets/icons/svg/Curriculo.svg";
import Email from "../../assets/icons/svg/Email.svg";
import EmailModeDark from "../../assets/icons/svg/EmailModeDark.svg";
import { useContext, useState  } from 'react';
import { ThemeContext } from 'styled-components';
import { useTranslation } from 'react-i18next';

export function SocialBtns(){
  const { t } = useTranslation();
  const { title } = useContext(ThemeContext) || {};
  const gitIcon = title === "dark" ? GitHubIconDark : GitHubIcon;
  const emailIcon = title === "dark" ? EmailModeDark : Email;
  const [message, setMessage] = useState('');
  const [messagePosition, setMessagePosition] = useState({ top: 0, left: 0 });
  const handleMouseEnter = (msg: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    setMessage(msg);
    const { top, left } = event.currentTarget.getBoundingClientRect();
    setMessagePosition({ top: top + 60, left: left });
  };

  const handleMouseLeave = () => {
    setMessage('');
  };

  return(
      <Container>
        <ContainerA  
          href="https://drive.google.com/file/d/1Inv1ynx7WMP7hlLFyNf3DtchBPXYbnAJ/view?usp=sharing"
          target="_blank"
          onMouseEnter={(e) => handleMouseEnter(t("curriculum"), e)}
          onMouseLeave={handleMouseLeave}>
          <ContainerImg id='curriculum' src={Curriculum} alt="Curriculum Vitae"/>
        </ContainerA>

        <ContainerA 
          href="https://www.linkedin.com/in/augusto-souza-72a64b134/" 
          target="_blank"
          onMouseEnter={(e) => handleMouseEnter(t("linkedin"), e)}
          onMouseLeave={handleMouseLeave}>
          <ContainerImg src={LinkedInIcon} alt="Linkedin" />
        </ContainerA>

        <ContainerA 
          href="https://github.com/AugustoDevelop" 
          target="_blank"
          onMouseEnter={(e) => handleMouseEnter(t("github"), e)}
          onMouseLeave={handleMouseLeave}>
          <ContainerImg src={gitIcon} alt="Github"/>
        </ContainerA>

        <ContainerA 
          href="mailto:augustodanieltec@gmail.com"
          target="_blank"
          onMouseEnter={(e) => handleMouseEnter(t("email"), e)}
          onMouseLeave={handleMouseLeave}>
          <ContainerImg src={emailIcon} alt="Email"/>
        </ContainerA>
        {message && <Message style={{ top: messagePosition.top, left: messagePosition.left }}>{message}</Message>}
      </Container>
  )
}