import React from 'react';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
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
                            <span className="text-teal-700 dark:text-teal-300 font-semibold text-sm">🔒 Privacy & Data Protection</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">Privacy Policy</h1>
                        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="pb-20 px-6">
                <div className="max-w-4xl mx-auto space-y-12">
                    
                    {/* Business Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                            <span className="text-teal-600 dark:text-teal-400 mr-3">🏢</span>
                            Business Information
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            This website is operated by Sanjay Murmu, an individual service provider located at 
                            Govindpuri 5A Near Ram Mandir, Delhi 110020, India.
                        </p>
                    </motion.div>

                    {/* Information We Collect */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                            <span className="text-teal-600 dark:text-teal-400 mr-3">📁</span>
                            Information We Collect
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { icon: "📝", title: "Personal Information", desc: "Name, email, phone, project details you provide" },
                                { icon: "📊", title: "Technical Data", desc: "IP address, browser type, device information" },
                                { icon: "🔍", title: "Analytics Data", desc: "Usage data through Google Analytics and Facebook Pixel" },
                                { icon: "🍪", title: "Cookies", desc: "Tracking technologies for functionality and ads" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start space-x-3 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                                    <span className="text-2xl">{item.icon}</span>
                                    <div>
                                        <h3 className="font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* How We Use Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8 shadow-lg border-l-4 border-blue-500"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                            <span className="text-blue-600 dark:text-blue-400 mr-3">⚙️</span>
                            How We Use Your Information
                        </h2>
                        <div className="space-y-3">
                            {[
                                "To provide and improve our services",
                                "To communicate about your projects and inquiries", 
                                "To analyze website usage and optimize user experience",
                                "To run targeted advertising campaigns on Facebook and Google",
                                "To comply with legal obligations under Indian law"
                            ].map((use, idx) => (
                                <div key={idx} className="flex items-center text-slate-600 dark:text-slate-400">
                                    <span className="text-blue-600 dark:text-blue-400 mr-3">✓</span>
                                    {use}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Third-Party Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                            <span className="text-teal-600 dark:text-teal-400 mr-3">🔗</span>
                            Third-Party Services
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { name: "Google Analytics", purpose: "Website analytics and user behavior tracking" },
                                { name: "Facebook Pixel", purpose: "Advertising optimization and retargeting" },
                                { name: "AWS/GCP", purpose: "Hosting and data storage" },
                                { name: "Email Providers", purpose: "Communication and marketing" }
                            ].map((service, idx) => (
                                <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{service.name}</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">{service.purpose}</p>
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
                                Facebook/Meta and Google are not responsible for the content of this website or the services offered. 
                                Any claims, representations, or guarantees made on this website are solely those of Sanjay Murmu and not Facebook/Meta or Google.
                            </p>
                        </div>
                    </motion.div>

                    {/* Your Rights & Contact in Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Your Rights */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-xl p-6 shadow-lg border-l-4 border-green-500"
                        >
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                                <span className="text-green-600 dark:text-green-400 mr-2">⚖️</span>
                                Your Rights
                            </h3>
                            <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                <div>• Access your personal information</div>
                                <div>• Correct inaccurate information</div>
                                <div>• Request deletion of your data</div>
                                <div>• Opt-out of marketing communications</div>
                                <div>• File complaints with authorities</div>
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

                    {/* Additional Sections */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Data Retention */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
                        >
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center">
                                <span className="text-teal-600 dark:text-teal-400 mr-2">🗓️</span>
                                Data Retention
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                We retain data as long as necessary to provide services and comply with Indian law, including IT Act 2000.
                            </p>
                        </motion.div>

                        {/* Cookies */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
                        >
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center">
                                <span className="text-teal-600 dark:text-teal-400 mr-2">🍪</span>
                                Cookies Policy
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                We use cookies for analytics and advertising. You can disable them in browser settings but functionality may be affected.
                            </p>
                        </motion.div>

                        {/* International Transfers */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
                        >
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center">
                                <span className="text-teal-600 dark:text-teal-400 mr-2">🌍</span>
                                International Transfers
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Data may be transferred to US/other countries where our service providers operate. Appropriate safeguards are in place.
                            </p>
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