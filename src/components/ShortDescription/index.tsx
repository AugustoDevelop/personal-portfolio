import Logo from '../../assets/image/hero-image.png';
import { ContainerAll, ContainerSocial, ContainerShortDesc, ContainerTitle, ContainerImg, ContainerCarroseul, TitleH1, TitleH2, TitleH3 } from './style';
import { SocialBtns } from '../SocialBtns';
import Carrossel from '../Carousel';
import { useTranslation } from 'react-i18next';
import CookieBanner from '../Cookies/CookiesMessage';
import { Link } from "react-router-dom";

const ShortDescription = () => {
  const { t } = useTranslation();
  return (
    <>
      <ContainerAll>
      <ContainerShortDesc>
        <ContainerTitle>
          <TitleH1>{t("textHi")}</TitleH1>
          <TitleH2>{t("descriptionJob")}</TitleH2>
          <TitleH3>{t("experienceSummary1")}</TitleH3>
          <br/>
          <ContainerSocial>
            <SocialBtns/>
          </ContainerSocial>
          <Link to="/contact"
          style={{
            textDecoration: "none",
            fontSize: "12px"
          }}> {t("moreContacts")} </Link>
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
