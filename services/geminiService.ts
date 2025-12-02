import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

let aiClient: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!aiClient) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("API_KEY not found in environment variables.");
      return null;
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

export const sendMessageToGemini = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  const client = getAiClient();
  if (!client) {
    return "我现在处于离线状态（缺少 API 密钥）。请通过邮件联系我。";
  }

  try {
    // We construct a chat session. In a real app, we would persist the Chat object.
    // For this stateless service function, we reconstruct context or just use generateContent for simplicity if history is short,
    // but best practice is using chat model.
    
    const model = "gemini-2.5-flash";
    const chat = client.chats.create({
        model,
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
        },
        history: history.map(h => ({
            role: h.role,
            parts: h.parts
        }))
    });

    const response: GenerateContentResponse = await chat.sendMessage({
      message: message,
    });

    return response.text || "收到了空回复。";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "连接神经网络时出现问题，请稍后再试。";
  }
};