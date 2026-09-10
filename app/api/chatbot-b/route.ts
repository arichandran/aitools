export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    const apiKey = process.env.CHATBOT_B_API_KEY;

    if (!apiKey) {
      // Mock streaming response
      const encoder = new TextEncoder();
      const mockText = "This is Chatbot B. To use a real second model (like Groq), add CHATBOT_B_API_KEY to your .env.local file. Your prompt was: " + prompt;
      
      const stream = new ReadableStream({
        async start(controller) {
          const words = mockText.split(" ");
          for (const word of words) {
            controller.enqueue(encoder.encode(word + " "));
            await new Promise(r => setTimeout(r, 50)); // simulate delay
          }
          controller.close();
        }
      });
      return new Response(stream, { headers: { "Content-Type": "text/plain" } });
    }

    // Example Groq native fetch (no SDK required)
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "qwen/qwen3.8-27b", // Model explicitly available to this API key
        messages: [{ role: "user", content: prompt }],
        stream: true
      })
    });

    if (!response.ok) {
      const errBody = await response.text();
      throw new Error(`Groq API error: ${response.status} ${response.statusText} - ${errBody}`);
    }

    const encoder = new TextEncoder();
    const decoder = new TextDecoder();
    
    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body?.getReader();
        if (!reader) {
          controller.close();
          return;
        }
        
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            
            const chunk = decoder.decode(value);
            const lines = chunk.split('\n').filter(line => line.trim() !== '');
            
            for (const line of lines) {
              if (line === 'data: [DONE]') {
                 return;
              }
              if (line.startsWith('data: ')) {
                try {
                  const data = JSON.parse(line.slice(6));
                  if (data.choices && data.choices[0].delta && data.choices[0].delta.content) {
                    controller.enqueue(encoder.encode(data.choices[0].delta.content));
                  }
                } catch (e) {
                  // Ignore parse errors on partial chunks
                }
              }
            }
          }
        } finally {
          controller.close();
        }
      }
    });

    return new Response(stream, { headers: { "Content-Type": "text/plain" } });

  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
