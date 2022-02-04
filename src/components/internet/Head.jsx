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
  internetMove,
  setInternetMove,
}) {
  const handleInternetMoveMouseDown = () => {
    setInternetMove(true);
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
  return (
    <S.List
      onMouseDown={handleInternetMoveMouseDown}
      onMouseUp={handleInternetMoveMouseUp}
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
