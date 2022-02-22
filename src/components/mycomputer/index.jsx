import { useState, useEffect } from "react";
import * as S from "./index.style";
import imgSrc from "../../image/my_computer.png";
import Head from "./Head";
import Body from "./Body";
import { useSelector, useDispatch } from "react-redux";

function Mycomputer({ title, src, top, left }) {
  const globalModalzIndexDispatch = useDispatch(); // iframe 때매 창 리사이즈 이벤트 안먹힘 방지 iframe zindex -1 줘서 해결
  const [isClick, setIsClick] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // internet open and close
  const globalModalIndex = useSelector((state) => state.modalzIndex);
  const [zindex, setZindex] = useState(1);

  const handleModalZindex = () => {
    globalModalzIndexDispatch({ type: "MODAL_PLUS" });
    setZindex(globalModalIndex + 1);
  };

  const iconClick = () => {
    setIsClick(!isClick);
  };

  const iconOpen = () => {
    setIsOpen(true);
    setZindex(globalModalIndex + 1);
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
        <img src={imgSrc} alt="My Computer" />
        <p>{title}</p>
      </S.Icon>
      {isOpen ? (
        <S.Modal
          zindex={zindex}
          enableResizing={false}
          size={{ width: 600, height: 500 }}
          dragHandleClassName={"handle"}
          bounds="parent"
          onMouseDown={handleModalZindex}
        >
          <Head setIsOpen={setIsOpen} title={title} />
          <Body />
        </S.Modal>
      ) : null}
    </>
  );
}

export default Mycomputer;
