import { useSelector } from "react-redux";

export default function Body({ src, title }) {
  const iframeIndex = useSelector((state) => state.iframezIndex);

  return (
    <div style={{ width: "100%", height: "calc(100% - 150px)" }}>
      <iframe
        style={{
          position: "relative",
          zIndex: iframeIndex,
          width: "100%",
          height: "100%",
          border: "none",
        }}
        src={src}
        title={title}
      ></iframe>
    </div>
  );
}
