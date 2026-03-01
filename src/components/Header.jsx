import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navItems = [
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Technical Skillset', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'Blog', to: 'blog' },
    { name: 'Contact', to: 'contact' },
];

export default function Header({ theme, toggleTheme }) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            // Close menu on scroll
            if (menuOpen) setMenuOpen(false);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [menuOpen]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled || menuOpen
                ? 'bg-white/95 dark:bg-navy-900/95 backdrop-blur-md shadow-lg border-slate-200 dark:border-slate-800'
                : 'bg-transparent border-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-20">
                <motion.div
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="text-teal-600 dark:text-teal-300 font-bold text-xl tracking-tighter cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    Sanjay Murmu
                </motion.div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 items-center">
                    {navItems.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link
                                to={item.to}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="text-sm font-medium text-slate-600 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-300 cursor-pointer transition-colors"
                                activeClass="text-teal-600 dark:text-teal-300"
                                spy={true}
                            >
                                {item.name}
                            </Link>
                        </motion.div>
                    ))}

                    <motion.button
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: navItems.length * 0.1 }}
                        onClick={toggleTheme}
                        className="p-2 mx-2 rounded-full text-slate-500 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
                        aria-label="Toggle Dark Mode"
                    >
                        {theme === 'dark' ? (
                            <SunIcon className="h-5 w-5" />
                        ) : (
                            <MoonIcon className="h-5 w-5" />
                        )}
                    </motion.button>

                    <motion.a
                        href="/assets/resume.pdf"
                        download="Sanjay_Murmu_Resume.pdf"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: (navItems.length + 1) * 0.1 }}
                        className="hidden lg:inline-flex px-4 py-2 border border-teal-600 dark:border-teal-300 text-teal-600 dark:text-teal-300 text-sm font-mono rounded hover:bg-teal-600/10 dark:hover:bg-teal-300/10 transition-colors"
                    >
                        Resume
                    </motion.a>
                </nav>

                {/* Mobile Controls */}
                <div className="md:hidden flex items-center gap-3">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full text-slate-500 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        aria-label="Toggle Dark Mode"
                    >
                        {theme === 'dark' ? (
                            <SunIcon className="h-5 w-5" />
                        ) : (
                            <MoonIcon className="h-5 w-5" />
                        )}
                    </button>

                    {/* Hamburger / Close Button */}
                    <button
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className="p-2 rounded-lg text-teal-600 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? (
                            <XMarkIcon className="h-6 w-6" />
                        ) : (
                            <Bars3Icon className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="md:hidden overflow-hidden bg-white/95 dark:bg-navy-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800"
                    >
                        <nav className="flex flex-col px-6 py-4 gap-1">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.25, delay: index * 0.05 }}
                                >
                                    <Link
                                        to={item.to}
                                        smooth={true}
                                        duration={500}
                                        offset={-80}
                                        className="block py-3 px-4 rounded-lg text-base font-medium text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-300 hover:bg-teal-50 dark:hover:bg-slate-800 cursor-pointer transition-colors"
                                        activeClass="text-teal-600 dark:text-teal-300 bg-teal-50 dark:bg-slate-800"
                                        spy={true}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}

                            {/* Resume Button */}
                            <motion.a
                                href="/assets/resume.pdf"
                                download="Sanjay_Murmu_Resume.pdf"
                                initial={{ opacity: 0, x: -16 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, delay: navItems.length * 0.05 }}
                                onClick={() => setMenuOpen(false)}
                                className="mt-3 mx-4 py-3 text-center border border-teal-600 dark:border-teal-300 text-teal-600 dark:text-teal-300 text-sm font-mono rounded-lg hover:bg-teal-600/10 dark:hover:bg-teal-300/10 transition-colors"
                            >
                                Resume ↓
                            </motion.a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
