import { GoogleGenAI } from "@google/genai";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      // Mock streaming response
      const encoder = new TextEncoder();
      const mockText = "This is a mock streaming response because GEMINI_API_KEY is not set. Here is the response to your prompt: " + prompt;
      
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

    const ai = new GoogleGenAI({ apiKey });
    
    // Using streaming with the new SDK
    const responseStream = await ai.models.generateContentStream({
      model: "gemini-3.6-flash",
      contents: prompt,
    });

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of responseStream) {
            if (chunk.text) {
              controller.enqueue(encoder.encode(chunk.text));
            }
          }
        } catch (e) {
          console.error("Stream error:", e);
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
