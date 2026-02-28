import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const jobs = [
    {
        id: 'hunch',
        company: 'Hunch',
        title: 'Backend Engineer',
        date: '2022 - Present',
        description: [
            'Architected and optimized highly scalable backend services using Node.js and PostgreSQL.',
            'Reduced infrastructure costs by <span class="text-teal-600 dark:text-teal-300">$2,500+</span> per month through efficient resource utilization and query optimization.',
            'Implemented OpenSearch, achieving <span class="text-teal-600 dark:text-teal-300">sub-100ms latency</span> for complex data retrieval.',
            'Designed systems optimized for scale and low-latency data processing.',
        ],
        url: '#'
    },
    {
        id: 'censanext',
        company: 'CensaNext',
        title: 'Software Engineer',
        date: '2019 - 2022',
        description: [
            'Built robust backend microservices for an E-commerce platform managing high transaction volumes.',
            'Integrated mission-critical systems with <span class="text-teal-600 dark:text-teal-300">SAP</span> for seamless data synchronization.',
            'Collaborated closely with cross-functional teams to engineer performance-centric features.'
        ],
        url: '#'
    }
];

export default function Experience() {
    const [activeTabId, setActiveTabId] = useState(jobs[0].id);

    const activeJob = jobs.find(job => job.id === activeTabId);

    return (
        <section id="experience" className="section-padding max-w-3xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200">
                        <span className="text-teal-600 dark:text-teal-300 font-mono text-xl mr-2">02.</span>
                        Where I've Worked
                    </h2>
                    <div className="h-[1px] bg-slate-200 dark:bg-slate-700 flex-grow max-w-xs"></div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    {/* Tabs */}
                    <div className="flex overflow-x-auto md:flex-col md:overflow-visible w-full md:w-max no-scrollbar border-b md:border-b-0 md:border-l border-slate-200 dark:border-slate-700">
                        {jobs.map((job) => (
                            <button
                                key={job.id}
                                onClick={() => setActiveTabId(job.id)}
                                className={`flex-shrink-0 md:flex-shrink w-max px-5 py-3 text-sm md:text-base text-left transition-colors duration-200 uppercase font-mono tracking-wider ${activeTabId === job.id
                                    ? 'text-teal-600 dark:text-teal-300 bg-teal-50 dark:bg-light-navy border-b-2 md:border-b-0 md:border-l-2 border-teal-600 dark:border-teal-300 -ml-[2px]'
                                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-light-navy border-b-2 md:border-b-0 md:border-l-2 border-transparent -ml-[2px]'
                                    }`}
                            >
                                {job.company}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="pt-2 md:pt-0 min-h-[300px] w-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTabId}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <h3 className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-1">
                                    {activeJob.title} <span className="text-teal-600 dark:text-teal-300">@ <a href={activeJob.url} className="relative inline-block hover-underline">{activeJob.company}</a></span>
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 font-mono text-sm mb-6">
                                    {activeJob.date}
                                </p>
                                <ul className="space-y-4">
                                    {activeJob.description.map((desc, i) => (
                                        <li key={i} className="flex items-start text-slate-600 dark:text-slate-400">
                                            <span className="text-teal-600 dark:text-teal-300 mr-3 mt-1.5 flex-shrink-0 text-xs">▹</span>
                                            <span dangerouslySetInnerHTML={{ __html: desc }}></span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
