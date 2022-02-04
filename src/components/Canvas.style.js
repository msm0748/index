import styled from "styled-components";

export const Canvas = styled.canvas`
  z-index: ${({ zindex }) => zindex};
`;

export const Contextmenu = styled.div`
  position: absolute;
  z-index: 9999;
  top: ${({ offset }) => offset.y}px;
  left: ${({ offset }) => offset.x}px;
  width: 200px;
  box-shadow: 1px 1px 3px gray;
  background: #ffffff;
  ul {
    padding: 3px;
    li {
      padding: 1.5px 10px;
      cursor: default;
      &:hover {
        background: #326bc5;
        color: white;
      }
      &:nth-child(3),
      &:nth-child(5),
      &:nth-child(6) {
        border-bottom: 1px solid #d0cfcc;
      }
      &:nth-child(n + 4):nth-child(-n + 5) {
        color: #c7cdd4;
      }
    }
  }
`;
