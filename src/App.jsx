import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store/internet";
import Canvas from "./components/Canvas";
import Cmd from "./components/Cmd";
import Internet from "./components/internet/index";
import Mycomputer from "./components/mycomputer";
import * as S from "./App.style";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    user-select: none;
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
    if (window.location.protocol === "https:") {
      window.location.href = window.location.href.replace("https:", "http:");
    } //학원페이지가 https 일 경우 kmdb api요청 안되서 http로 변환
  },[])
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
    <Provider store={store}>
      <S.App>
        <GlobalStyle />
        <Canvas />
        {loading && <S.Loading />}
        {cmdState && <Cmd setCmdState={setCmdState} />}
        {!loading && (
          <>
            <Internet
              title="네이버 영화"
              src="http://ezportfolio.cafe24.com/ez210927/msm/projectA"
              top="200"
              left="200"
            />
            <Internet
              title="피해보새 게임"
              src="https://ezportfolio.cafe24.com/ez210927/msm/projectB"
              top="200"
              left="400"
            />
            <Mycomputer
              title="내 컴퓨터"
              top="100"
              left="100"
            />
          </>
        )}
      </S.App>
    </Provider>
  );
}
