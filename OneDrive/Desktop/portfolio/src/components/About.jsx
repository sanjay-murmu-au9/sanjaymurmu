import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="section-padding">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200">
                        <span className="text-teal-600 dark:text-teal-300 font-mono text-xl mr-2">01.</span>
                        About Me
                    </h2>
                    <div className="h-[1px] bg-slate-200 dark:bg-slate-700 flex-grow max-w-xs"></div>
                </div>

                <div className="grid md:grid-cols-5 gap-12">
                    <div className="md:col-span-3 space-y-4 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                        <p>
                            Hello! I'm Sanjay, a software engineer who enjoys bridging the gap between robust backend
                            architecture and business growth. My journey in tech started with a passion for building
                            scalable systems, and over the past 4.5+ years, I've had the privilege of working across
                            various domains from e-commerce to highly specialized B2B solutions.
                        </p>
                        <p>
                            I thrive in environments where performance and reliability are critical. I've designed
                            systems that significantly reduce infrastructure costs while improving latency and
                            incorporating advanced data structures and search algorithms using technologies like
                            Node.js, PostgreSQL, and OpenSearch.
                        </p>
                        <p>
                            What sets me apart from a traditional backend engineer is my <strong className="text-teal-600 dark:text-teal-300 font-medium">Product-Mindset</strong>.
                            I have a secondary expertise in <span className="text-slate-800 dark:text-slate-200">Facebook Ads, conversion-optimized landing pages, and funnel architecture</span>.
                            This allows me to see the bigger picture—understanding how backend efficiency translates directly into user
                            acquisition, retention, and ultimately, ROI.
                        </p>
                    </div>
                    <div className="md:col-span-2 flex justify-center md:justify-end">
                        <div className="relative w-64 h-64 md:w-72 md:h-72 cursor-pointer group rounded-md">
                            <div className="absolute inset-0 bg-teal-600/20 dark:bg-teal-300/20 mix-blend-multiply rounded-md z-10 transition-all duration-300 group-hover:bg-transparent"></div>
                            <div className="w-full h-full rounded-md border-2 border-teal-600 dark:border-teal-300 absolute -bottom-4 -right-4 -z-10 transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
                            <div className="w-full h-full rounded-md overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-300">
                                <img src="/images/avatar.png" alt="Sanjay Murmu" className="w-full h-full object-cover object-center" />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
