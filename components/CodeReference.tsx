import React from 'react';

export default function CodeReference({ code }: { code: string }) {
  return (
    <div style={{ border: "1px solid #cbd5e1", borderRadius: "8px", margin: "16px 0", backgroundColor: "#f8fafc", overflow: "hidden", boxShadow: "0 1px 2px rgba(0,0,0,0.05)" }}>
      <div style={{ backgroundColor: "#f1f5f9", padding: "10px 16px", borderBottom: "1px solid #cbd5e1", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
        <span style={{ fontWeight: 600, color: "#334155", fontSize: "0.95rem", display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ fontSize: "1.1rem" }}>📄</span> Reference Python Code
        </span>
        <span style={{ fontSize: "0.85rem", color: "#475569", fontWeight: 500 }}>
          👇 Type this into the Python console below
        </span>
      </div>
      <div style={{ padding: "16px", backgroundColor: "#1e293b", overflowX: "auto" }}>
        <pre style={{ margin: 0, fontFamily: "'Consolas', 'Courier New', monospace", fontSize: "0.95rem", color: "#f8fafc", lineHeight: "1.5" }}>
          {code}
        </pre>
      </div>
    </div>
  );
}
