"use client";

export default function PromptSandbox({ 
  initialPrompt = "", 
  title = "Sample Prompt", 
  apiEndpoint = "",
  showTools = "all"
}: { 
  initialPrompt?: string, 
  title?: string, 
  apiEndpoint?: string,
  showTools?: "all" | "gemini" | "claude" | "none"
}) {
  return (
    <div className="prompt-sandbox" style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", margin: "16px 0", backgroundColor: "#fafafa" }}>
      <h4 style={{ margin: "0 0 8px 0", display: "flex", alignItems: "baseline", flexWrap: "wrap" }}>
        {title}
        {showTools === "none" && (
          <span style={{ fontSize: "0.85rem", fontWeight: "normal", color: "#666", marginLeft: "8px", fontStyle: "italic" }}>
            (use the prompt below in the tool selected above)
          </span>
        )}
      </h4>
      <div
        style={{
          width: "100%",
          boxSizing: "border-box",
          fontFamily: "'Consolas', 'Courier New', monospace",
          fontSize: "0.95rem",
          padding: "16px",
          border: "1px solid #e2e8f0",
          borderRadius: "6px",
          backgroundColor: "#f8fafc",
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
          color: "#334155",
          lineHeight: "1.6",
          overflowX: "auto"
        }}
      >
        {initialPrompt ? initialPrompt.replace(/\\n/g, '\n') : "Enter your prompt here..."}
      </div>
      
      {showTools !== "none" && (
        <div style={{ marginTop: "16px", display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ fontSize: "0.95rem", color: "#333", marginRight: "4px", fontWeight: "bold" }}>Execute on:</span>
          
          {(showTools === "all" || showTools === "gemini") && (
            <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer" 
               style={{ padding: "6px 12px", border: "1px solid #1a73e8", borderRadius: "4px", textDecoration: "none", color: "#1a73e8", backgroundColor: "#e8f0fe", fontWeight: 500, display: "flex", alignItems: "center", gap: "4px" }}>
              Gemini <span style={{ fontSize: "0.8em" }}>↗</span>
            </a>
          )}
          
          {(showTools === "all" || showTools === "claude") && (
            <a href="https://claude.ai/" target="_blank" rel="noopener noreferrer" 
               style={{ padding: "6px 12px", border: "1px solid #d97757", borderRadius: "4px", textDecoration: "none", color: "#d97757", backgroundColor: "#fdf3f0", fontWeight: 500, display: "flex", alignItems: "center", gap: "4px" }}>
              Claude <span style={{ fontSize: "0.8em" }}>↗</span>
            </a>
          )}
          
          {showTools === "all" && (
            <>
              <a href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer" 
                 style={{ padding: "6px 12px", border: "1px solid #10a37f", borderRadius: "4px", textDecoration: "none", color: "#10a37f", backgroundColor: "#e6f6f2", fontWeight: 500, display: "flex", alignItems: "center", gap: "4px" }}>
                ChatGPT <span style={{ fontSize: "0.8em" }}>↗</span>
              </a>
              
              <a href="https://www.perplexity.ai/" target="_blank" rel="noopener noreferrer" 
                 style={{ padding: "6px 12px", border: "1px solid #0f172a", borderRadius: "4px", textDecoration: "none", color: "#0f172a", backgroundColor: "#f1f5f9", fontWeight: 500, display: "flex", alignItems: "center", gap: "4px" }}>
                Perplexity <span style={{ fontSize: "0.8em" }}>↗</span>
              </a>
            </>
          )}
        </div>
      )}
    </div>
  );
}
