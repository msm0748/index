import {
  FaRegWindowMinimize,
  FaRegWindowMaximize,
  FaRegWindowRestore,
  FaTimes,
} from "react-icons/fa";
import styles from "./Head.module.css";

export default function Head({ setIsDoubleClick, fullSize, setFullSize }) {
  const internetClose = () => {
    setIsDoubleClick(false);
  };
  console.log(fullSize);
  const handleFullSize = () => {
    setFullSize(!fullSize);
  };
  return (
    <ul className={styles.head}>
      <li>네이버 영화 포털</li>
      <li className={styles.icons}>
        <button>
          <FaRegWindowMinimize />
        </button>
        <button onClick={handleFullSize}>
          {fullSize ? <FaRegWindowRestore /> : <FaRegWindowMaximize />}
        </button>
        <button onClick={internetClose}>
          <FaTimes />
        </button>
      </li>
    </ul>
  );
}
