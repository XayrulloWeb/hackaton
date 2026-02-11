import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Sparkles, AlertCircle, Wifi, WifiOff } from 'lucide-react';

// System prompt with full project info
const SYSTEM_PROMPT = `Sen MISM MChS loyihasi haqida savollarga javob beruvchi AI yordamchisan. Xlab Team tomonidan yaratilgan. 

LOYIHA HAQIDA TO'LIQ MA'LUMOT:

📌 MISM MChS (Markazlashtirilgan Intellektual Sensor Monitoring tizimi) — bu favqulodda vaziyatlarni real vaqtda monitoring qilish va boshqarish tizimi.

🎯 MUAMMO:
- O'zbekistonda 2024-yilda 1,847 ta yong'in hodisasi ro'yxatga olindi
- 127 kishi halok bo'ldi
- $47 million moddiy zarar yetkazildi  
- O'rtacha javob vaqti — 25 daqiqa (bu juda sekin!)
- Sensorlar tarqoq, bir-biri bilan bog'lanmagan
- Dispatcher qo'lda ma'lumot yig'adi — inson xatosi yuqori

💡 YECHIM - MISM:
- Barcha IoT sensorlarni (gaz, tutun, harorat) bitta tizimga ulash
- Real-time monitoring va avtomatik xavf aniqlash
- 3 soniya ichida operator alertni oladi (500x tezroq!)
- Sirena avtomatik yoqiladi
- GPS koordinatalar bilan aniq manzil
- Interaktiv xaritada barcha qurilmalar

🔥 GAZ SENSORI MODULI:
- Tabiiy gaz, propan, metan sizishini darhol aniqlash
- 1 soniya ichida alert yuboriladi
- Avtomatik sirena va evakuatsiya signali
- GPS koordinatalar bilan aniq manzil

🌊 OB-HAVO MONITORING MODULI:
- Sel, suv toshqini bashorati
- Bo'ron va kuchli shamol ogohlantirish
- Real-time ob-havo ma'lumotlari
- Xavfli hududlardagi datchiklarga avtomatik signal

🤖 AI KAMERA (OpenCV) MODULI:
- O'z joniga qasd qilmoqchi bo'lgan odamni aniqlash
- Ko'priklar va baland binolarda monitoring
- Darhol qutqaruv xizmatiga xabar
- Hayot qutqarish — asosiy maqsad

⚙️ TEXNOLOGIYALAR:
- Frontend: React, TailwindCSS, MapLibre GL, Framer Motion
- Backend: Node.js, Express, Socket.io (real-time uchun)
- Database: PostgreSQL + Prisma ORM
- IoT: ESP32, Arduino sensorlar (gaz, tutun, harorat, zilzila)
- Real-time: WebSocket protokoli


👥 JAMOA - XLAB TEAM (4 ta ishtirokchi):
1. Suxrob Rajabov — Project Manager (Roadmap, Analytics, Team Lead)
2. Xayrullo Raxmonberganov — Fullstack Developer (React, Node.js, PostgreSQL)
3. Semonbek Ikromov — Computer Vision mutaxassisi (OpenCV, Python, AI/ML)
4. Gulasal — UI/UX Designer (Figma, UX Research, Prototyping)

🗺️ YO'L XARITASI:
✅ 2024 dekabr: Idea & Research — tayyor
🔄 2025 yanvar-fevral: MVP Prototype — hozir shu yerda
⏳ 2025 mart-aprel: Pilot Testing real binolarda
⏳ 2025 yoz+: Launch & Scale (mobil ilova, AI bashorat, viloyatlarga kengaytirish)

🏆 AFZALLIKLAR:
- Reaktsiya vaqti 500x tezroq (25 daq → 3 sek)
- Avtomatik xavf aniqlash — inson xatosisiz
- Real-time monitoring va alertlar
- Sirena masofadan boshqariladi
- Interaktiv xaritada barcha qurilmalar
- Natija: kamroq yo'qotish, ko'proq saqlanagan hayotlar!

QOIDALAR:
1. Faqat MISM MChS loyihasi haqida gapirishingiz kerak
2. Javoblar qisqa, aniq va tushunarli bo'lsin (1-3 paragraf)
3. O'zbek tilida javob ber
4. Emoji ishlatishingiz mumkin
5. Agar savol loyihaga aloqador bo'lmasa, "Bu savol loyihaga aloqador emas. MISM MChS haqida so'rang!" deb javob ber
6. Har doim ijobiy va professional bo'l`;

// Fallback Q&A for when API is unavailable
const fallbackQA = [
    {
        keywords: ["nima", "what", "haqida", "about", "loyiha", "project", "mism"],
        answer: "📌 MISM MChS — bu favqulodda vaziyatlarni real vaqtda monitoring qilish va boshqarish tizimi.\n\nBiz IoT sensorlar orqali yong'in, gaz sizishi va boshqa xavflarni avtomatik aniqlaymiz. 3 soniya ichida operator xabar oladi va sirena avtomatik yoqiladi! 🚨\n\nBu tizim O'zbekistondagi FV xizmatlarini zamonaviylashtirishga qaratilgan."
    },
    {
        keywords: ["qanday", "ishlaydi", "how", "work", "jarayon", "bosqich"],
        answer: "⚡ Jarayon juda oddiy va tez:\n\n1️⃣ IoT sensor xavfni aniqlaydi (gaz, tutun, harorat)\n2️⃣ Ma'lumot serverga real vaqtda yuboriladi\n3️⃣ Tizim avtomatik tahlil qiladi\n4️⃣ Xavf bo'lsa — operator alertni oladi va sirena yoqiladi\n\n⏱️ Barchasi 3 soniya ichida amalga oshadi!\n\nHozirgi tizimda bu jarayon 25 daqiqa davom etadi."
    },
    {
        keywords: ["texnologiya", "stack", "tech", "backend", "frontend", "dastur"],
        answer: "⚙️ Biz zamonaviy texnologiyalar ishlatamiz:\n\n🔹 Frontend: React, TailwindCSS, MapLibre GL, Framer Motion\n🔹 Backend: Node.js, Express, Socket.io (real-time uchun)\n🔹 Database: PostgreSQL + Prisma ORM\n🔹 IoT: ESP32, Arduino sensorlar\n🔹 Real-time: WebSocket protokoli\n\nBarcha texnologiyalar open-source va kengaytiriladigan."
    },
    {
        keywords: ["jamoa", "team", "kim", "who", "dasturchi", "xlab"],
        answer: "👥 Xlab Team — 4 ta professional:\n\n👔 Suxrob Rajabov — Project Manager\n   (Roadmap, Analytics, Team Lead)\n\n👨‍💻 Xayrullo Raxmonberganov — Fullstack Developer\n   (React, Node.js, PostgreSQL)\n\n🤖 Semonbek Ikromov — Computer Vision\n   (OpenCV, Python, AI/ML)\n\n🎨 Gulasal — UI/UX Designer\n   (Figma, UX Research, Prototyping)\n\nBiz barchamiz bu loyihaga ishonaman! 💪"
    },
    {
        keywords: ["foyda", "benefit", "afzallik", "nima uchun", "why", "nima+uchun"],
        answer: "🏆 MISM ning asosiy afzalliklari:\n\n✅ Reaktsiya vaqti 500x tezroq\n   (25 daqiqa → 3 soniya)\n✅ Avtomatik xavf aniqlash — inson xatosisiz\n✅ Real-time monitoring va alertlar\n✅ Sirena masofadan boshqariladi\n✅ Interaktiv xaritada barcha qurilmalar\n\n❤️ Natija: kamroq yo'qotish, ko'proq saqlanagan hayotlar!"
    },
    {
        keywords: ["muammo", "problem", "vaziyat", "statistic", "raqam"],
        answer: "🔴 O'zbekistonda hozirgi vaziyat (2024):\n\n• 1,847 ta yong'in hodisasi\n• 127 kishi halok bo'ldi\n• $47 million moddiy zarar\n• O'rtacha javob vaqti — 25 daqiqa\n\n😔 Sensorlar tarqoq, dispatcher qo'lda ishlaydi, inson xatosi yuqori.\n\n🎯 Biz bu muammoni hal qilish uchun MISM ni yaratdik!"
    },
    {
        keywords: ["demo", "sinash", "test", "prototip", "prototype", "namuna"],
        answer: "🎉 Ha, bizda ishlaydigan prototip tayyor!\n\nDemo sahifasida siz:\n• Real-time dashboardni ko'rishingiz\n• IoT sensor simulyatsiyasini sinashingiz\n• Alert tizimini ko'rishingiz\n• Interaktiv xaritani ko'rishingiz mumkin\n\n🚀 Demo sahifasiga o'ting va o'zingiz sinab ko'ring!"
    },
    {
        keywords: ["kelajak", "future", "plan", "roadmap", "yol", "reja"],
        answer: "🗺️ Bizning yo'l xaritamiz:\n\n✅ 2024 dekabr: Idea & Research — tayyor\n🔄 2025 Q1: MVP Prototype — hozir shu yerda\n⏳ 2025 Q2: Real binolarda pilot sinov\n⏳ 2025 Q3: Mobil ilova\n⏳ 2026: Viloyatlarga kengaytirish\n\n🌟 Bugun prototip — ertaga real hayotlar saqlanadi!"
    },
    {
        keywords: ["salom", "hello", "hi", "hey", "assalom"],
        answer: "Assalomu alaykum! 👋\n\nMen MISM MChS loyihasi haqida savollarga javob beruvchi yordamchiman.\n\nMenga savol bering, masalan:\n• MISM nima?\n• Qanday ishlaydi?\n• Jamoa haqida\n• Texnologiyalar\n• Afzalliklar"
    },
    {
        keywords: ["rahmat", "thanks", "thank", "tashakkur", "raxmat"],
        answer: "Arzimaydi! 😊\n\nYana savollaringiz bo'lsa — bemalol so'rang. MISM MChS haqida hamma narsani tushuntirib beraman! 💬\n\nDemo sahifasini ham ko'rib chiqing! 🚀"
    },
    {
        keywords: ["sensor", "datchik", "iot", "qurilma", "hardware"],
        answer: "📡 MISM da ishlatiladigan sensorlar:\n\n🔥 Tutun sensori — yong'inni erta aniqlash\n💨 Gaz sensori — gaz sizishini aniqlash\n🌡️ Harorat sensori — o'zgarishlarni kuzatish\n📳 Zilzila sensori — seismik faollik\n\n🛠️ Hardware: ESP32, Arduino\n📶 Protokol: WiFi, WebSocket\n\nBarcha sensorlar real vaqtda serverga ma'lumot yuboradi!"
    },
    {
        keywords: ["gaz", "gas", "sizish", "metan", "propan"],
        answer: "🔥 Gaz sensori moduli:\n\nGaz sizishini DARHOL aniqlaydi va ogohlantiradi!\n\n• Tabiiy gaz, propan, metan aniqlash\n• 1 soniya ichida alert yuboriladi\n• Avtomatik sirena va evakuatsiya signali\n• GPS koordinatalar bilan aniq manzil\n\n⚡ Natija: Gaz portlashlarini oldini olish va hayot qutqarish!"
    },
    {
        keywords: ["ob-havo", "weather", "sel", "toshqin", "bo'ron", "shamol", "havo"],
        answer: "🌊 Ob-havo monitoring moduli:\n\nXavfli ob-havoni OLDINDAN aniqlash!\n\n• Sel va suv toshqini bashorati\n• Bo'ron va kuchli shamol ogohlantirish\n• Real-time ob-havo ma'lumotlari\n• Xavfli hududlardagi datchiklarga avtomatik signal\n\n⚡ Natija: Aholi xavfsiz joyga ko'chiriladi!"
    },
    {
        keywords: ["kamera", "opencv", "ai", "sun'iy", "intellekt", "o'zini", "o'ldirish", "suitsid", "ko'prik"],
        answer: "🤖 AI Kamera (OpenCV) moduli:\n\nSun'iy intellekt bilan xavfli vaziyatlarni aniqlash!\n\n• O'z joniga qasd qilmoqchi bo'lgan odamni aniqlash\n• Ko'priklar va baland binolarda monitoring\n• Darhol qutqaruv xizmatiga xabar\n• Hayot qutqarish — asosiy maqsad\n\n❤️ Bu modul orqali biz hayotlarni saqlaymiz!"
    },
    {
        keywords: ["aloqa", "contact", "bog'lanish", "telefon", "email", "pochta"],
        answer: "📞 Biz bilan bog'lanish:\n\n👥 Jamoa: Xlab Team\n📧 Hackathon loyihasi\n\n🌐 Demo sahifasini ko'ring va loyihani sinab ko'ring!\n\n💬 Savollar bo'lsa — shu chatbot orqali so'rashingiz mumkin!"
    }
];

// Find best matching answer from fallback
const findFallbackAnswer = (question) => {
    const lowerQuestion = question.toLowerCase();

    for (const qa of fallbackQA) {
        if (qa.keywords.some(keyword => lowerQuestion.includes(keyword))) {
            return qa.answer;
        }
    }

    return "🤔 Bu savolga aniq javob topa olmadim.\n\nQuyidagi mavzularda yordam bera olaman:\n• MISM nima?\n• Qanday ishlaydi?\n• Texnologiyalar\n• Jamoa haqida\n• Afzalliklar\n• Muammo va statistika\n• Demo haqida\n\n💡 Yuqoridagi mavzulardan birini tanlang!";
};

// Suggested questions
const suggestedQuestions = [
    "MISM nima?",
    "Qanday ishlaydi?",
    "Jamoa haqida",
    "Texnologiyalar"
];

export default function AIChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            type: 'bot',
            text: "Assalomu alaykum! 👋 Men MISM MChS loyihasi haqida savollarga javob beruvchi AI yordamchiman.\n\nMenga loyiha haqida istalgan savolni bering!"
        }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [useAI, setUseAI] = useState(true); // Toggle between AI and fallback
    const [apiError, setApiError] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Call Gemini API
    const callGeminiAPI = async (userMessage) => {
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

        if (!apiKey) {
            throw new Error("API kaliti topilmadi");
        }

        // Build conversation history for context
        const conversationHistory = messages.slice(-6).map(msg => ({
            role: msg.type === 'user' ? 'user' : 'model',
            parts: [{ text: msg.text }]
        }));

        const requestBody = {
            contents: [
                {
                    role: 'user',
                    parts: [{ text: SYSTEM_PROMPT }]
                },
                {
                    role: 'model',
                    parts: [{ text: "Tushundim! Men MISM MChS loyihasi haqida savollarga javob berishga tayyorman." }]
                },
                ...conversationHistory,
                {
                    role: 'user',
                    parts: [{ text: userMessage }]
                }
            ],
            generationConfig: {
                temperature: 0.7,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 512,
            }
        };

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || 'API xatosi');
        }

        const data = await response.json();

        if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
            return data.candidates[0].content.parts[0].text;
        } else {
            throw new Error('Javob olishda xatolik');
        }
    };

    const handleSend = async (text = input) => {
        if (!text.trim() || isTyping) return;

        const userMessage = text.trim();
        setInput('');

        // Add user message
        setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
        setIsTyping(true);

        // Try AI first, fallback if fails
        if (useAI && !apiError) {
            try {
                const response = await callGeminiAPI(userMessage);
                setMessages(prev => [...prev, { type: 'bot', text: response }]);
            } catch (err) {
                console.error('AI error, switching to fallback:', err);
                setApiError(true);
                // Use fallback
                setTimeout(() => {
                    const answer = findFallbackAnswer(userMessage);
                    setMessages(prev => [...prev, { type: 'bot', text: answer }]);
                }, 500);
            }
        } else {
            // Use fallback
            setTimeout(() => {
                const answer = findFallbackAnswer(userMessage);
                setMessages(prev => [...prev, { type: 'bot', text: answer }]);
            }, 500 + Math.random() * 500);
        }

        setIsTyping(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Chat Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X size={24} className="text-white" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="relative"
                        >
                            <MessageCircle size={24} className="text-white" />
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-24 right-6 z-50 w-[380px] h-[520px] bg-[#0a1628] border border-cyan-500/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-4 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border-b border-cyan-500/10">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center">
                                        <Sparkles size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-white flex items-center gap-2">
                                            MISM AI Yordamchi
                                            <span className={`px-2 py-0.5 rounded text-[10px] ${apiError ? 'bg-orange-500/20 text-orange-400' : 'bg-cyan-500/20 text-cyan-400'}`}>
                                                {apiError ? 'Offline' : 'AI'}
                                            </span>
                                        </div>
                                        <div className="text-xs text-gray-400">Loyiha haqida hamma narsani biladi</div>
                                    </div>
                                </div>
                                {apiError && (
                                    <button
                                        onClick={() => setApiError(false)}
                                        className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                                        title="AI ni qayta ulash"
                                    >
                                        <Wifi size={16} className="text-gray-400" />
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex gap-2 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.type === 'user'
                                        ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                                        : 'bg-gradient-to-r from-cyan-500 to-teal-500'
                                        }`}>
                                        {msg.type === 'user' ? (
                                            <User size={16} className="text-white" />
                                        ) : (
                                            <Bot size={16} className="text-white" />
                                        )}
                                    </div>
                                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm whitespace-pre-line ${msg.type === 'user'
                                        ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/20 text-white'
                                        : 'bg-[#0d1a2d] border border-cyan-500/10 text-gray-200'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}

                            {/* Typing indicator */}
                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex gap-2"
                                >
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center">
                                        <Bot size={16} className="text-white" />
                                    </div>
                                    <div className="bg-[#0d1a2d] border border-cyan-500/10 p-3 rounded-2xl">
                                        <div className="flex gap-1">
                                            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Suggested Questions */}
                        {messages.length <= 2 && (
                            <div className="px-4 pb-2">
                                <div className="text-xs text-gray-500 mb-2">Tez savollar:</div>
                                <div className="flex flex-wrap gap-2">
                                    {suggestedQuestions.map((q, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleSend(q)}
                                            disabled={isTyping}
                                            className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs text-cyan-400 hover:bg-cyan-500/20 transition-colors disabled:opacity-50"
                                        >
                                            {q}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Input */}
                        <div className="p-4 border-t border-cyan-500/10">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Savol yozing..."
                                    disabled={isTyping}
                                    className="flex-1 bg-[#0d1a2d] border border-cyan-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors disabled:opacity-50"
                                />
                                <button
                                    onClick={() => handleSend()}
                                    disabled={!input.trim() || isTyping}
                                    className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
                                >
                                    <Send size={18} className="text-white" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
