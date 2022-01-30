import { useState, useEffect } from "react";
import * as S from "./Internet.style";
import imgSrc from "../image/internet_explorer.png";
import Head from "./internet/Head";
import Navigation from "./internet/Navigation";
import Body from "./internet/Body";

function Internet() {
  const [isClick, setIsClick] = useState(false);
  const [isDoubleClick, setIsDoubleClick] = useState(false); // internet open and close
  const [fullSize, setFullSize] = useState(false);
  const iconClick = () => {
    setIsClick(!isClick);
    console.log(isClick);
  };
  const iconDoubleClick = () => {
    setIsDoubleClick(true);
  };
  // useEffect(() => {
  //   document.body.addEventListener("click", (e) => {
  //     console.log(e);
  //   });
  // }, []);
  return (
    <>
      <S.Icon isClick={isClick} onClick={iconClick} onDoubleClick={iconDoubleClick}>
        <img src={imgSrc} alt="internet_explorer" />
        <p>네이버 영화 포털</p>
      </S.Icon>
      {isDoubleClick ? (
        <S.Modal fullSize={fullSize} >
          <Head
            setIsDoubleClick={setIsDoubleClick}
            fullSize={fullSize}
            setFullSize={setFullSize}
          />
          <Navigation />
          <Body />
        </S.Modal>
      ) : null}
    </>
  );
}

export default Internet;
