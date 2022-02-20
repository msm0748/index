import styled from "styled-components";
import { Rnd } from "react-rnd";

export const Modal = styled(Rnd)`
  z-index: ${({ zindex }) => zindex};
  border: 4px solid #0021ae;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  .rndTop {
    height: 4px !important;
    top: -4px !important;
    cursor: n-resize !important;
  }
  .rndTopRight {
    width: 8px !important;
    height: 8px !important;
    right: -5px !important;
    top: -5px !important;
  }
  .rndRight {
    width: 4px !important;
    right: -4px !important;
    cursor: e-resize !important;
  }
  .rndBottomRight {
    width: 8px !important;
    height: 8px !important;
    right: -5px !important;
    bottom: -5px !important;
  }
  .rndBottom {
    height: 4px !important;
    bottom: -4px !important;
    cursor: s-resize !important;
  }
  .rndBottomLeft {
    width: 8px !important;
    height: 8px !important;
    left: -5px !important;
    bottom: -5px !important;
  }
  .rndLeft {
    width: 4px !important;
    left: -4px !important;
    cursor: w-resize !important;
  }
  .rndTopLeft {
    width: 8px !important;
    height: 8px !important;
    left: -5px !important;
    top: -5px !important;
  }
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

// export const Modal = styled.div`
//   position: absolute;
//   z-index: ${({ zindex }) => zindex};
//   width: 700px;
//   height: 500px;
//   border: 4px solid #0021AE;
//   border-top-right-radius: 8px;
//   border-top-left-radius: 8px;
//   ${({ fullSize }) =>
//     fullSize ? "width: 100%; height: 100vh; top:0; left:0;" : ""}
// `;
