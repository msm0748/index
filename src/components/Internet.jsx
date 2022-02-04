import { useState, useEffect } from "react";
import * as S from "./Internet.style";
import imgSrc from "../image/internet_explorer.png";
import Head from "./internet/Head";
import Navigation from "./internet/Navigation";
import Body from "./internet/Body";

function Internet({ title, src, top, left }) {
  const [isClick, setIsClick] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // internet open and close
  const [fullSize, setFullSize] = useState(false);
  const [internetMove, setInternetMove] = useState(false);
  const [internetTopLeft, setInternetTopLeft] = useState({ x: null, y: null });
  const iconClick = () => {
    setIsClick(!isClick);
  };
  const iconOpen = () => {
    setIsOpen(true);
  };
  useEffect(() => {
    function windowOffset(e) {
      e.preventDefault();
      setInternetTopLeft({ x: e.offsetX, y: e.offsetY });
      console.log(internetTopLeft);
    }
    if (internetMove === true) {
      window.addEventListener("mousemove", windowOffset);
    }
    return () => {
      window.removeEventListener("mousemove", windowOffset);
    };
  });
  useEffect(() => {
    function target(e) {
      if (e.target.nodeName === "CANVAS") {
        setIsClick(false);
      }
    }
    document.body.addEventListener("click", target);
    return () => {
      document.body.removeEventListener("click", target);
    };
  }, []);
  return (
    <>
      <S.Icon
        isClick={isClick}
        onClick={iconClick}
        onDoubleClick={iconOpen}
        top={top}
        left={left}
      >
        <img src={imgSrc} alt="internet_explorer" />
        <p>{title}</p>
      </S.Icon>
      {isOpen ? (
        <S.Modal fullSize={fullSize} internetTopLeft={internetTopLeft}>
          <Head
            internetMove={internetMove}
            setInternetMove={setInternetMove}
            setIsOpen={setIsOpen}
            fullSize={fullSize}
            setFullSize={setFullSize}
            title={title}
          />
          <Navigation src={src} />
          <Body src={src} title={title} />
        </S.Modal>
      ) : null}
    </>
  );
}

export default Internet;
