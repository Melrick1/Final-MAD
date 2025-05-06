import model from "../config/GeminiAPI";
import promptTemplate from '../assets/prompt';

async function AnalyzeImage(imageBase64) {
    try {
        // Send image to Gemini API
        const result = await model.generateContent({
            contents: [
                {
                    role: "user",
                    parts: [
                        { text: promptTemplate },
                        { inline_data: { mime_type: "image/jpeg", data: imageBase64 } },
                    ],
                },
            ],
        });

        const aiResponse = result.response.text();
        return aiResponse;
    } catch (error) {
        console.error("Error message:", error.message);
        return "Gagal mendapatkan hasil analisis, mohon coba kembali dalam beberapa saat.";
    }
}

export default AnalyzeImage