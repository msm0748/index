import { useState, useEffect } from "react";
import Canvas from "./components/Canvas";
import Cmd from "./components/Cmd";
import Internet from "./components/Internet";
import * as S from "./App.style";
import { createGlobalStyle } from "styled-components";
import InternetStore from "./store/internet";
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
    let timer = setTimeout(() => {
      setLoading(false);
      setCmdState(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <S.App>
      <GlobalStyle />
      <Canvas />
      {loading ? <S.Loading /> : null}
      {cmdState ? <Cmd setCmdState={setCmdState} /> : null}
      <InternetStore>
        <Internet
          title="네이버 영화"
          src="http://ezportfolio.cafe24.com/ez210927/msm/projectA"
          top="200"
          left="200"
        />
      </InternetStore>
      <InternetStore>
        <Internet
          title="피해보새 게임"
          src="https://ezportfolio.cafe24.com/ez210927/msm/projectB"
          top="200"
          left="400"
        />
      </InternetStore>
    </S.App>
  );
}
