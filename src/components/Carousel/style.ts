import styled from "styled-components";

export const CarouselContainer = styled.div`
  margin-left: 2px;
  margin-right: 2px;
  width: 170%;
  z-index: 0;

  h2 {
    color: var(--text-title-color);
  }
`;

export const CarouselItem = styled.div`
  height: 60px;
  width: 30px;
  display: flex;
  flex-direction: row !important;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const CarouselImage = styled.img`
  height: 100%;
  width: auto;
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