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
        nameLabel: " What is your full name?",
        jobLabel: " What is your most recent job title?",
        experienceLabel: " Describe your daily work duties, skills, and main tools used.",
        educationLabel: " What is your highest level of formal education?",
        certsLabel: " List any professional certifications, licenses, or specific training.",
        achievementsLabel: " List 2-3 of your key achievements.",
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
        nameLabel: " आपका पूरा नाम क्या है?",
        jobLabel: " आपका सबसे हालिया पद (Job Title) क्या है?",
        experienceLabel: " अपने दैनिक कार्य कर्तव्यों, कौशल और मुख्य उपकरणों का वर्णन करें।",
        educationLabel: " आपकी औपचारिक शिक्षा (Formal Education) का उच्चतम स्तर क्या है?",
        certsLabel: " अपने व्यावसायिक प्रमाणन (Certifications), लाइसेंस, या विशिष्ट प्रशिक्षण को सूचीबद्ध करें।",
        achievementsLabel: " अपनी 2-3 प्रमुख उपलब्धियों को सूचीबद्ध करें। ",
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
        nameLabel: " ଆପଣଙ୍କର ପୂରା ନାମ କଣ?",
        jobLabel: " ଆପଣଙ୍କର ସବୁଠାରୁ ନିକଟତମ ଚାକିରି ଶୀର୍ଷକ କ'ଣ?",
        experienceLabel: " ଆପଣଙ୍କର ଦୈନିକ କାର୍ଯ୍ୟ କର୍ତ୍ତବ୍ୟ, କୌଶଳ ଏବଂ ମୁଖ୍ୟ ଉପକରଣ ବର୍ଣ୍ଣନା କରନ୍ତୁ।",
        educationLabel: " ଆପଣଙ୍କର ଔପଚାରିକ ଶିକ୍ଷା (Formal Education) ର ସର୍ବୋଚ୍ଚ ସ୍ତର କ'ଣ?",
        certsLabel: " କୌଣସି ବୃତ୍ତିଗତ ପ୍ରମାଣପତ୍ର, ଲାଇସେନ୍ସ, କିମ୍ବା ନିର୍ଦ୍ଦିଷ୍ଟ ତାଲିମ ତାଲିକାଭୁକ୍ତ କରନ୍ତୁ।",
        achievementsLabel: " ଆପଣଙ୍କର 2-3 ମୁଖ୍ୟ ସଫଳତାଗୁଡ଼ିକୁ ତାଲିକାଭୁକ୍ତ କରନ୍ତୁ।",
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
// --- NEW: Read language from URL ---
try {
    const urlParams = new URLSearchParams(window.location.search);
    const langFromUrl = urlParams.get('lang');
    if (langFromUrl === 'hi' || langFromUrl === 'or') {
        currentLang = langFromUrl;
    } else {
        currentLang = 'en'; // Default to English if 'lang' is missing or not 'hi'/'or'
    }
} catch (e) {
    console.error("Could not read URL params, defaulting to English.", e);
    currentLang = 'en';
}
// --- End of new code ---

// --- 2. DOM Elements ---
const elements = {
    tagline: document.getElementById('tagline'),
   // langSelect: document.getElementById('language-select'),
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
    templateModal: document.getElementById('template-modal'),
    modalCloseBtn: document.getElementById('modal-close-btn'),
    templateOptions: document.querySelectorAll('.template-option-btn'),
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
        // elements.voiceBtns.forEach(button => button.style.display = 'none');
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
            // VITAL FIX: You must explicitly set the method to 'POST'
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            // Attempt to parse the serverless function's error message
            const errorBody = await response.json().catch(() => ({ message: response.statusText }));
            // If the server returned 405 (Method Not Allowed), this is where the error comes from.
            throw new Error(`Proxy call failed: ${errorBody.message}`);
        }

        const result = await response.json();
        
        if (!result.resumeText) {
             throw new Error("Proxy did not return resume text. Check Netlify logs for API key or permission issues.");
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
   //Here the new code starts (template)
   // --- REPLACE THIS BLOCK ---
elements.downloadBtn.addEventListener('click', () => {
    elements.templateModal.classList.remove('hidden');
});

// Add listener to close the modal
elements.modalCloseBtn.addEventListener('click', () => {
    elements.templateModal.classList.add('hidden');
});

// Add listeners to the template buttons
elements.templateOptions.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const templateStyle = e.currentTarget.getAttribute('data-template');
        
        // Hide modal and trigger the actual download
        elements.templateModal.classList.add('hidden');
        
        // --- IMPORTANT: Call the download function with the chosen template ---
        downloadResume(elements.resumeText.innerHTML, templateStyle);
    });
});
// --- END REPLACE BLOCK ---

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

// --- 6. DOWNLOAD LOGIC ---
// --- 6. DOWNLOAD LOGIC (Corrected Version) ---
function downloadResume(rawContent, templateStyle = 'classic') {
    
    // Get user name for the file
    const userName = elements.userInputName.value.trim() || 'Resume';

    // --- 1. Define CSS styles based on the chosen template ---
    let resumeCSS = '';

    if (templateStyle === 'classic') {
        // Classic CSS: Single column, clear sections, good for printing
        // (FIX: Added backticks `` around the CSS string)
        resumeCSS = `
            body { font-family: 'Times New Roman', serif; font-size: 12pt; max-width: 8.5in; margin: 0 auto; padding: 0.5in; }
            .resume-download-content { line-height: 1.3; }
            h1 { text-align: center; font-size: 18pt; margin: 0 0 10pt; text-transform: uppercase; }
            h2 { font-size: 14pt; margin: 10pt 0 5pt; border-bottom: 1px solid #333; text-transform: uppercase; }
            h3 { font-size: 12pt; margin: 5pt 0 2pt; font-style: italic; }
            p { margin: 0 0 5pt; }
            ul { list-style-type: disc; margin: 0 0 10pt 20pt; padding: 0; }
            li { margin-bottom: 3pt; }
            .contact-info { text-align: center; margin-bottom: 10pt; }
        `;
    } else if (templateStyle === 'modern') {
        // Modern CSS: Left-aligned contact/skills, different section style
        resumeCSS = `
            body { font-family: Arial, sans-serif; font-size: 10.5pt; max-width: 8.5in; margin: 0 auto; padding: 25px; }
            .resume-download-content { line-height: 1.4; }
            h1 { font-size: 24pt; margin: 0 0 5px; color: #4B0082; }
            .contact-info { margin-bottom: 20px; color: #555; }
            h2 { font-size: 14pt; margin: 15px 0 5px; padding-left: 10px; border-left: 3px solid #8A2BE2; text-transform: uppercase; }
            h3 { font-size: 11pt; margin: 5px 0 2px; font-weight: bold; }
            p { margin: 0 0 8px; }
            ul { list-style-type: square; margin: 0 0 15px 20px; padding: 0; }
            li { margin-bottom: 4px; }
        `;
    } 
    // You can add more 'else if' blocks here for new templates

    
    // --- 2. Create the final HTML content ---
    // (FIX: This was defined in the wrong place in your snippet)
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="${currentLang}">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Resume - ${userName}</title>
            <style>
                /* Inject the chosen template CSS here */
                ${resumeCSS}
            </style>
        </head>
        <body>
            <div class="resume-download-content">
                ${rawContent}
            </div>
        </body>
        </html>`;

    // --- 3. Create Blob and trigger download ---
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    // (FIX: Added templateStyle to the filename)
    a.download = `Resume_${userName.replace(/ /g, '_')}_${templateStyle}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}



// --- 7. INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // Attach download handler on DOMContentLoaded
    elements.downloadBtn.addEventListener('click', downloadResume);
    //elements.langSelect.addEventListener('change', (e) => {
      //  currentLang = e.target.value;
        //updateLanguageUI();
    //});

    updateLanguageUI();
    initWizard();
});
