// netlify/functions/generate.js
import { GoogleGenAI } from '@google/genai';

const apiKey = process.env.GEMINI_API_KEY; 
const ai = apiKey ? new GoogleGenAI(apiKey) : null;

// Helper function to handle the response formatting (Netlify style)
const formatResponse = (statusCode, body) => {
    return {
        statusCode,
        headers: {
            // Netlify-compatible way to set CORS headers
            'Access-Control-Allow-Origin': '*', 
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    };
};

// Netlify Function handler signature (event, context)
exports.handler = async (event, context) => {

    // 1. Handle pre-flight OPTIONS request
    if (event.httpMethod === 'OPTIONS') {
        return formatResponse(200, {});
    }
    
    // 2. Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return formatResponse(405, { error: 'Method Not Allowed' });
    }

    try {
        // 3. Body Parsing (Netlify parses the body into event.body for POST requests)
        let body;
        try {
            // Netlify's event.body is a string, which we need to parse
            body = JSON.parse(event.body); 
        } catch (e) {
            return formatResponse(400, { error: "Invalid JSON in request body." });
        }
        
        const { prompt } = body; 

        if (!prompt) {
            return formatResponse(400, { error: "Missing prompt in request body." });
        }

        if (!ai) {
             return formatResponse(500, { error: "Server error: API key is not configured on the server." });
        }

        // 4. Gemini API Call
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: [{ role: "user", parts: [{ text: prompt }] }],
        });

        const generatedText = response.candidates?.[0]?.content?.parts?.[0]?.text;

        // 5. Send Response
        return formatResponse(200, { text: generatedText });

    } catch (error) {
        console.error("Gemini API Error in Proxy:", error);
        
        // 6. Return error response
        return formatResponse(500, { 
            error: "Failed to generate content via proxy. Check Netlify logs.",
            details: error.message 
        });
    }
};