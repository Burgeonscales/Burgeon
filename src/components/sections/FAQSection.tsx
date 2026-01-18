import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import RevealSection from '../ui/RevealSection';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    toggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggle }) => {
    return (
        <div className="border-b border-white/5">
            <button
                onClick={toggle}
                className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
            >
                <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                    {question}
                </span>
                <div className={`p-2 rounded-full border border-white/5 bg-white/5 transition-all duration-300 group-hover:bg-white/10 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? <Minus className="w-4 h-4 text-white" /> : <Plus className="w-4 h-4 text-gray-400" />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 text-gray-400 leading-relaxed max-w-2xl text-sm md:text-base">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "How does the profit share model work?",
            answer: "We handle all aspects of product planning and marketing, allowing you to focus on what you do best—creating content. We operate on a performance-based model, retaining only 30% of the net profit, while you keep 70%. If the product doesn’t generate revenue, neither do we."
        },
        {
            question: "Are there really no upfront fees?",
            answer: "Yes. We invest our own resources to build your platform, funnel, and products. We believe in our ability to scale your revenue, so we take on the financial risk."
        },
        {
            question: "What requirements do I need to meet?",
            answer: "We typically work with creators who have an engaged audience of at least 10k followers on a primary platform (YouTube, Instagram, TikTok, etc.) and a desire to build a sustainable business asset."
        },
        {
            question: "Who owns the customer data and IP?",
            answer: "You do. The brand, the customer list, and the products belong to you. We act as your growth partner and operator, but you retain full ownership of your business assets."
        },
        {
            question: "How long does a launch take?",
            answer: "From strategy to live launch, our process typically takes 3-4 weeks. This includes audience analysis, product creation (or roadmap), platform build, and funnel setup."
        }
    ];

    return (
        <section id="faq" className="py-24 px-6 lg:px-12 bg-zinc-900/30">
            <RevealSection>
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
                        <p className="text-gray-400">Everything you need to know about how we work.</p>
                    </div>

                    <div className="space-y-2">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                toggle={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                        ))}
                    </div>
                </div>
            </RevealSection>
        </section>
    );
};

export default FAQSection;
