import { useEffect, useRef } from "react";

function Cmd() {
  const cmdRef = useRef(null);
  useEffect(() => {
    console.log(cmdRef);
    let ani;
    let speed = 0;
    const TEXT = `Microsoft Windows [Version 10.0.10240]
<c>2015 Microsoft Corpoaration. All rights reserved.
C:\WINDOWS\system32>_`;
    function cmdText() {
      ani = requestAnimationFrame(cmdText);
      cmdRef.current.innerHTML += TEXT.charAt(speed);
      if (speed > TEXT.length + 30) {
        cancelAnimationFrame(ani);
        // cmd.style.display = "none";
      }
      speed++;
    }
    cmdText();
  }, []);
  return (
    <div className="cmd">
      <ul className="head">
        <li className="text">C:\Windows\System32\cmd.exe</li>
        <li className="icon">
          <i>_</i>
          <i>ㅁ</i>
          <i>X</i>
        </li>
      </ul>
      <div className="body">
        <pre ref={cmdRef}></pre>
      </div>
    </div>
  );
}

export default Cmd;
