export default function Body({ src, title }) {
  //iframe click 이벤트를 위한 zindex 추가
  return (
    <div style={{ width: "100%", height: "calc(100% - 150px)" }}>
      <iframe
        style={{
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
