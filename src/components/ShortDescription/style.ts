import styled from 'styled-components';

export const ContainerAll = styled.div`
  
`;

export const ContainerShortDesc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  gap: 10%;
  height: 100vh;
  width: 100vw;
`;

export const ContainerTitle = styled.div`
  width: 30%;
`;

export const ContainerSocial = styled.div`
  display: flex;
  justify-content: center;
  height: 14vh;
`;

export const ContainerImg = styled.img`
  border-radius: 100%;
  border: 2px solid red;
  height: auto;
  width: 100%;
  max-width: 300px;
  object-fit: cover;
`;

export const TitleH1 = styled.h1`
  font-weight: 600;
  font-size: 34px;
  line-height: 54px;
  color: var(--text-title-color);
`;

export const TitleH2 = styled.h2`
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: var(--text-sub-title-color);
`;

export const TitleH3 = styled.p`
  margin-top: 5%;
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: var(--text-sub-title-color);
  word-wrap: break-word;
`;

export const ContainerCarroseul = styled.div`
  margin-top: 5%;
  text-align: center;
`;