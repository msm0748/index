import { FaRegWindowMinimize, FaRegWindowMaximize, FaTimes } from "react-icons/fa";
import styles from "./Head.module.css";

export default function Head(){
    return (
    <ul className={styles.head}>
        <li>네이버 영화 포털</li>
        <li className={styles.icons}>
            <button><FaRegWindowMinimize /></button>
            <button><FaRegWindowMaximize /></button>
            <button><FaTimes /></button>
        </li>
    </ul>
    );
}