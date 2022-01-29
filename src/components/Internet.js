import { useState, useEffect } from "react";
import styles from "./Internet.module.css";
import imgSrc from "../image/internet_explorer.png";
import Head from "./internet/Head";
import Navigation from "./internet/Navigation";
import Body from "./internet/Body";
function Internet() {
  const [isClick, setIsClick] = useState(false);
  const [isDoubleClick, setIsDoubleClick] = useState(false); // internet open and close
  const [fullSize, setFullSize] = useState(false);
  const iconClick = () => {
    setIsClick(!isClick);
  };
  const iconDoubleClick = () => {
    setIsDoubleClick(true);
  };
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      console.log(e);
    });
  }, []);
  return (
    <>
      <div
        className={styles.icon + (isClick ? " " + styles.click : "")}
        onClick={iconClick}
        onDoubleClick={iconDoubleClick}
      >
        <img src={imgSrc} alt="internet_explorer" />
        <p>네이버 영화 포털</p>
      </div>
      {isDoubleClick ? (
        <div
          className={styles.modal + (fullSize ? " " + styles.full__size : "")}
        >
          <Head
            setIsDoubleClick={setIsDoubleClick}
            fullSize={fullSize}
            setFullSize={setFullSize}
          />
          <Navigation />
          <Body />
        </div>
      ) : null}
    </>
  );
}

export default Internet;
