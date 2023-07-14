import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 32px;
  display: grid;
  gap: 24px;
  justify-items: center;
  grid-template-rows: repeat(4, auto);
  grid-template-areas: 
  "header"
  "btns"
  "experience"
  "info";

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
    grid-area: btns;
    width: 100%;

    .btn-primary {
      background: linear-gradient(90deg, #777CF4 2.62%, #F47777 93.38%);
      border-radius: 24px;
      width: 325px;
      padding: 12px;
      text-align: center;
      text-decoration: none;

      color: var(--text-title-color);
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      text-transform: uppercase;
      border: none;
      
      display: flex;
      align-items: center;
      gap: 20px;
      justify-content: center;
    }
  }

  @media (min-width: 800px){
    padding: 70px 60px;
    height: 100vh;
    grid-template-rows: auto;
    grid-template-columns: 60% 20%;
    align-items: center;
    justify-items: start;
    justify-content: space-between;
    grid-template-areas: 
    "header info"
    "experience btns";
  }
`;