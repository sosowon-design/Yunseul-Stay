import { GoogleGenAI, Type } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

// Lazy initialization and safe error handling
const getAiClient = () => {
  if (!apiKey) return null;
  try {
    return new GoogleGenAI({ apiKey });
  } catch {
    return null;
  }
};

export const getTravelItinerary = async (query: string, _location: { lat: number, lng: number } | null) => {
  const ai = getAiClient();
  if (!ai) {
    return "헌화로 바다를 따라 펼쳐지는 금진 해변과 정동심곡 바다부채길, 그리고 인근 오션뷰 카페들을 여유롭게 산책해 보세요.";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: `사용자가 강릉 헌화로 '윤슬' 숙소 근처 여행에 대해 묻습니다: "${query}". 
      숙소 위치: 강원도 강릉시 옥계면 헌화로 456 바다 앞.
      주변의 카페, 정동진, 동해 맛집, 산책로 등을 포함하여 친절하고 감성적인 톤으로 동선을 짜주세요.
      마크다운 형식을 사용하세요.`,
      config: {
        systemInstruction: "너는 강릉 헌화로 및 동해안 지역 전문가이자 '윤슬'의 친절한 컨시어지야.",
      }
    });
    return response.text || "강릉 헌화로를 따라 여유롭고 따뜻한 쉼의 시간을 누려보세요.";
  } catch (error) {
    console.warn("Gemini Itinerary Notice: Using graceful fallback.", error);
    return "강릉 헌화로를 따라 마주하는 금진 해변 산책로와 동해 바다의 파도 소리를 음미하며 온전한 쉼을 누려보세요.";
  }
};

export const getDiaryRecommendation = async (_expectation: string) => {
  const fallback = {
    bgm: {
      title: "Clair de Lune",
      artist: "Claude Debussy",
      reason: "잔잔하게 부서지는 동해 윤슬과 어우러지는 피아노 선율이 마음에 깊은 평온을 전해줍니다."
    },
    book: {
      title: "바다의 뚜껑",
      author: "요시모토 바나나",
      reason: "고요한 바닷가 마을에서 발견하는 사소하지만 따뜻한 회복의 이야기입니다."
    }
  };

  const ai = getAiClient();
  if (!ai) return fallback;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: `사용자가 숙소 방문 전 기대평을 남겼습니다: "${_expectation}". 
      이 기분에 어울리는 배경음악(BGM) 1곡과 읽을만한 책 1권을 추천해주세요. 
      추천 이유도 짧고 감성적으로 덧붙여주세요.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            bgm: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                artist: { type: Type.STRING },
                reason: { type: Type.STRING }
              },
              required: ["title", "artist", "reason"]
            },
            book: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                author: { type: Type.STRING },
                reason: { type: Type.STRING }
              },
              required: ["title", "author", "reason"]
            }
          },
          required: ["bgm", "book"]
        }
      }
    });
    return JSON.parse(response.text || JSON.stringify(fallback));
  } catch (error) {
    console.warn("Gemini Diary Notice: Using graceful fallback.", error);
    return fallback;
  }
};

export const getReviewSummary = async (reviews: string[]) => {
  const defaultSummary = [
    { keyword: "온전한 고요", summary: "파도 소리만 들리는 프라이빗한 공간에서 누리는 깊은 쉼" },
    { keyword: "아침 윤슬 조망", summary: "창밖 수평선 너머로 번지는 황금빛 일출과 바다 풍경" },
    { keyword: "정갈한 다도", summary: "명인 백자 다기에 따뜻하게 우려내는 시그니처 잎차 쉼" }
  ];

  const ai = getAiClient();
  if (!ai) return defaultSummary;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: `다음은 '윤슬'의 실제 방문객 리뷰들입니다: \n${reviews.join("\n")}\n
      이 리뷰들을 분석하여 3~5개의 핵심 키워드(예: 조용함, 조식 맛집)와 각 키워드에 대한 짧은 요약을 제공해주세요.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              keyword: { type: Type.STRING },
              summary: { type: Type.STRING }
            },
            required: ["keyword", "summary"]
          }
        }
      }
    });
    return JSON.parse(response.text || JSON.stringify(defaultSummary));
  } catch (error) {
    console.warn("Gemini Review Notice: Using graceful fallback.", error);
    return defaultSummary;
  }
};
