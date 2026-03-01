import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "Product Manager",
        company: "TechFlow",
        text: "Sanjay's ability to balance technically complex backend architecture with product goals is unparalleled. He built our entire data pipeline while keeping infrastructure costs shockingly low.",
    },
    {
        id: 2,
        name: "David Chen",
        role: "VP of Engineering",
        company: "ScaleGrowth",
        text: "One of the most product-minded engineers I've worked with. He not only optimized our Postgres queries for a 10x speedup but also helped redesign our onboarding funnel. Highly recommend!",
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        role: "Marketing Director",
        company: "Elevate Ads",
        text: "It's rare to find a senior backend developer who truly understands marketing APIs and funnel conversion. Sanjay bridged the gap between engineering and marketing effortlessly.",
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="section-padding">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200">
                        <span className="text-teal-600 dark:text-teal-300 font-mono text-xl mr-2">06.</span>
                        Testimonials
                    </h2>
                    <div className="h-[1px] bg-slate-200 dark:bg-slate-700 flex-grow max-w-xs"></div>
                </div>

                <div className="relative max-w-3xl mx-auto">
                    <div className="overflow-hidden relative min-h-[250px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white dark:bg-light-navy p-8 md:p-12 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 w-full"
                            >
                                <svg className="w-10 h-10 text-teal-600/20 dark:text-teal-300/20 mb-6 absolute top-6 left-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>

                                <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl italic leading-relaxed mb-8 relative z-10 font-sans">
                                    "{testimonials[currentIndex].text}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-300 font-bold text-xl font-mono">
                                        {testimonials[currentIndex].name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="text-slate-800 dark:text-slate-200 font-bold text-base">
                                            {testimonials[currentIndex].name}
                                        </h4>
                                        <p className="text-teal-600 dark:text-teal-300 text-sm font-mono">
                                            {testimonials[currentIndex].role} @ {testimonials[currentIndex].company}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={handlePrev}
                            className="p-3 rounded-full border border-slate-300 dark:border-slate-700 text-slate-500 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
                            aria-label="Previous testimonial"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <button
                            onClick={handleNext}
                            className="p-3 rounded-full border border-slate-300 dark:border-slate-700 text-slate-500 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
                            aria-label="Next testimonial"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
