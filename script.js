// ==========================================================
// AI-POWERED CONVERSATIONAL RESUME BUILDER: script.js
// ==========================================================

// --- 1. CONFIGURATION AND INITIAL STATE ---
const minLength = 10;
const LOCAL_STORAGE_KEY = 'resumeBuilderData';

// --- STATE MACHINE DEFINITIONS ---
const STATES = {
    WELCOME: 0,
    CONTACT: 1,
    JOB_TITLE: 2,
    JOB_DUTIES: 3,
    NEXT_JOB: 4,
    CERTIFICATIONS: 5,
    EDUCATION: 6,
    READY: 7
};

// --- APPLICATION STATE ---
let currentState = STATES.WELCOME;
let resumeData = {
    contact: null,
    jobs: [], // Array of {title: "...", duties: "..."} objects
    certs: null,
    education: null
};
let currentJobIndex = -1;
let currentLang = 'en';

// --- DOM REFERENCES ---
const generateBtn = document.getElementById("generate-btn");
const loadingSpinner = document.getElementById("loading-spinner");
const downloadBtn = document.getElementById("download-btn");
const voiceBtn = document.getElementById("voice-btn");
const langSelect = document.getElementById("language-select");

const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const chatSendBtn = document.getElementById('chat-send-btn');
const resumeOutput = document.getElementById("resume-output");

// --- 2. MULTILINGUAL TRANSLATIONS ---
const translations = {
    en: {
        title: "AI-Powered Resume Builder",
        tagline: "Build a job-ready resume conversationally.",
        generate: "Generate Resume",
        download: "Download Resume (Formatted HTML)",
        outputTitle: "Your Generated Resume:",
        q_welcome: "Hello! To start, please provide your **Full Name**, **Phone Number**, and **Email Address**.",
        q_contact: "Got it. Now, tell me about your **MOST RECENT JOB** (Title and Company Name, e.g., 'Heavy Equipment Operator at Smith Construction').",
        q_job_duties: "Great. Please list your **three most important duties/achievements** from that job. Focus on action verbs (e.g., 'Operated CAT D10 dozer' or 'Repaired hydraulic systems').",
        q_next_job: "Would you like to add another job? Type the next job title, or type **'skip'** to continue.",
        q_certs: "Now for your skills. Please list all relevant **Certifications and Licenses** (e.g., OSHA 30, CDL Class A, TIG Welding Certified).",
        q_education: "Finally, list your **highest education or training** (e.g., High School, Trade School, Apprenticeship).",
        q_ready: "That's all the info we need! Click the **'Generate Resume'** button below to finalize your document.",
        q_skip_confirm: "(Skipped.) Moving on.",
        promptInstruction: "Respond in English. The resume must contain English words.",
        error: "An error occurred. Please check your input or connection.",
        offlineMessage: "You are currently **offline**. Please reconnect to the internet to generate the resume. Your data is saved locally."
    },
    hi: {
        title: "एआई रिज्यूमे बिल्डर",
        tagline: "बातचीत के ज़रिए नौकरी के लिए तैयार रिज्यूमे बनाएं।",
        generate: "रिज्यूमे बनाएं",
        download: "रिज्यूमे डाउनलोड करें (स्वरूपित HTML)",
        outputTitle: "तैयार रिज्यूमे",
        q_welcome: "नमस्ते! शुरू करने के लिए, कृपया अपना **पूरा नाम**, **फ़ोन नंबर**, और **ईमेल पता** प्रदान करें।",
        q_contact: "समझ गया। अब, अपनी **हाल की नौकरी** के बारे में बताएं (शीर्षक और कंपनी का नाम, जैसे: 'स्मिथ कंस्ट्रक्शन में भारी उपकरण ऑपरेटर)।",
        q_job_duties: "बहुत बढ़िया। कृपया उस नौकरी से अपने **तीन सबसे महत्वपूर्ण कर्तव्यों/उपलब्धियों** को सूचीबद्ध करें। कार्रवाई क्रियाओं पर ध्यान दें (उदाहरण: 'CAT D10 डोजर संचालित किया' या 'हाइड्रोलिक सिस्टम्स की मरम्मत की')।",
        q_next_job: "क्या आप कोई और नौकरी जोड़ना चाहेंगे? अगली नौकरी का शीर्षक टाइप करें, या जारी रखने के लिए **'skip'** टाइप करें।",
        q_certs: "अब आपके कौशल के लिए। कृपया सभी प्रासंगिक **प्रमाणपत्र और लाइसेंस** सूचीबद्ध करें (जैसे: OSHA 30, CDL क्लास ए, TIG वेल्डिंग प्रमाणित)।",
        q_education: "अंत में, अपनी **उच्चतम शिक्षा या प्रशिक्षण** सूचीबद्ध करें (जैसे: हाई स्कूल, ट्रेड स्कूल, अप्रेंटिसशिप)।",
        q_ready: "बस, हमें इतनी ही जानकारी चाहिए! अपना दस्तावेज़ अंतिम रूप देने के लिए नीचे दिए गए **'रिज्यूमे बनाएं'** बटन पर क्लिक करें।",
        q_skip_confirm: "(छोड़ दिया गया।) आगे बढ़ रहा हूँ।",
        promptInstruction: "हिंदी में जवाब दें। रिज्यूमे में तकनीकी शब्दों को छोड़कर हिंदी शब्दों का उपयोग होना चाहिए।",
        error: "एक त्रुटि हुई। कृपया अपना इनपुट या कनेक्शन जांचें।",
        offlineMessage: "आप वर्तमान में **ऑफ़लाइन** हैं। रिज्यूमे बनाने के लिए कृपया इंटरनेट से दोबारा कनेक्ट करें। आपका डेटा स्थानीय रूप से सहेजा गया है।"
    },
    or: {
        title: "AI ରେଜ୍ୟୁମ ତିଆରିକାରୀ",
        tagline: "କଥାବାର୍ତ୍ତା ମାଧ୍ୟମରେ ଚାକିରି ପାଇଁ ପ୍ରସ୍ତୁତ ରେଜ୍ୟୁମ ତିଆରି କରନ୍ତୁ।",
        generate: "ରେଜ୍ୟୁମ ତିଆରି କରନ୍ତୁ",
        download: "ରେଜ୍ୟୁମ ଡାଉନଲୋଡ୍ କରନ୍ତୁ (ଫର୍ମାଟ୍ HTML)",
        outputTitle: "ତିଆରି ରେଜ୍ୟୁମ",
        q_welcome: "ନମସ୍କାର! ଆରମ୍ଭ କରିବାକୁ, ଦୟାକରି ଆପଣଙ୍କର **ପୂର୍ଣ୍ଣ ନାମ**, **ଫୋନ ନମ୍ବର**, ଏବଂ **ଇମେଲ ଠିକଣା** ପ୍ରଦାନ କରନ୍ତୁ।",
        q_contact: "ବୁଝିଲି। ବର୍ତ୍ତମାନ, ଆପଣଙ୍କର **ସଦ୍ୟତମ ଚାକିରି** ବିଷୟରେ କୁହନ୍ତୁ (ପଦବୀ ଏବଂ କମ୍ପାନୀ ନାମ, ଉଦାହରଣ ସ୍ୱରୂପ: 'ସ୍ମିଥ୍ କନଷ୍ଟ୍ରକ୍ସନରେ ଭାରୀ ଯନ୍ତ୍ରପାତି ଅପରେଟର'।",
        q_job_duties: "ବହୁତ ଭଲ। ଦୟାକରି ସେହି ଚାକିରିରୁ ଆପଣଙ୍କର **ତିନୋଟି ଗୁରୁତ୍ୱପୂର୍ଣ୍ଟ କର୍ତ୍ତବ୍ୟ/ଉପଲବ୍ଧି** ତାଲିକାଭୁକ୍ତ କରନ୍ତୁ। କାର୍ଯ୍ୟ କ୍ରିୟା ଉପରେ ଧ୍ୟାନ ଦିଅନ୍ତୁ (ଯଥା: 'CAT D10 ଡୋଜର ଚଳାଉଥିଲି' କିମ୍ବା 'ହାଇଡ୍ରୋଲିକ୍ ସିଷ୍ଟମ ମରାମତି କରିଥିଲି')।",
        q_next_job: "ଆପଣ ଆଉ ଏକ ଚାକିରି ଯୋଡିବାକୁ ଚାହୁଁଛନ୍ତି କି? ପରବର୍ତ୍ତୀ ଚାକିରିର ପଦବୀ ଟାଇପ୍ କରନ୍ତୁ, କିମ୍ବା ଜାରି ରଖିବାକୁ **'skip'** ଟାଇପ୍ କରନ୍ତୁ।",
        q_certs: "ବର୍ତ୍ତମାନ ଆପଣଙ୍କର କୌଶଳ ପାଇଁ। ଦୟାକରି ସମସ୍ତ ପ୍ରାସଙ୍ଗିକ **ପ୍ରମାଣପତ୍ର ଏବଂ ଲାଇସେନ୍ସ** ତାଲିକାଭୁକ୍ତ କରନ୍ତୁ (ଯଥା: OSHA 30, CDL Class A, TIG Welding Certified)।",
        q_education: "ଶେଷରେ, ଆପଣଙ୍କର **ସର୍ବୋଚ୍ଚ ଶିକ୍ଷା ବା ତାଲିମ** ତାଲିକାଭୁକ୍ତ କରନ୍ତୁ (ଯଥା: ହାଇ ସ୍କୁଲ, ଟ୍ରେଡ୍ ସ୍କୁଲ, ଆପ୍ରେଣ୍ଟିସିପ୍)।",
        q_ready: "ଆମକୁ ଆବଶ୍ୟକ କରୁଥିବା ସମସ୍ତ ସୂଚନା ଏତିକି! ଆପଣଙ୍କର ଡକ୍ୟୁମେଣ୍ଟକୁ ଚୂଡ଼ାନ୍ତ କରିବା ପାଇଁ ତଳେ ଥିବା **'ରେଜ୍ୟୁମ ତିଆରି କରନ୍ତୁ'** ବଟନ୍ ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ।",
        q_skip_confirm: "(ଛାଡି ଦିଆଗଲା।) ଆଗକୁ ବଢ଼ୁଛି।",
        promptInstruction: "ଓଡ଼ିଆରେ ଜବାବ ଦିଅନ୍ତୁ। ରେଜ୍ୟୁମରେ ବୈଷୟିକ ଶବ୍ଦକୁ ଛାଡି ଓଡ଼ିଆ ଶବ୍ଦର ବ୍ୟବହାର ହେବା ଉଚିତ।",
        error: "ଏକ ତ୍ରୁଟି ଘଟିଲା। ଦୟାକରି ଆପଣଙ୍କର ଇନପୁଟ୍ କିମ୍ବା ସଂଯୋଗ ଯାଞ୍ଚ କରନ୍ତୁ।",
        offlineMessage: "ଆପଣ ବର୍ତ୍ତମାନ **ଅଫଲାଇନ୍** ଅଛନ୍ତି। ରେଜ୍ୟୁମ ତିଆରି କରିବାକୁ ଦୟାକରି ଇଣ୍ଟରନେଟ୍ ସହିତ ପୁନଃ ସଂଯୋଗ କରନ୍ତୁ। ଆପଣଙ୍କର ଡାଟା ସ୍ଥାନୀୟ ଭାବରେ ସେଭ୍ ହୋଇଛି।"
    }
};


// --- 3. CORE UTILITY FUNCTIONS ---

function saveProgress() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({
        data: resumeData,
        state: currentState,
        lang: currentLang
    }));
}

function loadProgress() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
        const parsed = JSON.parse(saved);
        resumeData = parsed.data || { contact: null, jobs: [], certs: null, education: null };
        currentState = parsed.state || STATES.WELCOME;
        currentLang = parsed.lang || 'en';
        
        langSelect.value = currentLang;
        updateUI(currentLang);
        
        if (currentState === STATES.WELCOME) {
            currentState = STATES.CONTACT;
        }
        
        showNextQuestion();
    } else {
        // No saved data, start fresh
        updateUI(currentLang);
        showNextQuestion();
    }
}

function updateUI(lang) {
    currentLang = lang;
    const t = translations[lang];
    document.getElementById("app-title").textContent = t.title;
    document.getElementById("app-tagline").textContent = t.tagline;
    generateBtn.textContent = t.generate;
    downloadBtn.textContent = t.download;
    document.getElementById("output-title").textContent = t.outputTitle;
}

function appendMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender === 'app' ? 'app-message' : 'user-message');
    messageDiv.innerHTML = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// --- 4. CORE STATE MACHINE LOGIC ---

function transitionState(userInput) {
    const t = translations[currentLang];
    const input = userInput.trim();

    if (currentState !== STATES.NEXT_JOB && input.length < minLength) {
        alert(`Input is too short. Please provide more detail (minimum ${minLength} characters).`);
        return;
    }

    chatInput.value = '';
    
    if (currentState === STATES.WELCOME) {
        currentState = STATES.CONTACT;
    } else if (currentState === STATES.CONTACT) {
        resumeData.contact = input;
        currentJobIndex = 0;
        currentState = STATES.JOB_TITLE;
    } else if (currentState === STATES.JOB_TITLE) {
        resumeData.jobs.push({ title: input, duties: null });
        currentState = STATES.JOB_DUTIES;
    } else if (currentState === STATES.JOB_DUTIES) {
        resumeData.jobs[currentJobIndex].duties = input;
        currentState = STATES.NEXT_JOB;
    } else if (currentState === STATES.NEXT_JOB) {
        if (input.toLowerCase().includes('skip')) {
            appendMessage(t.q_skip_confirm, 'app');
            currentState = STATES.CERTIFICATIONS;
        } else {
            currentJobIndex++;
            currentState = STATES.JOB_TITLE;
            // Re-run transition immediately to save the new job title
            transitionState(input); 
            return; // Exit here to avoid double-prompt
        }
    } else if (currentState === STATES.CERTIFICATIONS) {
        resumeData.certs = input;
        currentState = STATES.EDUCATION;
    } else if (currentState === STATES.EDUCATION) {
        resumeData.education = input;
        currentState = STATES.READY;
    }
    
    saveProgress();
    showNextQuestion();
}

function showNextQuestion() {
    const t = translations[currentLang];
    
    generateBtn.classList.add('hidden');
    chatInput.classList.remove('hidden');
    chatSendBtn.classList.remove('hidden');
    voiceBtn.classList.remove('hidden');
    loadingSpinner.classList.add('hidden');

    let question = "";
    
    switch(currentState) {
        case STATES.WELCOME: question = t.q_welcome; break;
        case STATES.CONTACT: question = t.q_contact; break;
        case STATES.JOB_TITLE: question = t.q_contact; break; // Re-use prompt
        case STATES.JOB_DUTIES:
            const currentJob = resumeData.jobs[currentJobIndex];
            question = `**${currentJob.title}**: ${t.q_job_duties}`;
            break;
        case STATES.NEXT_JOB: question = t.q_next_job; break;
        case STATES.CERTIFICATIONS: question = t.q_certs; break;
        case STATES.EDUCATION: question = t.q_education; break;
        case STATES.READY:
            question = t.q_ready;
            chatInput.classList.add('hidden');
            chatSendBtn.classList.add('hidden');
            voiceBtn.classList.add('hidden');
            generateBtn.classList.remove('hidden');
            break;
    }

    appendMessage(question, 'app');
}

// --- 5. VOICE INPUT (Speech Recognition) ---
let recognition;
let isListening = false;
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
        isListening = true;
        voiceBtn.classList.add('listening');
        voiceBtn.textContent = '🛑';
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        chatInput.value = transcript;
        chatSendBtn.click(); // Automatically process input after speaking
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        alert('Voice recognition error: ' + event.error);
    };

    recognition.onend = () => {
        isListening = false;
        voiceBtn.classList.remove('listening');
        voiceBtn.textContent = '🎤';
    };

    voiceBtn.addEventListener('click', () => {
        if (!isListening) {
            recognition.lang = currentLang === 'hi' ? 'hi-IN' : 'en-US'; // Set lang
            recognition.start();
        } else {
            recognition.stop();
        }
    });
} else {
    voiceBtn.style.display = 'none';
    console.warn('Web Speech API not supported in this browser.');
}


// --- 6. GEMINI API COMMUNICATION (SECURE PROXY) ---

function constructFinalPrompt(data, t) {
    let jobList = data.jobs.map(job => 
        `Job Title: ${job.title}\nDuties/Achievements: ${job.duties}\n`
    ).join('\n---\n');

    return `
        You are an expert resume writer specializing in blue-collar professions.
        STRICT TEMPLATE: The first line MUST be Contact Info (Name | Phone | Email | Location).
        Sections MUST use triple-hyphen headings (---).
        Sections MUST use hyphens (-) for bullet points.
        
        IMPORTANT: ${t.promptInstruction}

        Here is the user's structured data:
        Contact Info: ${data.contact}
        --- WORK EXPERIENCE ---
        ${jobList}
        --- TECHNICAL SKILLS AND CERTIFICATIONS ---
        ${data.certs}
        --- EDUCATION ---
        ${data.education}

        Generate the professional resume now, strictly following the format and structure.
    `;
}

async function callGeminiAPI() {
    if (currentState !== STATES.READY) return;
    
    if (!navigator.onLine) {
        alert(translations[currentLang].offlineMessage);
        return;
    }

    loadingSpinner.classList.remove('hidden');
    generateBtn.disabled = true;
    generateBtn.classList.add('hidden');
    downloadBtn.classList.add('hidden');

    try {
        const finalPrompt = constructFinalPrompt(resumeData, translations[currentLang]);
        
        // This is the secure proxy endpoint
        const proxyEndpoint = "/api/generate";
        
        const response = await fetch(proxyEndpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt: finalPrompt }), 
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Proxy call failed (${response.status}): ${errorText}`);
        }

        const data = await response.json();
        const generatedText = data.text;
        
        resumeOutput.textContent = generatedText;
        downloadBtn.classList.remove("hidden");
        
    } catch (error) {
        console.error("Gemini API Error:", error);
        alert(translations[currentLang].error + " " + error.message);
        resumeOutput.textContent = translations[currentLang].error + "\nDetails: " + error.message;
    } finally {
        loadingSpinner.classList.add("hidden");
        generateBtn.disabled = false;
        if (currentState === STATES.READY) {
            generateBtn.classList.remove('hidden'); // Show generate button again if in READY state
        }
    }
}


// --- 7. DOWNLOAD AND INITIALIZATION ---

function downloadResume() {
    // Uses the Formatted HTML download method
    const rawText = resumeOutput.textContent;
    
    const lines = rawText.split('\n');
    const contactLine = lines[0] || "Name | Phone | Email | Location";
    const bodyContent = lines.slice(1).join('\n').trim();

    let formattedBody = bodyContent
        .replace(/--- ([A-Z\s&]+) ---/g, '<h2>$1</h2>') 
        .replace(/\n\s*\n/g, '</p><p>') 
        .replace(/\n/g, '<br>')
        .replace(/<p><br><\/p>/g, '')
        .replace(/<br>\s*<ul>/g, '<ul>')
        .replace(/<\/ul>\s*<br>/g, '</ul>'); 

    formattedBody = formattedBody.replace(/<br>- /g, '</li><li>');
    
    // Quick fix for the missing ul/li wrappers needed for the bullet points
    formattedBody = formattedBody.replace(/<\/h2>[\s\S]*?(?=<h2|$)/g, function(match) {
        // Ensure content after <h2> is wrapped in <ul> if it contains <li>
        if (match.includes('<li>')) {
            return match.replace(/<br><br><li>/g, '<ul><li>') + '</ul>';
        }
        return match;
    });

    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Professional Resume Template</title>
            <style>
                body { margin: 0; padding: 0; }
                .resume-download-content {
                    font-family: Arial, Helvetica, sans-serif;
                    line-height: 1.4; width: 8.5in; min-height: 11in;
                    margin: 0 auto; padding: 0.75in 1in; box-sizing: border-box;
                }
                .contact-line {
                    text-align: center; font-size: 14pt; font-weight: bold;
                    margin-bottom: 20px; padding-bottom: 5px; border-bottom: 2px solid #000;
                }
                h2 {
                    font-size: 12pt; color: #333; margin-top: 15px; margin-bottom: 5px;
                    padding-bottom: 3px; border-bottom: 1px solid #000; text-transform: uppercase;
                }
                p, li { font-size: 10pt; margin-bottom: 5px; }
                ul { list-style-type: disc; margin: 5px 0 10px 20px; padding: 0; }
                * { color: #000 !important; }
            </style>
        </head>
        <body>
            <div class="resume-download-content">
                <div class="contact-line">${contactLine}</div>
                ${formattedBody.replace(/<ul><br><li>/g, '<ul><li>').replace(/<ul><\/ul>/g, '')}
            </div>
        </body>
        </html>
    `;
    
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `Professional_Resume_${currentLang.toUpperCase()}.html`; 
    
    document.body.appendChild(a);
    a.click();
    
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// --- Event Listeners ---
langSelect.addEventListener('change', (e) => {
    updateUI(e.target.value);
    chatMessages.innerHTML = '';
    currentState = STATES.WELCOME;
    resumeData = { contact: null, jobs: [], certs: null, education: null };
    saveProgress(); 
    showNextQuestion();
});

chatSendBtn.addEventListener('click', () => {
    const input = chatInput.value.trim();
    if (input) {
        appendMessage(input, 'user');
        transitionState(input);
    }
});

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        chatSendBtn.click();
    }
});

generateBtn.addEventListener('click', callGeminiAPI);
downloadBtn.addEventListener('click', downloadResume);


// --- Initial Setup on DOM Load ---
document.addEventListener('DOMContentLoaded', () => {
    loadProgress(); // Load saved data or start fresh
});