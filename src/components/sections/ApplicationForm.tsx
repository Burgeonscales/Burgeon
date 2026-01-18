import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import RevealSection from '../ui/RevealSection';

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        creatorName: '',
        email: '',
        phone: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const res = await fetch("https://formspree.io/f/meeeewap", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    creator_name: formData.creatorName,
                    phone: formData.phone
                })
            });

            if (res.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        <section id="apply" className="py-24 px-6 lg:px-12 relative">
            <div className="max-w-3xl mx-auto">
                <RevealSection>
                    <div className="bg-zinc-900/80 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-xl relative overflow-hidden">
                        {/* Ambient background glow for the form card */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full pointer-events-none"></div>
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-600/20 blur-[80px] rounded-full pointer-events-none"></div>

                        <div className="relative z-10">
                            {status === 'success' ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                                        <Check className="w-10 h-10 text-green-500" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4 text-white">Application Received</h3>
                                    <p className="text-gray-400 max-w-md mx-auto mb-8">
                                        Thanks for reaching out! We've received your details and will get back to you shortly to schedule your roadmap call.
                                    </p>
                                    <button
                                        onClick={() => {
                                            setStatus('idle');
                                            setFormData({ name: '', creatorName: '', email: '', phone: '' });
                                        }}
                                        className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        Submit another application
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <div className="text-center mb-10">
                                        <h2 className="text-3xl font-bold mb-4">Book a Free Call Today</h2>
                                        <p className="text-gray-400">
                                            Ready to scale? Fill out the details below and we'll be in touch to schedule your roadmap call.
                                        </p>
                                    </div>

                                    <form className="space-y-6" onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-sm font-medium text-gray-300 block">Full Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-gray-600 disabled:opacity-50"
                                                    placeholder="John Doe"
                                                    required
                                                    disabled={status === 'sending'}
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="creatorName" className="text-sm font-medium text-gray-300 block">Creator / Business Name</label>
                                                <input
                                                    type="text"
                                                    id="creatorName"
                                                    value={formData.creatorName}
                                                    onChange={handleChange}
                                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-gray-600 disabled:opacity-50"
                                                    placeholder="@username or Brand"
                                                    required
                                                    disabled={status === 'sending'}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium text-gray-300 block">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-gray-600 disabled:opacity-50"
                                                placeholder="you@example.com"
                                                required
                                                disabled={status === 'sending'}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-sm font-medium text-gray-300 block">Phone Number <span className="text-gray-500 font-normal">(Optional)</span></label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-gray-600 disabled:opacity-50"
                                                placeholder="+1 (555) 000-0000"
                                                disabled={status === 'sending'}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={status === 'sending'}
                                            className="w-full bg-white text-black font-bold py-4 rounded-lg mt-4 hover:bg-gray-200 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {status === 'sending' ? (
                                                <span className="flex items-center gap-2">
                                                    <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
                                                    Sending...
                                                </span>
                                            ) : (
                                                <>
                                                    Submit Application
                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                        {status === 'error' && (
                                            <p className="text-red-400 text-sm text-center">Something went wrong. Please try again later.</p>
                                        )}
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </RevealSection>
            </div>
        </section>
    );
};

export default ApplicationForm;
