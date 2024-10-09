import styled from "styled-components";

export const CarouselContainer = styled.div`
  z-index: 0;
`;

export const CarouselItem = styled.div`
  height: 70px;
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const CarouselImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const CarouselText = styled.span`
  margin-top: 8px;
  font-size: 12px;
  text-align: center;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--text-sub-title-color);
`;

export const H2Text = styled.h2`
  color: var(--text-sub-title-color);
  margin-bottom: 2%;
`;