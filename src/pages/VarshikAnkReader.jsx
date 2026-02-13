import { useEffect, useRef } from "react";
import { PageFlip } from "page-flip";

export default function VarshikAnkReader({ pdfFile }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const pageFlip = new PageFlip(containerRef.current, {
      width: 550,
      height: 780,
      size: "stretch",
      showCover: true,
      mobileScrollSupport: true,
    });

    pageFlip.loadFromPDF(
      `${import.meta.env.BASE_URL}magazines/${pdfFile}`
    );
  }, [pdfFile]);

  return (
    <div style={{ padding: "1rem", textAlign: "center" }}>
      <h1>वार्षिक अंक</h1>
      <div ref={containerRef} />
    </div>
  );
}
