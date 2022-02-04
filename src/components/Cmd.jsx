import { useState, useEffect } from "react";
import * as S from "./Cmd.style";
import {
  FaRegWindowMinimize,
  FaRegWindowMaximize,
  FaTimes,
} from "react-icons/fa";

export default function Cmd({ setCmdState }) {
  const [text, setText] = useState("");

  useEffect(() => {
    const TEXT = `Microsoft Windows [Version 10.0.10240]
<c>2015 Microsoft Corpoaration. All rights reserved.
C:\WINDOWS\system32>_`;
    let ani;
    let speed = 0;
    function cmdText() {
      ani = requestAnimationFrame(cmdText);
      setText((current) => current + TEXT.charAt(speed));
      if (speed > TEXT.length + 30) {
        cancelAnimationFrame(ani);
        setCmdState(false); // 부모의 state값 전달받아 변경
      }
      speed++;
    }
    cmdText();
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
          <S.Button>
            <FaTimes />
          </S.Button>
        </li>
      </S.Head>
      <S.Body>
        <pre>{text}</pre>
      </S.Body>
    </S.Cmd>
  );
}
