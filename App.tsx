import React, { useState, useRef } from 'react';
import {
  ArrowRight,
  BarChart3,
  Rocket,
  Zap,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Layers,
  Play,
  Check,
  Plus,
  Minus,
  Phone
} from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// Utils
import { smoothScrollTo } from './src/utils/smoothScroll';

// UI Components
import BackgroundMesh from './src/components/ui/BackgroundMesh';
import LiveHeroBackground from './src/components/ui/LiveHeroBackground';
import SpotlightCard from './src/components/ui/SpotlightCard';
import RevealSection from './src/components/ui/RevealSection';

// Layout
import Navbar from './src/components/layout/Navbar';

// Sections
import ApplicationForm from './src/components/sections/ApplicationForm';
import FAQSection from './src/components/sections/FAQSection';

// Modals
import CallModal from './src/components/modals/CallModal';
import PrivacyModal from './src/components/modals/PrivacyModal';
import TermsModal from './src/components/modals/TermsModal';

// Mock Data for Chart
const chartData = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 5500 },
  { month: 'Mar', revenue: 7000 },
  { month: 'Apr', revenue: 15000 },
  { month: 'May', revenue: 28000 },
  { month: 'Jun', revenue: 42000 },
  { month: 'Jul', revenue: 68000 },
];

function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);

  // Mouse move handler for the hero section interaction
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleHeroMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: clientX - left, y: clientY - top });
  };

  const handleScrollToApply = (e: React.MouseEvent) => {
    e.preventDefault();
    smoothScrollTo('apply');
  };

  return (
    <div className="relative min-h-screen font-sans selection:bg-blue-500/30 selection:text-white">
      <BackgroundMesh />
      <Navbar />

      <main>
        {/* --- Hero Section --- */}
        <section
          id="hero"
          ref={heroRef}
          className="relative min-h-screen flex items-center pt-20 overflow-hidden"
          onMouseMove={handleHeroMouseMove}
        >
          <LiveHeroBackground mouseX={mousePos.x} mouseY={mousePos.y} />

          <motion.div
            className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center"
            style={{ opacity: heroOpacity, y: heroY }}
          >
            <div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  Accepting New Creators for Q1
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
                  Turn Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Influence</span> <br />
                  Into an <span className="text-white">Empire.</span>
                </h1>
                <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
                  Burgeon builds, scales, and manages your backend revenue infrastructure.
                  We launch your products, optimize your funnels, and handle the operations—so you just keep creating.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#apply"
                    onClick={handleScrollToApply}
                    className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
                  >
                    Apply for Partnership
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <button
                    onClick={() => setIsCallModalOpen(true)}
                    className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Book a Call
                  </button>
                </div>

                <div className="mt-12 flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className={`w-8 h-8 rounded-full border-2 border-black bg-gray-${800 - i * 100}`} />
                    ))}
                  </div>
                  <p>Trusted by high-growth creators worldwide.</p>
                </div>
              </motion.div>
            </div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 bg-zinc-900/40 border border-white/10 rounded-xl p-6 backdrop-blur-md shadow-2xl skew-y-[-2deg] transform hover:skew-y-0 transition-transform duration-700">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-xl font-bold">Monthly Revenue</h3>
                    <p className="text-sm text-gray-400">Last 6 Months Performance</p>
                  </div>
                  <div className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <TrendingUp size={16} /> +127%
                  </div>
                </div>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                      <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                      <XAxis dataKey="month" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value / 1000}k`} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#111', borderColor: '#333' }}
                        itemStyle={{ color: '#fff' }}
                        formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
                      />
                      <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="#3b82f6"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorRevenue)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -right-8 -bottom-8 bg-zinc-800 p-4 rounded-lg border border-white/10 shadow-xl flex items-center gap-3 z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400">
                  <Rocket size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Conversion Rate</p>
                  <p className="font-bold text-lg">4.8%</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
            <ArrowRight className="rotate-90" />
          </div>
        </section>

        {/* --- Process Section --- */}
        <section id="process" className="py-32 relative">
          <div className="container mx-auto px-6">
            <RevealSection>
              <div className="text-center mb-24">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for Scale.</h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  We don't just "advise." We build the infrastructure, write the copy, and manage the systems.
                </p>
              </div>
            </RevealSection>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Layers className="w-8 h-8 text-blue-400" />,
                  title: "Infrastructure",
                  desc: "We build your custom landing pages, funnels, and checkout flows optimized for high conversion."
                },
                {
                  icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
                  title: "Growth Strategy",
                  desc: "Data-driven marketing campaigns that target your ideal audience and maximize lifetime value."
                },
                {
                  icon: <Cpu className="w-8 h-8 text-indigo-400" />,
                  title: "Operations",
                  desc: "Full backend management including customer support, payment processing, and comprehensive analytics."
                }
              ].map((item, i) => (
                <RevealSection key={i} delay={i * 0.1}>
                  <SpotlightCard className="p-8 h-full">
                    <div className="mb-6 bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center border border-white/10">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </SpotlightCard>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* --- Stats Section --- */}
        <section className="py-20 border-y border-white/5 bg-white/[0.02]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Revenue Generated", value: "$50M+" },
                { label: "Creators Partnered", value: "100+" },
                { label: "Average ROI", value: "8.5x" },
                { label: "Countries Reached", value: "45+" }
              ].map((stat, i) => (
                <RevealSection key={i} delay={i * 0.1}>
                  <div className="text-center">
                    <h4 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 mb-2">
                      {stat.value}
                    </h4>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">
                      {stat.label}
                    </p>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* --- Comparison Section --- */}
        <section id="pricing" className="py-32 relative">
          <div className="container mx-auto px-6 max-w-5xl">
            <RevealSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">The Burgeon Difference</h2>
                <p className="text-gray-400">Stop wasting time on "consultants" who don't do the work.</p>
              </div>
            </RevealSection>

            <RevealSection delay={0.2}>
              <div className="grid md:grid-cols-2 bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                {/* Traditional Agencies */}
                <div className="p-10 border-b md:border-b-0 md:border-r border-white/10 bg-red-900/5">
                  <h3 className="text-xl font-bold text-gray-400 mb-8 flex items-center gap-3">
                    <X className="text-red-500" /> Traditional Agencies
                  </h3>
                  <ul className="space-y-4 text-gray-400">
                    <li className="flex items-start gap-3">
                      <Minus className="w-5 h-5 text-red-500/50 mt-0.5" />
                      High monthly retainers ($5k-$10k)
                    </li>
                    <li className="flex items-start gap-3">
                      <Minus className="w-5 h-5 text-red-500/50 mt-0.5" />
                      Long-term confusing contracts
                    </li>
                    <li className="flex items-start gap-3">
                      <Minus className="w-5 h-5 text-red-500/50 mt-0.5" />
                      Slow output & "strategy decks"
                    </li>
                    <li className="flex items-start gap-3">
                      <Minus className="w-5 h-5 text-red-500/50 mt-0.5" />
                      No skin in the game
                    </li>
                  </ul>
                </div>

                {/* Burgeon */}
                <div className="p-10 bg-green-900/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-[60px] rounded-full pointer-events-none" />

                  <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                    <img src="/burgeon-logo.png" className="w-6 h-6 object-contain" alt="icon" /> Burgeon
                  </h3>
                  <ul className="space-y-4 text-white">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="font-semibold">Performance-based only (Profit Share)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5" />
                      No upfront fees or retainers
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5" />
                      Full execution & implementation
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5" />
                      Partner-level aligned incentives
                    </li>
                  </ul>
                </div>
              </div>
            </RevealSection>
          </div>
        </section>

        {/* --- FAQ --- */}
        <FAQSection />

        {/* --- Form Section --- */}
        <ApplicationForm />

        {/* --- Footer --- */}
        <footer className="py-12 border-t border-white/5 bg-black text-center relative z-10">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center">
              <img src="/burgeon-logo.png" className="h-8 w-auto mb-6 opacity-80" alt="Burgeon" />
              <div className="flex gap-8 text-sm text-gray-500 mb-8">
                <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-white transition-colors">Privacy Policy</button>
                <button onClick={() => setIsTermsOpen(true)} className="hover:text-white transition-colors">Terms of Service</button>
              </div>
              <p className="text-xs text-gray-700">
                &copy; {new Date().getFullYear()} Burgeon Agency. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>

      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <CallModal isOpen={isCallModalOpen} onClose={() => setIsCallModalOpen(false)} />
    </div>
  );
}

export default App;