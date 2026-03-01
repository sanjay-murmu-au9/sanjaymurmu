import React from 'react';
import { motion } from 'framer-motion';

const articles = [
    {
        title: "Optimizing PostgreSQL for 10x Faster Queries",
        date: "October 12, 2023",
        summary: "A deep dive into indexing strategies, query planning, and connection pooling techniques that significantly reduced our database load and improved latency.",
        tags: ["PostgreSQL", "Performance", "Database"],
        link: "#"
    },
    {
        title: "Integrating Facebook Ads API with Node.js",
        date: "January 05, 2024",
        summary: "How to programmatically generate and manage ad campaigns using the Facebook Graph API to automate growth marketing workflows.",
        tags: ["Node.js", "Growth Marketing", "API"],
        link: "#"
    },
    {
        title: "Microservices vs Modular Monoliths",
        date: "March 28, 2024",
        summary: "A real-world retrospective on our architecture choices, exploring when it makes sense to decouple services and when simplicity wins.",
        tags: ["Architecture", "Backend", "System Design"],
        link: "#"
    }
];

export default function Blog() {
    return (
        <section id="blog" className="section-padding">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200">
                        <span className="text-teal-600 dark:text-teal-300 font-mono text-xl mr-2">07.</span>
                        Latest Articles
                    </h2>
                    <div className="h-[1px] bg-slate-200 dark:bg-slate-700 flex-grow max-w-xs"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="bg-white dark:bg-light-navy p-6 rounded-lg border border-slate-200 dark:border-slate-800 shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600 dark:text-teal-300 lucide lucide-folder"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /></svg>
                                <a href={article.link} className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
                                </a>
                            </div>

                            <a href={article.link} className="block group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3">{article.title}</h3>
                            </a>

                            <p className="text-slate-500 dark:text-slate-500 font-mono text-xs mb-4">{article.date}</p>

                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                {article.summary}
                            </p>

                            <ul className="flex flex-wrap gap-x-4 gap-y-2 mt-auto text-xs font-mono text-slate-500 dark:text-slate-400">
                                {article.tags.map(tag => (
                                    <li key={tag}>{tag}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
