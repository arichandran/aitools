"use client";

import { useState } from "react";

import ReactMarkdown from 'react-markdown';

export default function PromptSandbox({ initialPrompt = "", title = "Prompt Sandbox", apiEndpoint = "/api/gemini" }: { initialPrompt?: string, title?: string, apiEndpoint?: string }) {
  const [prompt, setPrompt] = useState(initialPrompt);
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!prompt.trim()) return;
    setIsLoading(true);
    setResponse("");
    
    try {
      const res = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      
      if (!res.body) throw new Error("No response body");
      
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let done = false;
      
      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          setResponse((prev) => prev + decoder.decode(value, { stream: true }));
        }
      }
    } catch (err: any) {
      setResponse(`Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="prompt-sandbox" style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", margin: "16px 0", backgroundColor: "#fafafa" }}>
      <h4 style={{ margin: "0 0 8px 0" }}>{title}</h4>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here..."
        style={{ width: "100%", minHeight: "80px", fontFamily: "inherit", padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
      />
      <button 
        onClick={handleSubmit} 
        disabled={isLoading}
        style={{ marginTop: "8px", padding: "8px 16px", backgroundColor: "#D32F2F", color: "#fff", border: "none", borderRadius: "4px", cursor: isLoading ? "not-allowed" : "pointer" }}
      >
        {isLoading ? "Generating..." : "Submit Prompt"}
      </button>
      {response && (
        <div style={{ marginTop: "16px", padding: "16px", backgroundColor: "#fff", border: "1px solid #eee", borderRadius: "4px" }}>
          <strong>Response:</strong>
          <div className="sandbox-response" style={{ marginTop: "8px" }}>
            <ReactMarkdown>{response}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
}
