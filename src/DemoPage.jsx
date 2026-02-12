import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Play, CheckCircle2, Monitor, Bell, Map, Activity, Siren } from 'lucide-react';
import { Link } from 'react-router-dom';

const YOUTUBE_VIDEO_ID = "1PPeyxzXyEM"; 

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
};

export default function DemoPage() {
    return (
        <div className="min-h-screen bg-[#030712] text-white font-sans">

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/90 backdrop-blur-xl border-b border-gray-800/50">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                        <ArrowLeft size={20} />
                        <span>Bosh sahifa</span>
                    </Link>
                    <div className="flex items-center gap-2">
                        <Siren className="text-cyan-400" size={24} />
                        <span className="font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">MISM MChS</span>
                    </div>
                </div>
            </nav>

            <div className="container mx-auto px-6 pt-28 pb-16">
                <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-5xl mx-auto">

                    {/* Header */}
                    <motion.div variants={fadeUp} className="text-center mb-12">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                            🎬 Demo Video & Prototype
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                                Demoni ko'ring
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400">
                            MISM MChS tizimi qanday ishlashini real vaqtda ko'ring
                        </p>
                    </motion.div>

                    {/* Video Section */}
                    <motion.div variants={fadeUp} className="mb-16">
                        <div className="relative rounded-3xl overflow-hidden border border-gray-800 bg-[#0a1628]">
                            {/* Video Placeholder - Replace with actual video embed */}
                            <div className="aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-gray-800">
                                <iframe
                                    className="w-full h-full"
                                    src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0`}
                                    title="Demo Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </motion.div>

                    {/* Two Column: Description + Prototype Link */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">

                        {/* Description */}
                        <motion.div variants={fadeUp}>
                            <div className="bg-[#0d1a2d]/60 backdrop-blur-xl border border-cyan-500/10 rounded-2xl p-8 h-full">
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <Monitor className="text-cyan-400" size={24} />
                                    Demo tavsifi ✍️
                                </h3>
                                <p className="text-gray-400 mb-6">
                                    Ushbu demo videoda siz quyidagilarni ko'rasiz:
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        { icon: CheckCircle2, text: "Operator paneli bilan ishlash", color: "text-green-400" },
                                        { icon: Activity, text: "IoT sensor ma'lumotlarini real vaqtda qabul qilish", color: "text-cyan-400" },
                                        { icon: Bell, text: "Xavf aniqlanganda avtomatik alert va sirena", color: "text-orange-400" },
                                        { icon: Map, text: "Interaktiv xaritada qurilmalarni ko'rish", color: "text-teal-400" },
                                        { icon: Siren, text: "Global trevoga funksiyasini ishlatish", color: "text-red-400" },
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className={`w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center shrink-0 ${item.color}`}>
                                                <item.icon size={14} />
                                            </div>
                                            <span className="text-gray-300">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-8 pt-6 border-t border-gray-800">
                                    <h4 className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-wider">Demo Kirish Ma'lumotlari</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="bg-[#0a1628] border border-cyan-500/20 rounded-xl p-4 hover:border-cyan-500/40 transition-colors">
                                            <div className="text-xs text-gray-500 mb-3 font-medium uppercase tracking-wider border-b border-gray-800 pb-2">Super Admin</div>
                                            <div className="space-y-2 font-mono text-sm">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-gray-500 text-xs">Login:</span>
                                                    <span className="text-white font-bold bg-white/10 px-2 py-0.5 rounded">super</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-gray-500 text-xs">Parol:</span>
                                                    <span className="text-cyan-400 bg-cyan-900/20 px-2 py-0.5 rounded">123</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-[#0a1628] border border-cyan-500/20 rounded-xl p-4 hover:border-cyan-500/40 transition-colors">
                                            <div className="text-xs text-gray-500 mb-3 font-medium uppercase tracking-wider border-b border-gray-800 pb-2">MChS Xodimi</div>
                                            <div className="space-y-2 font-mono text-sm">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-gray-500 text-xs">Login:</span>
                                                    <span className="text-white font-bold bg-white/10 px-2 py-0.5 rounded">mchs</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-gray-500 text-xs">Parol:</span>
                                                    <span className="text-cyan-400 bg-cyan-900/20 px-2 py-0.5 rounded">123</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Prototype Link */}
                        <motion.div variants={fadeUp}>
                            <div className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-2xl p-8 h-full flex flex-col">
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                    <ExternalLink className="text-cyan-400" size={24} />
                                    Prototipni sinab ko'ring 🔗
                                </h3>
                                <p className="text-gray-400 mb-8 flex-1">
                                    Haqiqiy ishlaydigan prototipga kiring va tizimni o'zingiz sinab ko'ring.
                                    Demo rejimida barcha funksiyalar mavjud.
                                </p>

                                <div className="space-y-4">
                                    <a
                                        href="https://mchs.unusual.uz/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-center text-black font-bold rounded-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all flex items-center justify-center gap-2"
                                    >
                                        Prototipga o'tish <ExternalLink size={18} />
                                    </a>

                                    <div className="text-center">
                                        <p className="text-xs text-gray-500">
                                            * Avval <code className="bg-gray-800 px-2 py-0.5 rounded">npm run dev</code> buyrug'ini <code className="bg-gray-800 px-2 py-0.5 rounded">/client</code> va <code className="bg-gray-800 px-2 py-0.5 rounded">/server</code> papkalarida ishga tushiring
                                        </p>
                                    </div>
                                </div>

                                {/* Demo Credentials */}
                                <div className="mt-6 p-4 bg-[#0a1628] rounded-xl border border-gray-800">
                                    <p className="text-sm text-gray-400 mb-2">Demo kirish ma'lumotlari:</p>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div className="bg-[#0a1628] border border-cyan-500/20 rounded-xl p-4 hover:border-cyan-500/40 transition-colors">
                                            <div className="text-xs text-gray-500 mb-3 font-medium uppercase tracking-wider border-b border-gray-800 pb-2">Super Admin</div>
                                            <div className="space-y-2 font-mono text-sm">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-gray-500 text-xs">Login:</span>
                                                    <span className="text-white font-bold bg-white/10 px-2 py-0.5 rounded">super</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-gray-500 text-xs">Parol:</span>
                                                    <span className="text-cyan-400 bg-cyan-900/20 px-2 py-0.5 rounded">123</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-[#0a1628] border border-cyan-500/20 rounded-xl p-4 hover:border-cyan-500/40 transition-colors">
                                            <div className="text-xs text-gray-500 mb-3 font-medium uppercase tracking-wider border-b border-gray-800 pb-2">MChS Xodimi</div>
                                            <div className="space-y-2 font-mono text-sm">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-gray-500 text-xs">Login:</span>
                                                    <span className="text-white font-bold bg-white/10 px-2 py-0.5 rounded">mchs</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-gray-500 text-xs">Parol:</span>
                                                    <span className="text-cyan-400 bg-cyan-900/20 px-2 py-0.5 rounded">123</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Tech Stack Used */}
                    <motion.div variants={fadeUp}>
                        <div className="bg-[#0d1a2d]/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 text-center">
                            <h3 className="text-xl font-bold mb-6">Ishlatilgan texnologiyalar</h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                {["React", "Node.js", "PostgreSQL", "Prisma", "Socket.io", "MapLibre GL", "TailwindCSS"].map((tech, i) => (
                                    <span key={i} className="px-5 py-2 bg-gray-800/50 rounded-full text-gray-300 text-sm border border-gray-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>

            {/* Footer */}
            <footer className="py-8 border-t border-gray-800">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-gray-500 text-sm">© 2025 Allstar Team. MISM MChS System.</p>
                </div>
            </footer>
        </div>
    );
}
