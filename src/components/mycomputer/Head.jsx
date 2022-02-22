import * as S from "./Head.style";
import {
  FaTimes
} from "react-icons/fa";

export default function Head({ title, setIsOpen }) {
  const internetClose = () => {
    setIsOpen(false);
  };

  return (
    <S.List className="handle">
      <li>{title}</li>
      <li>
        <S.Button red onClick={internetClose}>
          <FaTimes />
        </S.Button>
      </li>
    </S.List>
  );
}
