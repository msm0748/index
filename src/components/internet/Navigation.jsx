import * as S from "./Navigation.style";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

export default function Navigation() {
  const [url, setUrl] = useState(
    "http://ezportfolio.cafe24.com/ez210927/msm/projectA"
  );
  const onChange = (e) => {
    setUrl(e.target.value);
  };
  return (
    <ul style={{backgroundColor : "#f0f0e8"}}>
      <S.MenuItem>
        <S.List>
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
        </S.List>
      </S.MenuItem>
      <S.BtnItem>
        <S.List>
          <li>
            {/* <S.Icon> */}
              <S.Button>
                <FaArrowLeft size="20px" color="white" />
              </S.Button>
            {/* </S.Icon>
            <S.Icon> */}
              <S.Button>
                <FaArrowRight size="20px" color="white" />
              </S.Button>
            {/* </S.Icon> */}
            <S.StopIcon />
            <S.ReloadIcon />
            <S.HomeIcon />
          </li>
          <li>
            <S.SearchIcon>검색</S.SearchIcon>
            <S.BookmarkIcon>즐겨찾기</S.BookmarkIcon>
            <S.HistoryIcon />
          </li>
          <li>
            <S.EmailIcon></S.EmailIcon>
            <S.FaxIcon />
          </li>
        </S.List>
      </S.BtnItem>
      <S.AddressBarItem>
        <S.List>
          <li>
            주소(<u>D</u>)
          </li>
          <li>
            <S.Input type="text" value={url} onChange={onChange} />
          </li>
          <li>이동</li>
          <li>연결</li>
        </S.List>
      </S.AddressBarItem>
    </ul>
  );
}
