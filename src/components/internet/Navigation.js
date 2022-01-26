import styles from "./Navigation.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react/cjs/react.development";

export default function Navigation() {
  const [url, setUrl] = useState(
    "http://ezportfolio.cafe24.com/ez210927/msm/projectA"
  );
  const onChange = (e) => {
    setUrl(e.target.value);
  };
  return (
    <ul className={styles.navigation}>
      <li className={styles.menu_bar}>
        <ul>
          <li>
            파일(<u>F</u>)
          </li>
          <li>
            편집(<u>E</u>)
          </li>
          <li>
            보기(<u>V</u>)
          </li>
          <li>
            즐겨찾기(<u>A</u>)
          </li>
          <li>
            도구(<u>T</u>)
          </li>
          <li>
            도움말(<u>H</u>)
          </li>
        </ul>
      </li>
      <li className={styles.btns}>
        <ul>
          <li>
            <button className={styles.back_btn}>
              <FaArrowLeft size="20px" color="white" />
            </button>
            <button className={styles.front_btn}>
              <FaArrowRight size="20px" color="white" />
            </button>
          </li>
        </ul>
      </li>
      <li className={styles.address_bar}>
        <ul>
          <li>
            주소(<u>D</u>)
          </li>
          <li className={styles.address}>
            <input type="text" value={url} onChange={onChange} />
          </li>
          <li>이동</li>
          <li>연결</li>
        </ul>
      </li>
    </ul>
  );
}
