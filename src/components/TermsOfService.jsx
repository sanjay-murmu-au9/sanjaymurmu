import React from 'react';
import { motion } from 'framer-motion';

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            {/* Header */}
            <section className="pt-20 pb-12 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block mb-4 px-4 py-2 bg-teal-100 dark:bg-teal-900/30 rounded-full">
                            <span className="text-teal-700 dark:text-teal-300 font-semibold text-sm">📋 Legal Information</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">Terms of Service</h1>
                        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="pb-20 px-6">
                <div className="max-w-4xl mx-auto space-y-12">
                    
                    {/* Service Provider Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                            <span className="text-teal-600 dark:text-teal-400 mr-3">🏢</span>
                            Service Provider Information
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            These services are provided by Sanjay Murmu, an individual service provider operating from 
                            Govindpuri 5A Near Ram Mandir, Delhi 110020, India. All services are governed by Indian law.
                        </p>
                    </motion.div>

                    {/* Services Offered */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                            <span className="text-teal-600 dark:text-teal-400 mr-3">⚡</span>
                            Services Offered
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                "Backend Development (Node.js, PostgreSQL, APIs)",
                                "Cloud Infrastructure Setup (AWS, GCP)", 
                                "Growth Engineering (Marketing Funnels, FB Ads Integration)",
                                "Performance Optimization and Cost Reduction"
                            ].map((service, idx) => (
                                <div key={idx} className="flex items-center text-slate-600 dark:text-slate-400">
                                    <span className="text-teal-600 dark:text-teal-400 mr-2">✓</span>
                                    {service}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Performance Guarantees - Warning Style */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-8 shadow-lg border-l-4 border-yellow-500"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                            <span className="text-yellow-600 dark:text-yellow-400 mr-3">⚠️</span>
                            Performance Guarantees & Disclaimers
                        </h2>
                        <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-lg mb-6">
                            <p className="font-semibold text-slate-900 dark:text-white">
                                IMPORTANT: All performance claims are estimates based on past results. Individual results may vary significantly.
                            </p>
                        </div>
                        <div className="space-y-3">
                            {[
                                { title: "Cost Savings", desc: "Claims of 40-50% cost reduction are based on previous client results and may not apply to all projects" },
                                { title: "Delivery Timeline", desc: "Landing pages and ads typically delivered within 7 working days. Larger projects may take 2-4 weeks depending on complexity" },
                                { title: "Performance Metrics", desc: "Uptime and performance improvements depend on various factors beyond our control" },
                                { title: "Revenue Impact", desc: "Any revenue or conversion improvements cannot be guaranteed and depend on market conditions" }
                            ].map((item, idx) => (
                                <div key={idx} className="border-l-2 border-yellow-400 pl-4">
                                    <span className="font-semibold text-slate-900 dark:text-white">{item.title}:</span>
                                    <span className="text-slate-600 dark:text-slate-400 ml-2">{item.desc}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Money-Back Guarantee */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-gradient-to-r from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 rounded-xl p-8 shadow-lg border-l-4 border-teal-500"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                            <span className="text-teal-600 dark:text-teal-400 mr-3">💯</span>
                            30-Day Money-Back Guarantee
                        </h2>
                        <div className="space-y-3">
                            {[
                                "Client must provide reasonable cooperation and timely feedback",
                                "Refund applies only if no measurable progress is made on agreed deliverables",
                                "Refund requests must be made within 30 days of project start",
                                "Completed work and intellectual property remain with the client",
                                "Refund processing may take 7-14 business days"
                            ].map((condition, idx) => (
                                <div key={idx} className="flex items-start text-slate-600 dark:text-slate-400">
                                    <span className="text-teal-600 dark:text-teal-400 mr-2 mt-1">•</span>
                                    {condition}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Advertising Disclaimer - Alert Style */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl p-8 shadow-lg border-l-4 border-red-500"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                            <span className="text-red-600 dark:text-red-400 mr-3">🚨</span>
                            Advertising Disclaimer
                        </h2>
                        <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg">
                            <p className="font-semibold text-slate-900 dark:text-white">
                                Facebook/Meta, Google, and other advertising platforms are not responsible for the content of this website, 
                                the services offered, or any claims made. Any representations, guarantees, or testimonials are solely those of 
                                Sanjay Murmu and not endorsed by these platforms.
                            </p>
                        </div>
                    </motion.div>

                    {/* Other Sections in Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Payment Terms */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
                        >
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                                <span className="text-teal-600 dark:text-teal-400 mr-2">💳</span>
                                Payment Terms
                            </h3>
                            <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                <div>• All prices in USD unless specified</div>
                                <div>• Terms agreed in writing before start</div>
                                <div>• Late payments may incur charges</div>
                                <div>• Subject to applicable Indian taxes</div>
                            </div>
                        </motion.div>

                        {/* Contact */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
                        >
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                                <span className="text-teal-600 dark:text-teal-400 mr-2">📧</span>
                                Contact Information
                            </h3>
                            <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                <div>Email: sanjaymurmu40work@gmail.com</div>
                                <div>Address: Govindpuri 5A Near Ram Mandir</div>
                                <div>Delhi 110020, India</div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* Footer */}
            <section className="py-12 px-6 bg-slate-900 dark:bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <a href="/sanjaymurmu/services" className="text-teal-400 hover:text-teal-300 font-semibold">
                        ← Back to Services
                    </a>
                </div>
            </section>
        </div>
    );
}