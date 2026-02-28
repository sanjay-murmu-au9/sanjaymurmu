import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: 'Core Backend',
        skills: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB', 'AWS', 'GCP', 'TypeScript', 'Express', 'Microservices', 'RESTful APIs', 'GraphQL', 'Docker', 'Kubernetes']
    },
    {
        title: 'Frontend & UI',
        skills: ['React.js', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Framer Motion', 'Responsive Design', 'Web Accessibility']
    },
    {
        title: 'Data & Search',
        skills: ['OpenSearch', 'ElastiCache', 'Redis', 'SQL Optimization', 'Data Pipelines', 'Caching Strategies', 'Kafka', 'RabbitMQ']
    },
    {
        title: 'Marketing Stack & Tools',
        skills: ['FB Ads API', 'Funnel Architecture', 'Leonardo.io AI Integration', 'Conversion Optimization', 'A/B Testing', 'Git', 'CI/CD']
    }
];

export default function Skills() {
    return (
        <section id="skills" className="section-padding">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200">
                        <span className="text-teal-600 dark:text-teal-300 font-mono text-xl mr-2">03.</span>
                        Technical Skillset
                    </h2>
                    <div className="h-[1px] bg-slate-200 dark:bg-slate-700 flex-grow max-w-xs"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white dark:bg-light-navy rounded-lg p-6 border border-slate-200 dark:border-slate-800 hover:border-teal-600/50 dark:hover:border-teal-300/50 transition-colors shadow-lg"
                        >
                            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-2">
                                <span className="text-teal-600 dark:text-teal-300">&lt;</span>
                                {category.title}
                                <span className="text-teal-600 dark:text-teal-300">/&gt;</span>
                            </h3>

                            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                                {category.skills.map((skill) => (
                                    <li key={skill} className="flex items-center text-slate-600 dark:text-slate-400 group">
                                        <span className="text-teal-600 dark:text-teal-300 mr-2 text-xs opacity-70 group-hover:opacity-100 transition-opacity">▹</span>
                                        <span className="text-sm font-medium group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
