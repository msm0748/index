import {useState} from "react";
import styles from "./Internet.module.css";
import imgSrc from "../image/internet_explorer.png";
import Head from "./internet/Head"
import Navigation from "./internet/Navigation"
function Internet() {
  // const [isClick, setIsClick] = useState(false);
  // const iconClick = (e)=> {
  //   console.log(e);
  //   setIsClick(!isClick);
  // }
  return (
  // <div className={isClick ? styles.click : ""} onClick={iconClick}>
  //   <div className={styles.icon}><img src={imgSrc} alt="internet_explorer" /><p>네이버 영화 포털</p></div>
    
  // </div>
    <div>
      <Head />
      <Navigation />
    </div>
  );
}

export default Internet;
