import styled from "styled-components";

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  img {
    width: 50px;
    height: 50px;
  }
  p {
    margin-top: 5px;
    font-size: 14px;
    color: white;
    text-shadow: 2px 2px 2px rgb(0 0 0 / 60%);
  }
  ${({ isClick }) =>
    isClick
      ? "background-color: rgba(221, 221, 221, 0.5); outline: 1px solid #c1c1c1;"
      : ""};
`;

export const Modal = styled.div`
  position: absolute;
  z-index: 1;
  top: ${({ internetTopLeft }) => (internetTopLeft ? internetTopLeft.y : 0)}px;
  left: ${({ internetTopLeft }) => (internetTopLeft ? internetTopLeft.x : 0)}px;
  width: 700px;
  height: 500px;
  border: 4px solid #0258ed;
  ${({ fullSize }) =>
    fullSize ? "width: 100%; height: 100vh; top:0; left:0;" : ""}
`;
