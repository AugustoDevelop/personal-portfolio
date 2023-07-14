import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;

  grid-area: info;

  .languages-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 5%;
  }

  .educational-info{
    display: flex;
    align-items: center;
  }

  .iconeGraduated{
    margin-right: 5%;
  }

  span {
    color: var(--text-sub-title-color);
    font-weight: 300;
    font-size: 18px;
    line-height: 28px;
  }

  @media (min-width: 800px) {
    align-items: flex-start;
    
    span {
      font-size: 20px;
      line-height: 36px;
      text-align: start;
    }
  }
`;
