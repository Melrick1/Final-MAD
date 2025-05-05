import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyCjblKJcOl2b0RzM-iBQdiI5ZL6SYuUtsY";
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export default model;
