import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

export default function ServicesLanding() {
    const [submitted, setSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            {/* Hero Section */}
            <section className="pt-20 pb-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <div className="inline-block mb-4 px-4 py-2 bg-teal-100 dark:bg-teal-900/30 rounded-full">
                            <span className="text-teal-700 dark:text-teal-300 font-semibold text-sm">🚀 Available for Projects</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                            Build Scalable Backend<br />
                            <span className="text-teal-600 dark:text-teal-400">That Drives Revenue</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            <span className="font-semibold text-slate-900 dark:text-white">Save 40% on infrastructure costs</span> while building systems that scale to millions of users. <span className="font-semibold text-slate-900 dark:text-white">First project delivered in 2-4 weeks.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <a href="#contact" className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
                                Let's Talk →
                            </a>
                            <a href="#services" className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all border border-slate-200 dark:border-slate-700">
                                View Services
                            </a>
                        </div>

                        {/* Social Proof */}
                        <div className="flex flex-wrap justify-center gap-8 text-center">
                            <div>
                                <div className="text-3xl font-bold text-slate-900 dark:text-white">$500K+</div>
                                <div className="text-slate-600 dark:text-slate-400">Saved in Costs</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-slate-900 dark:text-white">2-4 Weeks</div>
                                <div className="text-slate-600 dark:text-slate-400">Avg. Delivery Time</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-slate-900 dark:text-white">99.9%</div>
                                <div className="text-slate-600 dark:text-slate-400">Uptime Achieved</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Urgency + Guarantee Section */}
            <section className="py-16 px-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            ⚡ Limited Availability: Only 2 Project Slots This Month
                        </h2>
                        <p className="text-xl mb-8 text-teal-50">
                            I work with a maximum of 2 clients at a time to ensure quality and attention to detail.
                        </p>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
                            <h3 className="text-2xl font-bold mb-4">💯 My Guarantee</h3>
                            <p className="text-lg text-teal-50">
                                If I don't deliver measurable results (cost savings, performance improvements, or conversion lift) within the first 30 days, you get a <span className="font-bold text-white">full refund</span>. No questions asked.
                            </p>
                        </div>
                        <a href="#contact" className="inline-block px-10 py-5 bg-white text-teal-700 font-bold rounded-lg shadow-2xl hover:shadow-3xl transition-all text-lg">
                            Claim Your Spot Now →
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 px-6 bg-white dark:bg-slate-900">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 dark:text-white mb-4">
                            What I Offer
                        </h2>
                        <p className="text-center text-slate-600 dark:text-slate-400 mb-16 text-lg">
                            End-to-end solutions tailored to your business needs
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: "⚡",
                                    title: "Backend Development",
                                    description: "Scalable APIs that handle 10M+ requests/day. Reduce server costs by 40% while improving response times by 60%.",
                                    features: ["2-4 Week Delivery", "40% Cost Reduction", "99.9% Uptime SLA"]
                                },
                                {
                                    icon: "☁️",
                                    title: "Cloud Infrastructure",
                                    description: "AWS/GCP setup that auto-scales and self-heals. Cut infrastructure bills in half while eliminating downtime.",
                                    features: ["50% Cost Savings", "Zero Downtime", "Auto-scaling Setup"]
                                },
                                {
                                    icon: "📈",
                                    title: "Growth Engineering",
                                    description: "Marketing funnels + FB Ads integration that 3x your conversion rates. Engineering that directly drives revenue.",
                                    features: ["3x Conversion Lift", "Revenue Tracking", "ROI Optimization"]
                                }
                            ].map((service, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="p-8 bg-slate-50 dark:bg-slate-800 rounded-xl hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700"
                                >
                                    <div className="text-5xl mb-4">{service.icon}</div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 mb-6">{service.description}</p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-center text-slate-700 dark:text-slate-300">
                                                <span className="text-teal-600 dark:text-teal-400 mr-2">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Me */}
            <section className="py-20 px-6 bg-slate-50 dark:bg-slate-800">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 dark:text-white mb-4">
                            Why Your Current Setup Is Costing You Money
                        </h2>
                        <p className="text-center text-slate-600 dark:text-slate-400 mb-16 text-lg">
                            Most businesses lose $10K+ monthly on inefficient systems and missed opportunities
                        </p>

                        <div className="grid md:grid-cols-2 gap-12">
                            {[
                                {
                                    title: "Stop Bleeding Money on Infrastructure",
                                    description: "Poorly optimized systems cost 3-5x more to run. I've saved clients $500K+ by right-sizing their architecture and eliminating waste."
                                },
                                {
                                    title: "Fast Delivery = Faster ROI",
                                    description: "Every week of delay costs you potential revenue. My 2-4 week delivery means you start seeing returns immediately, not in 6 months."
                                },
                                {
                                    title: "Product-Minded Engineering",
                                    description: "I don't just build features—I build systems that drive KPIs. Every line of code is written with your business metrics in mind."
                                },
                                {
                                    title: "Risk-Free Partnership",
                                    description: "30-day money-back guarantee. If you don't see measurable improvements in performance, costs, or conversions—full refund."
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="flex gap-4"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-teal-600 dark:bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form */}
            <section id="contact" className="py-20 px-6 bg-white dark:bg-slate-900">
                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 dark:text-white mb-4">
                            Ready to Stop Losing Money?
                        </h2>
                        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 text-lg">
                            🔥 Only 2 spots left this month. Book your free consultation now.
                        </p>

                        {submitted ? (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="text-center p-12 bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 rounded-2xl border border-teal-200 dark:border-teal-700"
                            >
                                <div className="text-6xl mb-6">✅</div>
                                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Message Sent Successfully!</h3>
                                <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                                    Thanks for reaching out! I'll get back to you within 24 hours with a detailed proposal.
                                </p>
                                <div className="inline-flex items-center px-4 py-2 bg-teal-100 dark:bg-teal-900/30 rounded-full">
                                    <span className="text-teal-700 dark:text-teal-300 font-semibold text-sm">📧 Check your email for confirmation</span>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.form 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                onSubmit={handleSubmit(onSubmit)} 
                                className="space-y-8 bg-slate-50 dark:bg-slate-800 p-8 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700"
                            >
                                {/* Form Header */}
                                <div className="text-center pb-6 border-b border-slate-200 dark:border-slate-700">
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Let's Start Your Project</h3>
                                    <p className="text-slate-600 dark:text-slate-400">Fill out the form below and I'll send you a custom proposal</p>
                                </div>

                                {/* Name & Email Row */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-slate-700 dark:text-slate-300 font-semibold text-sm uppercase tracking-wide">
                                            Full Name *
                                        </label>
                                        <input
                                            {...register("name", { required: "Name is required" })}
                                            className="w-full px-4 py-4 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200 outline-none"
                                            placeholder="John Doe"
                                        />
                                        {errors.name && <span className="text-red-500 text-sm flex items-center"><span className="mr-1">⚠️</span>{errors.name.message}</span>}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-slate-700 dark:text-slate-300 font-semibold text-sm uppercase tracking-wide">
                                            Email Address *
                                        </label>
                                        <input
                                            {...register("email", { 
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^\S+@\S+$/i,
                                                    message: "Please enter a valid email"
                                                }
                                            })}
                                            className="w-full px-4 py-4 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200 outline-none"
                                            placeholder="john@company.com"
                                        />
                                        {errors.email && <span className="text-red-500 text-sm flex items-center"><span className="mr-1">⚠️</span>{errors.email.message}</span>}
                                    </div>
                                </div>

                                {/* Project Type & Budget Row */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-slate-700 dark:text-slate-300 font-semibold text-sm uppercase tracking-wide">
                                            Project Type *
                                        </label>
                                        <select
                                            {...register("projectType", { required: "Please select a project type" })}
                                            className="w-full px-4 py-4 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200 outline-none appearance-none cursor-pointer"
                                        >
                                            <option value="">Choose your service...</option>
                                            <option value="backend">🚀 Backend Development</option>
                                            <option value="cloud">☁️ Cloud Infrastructure</option>
                                            <option value="growth">📈 Growth Engineering</option>
                                            <option value="fullstack">💻 Full-Stack Project</option>
                                        </select>
                                        {errors.projectType && <span className="text-red-500 text-sm flex items-center"><span className="mr-1">⚠️</span>{errors.projectType.message}</span>}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-slate-700 dark:text-slate-300 font-semibold text-sm uppercase tracking-wide">
                                            Budget Range
                                        </label>
                                        <select
                                            {...register("budget")}
                                            className="w-full px-4 py-4 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200 outline-none appearance-none cursor-pointer"
                                        >
                                            <option value="">Select budget range...</option>
                                            <option value="<5k">💰 Less than $5,000</option>
                                            <option value="5k-10k">💰💰 $5,000 - $10,000</option>
                                            <option value="10k-25k">💰💰💰 $10,000 - $25,000</option>
                                            <option value="25k+">💰💰💰💰 $25,000+</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Project Details */}
                                <div className="space-y-2">
                                    <label className="block text-slate-700 dark:text-slate-300 font-semibold text-sm uppercase tracking-wide">
                                        Project Details *
                                    </label>
                                    <textarea
                                        {...register("message", { required: "Please describe your project" })}
                                        rows="6"
                                        className="w-full px-4 py-4 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-200 outline-none resize-none"
                                        placeholder="Tell me about your project...\n\n• What are you trying to build?\n• What's your timeline?\n• Any specific requirements?\n• Current challenges you're facing?"
                                    />
                                    {errors.message && <span className="text-red-500 text-sm flex items-center"><span className="mr-1">⚠️</span>{errors.message.message}</span>}
                                </div>

                                {/* Submit Button */}
                                <div className="pt-6">
                                    <button
                                        type="submit"
                                        className="group w-full px-8 py-5 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-lg flex items-center justify-center space-x-3 transform hover:-translate-y-1"
                                    >
                                        <span>🔥 Claim Your Spot (Only 2 Left)</span>
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </button>
                                    <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-4">
                                        🔒 Your information is secure and will never be shared
                                    </p>
                                </div>
                            </motion.form>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-12 px-6 bg-slate-900 dark:bg-black">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <p className="text-slate-400 mb-2">Prefer email?</p>
                            <a href="mailto:sanjaymurmu40work@gmail.com" className="text-teal-400 hover:text-teal-300 font-semibold text-lg">
                                sanjaymurmu40work@gmail.com
                            </a>
                        </div>
                        <div className="flex flex-wrap gap-6 text-sm">
                            <a href="/sanjaymurmu/privacy" className="text-slate-400 hover:text-teal-300 transition-colors">
                                Privacy Policy
                            </a>
                            <a href="/sanjaymurmu/terms" className="text-slate-400 hover:text-teal-300 transition-colors">
                                Terms of Service
                            </a>
                            <span className="text-slate-500">
                                © {new Date().getFullYear()} Sanjay Murmu
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
