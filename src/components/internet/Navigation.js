
import styles from "./Navigation.module.css";
import { FaArrowLeft } from "react-icons/fa";

export default function Navigation(){
    return(
        <ul className={styles.navigation}>
          <li className={styles.menu_bar}>
            <ul>
              <li>파일(<u>F</u>)</li>
              <li>편집(<u>E</u>)</li>
              <li>보기(<u>V</u>)</li>
              <li>즐겨찾기(<u>A</u>)</li>
              <li>도구(<u>T</u>)</li>
              <li>도움말(<u>H</u>)</li>
            </ul>
          </li>
          <li>
            <ul>
              <li><button className={styles.back_btn}><FaArrowLeft size="20px" color="white" /></button><button class="front_btn"></button></li>
            </ul>
          </li>
          <li className={styles.address_bar}>
            <ul>
              <li>주소(<u>D</u>)</li>
              <li className={styles.address}><input type="text" value="http://ezportfolio.cafe24.com/ez210927/msm/projectA" /></li>
              <li>이동</li>
              <li>연결</li>
            </ul>
          </li>
        </ul>
    );
}