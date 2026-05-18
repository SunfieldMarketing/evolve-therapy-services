import { NextResponse } from 'next/server';
import Groq from "groq-sdk";
import fs from 'fs';
import path from 'path';

// Ensure this runs only securely on the server
export async function POST(req: Request) {
  try {
    // If the API key is not set, we can't initialize Groq
    if (!process.env.GROQ_API_KEY) {
      throw new Error("GROQ_API_KEY environment variable is missing.");
    }

    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const { messages } = await req.json();

    // 1. Fetch local knowledge data to inject as context (RAG)
    let knowledgeData = "No external knowledge provided.";
    try {
      const knowledgePath = path.join(process.cwd(), 'public', 'knowledge.json');
      knowledgeData = fs.readFileSync(knowledgePath, 'utf8');
    } catch (e) {
      console.warn("Could not read knowledge.json. Ensure it exists in the public directory.");
    }

    // 2. Build the System Prompt defining the AI's persona and context
    const systemMessage = {
      role: 'system',
      content: `You are the Evolve Clinical Assistant, an expert in therapy management for LTC operators.
Your tone is highly professional, concise, and persuasive. You help operators understand the value of Evolve Therapy Services.

Use the following company knowledge to answer questions accurately:
--- COMPANY KNOWLEDGE ---
${knowledgeData}
-------------------------

Rules:
1. If the user asks a question not covered by the context, state that you'd be happy to connect them with the leadership team for a detailed analysis. Do not invent facts or hallucinate capabilities.
2. Keep your answers relatively concise (under 4-5 sentences unless detail is needed).
3. If the user asks for contact info, recommend scheduling a strategy session and provide the phone number or link to the contact page (/contact).
4. Do not mention that you are reading from a "JSON file" or "context block". Just seamlessly use the knowledge.`
    };

    // 3. Query the Groq model
    const chatCompletion = await groq.chat.completions.create({
      messages: [systemMessage, ...messages],
      model: "llama3-8b-8192", // Fast, highly capable open-source model available on Groq's free tier
      temperature: 0.2,
      max_tokens: 500,
    });

    return NextResponse.json({ 
      text: chatCompletion.choices[0]?.message?.content || "I apologize, I could not generate a response."
    });
  } catch (error: any) {
    console.error("Groq API error:", error);
    return NextResponse.json(
      { error: error.message || 'Failed to process request' },
      { status: 500 }
    );
  }
}
