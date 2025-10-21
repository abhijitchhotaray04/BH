// --- PASTE YOUR API KEY HERE ---
//const API_KEY = "AIzaSyAXH5f6th1ixFI4_oBjvk5iG_B_6XGwJUI";

// --- 1. LANGUAGE TRANSLATIONS OBJECT ---
const translations = {
    en: {
        tagline: "Answer simple questions one-by-one to build your professional resume.",
        generateBtn: "Generate Resume",
        outputTitle: "Your Generated Resume:",
        initialText: "Fill in the steps above and click 'Generate Resume' to see your result.",
        downloadBtn: "Download Resume (Formatted HTML)",
        alertEmpty: (field) => `Please enter your ${field} before proceeding.`,
        alertMinLength: (min) => `Please provide more detail. Your description must be at least ${min} characters long to generate a meaningful resume.`,
        alertError: "Error: Could not connect to the AI. Check your API key and connection.",
        listening: "Listening... Speak clearly now.",
        promptInstruction: "Respond in English. The resume must contain English words.",
        promptError: "Not enough job data provided. Please try again with details about your experience, skills, and certifications.",
        nameLabel: "1. What is your full name?",
        jobLabel: "2. What is your most recent job title?",
        experienceLabel: "3. Describe your daily work duties, skills, and main tools used.",
        educationLabel: "4. What is your highest level of formal education?",
        certsLabel: "5. List any professional certifications, licenses, or specific training.",
        achievementsLabel: "6. List 2-3 of your key achievements. Use numbers if possible!",
        nextJob: "Next: Job Title",
        nextExperience: "Next: Experience",
        nextEducation: "Next: Education",
        nextCerts: "Next: Certifications",
        nextAchievements: "Next: Achievements",
        back: "Back",
    },
     hi: { // Hindi Translations (abbreviated for chat)
        tagline: "अपने पेशेवर बायोडाटा (Resume) बनाने के लिए एक-एक करके सरल सवालों का जवाब दें।",
        generateBtn: "बायोडाटा बनाएँ",
        outputTitle: "आपका बायोडाटा:",
        initialText: "ऊपर दिए गए चरणों को भरें और परिणाम देखने के लिए 'बायोडाटा बनाएँ' पर क्लिक करें।",
        downloadBtn: "बायोडाटा डाउनलोड करें (HTML)",
        alertEmpty: (field) => `कृपया आगे बढ़ने से पहले अपना ${field} दर्ज करें।`,
        alertMinLength: (min) => `कृपया और विवरण दें। एक सार्थक बायोडाटा बनाने के लिए आपका विवरण कम से कम ${min} वर्ण लंबा होना चाहिए।`,
        alertError: "त्रुटि: AI से कनेक्ट नहीं हो सका। अपनी API कुंजी और कनेक्शन की जाँच करें।",
        listening: "सुन रहा हूँ... अब स्पष्ट बोलें।",
        promptInstruction: "हिंदी में जवाब दें। बायोडाटा में हिंदी शब्द होने चाहिए।",
        promptError: "पर्याप्त नौकरी डेटा प्रदान नहीं किया गया। कृपया अपने अनुभव, कौशल और प्रमाणन के विवरण के साथ पुनः प्रयास करें।",
        nameLabel: "1. आपका पूरा नाम क्या है?",
        jobLabel: "2. आपका सबसे हालिया पद (Job Title) क्या है?",
        experienceLabel: "3. अपने दैनिक कार्य कर्तव्यों, कौशल और मुख्य उपकरणों का वर्णन करें।",
        educationLabel: "4. आपकी औपचारिक शिक्षा (Formal Education) का उच्चतम स्तर क्या है?",
        certsLabel: "5. अपने व्यावसायिक प्रमाणन (Certifications), लाइसेंस, या विशिष्ट प्रशिक्षण को सूचीबद्ध करें।",
        achievementsLabel: "6. अपनी 2-3 प्रमुख उपलब्धियों को सूचीबद्ध करें। यदि संभव हो तो संख्या (numbers) का उपयोग करें!",
        nextJob: "अगला: पद (Job Title)",
        nextExperience: "अगला: कार्य विवरण",
        nextEducation: "अगला: शिक्षा",
        nextCerts: "अगला: प्रमाणन",
        nextAchievements: "अगला: उपलब्धियाँ",
        back: "वापस जाएँ",
    },
    or: { // Odia Translations (abbreviated for chat)
        tagline: "ଆପଣଙ୍କର ବୃତ୍ତିଗତ ବାୟୋଡାଟା (Resume) ତିଆରି କରିବା ପାଇଁ ଗୋଟିଏ ପରେ ଗୋଟିଏ ସରଳ ପ୍ରଶ୍ନର ଉତ୍ତର ଦିଅନ୍ତୁ।",
        generateBtn: "ବାୟୋଡାଟା ତିଆରି କରନ୍ତୁ",
        outputTitle: "ଆପଣଙ୍କର ବାୟୋଡାଟା:",
        initialText: "ଉପରୋକ୍ତ ପଦକ୍ଷେପଗୁଡ଼ିକୁ ପୂରଣ କରନ୍ତୁ ଏବଂ ଫଳାଫଳ ଦେଖିବା ପାଇଁ 'ବାୟୋଡାଟା ତିଆରି କରନ୍ତୁ' ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ।",
        downloadBtn: "ବାୟୋଡାଟା ଡାଉନଲୋଡ୍ କରନ୍ତୁ (HTML)",
        alertEmpty: (field) => `ଦୟାକରି ଆଗକୁ ବଢ଼ିବା ପୂର୍ବରୁ ଆପଣଙ୍କର ${field} ପ୍ରବେଶ କରନ୍ତୁ।`,
        alertMinLength: (min) => `ଦୟାକରି ଅଧିକ ବିବରଣୀ ପ୍ରଦାନ କରନ୍ତୁ। ଏକ ସାର୍ଥକ ବାୟୋଡାଟା ତିଆରି କରିବା ପାଇଁ ଆପଣଙ୍କର ବର୍ଣ୍ଣନା ଅତି କମରେ ${min} ଅକ୍ଷର ଲମ୍ବା ହେବା ଉଚିତ୍।`,
        alertError: "ତ୍ରୁଟି: AI ସହିତ ସଂଯୋଗ ହୋଇପାରିଲା ନାହିଁ। ଆପଣଙ୍କର API କି ଏବଂ ସଂଯୋଗ ଯାଞ୍ଚ କରନ୍ତୁ।",
        listening: "ଶୁଣୁଛି... ବର୍ତ୍ତମାନ ସ୍ପଷ୍ଟ ଭାବରେ କୁହନ୍ତୁ।",
        promptInstruction: "ଓଡିଆରେ ଉତ୍ତର ଦିଅନ୍ତୁ। ବାୟୋଡାଟା ଓଡିଆ ଶବ୍ଦ ଧାରଣ କରିବା ଉଚିତ୍।",
        promptError: "ଯଥେଷ୍ଟ ଚାକିରି ତଥ୍ୟ ପ୍ରଦାନ କରାଯାଇ ନାହିଁ। ଦୟାକରି ଆପଣଙ୍କର ଅଭିଜ୍ଞତା, କୌଶଳ ଏବଂ ପ୍ରମାଣପତ୍ର ବିଷୟରେ ବିବରଣୀ ସହିତ ପୁନଃ ଚେଷ୍ଟା କରନ୍ତୁ।",
        nameLabel: "1. ଆପଣଙ୍କର ପୂରା ନାମ କଣ?",
        jobLabel: "2. ଆପଣଙ୍କର ସବୁଠାରୁ ନିକଟତମ ଚାକିରି ଶୀର୍ଷକ କ'ଣ?",
        experienceLabel: "3. ଆପଣଙ୍କର ଦୈନିକ କାର୍ଯ୍ୟ କର୍ତ୍ତବ୍ୟ, କୌଶଳ ଏବଂ ମୁଖ୍ୟ ଉପକରଣ ବର୍ଣ୍ଣନା କରନ୍ତୁ।",
        educationLabel: "4. ଆପଣଙ୍କର ଔପଚାରିକ ଶିକ୍ଷା (Formal Education) ର ସର୍ବୋଚ୍ଚ ସ୍ତର କ'ଣ?",
        certsLabel: "5. କୌଣସି ବୃତ୍ତିଗତ ପ୍ରମାଣପତ୍ର, ଲାଇସେନ୍ସ, କିମ୍ବା ନିର୍ଦ୍ଦିଷ୍ଟ ତାଲିମ ତାଲିକାଭୁକ୍ତ କରନ୍ତୁ।",
        achievementsLabel: "6. ଆପଣଙ୍କର 2-3 ମୁଖ୍ୟ ସଫଳତାଗୁଡ଼ିକୁ ତାଲିକାଭୁକ୍ତ କରନ୍ତୁ। ଯଦି ସମ୍ଭବ ତେବେ ସଂଖ୍ୟା ବ୍ୟବହାର କରନ୍ତୁ!",
        nextJob: "ପରବର୍ତ୍ତୀ: ଚାକିରି ଶୀର୍ଷକ",
        nextExperience: "ପରବର୍ତ୍ତୀ: କାର୍ଯ୍ୟ ବିବରଣୀ",
        nextEducation: "ପରବର୍ତ୍ତୀ: ଶିକ୍ଷା",
        nextCerts: "ପରବର୍ତ୍ତୀ: ପ୍ରମାଣପତ୍ର",
        nextAchievements: "ପରବର୍ତ୍ତୀ: ସଫଳତା",
        back: "ପଛକୁ ଯାଆନ୍ତୁ",
    }
    //... (Keep your other language translations)
};

let currentLang = 'en';
const MIN_INPUT_LENGTH = 10; // Adjusted minimum length slightly

// --- 2. DOM Elements ---
const elements = {
    tagline: document.getElementById('tagline'),
    langSelect: document.getElementById('language-select'),
    userInputName: document.getElementById('input-name'),
    userInputJob: document.getElementById('input-job'),
    userInputExperience: document.getElementById('input-experience'),
    userInputEducation: document.getElementById('input-education'),
    userInputCerts: document.getElementById('input-certs'),
    userInputAchievements: document.getElementById('input-achievements'),
    voiceBtns: document.querySelectorAll('.voice-btn'),
    generateBtn: document.getElementById('generate-btn'),
    loadingSpinner: document.getElementById('loading-spinner'),
    resumeText: document.getElementById('resume-text'),
    downloadBtn: document.getElementById('download-btn'),
    wizardForm: document.getElementById('wizard-form'),
    outputTitle: document.querySelector('.resume-output h2'),
    steps: {
        '1': document.getElementById('step-1'),
        '2': document.getElementById('step-2'),
        '3': document.getElementById('step-3'),
        '4': document.getElementById('step-4'),
        '5': document.getElementById('step-5'),
        '6': document.getElementById('step-6'),
    }
};

// --- 3. WIZARD STATE MANAGEMENT ---
let currentStep = 1;

function updateLanguageUI() {
    const lang = translations[currentLang];
    if (!lang) return; // Exit if language not found

    elements.tagline.textContent = lang.tagline;
    elements.outputTitle.textContent = lang.outputTitle;

    // Safely update labels and placeholders
    const updateIfExists = (selector, textContent, placeholder) => {
        const elem = document.querySelector(selector);
        if (elem) {
            if (textContent) elem.textContent = textContent;
            if (placeholder && elem.placeholder !== undefined) elem.placeholder = placeholder;
        }
    };

    updateIfExists('#step-1 .question-label', lang.nameLabel);
    updateIfExists('#input-name', null, 'e.g., Ramesh Kumar');
    updateIfExists('#step-2 .question-label', lang.jobLabel);
    updateIfExists('#input-job', null, 'e.g., Electrician, HVAC Technician');
    updateIfExists('#step-3 .question-label', lang.experienceLabel);
    updateIfExists('#input-experience', null, 'Describe duties, tools...');
    updateIfExists('#step-4 .question-label', lang.educationLabel);
    updateIfExists('#input-education', null, 'e.g., Class 10th Pass, Diploma...');
    updateIfExists('#step-5 .question-label', lang.certsLabel);
    updateIfExists('#input-certs', null, 'e.g., CDL, OSHA 10...');
    updateIfExists('#step-6 .question-label', lang.achievementsLabel);
    updateIfExists('#input-achievements', null, 'e.g., Reduced downtime by 20%...');

    // Update buttons safely
    updateIfExists('#step-1 .step-btn', lang.nextJob);
    // Find next buttons inside navigation groups
    document.querySelectorAll('.navigation-group .step-btn').forEach(btn => {
        const nextStep = btn.dataset.next;
        if (nextStep === '3') btn.textContent = lang.nextExperience;
        if (nextStep === '4') btn.textContent = lang.nextEducation;
        if (nextStep === '5') btn.textContent = lang.nextCerts;
        if (nextStep === '6') btn.textContent = lang.nextAchievements;
    });

    elements.wizardForm.querySelectorAll('.step-back-btn').forEach(btn => btn.textContent = lang.back);
    elements.generateBtn.textContent = lang.generateBtn;
    elements.downloadBtn.textContent = lang.downloadBtn;

    // Only reset initial text if it's currently showing an old initial text
     const currentInitialText = elements.resumeText.textContent.trim();
     const possibleInitialTexts = Object.values(translations).map(t => t.initialText);
     if (possibleInitialTexts.includes(currentInitialText) || currentInitialText === '') {
        elements.resumeText.innerHTML = lang.initialText;
     }
}


function getFieldNameForStep(step) {
    // Basic mapping, can be improved
    switch(step) {
        case 1: return 'name';
        case 2: return 'job title';
        case 3: return 'experience details';
        case 4: return 'education';
        case 5: return 'certifications/licenses';
        case 6: return 'achievements';
        default: return 'input';
    }
}

function goToStep(step) {
     if (step < 1 || step > Object.keys(elements.steps).length) return; // Boundary check

    if (step > currentStep) {
        const currentInput = document.querySelector(`#step-${currentStep} input, #step-${currentStep} textarea`);
        if (currentInput && currentInput.value.trim() === '') {
            const fieldName = getFieldNameForStep(currentStep);
            alert(translations[currentLang].alertEmpty(fieldName));
            return;
        }
        // Optional: Add minimum length check for textareas if needed
        if (currentInput && currentInput.tagName === 'TEXTAREA' && currentInput.value.trim().length < MIN_INPUT_LENGTH && currentStep >=3) {
             alert(translations[currentLang].alertMinLength(MIN_INPUT_LENGTH));
             return;
        }
    }

    Object.values(elements.steps).forEach(el => el.classList.add('hidden'));
    const targetStepEl = elements.steps[step.toString()];
    if (targetStepEl) {
        targetStepEl.classList.remove('hidden');
        currentStep = step;
        const inputToFocus = targetStepEl.querySelector('input, textarea');
        if (inputToFocus) inputToFocus.focus();
    }
}


function initWizard() {
    // Attach click handlers for all Next/Back buttons
    elements.wizardForm.querySelectorAll('.step-btn').forEach(button => {
        button.addEventListener('click', (e) => goToStep(parseInt(e.target.dataset.next, 10)));
    });
    elements.wizardForm.querySelectorAll('.step-back-btn').forEach(button => {
        button.addEventListener('click', (e) => goToStep(parseInt(e.target.dataset.prev, 10)));
    });
    
    // *** FIX: Attach handler for the Generate Resume button ***
    elements.generateBtn.addEventListener('click', generateResume);

    // Ensure only step 1 is visible initially
    Object.values(elements.steps).forEach(el => el.classList.add('hidden'));
    elements.steps['1']?.classList.remove('hidden'); // Show step 1
    currentStep = 1; // Explicitly set current step
}


// --- 4. Voice Input (Web Speech API) ---
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;
let isListening = false;
let currentListeningButton = null;

if (SpeechRecognition) {
    try {
        recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false; // Get only final result

        const setRecognitionLang = (langCode) => {
            if (langCode === 'hi') recognition.lang = 'hi-IN';
            else if (langCode === 'or') {
                console.warn("Odia speech not officially supported, using English.");
                recognition.lang = 'en-US';
            } else recognition.lang = 'en-US';
        };

        elements.langSelect.addEventListener('change', (e) => setRecognitionLang(e.target.value));
        setRecognitionLang(currentLang);

        recognition.onresult = (event) => {
            const transcript = event.results[event.resultIndex][0].transcript;
            const currentInput = document.querySelector(`#step-${currentStep} input, #step-${currentStep} textarea`);
            if (currentInput) {
                // Append with a space if there's existing text
                currentInput.value += (currentInput.value.trim() ? ' ' : '') + transcript.trim();
            }
        };

        recognition.onend = () => {
            isListening = false;
            if (currentListeningButton) {
                currentListeningButton.classList.remove('listening');
                currentListeningButton.textContent = '🎙️';
            }
            currentListeningButton = null;
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            // Provide more user-friendly errors
            let errorMsg = `Speech Error: ${event.error}.`;
            if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
                 errorMsg += " Please allow microphone access in your browser settings.";
            } else if (event.error === 'no-speech') {
                 errorMsg += " No speech detected. Please try again.";
            }
            alert(errorMsg);

            isListening = false;
            if (currentListeningButton) {
                currentListeningButton.classList.remove('listening');
                currentListeningButton.textContent = '🎙️';
            }
            currentListeningButton = null;
        };

        elements.voiceBtns.forEach(button => {
            button.addEventListener('click', () => {
                const parentStep = button.closest('.step-card');
                if (!parentStep || parentStep.id !== `step-${currentStep}`) {
                     // Optionally, just return without alert if button shouldn't be active on non-current steps
                     return;
                }

                if (isListening) {
                    recognition.stop(); // Will trigger 'onend'
                } else {
                    try {
                        setRecognitionLang(currentLang); // Update language just before starting
                        recognition.start();
                        isListening = true;
                        currentListeningButton = button;
                        button.classList.add('listening');
                        button.textContent = '🛑'; // Stop icon
                    } catch (e) {
                        console.error("Error starting recognition:", e);
                        alert("Could not start voice recognition. Check microphone permissions or if it's already running.");
                        isListening = false;
                         currentListeningButton = null;
                    }
                }
            });
        });

    } catch (error) {
         console.error("Failed to initialize SpeechRecognition:", error);
         // Hide all buttons if initialization fails completely
         elements.voiceBtns.forEach(button => button.style.display = 'none');
    }

} else {
    console.warn("Web Speech API not supported. Hiding all voice buttons.");
    elements.voiceBtns.forEach(button => button.style.display = 'none');
}

// --- 5. Gemini API Handler ---
// --- NEW FUNCTION TO CALL THE NETLIFY PROXY ---
async function callGeminiProxy(userData) {
    const apiUrl = '/api/generate'; // This URL is routed by netlify.toml to your function

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            const errorBody = await response.json().catch(() => ({ message: response.statusText }));
            throw new Error(`Proxy call failed: ${errorBody.message}`);
        }

        const result = await response.json();
        
        if (!result.resumeText) {
             throw new Error("Proxy did not return resume text.");
        }

        return result.resumeText;

    } catch (error) {
        console.error("Error in callGeminiProxy:", error);
        throw error;
    }
}

async function generateResume() {
    const lang = translations[currentLang];

    // Final validation - Ensure achievements has some text
    const achievements = elements.userInputAchievements.value.trim();
    if (achievements.length < 5) {
        alert(lang.alertEmpty('achievements'));
        goToStep(6); 
        return;
    }

    // 1. Capture ALL required inputs into one object
    const userData = {
        name: elements.userInputName.value.trim(),
        jobTitle: elements.userInputJob.value.trim(),
        experience: elements.userInputExperience.value.trim(),
        education: elements.userInputEducation.value.trim(),
        certs: elements.userInputCerts.value.trim(),
        achievements: achievements,
        currentLang: currentLang // Send the language code for the backend to use
    };

    // NO API KEY CHECK IS REQUIRED HERE ANYMORE!

    elements.generateBtn.disabled = true;
    elements.loadingSpinner.classList.remove('hidden');
    elements.resumeText.innerHTML = '<p>Generating resume, please wait...</p>';
    elements.downloadBtn.classList.add('hidden');

    try {
        // 2. Call the NEW proxy function
        const responseText = await callGeminiProxy(userData);

        if (!responseText || !responseText.includes('<') || responseText.length < 50) {
            console.warn("Received potentially invalid or short response:", responseText);
            elements.resumeText.innerHTML = `<p>${lang.promptError} (Received invalid format from AI).</p>`;
        } else {
            elements.resumeText.innerHTML = responseText;
            elements.downloadBtn.classList.remove('hidden');
        }
    } catch (error) {
        console.error("Generate Resume Error:", error);
        elements.resumeText.innerHTML = `<p>${lang.alertError} ${error.message ? `(${error.message})` : ''}</p>`;
    } finally {
        elements.generateBtn.disabled = false;
        elements.loadingSpinner.classList.add('hidden');
    }
}

    // Capture all inputs
    const name = elements.userInputName.value.trim();
    const jobTitle = elements.userInputJob.value.trim();
    const experience = elements.userInputExperience.value.trim();
    const education = elements.userInputEducation.value.trim();
    const certs = elements.userInputCerts.value.trim();

    // Check if the API key is the placeholder and alert the user
     if (!API_KEY || API_KEY.startsWith("AIzaSyDAZNKZTI5aHHnBuaVUo-b2DYyzARW77kw")) {
        alert("Action required: Please replace the placeholder API Key at the top of script.js with your actual Gemini API Key.");
        return;
    }


    // Enhanced User Query
    const userQuery = `
        **Resume Data:**
        * **Name:** ${name || 'Not Provided'}
        * **Target Job Title:** ${jobTitle || 'Not Provided'}
        * **Experience Details (Duties, Skills, Tools):** ${experience || 'Not Provided'}
        * **Formal Education:** ${education || 'Not Provided'}
        * **Certifications/Licenses:** ${certs || 'Not Provided'}
        * **Key Achievements:** ${achievements || 'Not Provided'}

        **Task:** Generate a professional resume for blue-collar roles using the data above. Follow these instructions precisely:
        1.  **Format:** Output clean HTML only (<h2> for sections, <ul>/<li> for lists). NO markdown, NO html block, NO <html>, <head>, or <body> tags.
        2.  **Contact:** Start with an <h2> containing Name and Job Title. Add placeholder lines for Phone, Email, Location below it (use <p> tags).
        3.  **Summary:** Write a concise (2-4 sentence) professional summary section (<h2>Summary</h2>).
        4.  **Experience:** Create an Experience section (<h2>Experience</h2>). Use bullet points (<ul><li>) for duties and achievements. Emphasize quantifiable results from 'Key Achievements'.
        5.  **Skills:** Create a Skills section (<h2>Skills</h2>). Extract technical skills, tools, and software from 'Experience Details' and 'Certifications'. Use bullet points.
        6.  **Education:** Create an Education section (<h2>Education</h2>) using 'Formal Education'. Use simple text or bullet points.
        7.  **Certifications:** Create a Certifications section (<h2>Certifications</h2>) using 'Certifications/Licenses'. Use simple text or bullet points.
        8.  **Language:** Write the entire resume content in ${currentLang}.
        9.  **Tone:** Professional, concise, action-oriented.
        10. **Structure:** Adhere strictly to the section order: Contact, Summary, Experience, Skills, Education, Certifications.
    `;
    const systemInstruction = `You are an expert resume writer specializing in creating ATS-friendly resumes for blue-collar professions (trades, manufacturing, construction, logistics, hospitality etc.). Your output MUST be clean HTML using only h2, p, ul, li tags. Start directly with the Contact info section. Be concise and use strong action verbs. Respond ONLY with the HTML resume content.`;


    elements.generateBtn.disabled = true;
    elements.loadingSpinner.classList.remove('hidden');
    elements.resumeText.innerHTML = '<p>Generating resume, please wait...</p>';
    elements.downloadBtn.classList.add('hidden');

    try {
        const responseText = await callGeminiAPI(userQuery, systemInstruction);

        // Basic check for valid HTML structure (looks for common tags)
        if (!responseText || !responseText.includes('<') || responseText.length < 50) {
            console.warn("Received potentially invalid or short response:", responseText);
            elements.resumeText.innerHTML = `<p>${lang.promptError} (Received invalid format from AI).</p>`;
        } else {
            elements.resumeText.innerHTML = responseText;
            elements.downloadBtn.classList.remove('hidden');
        }
    } catch (error) {
        console.error("Generate Resume Error:", error);
        // Display a more specific error message if available
        elements.resumeText.innerHTML = `<p>${lang.alertError} ${error.message ? `(${error.message})` : ''}</p>`;
    } finally {
        elements.generateBtn.disabled = false;
        elements.loadingSpinner.classList.add('hidden');
    }



// --- 6. DOWNLOAD LOGIC ---
function downloadResume() {
    const rawContent = elements.resumeText.innerHTML;
    const userName = elements.userInputName.value.trim() || 'Resume';

    const htmlContent = `
        <!DOCTYPE html><html lang="${currentLang}"><head><meta charset="UTF-8"><title>Resume - ${userName}</title>
            <style>
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; color: #333; background-color: #f4f4f4; }
                .resume-download-content { max-width: 8.5in; margin: 30px auto; padding: 40px; line-height: 1.5; background-color: #fff; border: 1px solid #ddd; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
                h1, h2, h3 { color: #2c3e50; border-bottom: 1px solid #eee; padding-bottom: 5px; margin: 20px 0 10px; }
                 h1 { text-align: center; border-bottom-width: 2px; border-color: #34495e; font-size: 1.5em; margin-bottom: 25px;} /* Contact */
                 h2 { text-transform: uppercase; font-size: 1.1em; border-color: #bdc3c7; } /* Sections */
                 p { margin: 0 0 10px; }
                 ul { list-style-type: disc; margin: 0 0 15px 20px; padding: 0; }
                 li { margin-bottom: 5px; }
                 /* Ensure black text for printing if needed, but allow browser default */
                 /* @media print { * { color: #000 !important; } } */
            </style></head><body><div class="resume-download-content">${rawContent}</div></body></html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Resume_${userName.replace(/ /g, '_')}_${currentLang.toUpperCase()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}


// --- 7. INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // Attach download handler on DOMContentLoaded
    elements.downloadBtn.addEventListener('click', downloadResume);
    elements.langSelect.addEventListener('change', (e) => {
        currentLang = e.target.value;
        updateLanguageUI();
    });

    updateLanguageUI();
    initWizard();
});