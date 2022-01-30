import styled from "styled-components";
import windowImg from "./image/window.jpg";
import lodingImg from "./image/loading.gif";

export const App = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${windowImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  overflow: hidden;
`;
export const Loading = styled.div`
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 100vh;
  background-image: url(${lodingImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
