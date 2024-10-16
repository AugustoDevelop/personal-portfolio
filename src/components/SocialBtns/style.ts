import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const ContainerA = styled.a`
  height: 50px;
  width: 50px;
  border: 1px solid transparent;
  border-radius: 100%;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerImg = styled.img`
  width: 150%;
  height: 150%;
`;

export const Message = styled.div`
  color: var(--text-sub-title-color);
  position: absolute;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 8px;
  border-radius: 4px;
  z-index: 2;
`;