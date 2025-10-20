// api/generate.js
// This code runs securely on the Vercel server.
import { GoogleGenAI } from '@google/genai';

const apiKey = process.env.GEMINI_API_KEY; 
const ai = apiKey ? new GoogleGenAI(apiKey) : null;

// Helper function to reliably parse the request body stream (CRITICAL FIX)
const getRequestBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                // Try to parse as JSON, otherwise return an empty object
                resolve(body ? JSON.parse(body) : {});
            } catch (e) {
                // If JSON parsing fails, the body is invalid for our use case
                reject(new Error("Invalid JSON in request body."));
            }
        });
        req.on('error', reject);
    });
};


export default async (req, res) => {
    // 1. CORS Headers
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
    }

    try {
        // 2. Body Parsing
        const body = await getRequestBody(req);
        const { prompt } = body; 

        if (!prompt) {
            return res.status(400).json({ error: "Missing prompt in request body." });
        }

        if (!ai) {
             return res.status(500).json({ error: "Server error: API key is not configured on the server." });
        }

        // 3. Gemini API Call
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: [{ role: "user", parts: [{ text: prompt }] }],
        });

        const generatedText = response.candidates?.[0]?.content?.parts?.[0]?.text;

        // 4. Send Response
        res.status(200).json({ text: generatedText });

    } catch (error) {
        console.error("Gemini API Error in Proxy:", error);
        res.status(500).json({ 
            error: "Failed to generate content via proxy.",
            details: error.message 
        });
    }
};