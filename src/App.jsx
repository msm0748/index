import { useState, useEffect } from "react";
import Canvas from "./components/Canvas";
import Cmd from "./components/Cmd";
import Internet from "./components/Internet";
import * as S from "./App.style";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  ul{
    list-style: none;
  }

  canvas {
   position: absolute;
  }
`;

export default function App() {
  const [loading, setLoading] = useState(true);
  const [cmdState, setCmdState] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setCmdState(true);
    }, 2000);
  }, []);
  // useEffect(() => {
  //   document.body.addEventListener("click", (e) => {
  //     console.log(e);
  //   });
  // }, []);
  return (
    <S.App>
      <GlobalStyle />
      <Canvas />
      {loading ? <S.Loading /> : null}
      {cmdState ? <Cmd setCmdState={setCmdState} /> : null}
      <Internet />
    </S.App>
  );
}
