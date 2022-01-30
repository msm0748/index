import styled from "styled-components";

export const Cmd = styled.div`
  border: 4px solid #f0f4f3;
  width: 700px;
  position: absolute;
  z-index: 99;
  top: 50px;
  left: 50px;
`;

export const Head = styled.ul`
  background: linear-gradient(to right, #0958dc, #5087ca);
  color: white;
  padding: 3px 2px 3px 5px;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  margin: 0 1px;
  width: 20px;
  height: 23px;
  border: none;
`;

export const Body = styled.div`
  background: black;
  overflow-y: scroll;
  height: 400px;
  pre {
    color: gray;
    font-weight: 600;
  }
`;
