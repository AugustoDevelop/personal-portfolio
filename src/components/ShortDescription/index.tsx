import Logo from '../../assets/hero-image.png';
import { ContainerAll, ContainerSocial, ContainerShortDesc, ContainerTitle, ContainerImg, ContainerCarroseul, TitleH1, TitleH2, TitleH3 } from './style';
import { SocialBtns } from '../SocialBtns';
import Carrossel from '../Carousel';
import { useTranslation } from 'react-i18next';

const ShortDescription = () => {
  const { t } = useTranslation();

  return (
    <>
    <ContainerAll>
      <ContainerShortDesc>
        <ContainerTitle>
          <TitleH1>{t("textHi")}</TitleH1>
          <TitleH2>{t("descritionJob")}</TitleH2>
          <TitleH3>{t("experienceSummary1")}</TitleH3>
          <br/>
          <br/>
          <ContainerSocial>
            <SocialBtns/>
          </ContainerSocial>
        </ContainerTitle>
        <ContainerImg alt={t("altImg")} src={Logo}/>
      </ContainerShortDesc>
    </ContainerAll>
   
    <ContainerCarroseul>
      <Carrossel/>
    </ContainerCarroseul>
  
    </>
    
  );
};

export default ShortDescription;
