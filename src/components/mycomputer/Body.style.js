import styled from "styled-components";
import webImg from "../../image/web.png";

export const Img = styled.img`
  width: 120px;
  height: 120px;
`;

export const FlexDiv = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;

export const HtmlImg = styled.dt`
  width: 50px;
  height: 50px;
  background: url(${webImg});
  background-position: 0px 0px;
  background-repeat: no-repeat;
  background-size: 180px 65px;
`;
export const Desc = styled.dd`
  padding-left: 20px;
`;

export const CssImg = styled.dt`
  width: 50px;
  height: 50px;
  background: url(${webImg});
  background-position: -63px 0px;
  background-repeat: no-repeat;
  background-size: 180px 65px;
`;

export const JsImg = styled.dt`
  width: 50px;
  height: 50px;
  background: url(${webImg});
  background-position: -126px 0px;
  background-repeat: no-repeat;
  background-size: 180px 65px;
`;

export const Info = styled.div`
  margin-top: 5px;
  padding-left: 30px;
`;
export const Body = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 32px);
  background: #edead9;
`;
export const Inner = styled.div`
  padding: 10px;
`;

export const List = styled.ul`
  display: flex;
`;

export const Items = styled.li`
  background: #f5f5f3;
  border: 1px solid #929a9c;
  border-radius: 4px 4px 0 0;
  border-bottom: none;
  padding: 2px 20px 2px 4px;
  margin-right: 1px;
  &.active {
    background: white;
    position: relative;
    z-index: 999;
    top: 1px;
  }
`;

export const Contents = styled.div`
  border: 1px solid #929a9c;
  box-shadow: 3px 3px 4px #d1cfc0;
  display: flex;
  padding: 20px;
  background: white;
  height: 350px;
  & > div {
    flex-grow: 1;
    padding: 20px;
  }
  ul {
    flex-grow: 1;
  }
`;
