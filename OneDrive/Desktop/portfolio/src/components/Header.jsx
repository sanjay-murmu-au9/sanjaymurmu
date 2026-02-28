import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

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

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-white/85 dark:bg-navy-900/85 backdrop-blur-md shadow-lg border-slate-200 dark:border-slate-800' : 'bg-transparent border-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-20">
                <motion.div
                    animate={{
                        opacity: [1, 0.4, 1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="text-teal-600 dark:text-teal-300 font-bold text-xl tracking-tighter cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    Sanjay Murmu
                </motion.div>

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
                                offset={-60}
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

                <div className="md:hidden flex items-center gap-4">
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
                    {/* Hamburger Icon */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-teal-600 dark:text-teal-300 cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </motion.div>
                </div>
            </div>
        </header>
    );
}
