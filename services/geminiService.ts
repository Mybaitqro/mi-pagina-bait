import { GoogleGenAI } from "@google/genai";

export interface AIResponse {
  text: string;
  sources?: { title: string; uri: string }[];
}

export const getRecommendation = async (userPrompt: string): Promise<AIResponse> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Eres el asesor experto de "Bait Querétaro". 
      Tu objetivo es ayudar a clientes interesados en telefonía Bait.
      Contexto:
      - SIMs/eSIMs a $100 MXN.
      - Planes: $100 (15 días, 10GB), $200 (30 días, 20GB), $300 (30 días, 30GB).
      - Crédito PayJoy disponible solo con INE.
      
      Si el usuario pregunta por COBERTURA en una zona específica de Querétaro o México, usa tu herramienta de búsqueda para confirmar si hay señal 4.5G.
      
      Instrucciones:
      - Sé amable y usa emojis. ⚡️
      - Si usas información de búsqueda, menciona que es información actualizada.
      
      Pregunta del cliente: "${userPrompt}"`,
      config: {
        tools: [{ googleSearch: {} }]
      }
    });

    const text = response.text || "Lo siento, no pude procesar tu solicitud.";
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    
    const sources = groundingChunks?.map((chunk: any) => ({
      title: chunk.web?.title || "Fuente de información",
      uri: chunk.web?.uri || "#"
    })).filter((s: any) => s.uri !== "#");

    return { text, sources };
  } catch (error) {
    console.error("Error en el servicio de IA:", error);
    return { 
      text: "¡Hola! Por el momento tengo mucha demanda, pero envíanos un WhatsApp y un asesor humano te ayudará de inmediato. 📲" 
    };
  }
};