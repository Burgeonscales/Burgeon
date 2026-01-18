import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const PrivacyModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
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
                        className="fixed z-[70] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[80vh] flex flex-col"
                    >
                        <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl relative shadow-2xl overflow-hidden flex flex-col max-h-full">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors p-1"
                            >
                                <X size={20} />
                            </button>

                            <h3 className="text-2xl font-bold mb-6">Privacy Policy</h3>

                            <div className="overflow-y-auto pr-2 custom-scrollbar text-gray-400 text-sm leading-relaxed space-y-4">
                                <p>Effective Date: {new Date().toLocaleDateString()}</p>
                                <p>At Burgeon, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or use our services.</p>

                                <h4 className="text-white font-bold mt-4">1. Information Collection</h4>
                                <p>We collect information you provide directly to us, such as when you fill out a form, apply for our services, or communicate with us. This may include your name, email address, phone number, and social media handles.</p>

                                <h4 className="text-white font-bold mt-4">2. Use of Information</h4>
                                <p>We use the information we collect to communicate with you, process your applications, provide our services, and improve our website functionality. We do not sell your personal data to third parties.</p>

                                <h4 className="text-white font-bold mt-4">3. Data Security</h4>
                                <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

                                <h4 className="text-white font-bold mt-4">4. Contact Us</h4>
                                <p>If you have any questions about this Privacy Policy, please contact us at burgeonscales@gmail.com.</p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default PrivacyModal;
