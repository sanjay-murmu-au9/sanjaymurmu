import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "Call Center Portal",
        category: "Backend Engineering",
        description: "A comprehensive portal for call center agents with advanced image processing capabilities to handle customer document verification in real-time.",
        tech: ["Node.js", "PostgreSQL", "AWS S3", "Image Processing"],
        links: { github: "#", external: "#" },
        image: "/images/call_center.png"
    },
    {
        title: "Expo Dubai 2021",
        category: "Backend Engineering",
        description: "Scalable web application supporting massive traffic spikes during the global Expo Dubai 2021 event. Engineered for high availability and performance under heavy load.",
        tech: ["Node.js", "Redis", "Elasticsearch", "Microservices"],
        links: { github: "#", external: "#" },
        image: "/images/expo.png"
    },
    {
        title: "High-Converting Funnel Architecture",
        category: "Growth Engineering",
        description: "End-to-end implementation of marketing funnels integrating programmatic Facebook Ads APIs and Leonardo.io for dynamic ad generation, lifting conversion rates significantly.",
        tech: ["FB Ads API", "Next.js", "Leonardo.io", "PostgreSQL"],
        links: { github: "#", external: "#" },
        image: "/images/funnel.png"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="section-padding">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200">
                        <span className="text-teal-600 dark:text-teal-300 font-mono text-xl mr-2">04.</span>
                        Selected Projects
                    </h2>
                    <div className="h-[1px] bg-slate-200 dark:bg-slate-700 flex-grow max-w-xs"></div>
                </div>

                <div className="space-y-24">
                    {projects.map((project, idx) => (
                        <div key={idx} className={`relative grid md:grid-cols-12 gap-8 items-center ${idx % 2 === 0 ? '' : ''}`}>
                            {/* Project Image Placeholder */}
                            <motion.div
                                className={`col-span-12 md:col-span-7 relative group ${idx % 2 === 0 ? 'md:order-1' : 'md:order-2 md:col-start-6'}`}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="relative w-full h-64 md:h-80 bg-slate-800 rounded-md overflow-hidden cursor-pointer">
                                    <div className="absolute inset-0 bg-teal-600/20 dark:bg-teal-300/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-300 z-10"></div>
                                    <div className="w-full h-full rounded-md overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-300">
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover object-center" />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Project Content */}
                            <motion.div
                                className={`col-span-12 md:col-span-6 md:col-start-7 text-left ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left md:col-start-1 md:row-start-1'} z-10`}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? 20 : -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <p className="text-teal-600 dark:text-teal-300 font-mono text-sm mb-2">{project.category}</p>
                                <h3 className="text-slate-800 dark:text-slate-200 text-2xl font-bold mb-6 hover:text-teal-600 dark:hover:text-teal-300 transition-colors cursor-pointer">
                                    {project.title}
                                </h3>

                                <div className="bg-white dark:bg-light-navy p-6 rounded-md shadow-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                                    <p>{project.description}</p>
                                </div>

                                <ul className={`flex flex-wrap gap-4 font-mono text-sm text-slate-600 dark:text-slate-300 mb-6 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                    {project.tech.map(tech => (
                                        <li key={tech} className="whitespace-nowrap">{tech}</li>
                                    ))}
                                </ul>

                                <div className={`flex items-center gap-4 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                    {/* GitHub Icon */}
                                    <a href={project.links.github} className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                    </a>
                                    {/* External Link Icon */}
                                    <a href={project.links.external} className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
