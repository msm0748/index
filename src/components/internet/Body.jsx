import { useSelector } from "react-redux";
import * as S from "./Body.style"

export default function Body({ src, title }) {
  const iframeIndex = useSelector((state) => state.iframezIndex);

  return (
    <S.Body>
        <S.Iframe
          iframeIndex={iframeIndex}
          src={src}
          title={title}
        ></S.Iframe>
    </S.Body>
  );
}
