import { useEffect } from "react";
import * as S from "./Cmd.style";
import {
  FaRegWindowMinimize,
  FaRegWindowMaximize,
  FaTimes,
} from "react-icons/fa";
import Typed from "react-typed";

const textLines = [
  `안녕하세요.<br/>
  프론트엔드 개발자를 꿈꾸는 문석민 입니다.<br/><br/>
  저는 기본이 주는 안정감 보단 새로움이 주는 역동감을 추구합니다.<br/>
  기존의 틀을 깬 이 포트폴리오가 해답이 되길 바랍니다.
  `,
];
export default function Cmd({ setCmdState }) {
  const isClose = () => {
    setCmdState(false);
  };
  useEffect(() => {
    let timer = setTimeout(() => {
      setCmdState(false);
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <S.Cmd>
      <S.Head>
        <li>C:\Windows\System32\cmd.exe</li>
        <li>
          <S.Button>
            <FaRegWindowMinimize />
          </S.Button>
          <S.Button>
            <FaRegWindowMaximize />
          </S.Button>
          <S.Button onClick={isClose}>
            <FaTimes />
          </S.Button>
        </li>
      </S.Head>
      <S.Body>
        <div style={{ color: "white", padding: "5px", lineHeight: "25px" }}>
          <Typed strings={textLines} typeSpeed={30} />
        </div>
      </S.Body>
    </S.Cmd>
  );
}
