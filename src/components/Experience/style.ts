import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  gap: 20px;
  grid-area: experience;

  p {
    font-weight: 300;
    font-size: 18px;
    line-height: 28px;
    color: var(--text-sub-title-color);
    text-align: center;
  }

  .experience-time {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
  }

  @media (min-width: 800px) {
    align-items: flex-start;

    p {
      font-size: 20px;
      line-height: 36px;
      text-align: start;
    }
  }
  
`;


export const ContainerSkill = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .experience-unit {
    width: 300px;
    height: 30px;
    border-radius: 24px;
    border: 1px solid transparent;
    
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .experience-measure {
      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 24px;
      height: 30px;
      border: 1px solid  linear-gradient(90deg, #777CF4 2.62%, #F47777 93.38%);
      background: linear-gradient(90deg, #777CF4 2.62%, #F47777 93.38%);

      color: var(--text-title-color);
      font-weight: 300;
      text-align: center;
      font-size: 12px;

      &.measure-1 {
        width: 25%;
      }

      &.measure-2 {
        width: 50%;
      }

      &.measure-3 {
        width: 70%;
      }
    }
  }
`;