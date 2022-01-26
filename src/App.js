import { useState, useEffect } from "react";
import Canvas from "./components/Canvas";
import Cmd from "./components/Cmd";
import Internet from "./components/Internet";
import Head from "./components/internet/Head";
import styles from "./App.module.css";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [cmdState, setCmdState] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setCmdState(true);
    }, 2000);
  }, []);
  // useEffect(() => {
  //   document.body.addEventListener("click", (e) => {
  //     console.log(e);
  //   });
  // }, []);
  return (
    <div className={styles.App}>
      <Canvas />
      {loading ? <div className={styles.loading}></div> : null}
      {cmdState ? <Cmd setCmdState={setCmdState} /> : null}
      <Internet />
    </div>
  );
}
