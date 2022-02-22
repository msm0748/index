import { useState } from "react";
import imgSrc from "../../image/system.png";
import * as S from "./Body.style"
function TabContent({ clickIndex }) {
    if (clickIndex === 0) {
        return (
            <>
                <div><S.Img src={imgSrc} alt="My Computer" /></div>
                <ul>
                    <li>
                        <h4>시스템:</h4>
                        <S.Info>
                            <p>문석민</p>
                            <p>90.07.17</p>
                            <p>010-4836-6980</p>
                            <br />
                            <p>부일전자디자인고등학교 졸업</p>
                            <p>웹디자인(UI/UX) & 웹퍼블리셔 취업과정 수료</p>
                        </S.Info>
                    </li>
                </ul>
            </>
        )
    } else if (clickIndex === 1) {
        return <div>Tab 2 내용입니다.</div>
    }
}


export default function Body() {
    const [clickIndex, setClickIndex] = useState(0);

    return (
        <S.Body>
            <S.Inner>
                <S.List>
                    <S.Items onClick={() => { setClickIndex(0) }} className={clickIndex === 0? 'active': ''}>소개</S.Items>
                    <S.Items onClick={() => { setClickIndex(1) }} className={clickIndex === 1? 'active': ''}>스킬</S.Items>
                </S.List>
                <S.Contents>
                    <TabContent clickIndex={clickIndex} />
                </S.Contents>
            </S.Inner>
        </S.Body>
    )
}
