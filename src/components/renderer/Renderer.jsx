import React, { useState, useEffect } from "react";
import { config } from "../../puck/puck.config";
import { Render } from "@puckeditor/core";
import { useNavigate } from "react-router-dom";

export default function Renderer() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("puck-editor-data");
    if (saved) {
      try {
        setData(JSON.parse(saved));
      } catch {
        setData(null);
      }
    }
  }, []);

  if (!data) {
    return <div>No Puck JSON data found in localStorage</div>;
  }

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "1rem",
          borderBottom: "1px solid #ccc",
          cursor: "pointer",
          userSelect: "none",
          fontSize: "1.5rem",
        }}
        onClick={() => navigate("editor")}
        aria-label="Back to editor"
        role="button"
      >
        ← Back to Editor
      </div>

      <div style={{ flex: 1, display: "flex", gap: "20px", padding: "1rem" }}>
        <div
          style={{
            flex: 1,
            border: "1px solid #ccc",
            padding: "1rem",
            overflow: "auto",
          }}
        >
          <Render config={config} data={data} />
        </div>

        <div
          style={{
            flex: 1,
            border: "1px solid #ccc",
            padding: "1rem",
            background: "#f5f5f5",
            overflow: "auto",
            fontFamily: "monospace",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
        >
          {JSON.stringify(data, null, 2)}
        </div>
      </div>
    </div>
  );
}
