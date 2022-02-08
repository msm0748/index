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
  const modalHandleClasses = {
    top: "rndTop",
    topRight: "rndTopRight",
    right: "rndRight",
    bottomRight: "rndBottomRight",
    bottom: "rndBottom",
    bottomLeft: "rndBottomLeft",
    left: "rndLeft",
    topLeft: "rndTopLeft",
  };

  const modalResizingState = {
    bottom: !fullSize,
    bottomLeft: !fullSize,
    bottomRight: !fullSize,
    left: !fullSize,
    right: !fullSize,
    top: !fullSize,
    topLeft: !fullSize,
    topRight: !fullSize,
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
        <S.Modal
          zindex={zindex}
          default={modalDefault}
          size={modalSize}
          position={modalPosition}
          resizeHandleClasses={modalHandleClasses}
          enableResizing={modalResizingState}
          minWidth={700}
          minHeight={500}
          // disableDragging={false}
          dragHandleClassName={"handle"}
          bounds="parent"
          onDragStop={(e, d) => {
            if (e.target.nodeName === "UL" || e.target.nodeName === "LI") {
              setModalResizeMove((current) => ({
                ...current,
                x: d.x,
                y: d.y,
              }));
            } // 버튼 이벤트에 전파 방지
          }}
          onResizeStop={(e, direction, ref, delta, position) => {
            setModalResizeMove({
              x: position.x,
              y: position.y,
              width: ref.style.width,
              height: ref.style.height,
            });
          }}
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
        </S.Modal>
      ) : null}
    </>
  );
}

export default Internet;
