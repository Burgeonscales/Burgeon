import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone } from 'lucide-react';

const CallModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
                    />
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="fixed z-[70] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md"
                    >
                        <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl relative shadow-2xl overflow-hidden">
                            {/* Background effects */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 blur-[50px] rounded-full pointer-events-none" />

                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors p-1"
                            >
                                <X size={20} />
                            </button>

                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-6 text-white border border-white/5">
                                    <Phone size={28} className="fill-current/10" />
                                </div>

                                <h3 className="text-2xl font-bold mb-2">Contact Us Directly</h3>
                                <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                                    Skip the forms. Speak with a growth strategist immediately to discuss your custom plan.
                                </p>

                                <div className="w-full bg-black/40 border border-white/10 rounded-xl p-6 mb-6">
                                    <p className="text-xs text-blue-400 uppercase tracking-widest font-bold mb-2">Direct Line</p>
                                    <a href="tel:7619505123" className="text-3xl font-mono font-bold text-white hover:text-blue-400 transition-colors block tracking-tight">
                                        (761) 950-5123
                                    </a>
                                </div>

                                <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    Lines are currently open
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CallModal;
