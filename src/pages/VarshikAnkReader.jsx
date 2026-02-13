import { useParams } from "react-router-dom";

export default function VarshikAnkReader() {
  const { year } = useParams();

  const fileMap = {
    "2024": "MMI-Aabha-2024.pdf",
    "2025": "MMI-Aabha-2025.pdf",
  };

  const pdfFile = fileMap[year];

  if (!pdfFile) {
    return <p style={{ padding: "2rem" }}>Magazine not found.</p>;
  }

  return (
    <section style={{ padding: "1rem" }}>
      <h1>वार्षिक अंक {year}</h1>

      <iframe
        title={`MMI Aabha ${year}`}
        src={`${import.meta.env.BASE_URL}magazines/${pdfFile}`}
        width="100%"
        height="800px"
        style={{ border: "none" }}
      />

      <p style={{ marginTop: "1rem", textAlign: "center" }}>
        <a
          href={`${import.meta.env.BASE_URL}magazines/${pdfFile}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          ⬇ Download PDF
        </a>
      </p>
    </section>
  );
}
