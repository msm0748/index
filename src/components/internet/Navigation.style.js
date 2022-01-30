import styled from "styled-components";
import IconImg from "../../image/icons.png";
export const List = styled.ul`
  padding: 1px 10px;
  display: flex;
  border-bottom: 1px solid #c7c6b9;
`;

export const MenuItem = styled.li`
  ul {
    padding-bottom: 3px;
    li {
      padding-right: 20px;
    }
  }
`;

export const BtnItem = styled.li`
  ul {
    li {
      display: flex;
      position: relative;
      * {
        margin: 10px 5px;
      }
      &:nth-child(-n + 2)::after {
        content: "";
        position: absolute;
        width: 1px;
        top: 5px;
        right: 0;
        bottom: 5px;
        background-color: #c7c6b9;
      }
    }
  }
`;

export const Button = styled.button`
  background: green;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 0.5px solid gray;
  background: radial-gradient(farthest-corner at -60% -60%, white, #b2b2b0);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddressBarItem = styled.li`
  ul li {
    &:first-child {
      color: #a7a7a7;
    }
    &:nth-child(2) {
      background-color: white;
      border: 1px solid gray;
      flex: 2;
      position: relative;
    }
  }
`;
export const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  border: none;
  padding: 1px;
  outline: none;
  font-size: 15px;
  padding: 5px;
`;

export const Icon = styled.i`
  cursor: default;
  padding: 0 2px;
  &::before {
    content: "";
    display: inline-block;
    background-image: url(${IconImg});
    width: 33px;
    height: 35px;
    background-repeat: no-repeat;
  }
`;

export const StopIcon = styled(Icon)`
  &::before {
    background-position: -79px -100px;
    background-size: 200px 380px;
  }
`;

export const ReloadIcon = styled(Icon)`
  &::before {
    background-position: -79px -137px;
    background-size: 200px 380px;
  }
`;

export const HomeIcon = styled(Icon)`
  &::before {
    background-position: -79px -165px;
    background-size: 200px 360px;
  }
`;

export const SearchIcon = styled(Icon)`
  display: flex;
  align-items: center;
  font-style: inherit;
  &::before {
    background-position: -79px -207px;
    background-size: 195px 370px;
  }
`;

export const BookmarkIcon = styled(Icon)`
  display: flex;
  align-items: center;
  font-style: inherit;
  &::before {
    background-position: -72px -223px;
    background-size: 183px 340px;
  }
`;

export const HistoryIcon = styled(Icon)`
  &::before {
    background-position: -78px -264px;
    background-size: 195px 350px;
  }
`;

export const EmailIcon = styled(Icon)`
  &::before {
    background-position: -81px -300px;
    background-size: 195px 350px;
  }
`;

export const FaxIcon = styled(Icon)`
  &::before {
    background-position: -124px -226px;
    background-size: 195px 350px;
  }
`;
