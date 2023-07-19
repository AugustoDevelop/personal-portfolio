import React, { useState } from 'react';
import Logo from '../../assets/hero-image.png';
import { ContainerAll, ContainerSocial, ContainerShortDesc, ContainerTitle, ContainerImg, ContainerCarroseul, TitleH1, TitleH2, TitleH3 } from './style';
import { SocialBtns } from '../SocialBtns';
import Carrossel from '../Carousel';
import { useTranslation } from 'react-i18next';

const ShortDescription = () => {
  const { t } = useTranslation();
  const currentDate = new Date();
  const referenceDate = new Date("2019-06-01");
  const diffInYears = currentDate.getFullYear() - referenceDate.getFullYear();

  return (
    <ContainerAll>
      <ContainerShortDesc>
        <ContainerTitle>
          <TitleH1>{t("textHi")}</TitleH1>
          <TitleH2>{t("descritionJob")}</TitleH2>
          <TitleH3>{t("experienceSummary1")} {diffInYears} {t("experienceSummary2")}</TitleH3>
          <ContainerSocial><SocialBtns/></ContainerSocial>
        </ContainerTitle>
        <ContainerImg alt={t("altImg")} src={Logo}/>
      </ContainerShortDesc>
    
      <ContainerCarroseul>
        <Carrossel/>
      </ContainerCarroseul>
    </ContainerAll>
  );
};

export default ShortDescription;
