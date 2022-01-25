import { useState, useEffect, useRef } from "react";
import styles from "./App.module.css";
import Internet from "./components/Internet";
import Canvas from "./components/Canvas";
import Cmd from "./components/Cmd";
function App() {
  const [loading, setLoading] = useState(true);
  const cmdRef = useRef(null);
  useEffect(() => {
    let timer = setTimeout(() => {
      setLoading(false);
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
        console.log(speed);
      }
      cmdText();
    }, 3500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={styles.App}>
      {loading ? <div className={styles.loading}></div> : <Cmd />}
      <Canvas />
      <Internet />
    </div>
  );
}

export default App;
