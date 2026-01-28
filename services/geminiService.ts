
import { GoogleGenAI } from "@google/genai";
import { SIRAJ_BIO } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getGeminiResponse = async (userPrompt: string, history: { role: string; parts: { text: string }[] }[]) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: "user", parts: [{ text: userPrompt }] }
      ],
      config: {
        systemInstruction: `
          You are "Siraj's Digital Assistant", a high-tech AI representing Siraj Khan Achakzai.
          Your goal is to answer questions about Siraj professionally and engagingly.
          Use the following biography for context: ${SIRAJ_BIO}
          
          Guidelines:
          - Be polite, futuristic, and helpful.
          - Highlight his skills in Web & AI development.
          - If asked about contact, mention sirajkhanachakzai67@gmail.com.
          - Keep answers concise but informative.
          - If you don't know something, offer to let them contact Siraj directly.
          - Do not use markdown symbols like * or # too heavily, but use them for structure.
        `,
        temperature: 0.8,
        topK: 40,
        topP: 0.9,
      },
    });

    return response.text || "I'm having a small glitch in my neural pathways. Please try asking again!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The AI core is currently recalibrating. Please reach out via email for immediate queries!";
  }
};
