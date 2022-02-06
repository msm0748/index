import { useState, useEffect } from "react";
import * as S from "./Internet.style";
import imgSrc from "../image/internet_explorer.png";
import Head from "./internet/Head";
import Navigation from "./internet/Navigation";
import Body from "./internet/Body";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Internet({ title, src, top, left }) {
  const [isClick, setIsClick] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // internet open and close
  const [fullSize, setFullSize] = useState(false);
  const [internetMove, setInternetMove] = useState(false);
  const [internetTopLeft, setInternetTopLeft] = useState({ x: null, y: null });
  const [internetStartTopLeft, setInternetStartTopLeft] = useState({
    x: null,
    y: null,
  });
  const globalIndex = useSelector((state) => state.zindex);
  const globalIndexDispatch = useDispatch();
  const [zindex, setZindex] = useState(1);
  const handleModalZindex = (e) => {
    globalIndexDispatch({ type: "PLUS" });
    setZindex(globalIndex + 1);
    console.log(e);
  };

  const iconClick = () => {
    setIsClick(!isClick);
  };
  const iconOpen = () => {
    setIsOpen(true);
    setZindex(globalIndex + 1);
  };

  useEffect(() => {
    function windowOffset(e) {
      setInternetTopLeft({
        x: e.clientX - internetStartTopLeft.x,
        y: e.clientY - internetStartTopLeft.y,
      });
    }
    if (internetMove === true && fullSize === false) {
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
        <S.Modal
          onMouseDown={handleModalZindex}
          fullSize={fullSize}
          internetTopLeft={internetTopLeft}
          zindex={zindex}
        >
          <Head
            setInternetMove={setInternetMove}
            setInternetStartTopLeft={setInternetStartTopLeft}
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
