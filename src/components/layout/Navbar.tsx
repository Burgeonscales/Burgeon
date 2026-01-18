import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { smoothScrollTo } from '../../utils/smoothScroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Updated nav links: 'Process' now points to the second section (#process)
    const navLinks = [
        { label: 'Process', id: 'process' },
        { label: 'Pricing', id: 'pricing' },
        { label: 'FAQ', id: 'faq' }
    ];

    return (
        <nav className="fixed top-0 w-full z-50 glass-nav h-16 flex items-center justify-between px-6 lg:px-12">
            <div className="flex items-center">
                <img
                    src="/burgeon-logo.png"
                    alt="Burgeon"
                    className="h-20 w-auto object-contain"
                />
            </div>

            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((item) => (
                    <a
                        key={item.label}
                        href={`#${item.id}`}
                        onClick={(e) => {
                            e.preventDefault();
                            smoothScrollTo(item.id);
                        }}
                        className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                    >
                        {item.label}
                    </a>
                ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
                <a
                    href="#apply"
                    onClick={(e) => { e.preventDefault(); smoothScrollTo('apply'); }}
                    className="px-4 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                    Apply Now
                </a>
            </div>

            <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X /> : <Menu />}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 md:hidden">
                    {navLinks.map((item) => (
                        <a
                            key={item.label}
                            href={`#${item.id}`}
                            className="text-lg font-medium text-gray-300"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsOpen(false);
                                smoothScrollTo(item.id);
                            }}
                        >
                            {item.label}
                        </a>
                    ))}
                    <button
                        onClick={() => {
                            setIsOpen(false);
                            smoothScrollTo('apply');
                        }}
                        className="w-full py-3 mt-4 text-center font-bold bg-white text-black rounded-lg"
                    >
                        Apply Now
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
