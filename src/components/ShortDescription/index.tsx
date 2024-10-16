import Logo from '../../assets/image/hero-image.png';
import { ContainerAll, ContainerSocial, ContainerShortDesc, ContainerTitle, ContainerImg, ContainerCarroseul, TitleH1, TitleH3, StyledLink, Action } from './style';
import { SocialBtns } from '../SocialBtns';
import Carrossel from '../Carousel';
import { useTranslation } from 'react-i18next';
import CookieBanner from '../Cookies/CookiesMessage';

const ShortDescription = () => {
  const { t } = useTranslation();
  return (
    <>
      <ContainerAll>
      <ContainerShortDesc>
        <ContainerTitle>
          <TitleH1>{t("textHi")}</TitleH1>
          <TitleH3>{t("experienceSummary1")}</TitleH3>
          <br/>
          <ContainerSocial>
            <SocialBtns/>
          </ContainerSocial>
          <br/>
          <Action>
            <StyledLink to="/contact"> {t("moreContacts")} </StyledLink> 
            <StyledLink to="/about"> {t("moreAbout")} </StyledLink> 
            <StyledLink to="/projects"> {t("portifolio")} </StyledLink> 
          </Action>
        </ContainerTitle>
        <ContainerImg alt={t("altImg")} src={Logo}/>
      </ContainerShortDesc>

      <ContainerCarroseul>
        <Carrossel/>
      </ContainerCarroseul>
    </ContainerAll>
    
    <footer>
      <CookieBanner />  
    </footer>
    </>
  
  );
};

export default ShortDescription;
