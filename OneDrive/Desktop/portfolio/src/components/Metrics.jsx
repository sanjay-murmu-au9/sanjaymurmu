import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
    { value: "99.9%", label: "System Uptime" },
    { value: "$2,500+", label: "Monthly Cloud Savings" },
    { value: "<100ms", label: "OpenSearch Latency" },
    { value: "4.5+", label: "Years Experience" }
];

export default function Metrics() {
    return (
        <section className="py-12 md:py-20 relative overflow-hidden bg-slate-100 dark:bg-light-navy/50 border-y border-slate-200 dark:border-slate-800">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-600/5 dark:from-teal-300/5 to-transparent z-0"></div>

            <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
                    {metrics.map((metric, idx) => (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-white dark:hover:bg-slate-800/50 transition-colors"
                        >
                            <h4 className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-slate-200 mb-2 font-mono">
                                {metric.value}
                            </h4>
                            <p className="text-teal-600 dark:text-teal-300 text-sm md:text-base tracking-wide font-medium">
                                {metric.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
