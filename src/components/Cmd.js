import { useRef, useState, useEffect } from 'react';
import { FaRegWindowMinimize, FaRegWindowMaximize, FaTimes } from "react-icons/fa";
import style from './Cmd.module.css';

export default function Cmd({ setCmdState }) {
  const [text, setText] = useState('');
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
    <div className={style.cmd}>
      <ul className={style.head}>
        <li>C:\Windows\System32\cmd.exe</li>
        <li className={style.icons}>
          <button><FaRegWindowMinimize/></button>
          <button><FaRegWindowMaximize/></button>
          <button><FaTimes /></button>
        </li>
      </ul>
      <div className={style.body}>
        <pre>{text}</pre>
      </div>
    </div>
  );
}
