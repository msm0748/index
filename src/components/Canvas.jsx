import * as S from "./Canvas.style";
import { useRef, useState, useEffect } from "react";
export default function Canvas() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startXY, setStartXY] = useState({ x: null, y: null });
  const [zindex, setZindex] = useState(""); // z-index 가 없으면 마우스가 아이콘 태그에 있을때 target 값이 변경되어 끊김
  const [offset, setOffset] = useState({ x: null, y: null });
  const [contextmenu, setContextmenu] = useState(false);

  const resize = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "black";
    ctx.setLineDash([3]);
    ctx.lineWidth = 0.5;
    ctxRef.current = ctx;
  };
  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  useEffect(() => {
    function deleteContextmenu() {
      setContextmenu(false);
    }
    window.addEventListener("click", deleteContextmenu);
    return () => {
      window.removeEventListener("click", deleteContextmenu);
    };
  }, []);
  const handleContextmenu = (e) => {
    e.preventDefault();
    const { offsetX, offsetY } = e.nativeEvent;
    setOffset({ x: offsetX, y: offsetY });
    setContextmenu(true);
  };

  const contextmenuPreventDefault = (e) => {
    e.preventDefault();
  };
  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    setStartXY({ x: offsetX, y: offsetY });
    setIsDrawing(true);
  };
  const drawing = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    setZindex(999);
    const { offsetX, offsetY } = nativeEvent;
    ctxRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    ctxRef.current.strokeRect(
      startXY.x,
      startXY.y,
      offsetX - startXY.x,
      offsetY - startXY.y
    );
  };
  const endDrawing = () => {
    ctxRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    setZindex("");
    setIsDrawing(false);
  };

  return (
    <>
      <S.Canvas
        zindex={zindex}
        ref={canvasRef}
        onContextMenu={handleContextmenu}
        onMouseDown={startDrawing}
        onMouseMove={drawing}
        onMouseUp={endDrawing}
      ></S.Canvas>
      {contextmenu ? (
        <S.Contextmenu
          offset={offset}
          onContextMenu={contextmenuPreventDefault}
        >
          <ul>
            <li>
              새 폴더(<u>N</u>)
            </li>
            <li>
              아이콘 정렬 순서(<u>I</u>)
            </li>
            <li>
              새로 고침(<u>E</u>)
            </li>
            <li>
              붙여넣기(<u>P</u>)
            </li>
            <li>
              바로 가기 붙여넣기(<u>S</u>)
            </li>
            <li>
              새로 만들기(<u>W</u>)
            </li>
            <li>속성</li>
          </ul>
        </S.Contextmenu>
      ) : null}
    </>
  );
}
