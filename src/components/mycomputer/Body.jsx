import { useState } from "react";
import systemImg from "../../image/system.png";
import reactImg from "../../image/react.png";
import * as S from "./Body.style";
function TabContent({ clickIndex }) {
  if (clickIndex === 0) {
    return (
      <>
        <div>
          <S.Img src={systemImg} alt="My Computer" />
        </div>
        <ul>
          <li>
            <h4>시스템:</h4>
            <S.Info>
              <p>문석민</p>
              <p>90.07.17</p>
              <p>010-4836-6980</p>
              <br />
              <p>부일전자디자인고등학교 졸업</p>
              <p>웹디자인(UI/UX) & 웹퍼블리셔 취업과정 수료</p>
            </S.Info>
          </li>
        </ul>
      </>
    );
  } else if (clickIndex === 1) {
    return (
      <dl>
        <S.FlexDiv>
          <S.HtmlImg />
          <S.Desc>시맨틱 태그 활용 및 검색어 최적화를 할 수 있습니다.</S.Desc>
        </S.FlexDiv>
        <S.FlexDiv>
          <S.CssImg />
          <S.Desc>
            크로스 브라우징을 할 수 있고,
            <br />
            라이브러리를 사용하지 않아도 구현이 가능합니다.
          </S.Desc>
        </S.FlexDiv>
        <S.FlexDiv>
          <S.JsImg />
          <S.Desc>
            대다수의 ES6+ 문법을 활용할 줄 알고,
            <br />
            Promise 기반의 비동기 함수 제어를 할 줄 압니다.
          </S.Desc>
        </S.FlexDiv>
        <S.FlexDiv>
          <dt>
            <img
              src={reactImg}
              alt="react"
              style={{ white: "50px", height: "50px" }}
            />
            <S.Desc></S.Desc>
          </dt>
        </S.FlexDiv>
      </dl>
    );
  }
}

export default function Body() {
  const [clickIndex, setClickIndex] = useState(0);

  return (
    <S.Body>
      <S.Inner>
        <S.List>
          <S.Items
            onClick={() => {
              setClickIndex(0);
            }}
            className={clickIndex === 0 ? "active" : ""}
          >
            정보
          </S.Items>
          <S.Items
            onClick={() => {
              setClickIndex(1);
            }}
            className={clickIndex === 1 ? "active" : ""}
          >
            스킬
          </S.Items>
        </S.List>
        <S.Contents>
          <TabContent clickIndex={clickIndex} />
        </S.Contents>
      </S.Inner>
    </S.Body>
  );
}
