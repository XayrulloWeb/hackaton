import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import AIChatbot from './components/AIChatbot';
import suxrobPhoto from './assets/Suxrob brat.jpg';
import xayrulloPhoto from './assets/xayrullo.jpg';
import GulasalPhoto from './assets/gulasal.jpg';
import semonbekPhoto from './assets/semonbek.jpg';

import {
    Play, ChevronDown, Flame, Radio, Activity,
    Clock, TrendingDown, Shield, Zap, Map, Bell,
    Users, Server, Smartphone, GitBranch, CheckCircle2,
    ArrowRight, Globe, Building2, Siren, AlertTriangle,
    Skull, Timer, DollarSign, Heart, Target, Rocket,
    Github, Linkedin, ExternalLink, X
} from 'lucide-react';

// Animation variants
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
};

// Reusable Card Component
const GlassCard = ({ children, className = "", glow = false }) => (
    <div className={`bg-[#0d1a2d]/60 backdrop-blur-xl border border-cyan-500/10 rounded-2xl ${glow ? 'shadow-[0_0_30px_rgba(0,200,200,0.1)]' : ''} ${className}`}>
        {children}
    </div>
);

// Stats Card
const StatCard = ({ value, label, highlight = false, icon: Icon }) => (
    <div className={`p-6 rounded-xl text-center ${highlight ? 'bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30' : 'bg-[#0a1628] border border-gray-800'}`}>
        {Icon && <Icon className={`mx-auto mb-2 ${highlight ? 'text-red-400' : 'text-gray-500'}`} size={24} />}
        <div className={`text-3xl font-bold mb-1 ${highlight ? 'text-red-400' : 'text-white'}`}>{value}</div>
        <div className="text-xs text-gray-400 uppercase tracking-wider">{label}</div>
    </div>
);

// Navigation
const Navigation = () => {
    const links = [
        { href: "#muammo", label: "Muammo" },
        { href: "#yechim", label: "Yechim" },
        { href: "#qanday", label: "Qanday ishlaydi?" },
        { href: "#jamoa", label: "Jamoa" },
        { href: "#yolxarita", label: "Yo'l xaritasi" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/80 backdrop-blur-xl border-b border-gray-800/50">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Siren className="text-cyan-400" size={28} />
                    <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                        MISM MChS
                    </span>
                </div>
                <div className="hidden md:flex items-center gap-1">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
                <Link
                    to="/demo"
                    className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-black font-semibold rounded-lg text-sm hover:opacity-90 transition-opacity"
                >
                    Demo
                </Link>
            </div>
        </nav>
    );
};

export default function LandingPage() {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    return (
        <div className="min-h-screen bg-[#030712] text-white font-sans overflow-x-hidden">
            {/* Photo Modal */}
            <AnimatePresence>
                {selectedPhoto && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
                        onClick={() => setSelectedPhoto(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="relative max-w-2xl max-h-[80vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedPhoto.photo}
                                alt={selectedPhoto.name}
                                className="max-w-full max-h-[80vh] rounded-2xl object-contain"
                            />
                            <div className="absolute -bottom-16 left-0 right-0 text-center">
                                <h3 className="text-xl font-bold text-white">{selectedPhoto.name}</h3>
                                <p className="text-cyan-400">{selectedPhoto.role}</p>
                            </div>
                            <button
                                onClick={() => setSelectedPhoto(null)}
                                className="absolute -top-4 -right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                            >
                                <X size={24} className="text-white" />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Navigation />

            {/* ═══════════════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════════════ */}
            <section className="relative min-h-screen flex items-center justify-center pt-16">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-[#030712] to-[#030712]" />
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div initial="hidden" animate="visible" variants={stagger}>

                        {/* Team Badge */}
                        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20">
                            <span className="text-cyan-400">🚀</span>
                            <span className="text-sm font-medium text-cyan-300">Xlab Team</span>
                        </motion.div>

                        {/* Main Title */}
                        <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold mb-6">
                            <span className="text-white">Har bir </span>
                            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">soniya</span>
                            <span className="text-white"> hayot!</span>
                        </motion.h1>

                        {/* Subtitle - THE HOOK */}
                        <motion.p variants={fadeUp} className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                            O'zbekistonda <span className="text-red-400 font-bold">favqulodda vaziyatlar</span> sodir bo'lganda — yong'in, gaz sizishi, sel, o'z joniga qasd — yordam yetib kelguncha <span className="text-red-400 font-bold">o'rtacha 20-25 daqiqa</span> ketadi.
                        </motion.p>

                        <motion.p variants={fadeUp} className="text-2xl md:text-3xl font-bold text-white mb-12">
                            Biz bu vaqtni <span className="text-cyan-400">5-10 daqiqaga</span> qisqartiramiz.
                        </motion.p>

                        {/* Impact Numbers */}
                        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-6 mb-12">
                            <div className="text-center px-6 py-4 bg-red-500/10 rounded-xl border border-red-500/20">
                                <div className="text-3xl font-bold text-red-400">5,200+</div>
                                <div className="text-xs text-gray-400">FV hodisalari (yillik)</div>
                            </div>
                            <div className="text-center px-6 py-4 bg-orange-500/10 rounded-xl border border-orange-500/20">
                                <div className="text-3xl font-bold text-orange-400">300+</div>
                                <div className="text-xs text-gray-400">Halok bo'lganlar</div>
                            </div>
                            <div className="text-center px-6 py-4 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
                                <div className="text-3xl font-bold text-yellow-400">$100M+</div>
                                <div className="text-xs text-gray-400">Moddiy zarar</div>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
                            <a href="#muammo" className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-black font-bold rounded-xl flex items-center gap-2 hover:shadow-[0_0_30px_rgba(0,200,200,0.3)] transition-all">
                                Qanday ishlaydi? <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
                            </a>
                            <Link to="/demo" className="px-8 py-4 bg-[#0d1a2d] border border-gray-700 rounded-xl font-bold flex items-center gap-2 hover:border-cyan-500/50 transition-all">
                                <Play size={18} /> Demo ko'rish
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <ChevronDown className="text-gray-500" size={28} />
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════════
          MUAMMO (PROBLEM) SECTION - MAKE THEM FEEL THE PAIN
      ═══════════════════════════════════════════════════════════════════════ */}
            <section id="muammo" className="py-24 relative">
                <div className="container mx-auto px-6">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="text-center mb-16">
                        <motion.div variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
                            ⚠️ Hozirgi vaziyat
                        </motion.div>
                        <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="text-white">Nega odamlar </span>
                            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">halok bo'lmoqda?</span>
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-2xl mx-auto">
                            FV xizmatining javob berish tizimida jiddiy muammolar mavjud
                        </motion.p>
                    </motion.div>

                    {/* Problem Cards - EMOTIONAL */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-6 mb-16">
                        {[
                            {
                                num: "01",
                                icon: Timer,
                                title: "25 daqiqa kechikish",
                                desc: "Yong'in to'g'risida xabar olish, manzilni aniqlash, jamoani yig'ish... Bu vaqt ichida odam hayotidan mahrum bo'lishi mumkin.",
                                color: "text-red-400",
                                bg: "from-red-500/10"
                            },
                            {
                                num: "02",
                                icon: Radio,
                                title: "Tarqoq ma'lumotlar",
                                desc: "Har bir bino o'z datchigiga ega, lekin ular bir-biri bilan bog'lanmagan. Dispatcher qo'lda ma'lumot yig'adi.",
                                color: "text-orange-400",
                                bg: "from-orange-500/10"
                            },
                            {
                                num: "03",
                                icon: AlertTriangle,
                                title: "Insoniy xato",
                                desc: "Noto'g'ri manzil, unutilgan chaqiriq, sekin reaktsiya — har bir xato hayotga tushadi.",
                                color: "text-yellow-400",
                                bg: "from-yellow-500/10"
                            },
                        ].map((item, i) => (
                            <motion.div key={i} variants={fadeUp}>
                                <GlassCard className={`p-8 h-full relative overflow-hidden group hover:border-red-500/30 transition-colors bg-gradient-to-br ${item.bg} to-transparent`}>
                                    <div className="absolute top-4 right-4 text-xs font-bold px-2 py-1 rounded bg-gray-800 text-gray-500">{item.num}</div>
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center mb-6 ${item.color}`}>
                                        <item.icon size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-gray-400">{item.desc}</p>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Real Impact Box */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <div className="relative p-1 rounded-3xl bg-gradient-to-r from-red-500/50 via-orange-500/50 to-yellow-500/50">
                            <div className="bg-[#0a1628] rounded-3xl p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                                        <Skull className="text-red-400" size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500">Statistika</div>
                                        <div className="font-bold text-red-400">Real raqamlar, real oqibatlar</div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <StatCard value="1,847" label="Yillik yong'inlar" icon={Flame} />
                                    <StatCard value="127" label="Halok bo'lganlar" icon={Heart} highlight />
                                    <StatCard value="25 daq" label="O'rtacha javob vaqti" icon={Timer} />
                                    <StatCard value="$47M" label="Yillik zarar" icon={DollarSign} />
                                </div>
                                <p className="text-center text-gray-500 text-sm mt-6">
                                    *Ma'lumotlar O'zbekiston FV vazirligi hisobotlaridan olindi (2024)
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════════
          YECHIM (SOLUTION) SECTION - SHOW THE TRANSFORMATION
      ═══════════════════════════════════════════════════════════════════════ */}
            <section id="yechim" className="py-24 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
                <div className="container mx-auto px-6">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
                        <motion.div variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
                            💡 Bizning yechim
                        </motion.div>
                        <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">MISM MChS</span>
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Markazlashtirilgan Intellektual Sensor Monitoring tizimi — <br />
                            <strong className="text-white">barcha datchiklarni bitta tizimga ulash va avtomatik ogohlantirish</strong>
                        </motion.p>
                    </motion.div>

                    {/* Main Solution Card - THE TRANSFORMATION */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto mb-16">
                        <div className="relative p-1 rounded-3xl bg-gradient-to-r from-cyan-500/50 via-teal-500/50 to-emerald-500/50">
                            <div className="bg-[#0a1628] rounded-3xl p-8 md:p-12">

                                {/* Before/After Comparison */}
                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    <div className="text-center p-6 bg-red-500/5 rounded-2xl border border-red-500/20">
                                        <div className="text-sm text-red-400 font-medium mb-2">❌ HOZIR</div>
                                        <div className="text-4xl font-bold text-red-400 mb-2">~20-25 daq</div>
                                        <ul className="text-left text-sm text-gray-400 space-y-2">
                                            <li>• Qo'ng'iroq qilish kerak</li>
                                            <li>• Manzilni tushuntirish</li>
                                            <li>• Dispatcher yozib oladi</li>
                                            <li>• Jamoa chaqiriladi</li>
                                            <li>• Yo'lga chiqishadi</li>
                                        </ul>
                                    </div>
                                    <div className="text-center p-6 bg-cyan-500/5 rounded-2xl border border-cyan-500/20">
                                        <div className="text-sm text-cyan-400 font-medium mb-2">✅ MISM BILAN</div>
                                        <div className="text-4xl font-bold text-cyan-400 mb-2">~5-10 daq</div>
                                        <ul className="text-left text-sm text-gray-400 space-y-2">
                                            <li>• Datchik xavfni aniqladi (~30 sek)</li>
                                            <li>• Tizim avtomatik alert yubordi</li>
                                            <li>• GPS koordinatalar tayyor</li>
                                            <li>• Eng yaqin jamoa tanlandi</li>
                                            <li>• Sirena yoqildi</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-xl border border-cyan-500/20">
                                        <span className="text-gray-400">Reaktsiya tezligi:</span>
                                        <span className="text-3xl font-bold text-cyan-400">2-3x</span>
                                        <span className="text-gray-400">tezroq</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* ═══ MONITORING MODULES ═══ */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-16">
                        <motion.h3 variants={fadeUp} className="text-2xl font-bold text-center mb-8">
                            <span className="text-white">Monitoring </span>
                            <span className="text-cyan-400">modullari</span>
                        </motion.h3>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Gas Detection Module */}
                            <motion.div variants={fadeUp}>
                                <div className="relative p-1 rounded-2xl bg-gradient-to-r from-orange-500/30 to-red-500/30 h-full">
                                    <div className="bg-[#0a1628] rounded-2xl p-6 h-full">
                                        <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                                            <Flame size={28} className="text-white" />
                                        </div>
                                        <h4 className="text-xl font-bold mb-3 text-orange-400">🔥 Gaz sensori</h4>
                                        <p className="text-gray-300 mb-4">
                                            Gaz sizishini <span className="text-orange-400 font-bold">darhol</span> aniqlaydi va ogohlantiradi
                                        </p>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-orange-400">●</span>
                                                Tabiiy gaz, propan, metan aniqlash
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-orange-400">●</span>
                                                1 soniya ichida alert yuboriladi
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-orange-400">●</span>
                                                Avtomatik sirena va evakuatsiya signali
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-orange-400">●</span>
                                                GPS koordinatalar bilan aniq manzil
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Weather Monitoring Module */}
                            <motion.div variants={fadeUp}>
                                <div className="relative p-1 rounded-2xl bg-gradient-to-r from-blue-500/30 to-cyan-500/30 h-full">
                                    <div className="bg-[#0a1628] rounded-2xl p-6 h-full">
                                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                                            <Globe size={28} className="text-white" />
                                        </div>
                                        <h4 className="text-xl font-bold mb-3 text-cyan-400">🌊 Ob-havo monitoring</h4>
                                        <p className="text-gray-300 mb-4">
                                            Xavfli ob-havoni <span className="text-cyan-400 font-bold">oldindan</span> aniqlash
                                        </p>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-cyan-400">●</span>
                                                Sel, suv toshqini bashorati
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-cyan-400">●</span>
                                                Bo'ron va kuchli shamol ogohlantirish
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-cyan-400">●</span>
                                                Real-time ob-havo ma'lumotlari
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-cyan-400">●</span>
                                                Xavfli hududlardagi datchiklarga avtomatik signal
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>

                            {/* AI Camera Module */}
                            <motion.div variants={fadeUp}>
                                <div className="relative p-1 rounded-2xl bg-gradient-to-r from-purple-500/30 to-pink-500/30 h-full">
                                    <div className="bg-[#0a1628] rounded-2xl p-6 h-full">
                                        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                                            <Activity size={28} className="text-white" />
                                        </div>
                                        <h4 className="text-xl font-bold mb-3 text-purple-400">🤖 AI kamera (OpenCV)</h4>
                                        <p className="text-gray-300 mb-4">
                                            Sun'iy intellekt bilan <span className="text-purple-400 font-bold">xavfli vaziyatlar</span>ni aniqlash
                                        </p>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            <li className="flex items-start gap-2">
                                                <span className="text-purple-400">●</span>
                                                O'z joniga qasd qilmoqchi bo'lgan odamni aniqlash
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-purple-400">●</span>
                                                Ko'priklar va baland binolarda monitoring
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-purple-400">●</span>
                                                Darhol qutqaruv xizmatiga xabar
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-purple-400">●</span>
                                                Hayot qutqarish — asosiy maqsad
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Quick Features */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-4 gap-6">
                        {[
                            { icon: Map, title: "Real-time xarita", desc: "Barcha qurilmalar bir xaritada" },
                            { icon: Bell, title: "Avtomatik alert", desc: "3 soniyada ogohlantirish" },
                            { icon: Siren, title: "Sirena boshqaruvi", desc: "Masofadan yoqish/o'chirish" },
                            { icon: Activity, title: "Analytics", desc: "Real-time monitoring" },
                        ].map((item, i) => (
                            <motion.div key={i} variants={fadeUp}>
                                <GlassCard className="p-6 text-center hover:border-cyan-500/30 transition-colors">
                                    <item.icon className="mx-auto mb-4 text-cyan-400" size={32} />
                                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════════
          QANDAY ISHLAYDI (HOW IT WORKS) - SIMPLE FLOW
      ═══════════════════════════════════════════════════════════════════════ */}
            <section id="qanday" className="py-24">
                <div className="container mx-auto px-6">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
                        <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Qanday ishlaydi?</span>
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-gray-400 text-lg">
                            Oddiy, tez va ishonchli — avtomatik tizim
                        </motion.p>
                    </motion.div>

                    {/* Flowchart */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-4 gap-4">
                            {[
                                {
                                    num: 1,
                                    icon: Radio,
                                    title: "Datchik",
                                    desc: "Gaz, tutun yoki harorat sensori xavfni aniqlaydi",
                                    color: "from-pink-500 to-rose-500"
                                },
                                {
                                    num: 2,
                                    icon: Zap,
                                    title: "Signal",
                                    desc: "IoT qurilma serverga real vaqtda ma'lumot yuboradi",
                                    color: "from-cyan-500 to-teal-500"
                                },
                                {
                                    num: 3,
                                    icon: Server,
                                    title: "Tahlil",
                                    desc: "Tizim xavf darajasini aniqlaydi va qaror qabul qiladi",
                                    color: "from-purple-500 to-indigo-500"
                                },
                                {
                                    num: 4,
                                    icon: Siren,
                                    title: "Reaktsiya",
                                    desc: "Operator alertni oladi, sirena avtomatik yoqiladi",
                                    color: "from-red-500 to-orange-500"
                                },
                            ].map((step, i) => (
                                <motion.div key={i} variants={fadeUp} className="relative">
                                    {i < 3 && (
                                        <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-gray-600 to-gray-700 z-0" />
                                    )}
                                    <div className="relative z-10">
                                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 shadow-lg`}>
                                            {step.num}
                                        </div>
                                        <GlassCard className="p-6 text-center h-full">
                                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-3 text-white`}>
                                                <step.icon size={20} />
                                            </div>
                                            <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                                            <p className="text-gray-400 text-sm">{step.desc}</p>
                                        </GlassCard>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Total Time */}
                        <motion.div variants={fadeUp} className="text-center mt-12">
                            <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-2xl border border-cyan-500/20">
                                <Timer className="text-cyan-400" size={24} />
                                <span className="text-gray-400">Jarayon jami:</span>
                                <span className="text-3xl font-bold text-cyan-400">3 soniya</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════════
          JAMOA (TEAM) SECTION - XLAB TEAM
      ═══════════════════════════════════════════════════════════════════════ */}
            <section id="jamoa" className="py-24 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
                <div className="container mx-auto px-6">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
                        <motion.div variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
                            👥 Jamoa
                        </motion.div>
                        <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Xlab Team</span>
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-gray-400 text-lg">
                            4 ta professional — bitta maqsad
                        </motion.p>
                    </motion.div>

                    {/* Team Cards - 4 MEMBERS */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-4 gap-6 mb-12">
                        {[
                            {
                                name: "Suxrob Rajabov",
                                role: "Project Manager",
                                skills: ["Roadmap", "Analytics", "Team Lead"],
                                color: "from-cyan-500 to-blue-500",
                                photo: suxrobPhoto
                            },
                            {
                                name: "Xayrullo R.",
                                role: "Fullstack Developer",
                                skills: ["React", "Node.js", "PostgreSQL"],
                                color: "from-teal-500 to-emerald-500",
                                photo: xayrulloPhoto
                            },
                            {
                                name: "Semonbek I.",
                                role: "Computer Vision",
                                skills: ["OpenCV", "Python", "AI/ML"],
                                color: "from-purple-500 to-pink-500",
                                photo: semonbekPhoto
                            },
                            {
                                name: "Gulasal",
                                role: "UI/UX Designer",
                                skills: ["Figma", "UX Research", "Prototyping"],
                                color: "from-orange-500 to-red-500",
                                photo: GulasalPhoto
                            },
                        ].map((member, i) => (
                            <motion.div key={i} variants={fadeUp}>
                                <GlassCard className="p-6 text-center hover:border-cyan-500/30 transition-colors">
                                    {member.photo ? (
                                        <div className="relative group cursor-pointer" onClick={() => setSelectedPhoto(member)}>
                                            <img
                                                src={member.photo}
                                                alt={member.name}
                                                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-3 border-cyan-500/30 group-hover:border-cyan-400 transition-all group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="w-28 h-28 rounded-full bg-black/40 flex items-center justify-center">
                                                    <span className="text-white text-xs">👆 Kattalashtirish</span>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className={`w-28 h-28 rounded-full bg-gradient-to-br ${member.color} mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold`}>
                                            {member.name.charAt(0)}
                                        </div>
                                    )}
                                    <h4 className="text-lg font-bold mb-1">{member.name}</h4>
                                    <p className="text-cyan-400 text-sm mb-4">{member.role}</p>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {member.skills.map((skill, j) => (
                                            <span key={j} className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-400">{skill}</span>
                                        ))}
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Why Us Box */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <div className="relative p-1 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-teal-500/30 to-emerald-500/30">
                            <div className="bg-[#0a1628] rounded-3xl p-8">
                                <h3 className="text-2xl font-bold mb-6 text-center">Nega aynan biz? 💪</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        { icon: Target, text: "Real muammoni hal qilamiz — bu biznes emas, hayot qutqarish" },
                                        { icon: Rocket, text: "Ishlaydigan prototip tayyor — bu faqat g'oya emas" },
                                        { icon: CheckCircle2, text: "Full-stack jamoa — frontend, backend, IoT, design" },
                                        { icon: Heart, text: "Motivatsiya — biz bunga ishonaman va qila olamiz" },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <item.icon className="text-cyan-400 shrink-0 mt-1" size={20} />
                                            <span className="text-gray-300">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════════
          YO'L XARITASI (ROADMAP) SECTION
      ═══════════════════════════════════════════════════════════════════════ */}
            <section id="yolxarita" className="py-24">
                <div className="container mx-auto px-6">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
                        <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Yo'l xaritasi</span>
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-gray-400 text-lg">
                            G'oyadan — real mahsulotgacha
                        </motion.p>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto">
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-cyan-500 to-gray-700" />

                            {[
                                { stage: "Idea & Research", status: "done", date: "2024 dekabr", desc: "Muammoni o'rganish, potentsial foydalanuvchilar bilan suhbat, texnik imkoniyatlarni tahlil qilish" },
                                { stage: "Prototype (MVP)", status: "current", date: "2025 yanvar-fevral", desc: "Full-stack prototip: Dashboard, WebSocket alertlar, IoT integratsiya, interaktiv xarita" },
                                { stage: "Pilot Testing", status: "next", date: "2025 mart-aprel", desc: "Real binoda sinov, FV xizmati bilan hamkorlik, feedback yig'ish" },
                                { stage: "Launch & Scale", status: "future", date: "2025 yoz+", desc: "Mobil ilova, AI bashorat, viloyatlarga kengaytirish" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    className={`relative flex items-center gap-6 mb-12 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    <div className={`flex-1 ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                                        <GlassCard className={`p-6 ${item.status === 'current' ? 'border-cyan-500/50 shadow-[0_0_20px_rgba(0,200,200,0.2)]' : ''}`}>
                                            <div className="text-xs text-gray-500 mb-2">{item.date}</div>
                                            <h4 className="text-xl font-bold mb-2">{item.stage}</h4>
                                            <p className="text-gray-400 text-sm">{item.desc}</p>
                                            {item.status === 'done' && <span className="inline-block mt-3 px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">✓ Tayyor</span>}
                                            {item.status === 'current' && <span className="inline-block mt-3 px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full animate-pulse">● Hozir shu yerda</span>}
                                        </GlassCard>
                                    </div>
                                    <div className={`w-12 h-12 rounded-full shrink-0 flex items-center justify-center z-10 ${item.status === 'done' ? 'bg-green-500' :
                                        item.status === 'current' ? 'bg-cyan-500 animate-pulse' :
                                            'bg-gray-700'
                                        }`}>
                                        {item.status === 'done' ? <CheckCircle2 size={20} /> : <span className="font-bold">{i + 1}</span>}
                                    </div>
                                    <div className="flex-1 hidden md:block" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════════
          CTA SECTION - FINAL PUSH
      ═══════════════════════════════════════════════════════════════════════ */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="relative p-1 rounded-3xl bg-gradient-to-r from-cyan-500/50 via-teal-500/50 to-emerald-500/50">
                            <div className="bg-[#0a1628] rounded-3xl p-12">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Har bir <span className="text-red-400">soniya</span> muhim.
                                    <br />
                                    Har bir <span className="text-cyan-400">hayot</span> qadrli.
                                </h2>
                                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                                    MISM MChS — bu faqat texnologiya emas. Bu hayot qutqarish imkoniyati.
                                    Bugun biz prototipni ko'rsatamiz, ertaga — real binolarda ishlatamiz.
                                </p>
                                <Link
                                    to="/demo"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-black font-bold rounded-xl text-lg hover:shadow-[0_0_30px_rgba(0,200,200,0.3)] transition-all"
                                >
                                    <Play size={20} /> Demo ko'rish
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════════════════════════ */}
            <footer className="py-12 border-t border-gray-800">
                <div className="container mx-auto px-6 text-center">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Siren className="text-cyan-400" size={24} />
                        <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">MISM MChS</span>
                    </div>
                    <p className="text-gray-400 mb-4">Xlab Team taqdimoti</p>
                    <p className="text-gray-500 text-sm">© 2025 Xlab Team. Hackathon Project.</p>
                </div>
            </footer>

            {/* AI Chatbot */}
            <AIChatbot />
        </div>
    );
}
