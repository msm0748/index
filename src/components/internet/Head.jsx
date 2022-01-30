import * as S from "./Head.style";
import {
  FaRegWindowMinimize,
  FaRegWindowMaximize,
  FaRegWindowRestore,
  FaTimes,
} from "react-icons/fa";

export default function Head({ setIsDoubleClick, fullSize, setFullSize }) {
  const internetClose = () => {
    setIsDoubleClick(false);
  };
  const handleFullSize = () => {
    setFullSize(!fullSize);
  };
  return (
    <S.List>
      <li>네이버 영화 포털</li>
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
