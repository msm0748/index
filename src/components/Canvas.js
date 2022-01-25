import { useRef, useState, useEffect } from "react";
export default function Canvas() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startX, setStartX] = useState({ x: null, y: null });
  const [zindex, setZindex] = useState(""); // z-index 가 없으면 마우스가 아이콘 태그에 있을때 target 값이 변경되어 끊김

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

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    setStartX({ x: offsetX, y: offsetY });
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
      startX.x,
      startX.y,
      offsetX - startX.x,
      offsetY - startX.y
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
    <canvas
      style={{ zIndex: zindex }}
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseMove={drawing}
      onMouseUp={endDrawing}
    ></canvas>
  );
}
