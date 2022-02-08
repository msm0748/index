import { useState, useEffect } from "react";
import { Rnd } from "react-rnd";
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
  const globalIndex = useSelector((state) => state.zindex);
  const globalIndexDispatch = useDispatch();
  const [zindex, setZindex] = useState(1);
  const [modalResizeMove, setModalResizeMove] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const handleModalZindex = () => {
    globalIndexDispatch({ type: "PLUS" });
    setZindex(globalIndex + 1);
  };

  const iconClick = () => {
    setIsClick(!isClick);
  };

  const iconOpen = () => {
    setIsOpen(true);
    setZindex(globalIndex + 1);
  };

  const modalStyle = {
    position: "absolute",
    zIndex: zindex,
    border: "4px solid #0021AE",
    borderTopRightRadius: "8px",
    borderTopLeftRadius: "8px",
  };
  const modalDefault = {
    x: 0,
    y: 0,
    width: 700,
    height: 500,
  };

  const modalSize = fullSize
    ? {
        width: "100%",
        height: "100%",
      }
    : {
        width: modalResizeMove.width,
        height: modalResizeMove.height,
      };
  const modalPosition = fullSize
    ? {
        x: 0,
        y: 0,
      }
    : {
        x: modalResizeMove.x,
        y: modalResizeMove.y,
      };
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
  }, [isClick]);

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
        <Rnd
          style={modalStyle}
          default={modalDefault}
          size={modalSize}
          position={modalPosition}
          onDragStop={(e, d) => {
            if (e.target.nodeName === "UL" || e.target.nodeName === "LI") {
              setModalResizeMove((current) => ({
                ...current,
                x: d.x,
                y: d.y,
              }));
              console.log(e);
            } // 버튼 이벤트에 전파 방지
          }}
          onResizeStop={(e, direction, ref, delta, position) => {
            setModalResizeMove({
              x: position.x,
              y: position.y,
              width: ref.style.width,
              height: ref.style.height,
            });
            // console.log(modalResizeMove);
          }}
          minWidth={700}
          minHeight={500}
          disableDragging={false}
          dragHandleClassName={"handle"}
          bounds="parent"
          onMouseDown={handleModalZindex}
        >
          <Head
            setIsOpen={setIsOpen}
            fullSize={fullSize}
            setFullSize={setFullSize}
            title={title}
          />
          <Navigation src={src} />
          <Body src={src} title={title} />
        </Rnd>
      ) : null}
    </>
  );
}

export default Internet;
