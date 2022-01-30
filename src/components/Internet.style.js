import styled from "styled-components";

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
  position: absolute;
  top: 200px;
  left: 500px;
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
  width: 700px;
  height: 500px;
  z-index: 999;
  ${({ fullSize }) => (fullSize ? "width: 100%; height: 100vh;" : "")}
`;