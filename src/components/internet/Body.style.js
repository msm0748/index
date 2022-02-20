import styled from "styled-components";

export const Body = styled.div`
    width: 100%;
    height: calc(100% - 150px);
`

export const Iframe = styled.iframe`
    position: relative;
    z-index: ${({iframeIndex}) => iframeIndex};
    width: 100%;
    height: 100%;
    border: none;
`