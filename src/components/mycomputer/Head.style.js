import styled from "styled-components";

export const List = styled.ul`
  padding: 5px 2px 4px 2px;
  display: flex;
  justify-content: space-between;
  background-color: #0056e9;
  overflow: hidden;
  color: white;
  li:last-child {
    display: flex;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1px;
  width: 23px;
  height: 23px;
  border: white 1px solid;
  color: white;
  border-radius: 3px;
  background: radial-gradient(
    farthest-corner at -80% -80%,
    white,
    ${({ red }) => (red ? "red" : "#0d62e8")}
  );
  &:hover {
    background: radial-gradient(
      farthest-corner at -80% -80%,
      white,
      ${({ red }) => (red ? "#fc7f7f" : "#6c9eec")}
    );
  }
  & > * {
    font-size: 15px;
  }
`;
