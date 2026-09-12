"use client";

import { useState, useRef, useEffect } from "react";

declare global {
  interface Window {
    loadPyodide: (config: {
      indexURL: string;
      stdout?: (msg: string) => void;
      stderr?: (msg: string) => void;
    }) => Promise<any>;
  }
}

import Script from "next/script";

export default function PyodideRunner({ initialCode = "" }: { initialCode?: string }) {
  const isPlaceholderOrEmpty = initialCode.trim() === "" || initialCode.trim().startsWith("# Type the code below");
  const defaultCode = isPlaceholderOrEmpty ? "" : initialCode;
  const [code, setCode] = useState(defaultCode);
  const placeholderText = "Type the code here";
  
  const [output, setOutput] = useState("");
  const [isReady, setIsReady] = useState(false);
  const pyodideRef = useRef<any>(null);

  const loadPyodideEnvironment = async () => {
    if (window.loadPyodide && !pyodideRef.current) {
      try {
        const pyodide = await window.loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/",
          stdout: (msg: string) => setOutput((prev) => prev + msg + "\n"),
          stderr: (msg: string) => setOutput((prev) => prev + msg + "\n")
        });
        pyodideRef.current = pyodide;
        setIsReady(true);
      } catch (err) {
        console.error("Failed to load Pyodide:", err);
      }
    }
  };

  const runCode = async () => {
    if (!pyodideRef.current) return;
    setOutput(""); // Clear output
    try {
      await pyodideRef.current.runPythonAsync(code);
    } catch (err: any) {
      setOutput((prev) => prev + err.message + "\n");
    }
  };

  return (
    <>
      <Script 
        src="https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js" 
        strategy="lazyOnload" 
        onLoad={loadPyodideEnvironment} 
      />
      <div className="pyodide-runner" style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", margin: "16px 0", backgroundColor: "#fafafa" }}>
        <h4 style={{ margin: "0 0 8px 0" }}>Python Environment</h4>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder={placeholderText}
        style={{ width: "100%", minHeight: "150px", fontFamily: "monospace", padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
      />
      <button 
        onClick={runCode} 
        disabled={!isReady}
        style={{ marginTop: "8px", padding: "8px 16px", backgroundColor: "#6A1B9A", color: "#fff", border: "none", borderRadius: "4px", cursor: isReady ? "pointer" : "not-allowed" }}
      >
        {isReady ? "Run Code" : "Loading Pyodide..."}
      </button>
        {output && (
          <pre style={{ marginTop: "16px", padding: "8px", backgroundColor: "#2d2d2d", color: "#f8f8f2", borderRadius: "4px", whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
            {output}
          </pre>
        )}
      </div>
    </>
  );
}
