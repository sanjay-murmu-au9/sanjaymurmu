import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center pt-24 pb-12">
            <div className="max-w-5xl mx-auto px-6 md:px-12 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <p className="text-teal-600 dark:text-teal-300 font-mono mb-5 text-sm md:text-base">Hi, my name is</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                        Sanjay Murmu.
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-slate-600 dark:text-slate-400 mb-8 leading-tight">
                        Building Scalable Backend Systems <br className="hidden md:block" />
                        with a Growth-Marketing Lens.
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="max-w-2xl"
                >
                    <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 leading-relaxed">
                        I'm a backend engineer with 4.5+ years of experience specializing in Node.js, PostgreSQL, and AWS/GCP.
                        Beyond building robust APIs, I leverage my expertise in funnel architecture and marketing tech to
                        create engineering solutions that directly drive business value.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-60}
                            className="inline-block text-center px-8 py-4 border border-teal-600 dark:border-teal-300 text-teal-600 dark:text-teal-300 font-mono rounded-md hover:bg-teal-600/10 dark:hover:bg-teal-300/10 transition-colors cursor-pointer"
                        >
                            Check out my work!
                        </Link>
                        <a
                            href="/assets/resume.pdf"
                            download="Sanjay_Murmu_Resume.pdf"
                            className="inline-block text-center px-8 py-4 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-mono rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            Download Resume
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
