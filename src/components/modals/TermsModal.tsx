import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const TermsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
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

                            <h3 className="text-2xl font-bold mb-6">Terms of Service</h3>

                            <div className="overflow-y-auto pr-2 custom-scrollbar text-gray-400 text-sm leading-relaxed space-y-4">
                                <p>Effective Date: {new Date().toLocaleDateString()}</p>
                                <p>Welcome to Burgeon. By accessing our website or using our services, you agree to be bound by these Terms of Service.</p>

                                <h4 className="text-white font-bold mt-4">1. Services</h4>
                                <p>Burgeon provides revenue scaling services for creators, including product planning, marketing strategies, and backend operations. We operate on a performance-based model as described on our website.</p>

                                <h4 className="text-white font-bold mt-4">2. User Responsibilities</h4>
                                <p>You agree to provide accurate information when applying for our services. You retain ownership of your content and brand.</p>

                                <h4 className="text-white font-bold mt-4">3. Intellectual Property</h4>
                                <p>All content and materials provided by Burgeon, excluding your specific brand assets, remain the property of Burgeon Agency.</p>

                                <h4 className="text-white font-bold mt-4">4. Limitation of Liability</h4>
                                <p>Burgeon shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>

                                <h4 className="text-white font-bold mt-4">5. Modifications</h4>
                                <p>We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of the new terms.</p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default TermsModal;
