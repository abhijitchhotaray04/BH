// This function runs on Netlify's server, NOT in the user's browser.

// The official Google Generative AI SDK (will be installed by Netlify)
import { GoogleGenAI } from '@google/genai';

// IMPORTANT: Netlify automatically makes environment variables available
// The API key is NEVER exposed to the public.
const apiKey = process.env.GEMINI_API_KEY;

// You must check if the key is available before initializing the AI
if (!apiKey) {
    console.error("GEMINI_API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey });

// Define the handler function required by Netlify Functions
exports.handler = async (event) => {
    // 1. Only allow POST requests
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: "Method Not Allowed. Use POST." }),
        };
    }

    try {
        // 2. Parse the data sent from your script.js
        const { name, jobTitle, experience, education, certs, achievements, currentLang } = JSON.parse(event.body);

        // Basic validation (optional but good)
        if (!achievements) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Required data is missing." }),
            };
        }

        // 3. Define the full prompt (reusing the logic from script.js)
        const userQuery = `
            **Resume Data:**
            * **Name:** ${name || 'Not Provided'}
            * **Target Job Title:** ${jobTitle || 'Not Provided'}
            * **Experience Details (Duties, Skills, Tools):** ${experience || 'Not Provided'}
            * **Formal Education:** ${education || 'Not Provided'}
            * **Certifications/Licenses:** ${certs || 'Not Provided'}
            * **Key Achievements:** ${achievements || 'Not Provided'}

            **Task:** Generate a professional resume for blue-collar roles using the data above. Follow these instructions precisely:
            1.  **Format:** Output clean HTML only (<h2> for sections, <ul>/<li> for lists). NO markdown, NO \`\`\`html block, NO <html>, <head>, or <body> tags.
            2.  **Contact:** Start with an <h2> containing Name and Job Title. Add placeholder lines for Phone, Email, Location below it (use <p> tags).
            3.  **Summary:** Write a concise (2-4 sentence) professional summary section (<h2>Summary</h2>).
            4.  **Experience:** Create an Experience section (<h2>Experience</h2>). Use bullet points (<ul><li>) for duties and achievements. Emphasize quantifiable results from 'Key Achievements'.
            5.  **Skills:** Create a Skills section (<h2>Skills</h2>). Extract technical skills, tools, and software from 'Experience Details' and 'Certifications'. Use bullet points.
            6.  **Education:** Create an Education section (<h2>Education</h2>) using 'Formal Education'. Use simple text or bullet points.
            7.  **Certifications:** Create a Certifications section (<h2>Certifications</h2>) using 'Certifications/Licenses'. Use simple text or bullet points.
            8.  **Language:** Write the entire resume content in the target language based on currentLang code: ${currentLang}.
            9.  **Tone:** Professional, concise, action-oriented.
            10. **Structure:** Adhere strictly to the section order: Contact, Summary, Experience, Skills, Education, Certifications.
        `;
        
        const systemInstruction = `You are an expert resume writer specializing in creating ATS-friendly resumes for blue-collar professions. Your output MUST be clean HTML using only h2, p, ul, li tags. Respond ONLY with the HTML resume content.`;


        // 4. Call the Gemini API securely
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash", // Using the robust, modern model
            contents: [{ role: "user", parts: [{ text: userQuery }] }],
            config: {
                 systemInstruction: systemInstruction,
                 temperature: 0.3
            }
        });

        const resumeText = response.text.trim();

        // 5. Send the result back to the browser
        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ resumeText: resumeText }),
        };

    } catch (error) {
        console.error("Serverless Function Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal Server Error during resume generation." }),
        };
    }
};