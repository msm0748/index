import * as S from "./Head.style";
import {
  FaRegWindowMinimize,
  FaRegWindowMaximize,
  FaRegWindowRestore,
  FaTimes,
} from "react-icons/fa";

export default function Head({
  title,
  setIsOpen,
  fullSize,
  setFullSize,
  setInternetMove,
  setInternetStartTopLeft,
}) {
  const handleInternetMoveMouseDown = (e) => {
    setInternetMove(true);
    const { offsetX, offsetY } = e.nativeEvent;
    setInternetStartTopLeft({ x: offsetX, y: offsetY });
  };
  const handleInternetMoveMouseUp = () => {
    setInternetMove(false);
  };
  const internetClose = () => {
    setIsOpen(false);
  };
  const handleFullSize = () => {
    setFullSize(!fullSize);
  };
  const handleDoubleFullSize = (e) => {
    if (e.target.nodeName === "UL") {
      handleFullSize();
    }
  };
  return (
    <S.List
      onMouseDown={handleInternetMoveMouseDown}
      onMouseUp={handleInternetMoveMouseUp}
      onDoubleClick={handleDoubleFullSize}
    >
      <li>{title}</li>
      <li>
        <S.Button>
          <FaRegWindowMinimize />
        </S.Button>
        <S.Button onClick={handleFullSize}>
          {fullSize ? <FaRegWindowRestore /> : <FaRegWindowMaximize />}
        </S.Button>
        <S.Button red onClick={internetClose}>
          <FaTimes />
        </S.Button>
      </li>
    </S.List>
  );
}
