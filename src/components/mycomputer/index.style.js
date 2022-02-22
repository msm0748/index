import styled from "styled-components";

import { Rnd } from "react-rnd";

export const Modal = styled(Rnd)`
  z-index: ${({ zindex }) => zindex};
  border: 4px solid #0021ae;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;


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