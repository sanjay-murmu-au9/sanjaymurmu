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
                            I don't just write code—I architect systems that scale, reduce costs, and directly impact your bottom line.
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
                                <div className="text-3xl font-bold text-slate-900 dark:text-white">4.5+</div>
                                <div className="text-slate-600 dark:text-slate-400">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-slate-900 dark:text-white">50+</div>
                                <div className="text-slate-600 dark:text-slate-400">Projects Delivered</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-slate-900 dark:text-white">99.9%</div>
                                <div className="text-slate-600 dark:text-slate-400">Uptime Achieved</div>
                            </div>
                        </div>
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
                                    description: "Scalable APIs with Node.js, PostgreSQL, Redis. Microservices architecture that handles millions of requests.",
                                    features: ["RESTful APIs", "Database Design", "Performance Optimization"]
                                },
                                {
                                    icon: "☁️",
                                    title: "Cloud Infrastructure",
                                    description: "AWS/GCP deployment, CI/CD pipelines, monitoring. Reduce costs by 40% while improving reliability.",
                                    features: ["AWS/GCP Setup", "Auto-scaling", "Cost Optimization"]
                                },
                                {
                                    icon: "📈",
                                    title: "Growth Engineering",
                                    description: "Marketing funnels, FB Ads API integration, conversion optimization. Engineering that drives business metrics.",
                                    features: ["Funnel Architecture", "Ad Integration", "Analytics Setup"]
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
                        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 dark:text-white mb-16">
                            Why Work With Me?
                        </h2>

                        <div className="grid md:grid-cols-2 gap-12">
                            {[
                                {
                                    title: "Product-Minded Engineer",
                                    description: "I understand business metrics, not just code. Every technical decision is aligned with your revenue goals."
                                },
                                {
                                    title: "Proven Track Record",
                                    description: "Delivered systems handling 10M+ requests/day, reduced infrastructure costs by 40%, and improved conversion rates by 3x."
                                },
                                {
                                    title: "Full-Stack Perspective",
                                    description: "From database optimization to marketing funnels—I see the complete picture and optimize end-to-end."
                                },
                                {
                                    title: "Clear Communication",
                                    description: "Regular updates, transparent timelines, and technical explanations in plain English. No surprises."
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
                            Let's Build Something Great
                        </h2>
                        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 text-lg">
                            Tell me about your project and I'll get back to you within 24 hours
                        </p>

                        {submitted ? (
                            <div className="text-center p-12 bg-teal-50 dark:bg-teal-900/20 rounded-xl">
                                <div className="text-6xl mb-4">✓</div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Thanks for reaching out!</h3>
                                <p className="text-slate-600 dark:text-slate-400">I'll get back to you within 24 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div>
                                    <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-2">Name *</label>
                                    <input
                                        {...register("name", { required: true })}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 outline-none"
                                        placeholder="Your name"
                                    />
                                    {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
                                </div>

                                <div>
                                    <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-2">Email *</label>
                                    <input
                                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 outline-none"
                                        placeholder="your@email.com"
                                    />
                                    {errors.email && <span className="text-red-500 text-sm">Valid email is required</span>}
                                </div>

                                <div>
                                    <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-2">Project Type *</label>
                                    <select
                                        {...register("projectType", { required: true })}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 outline-none"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="backend">Backend Development</option>
                                        <option value="cloud">Cloud Infrastructure</option>
                                        <option value="growth">Growth Engineering</option>
                                        <option value="fullstack">Full-Stack Project</option>
                                    </select>
                                    {errors.projectType && <span className="text-red-500 text-sm">Please select a project type</span>}
                                </div>

                                <div>
                                    <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-2">Budget Range</label>
                                    <select
                                        {...register("budget")}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 outline-none"
                                    >
                                        <option value="">Select budget range</option>
                                        <option value="<5k">Less than $5,000</option>
                                        <option value="5k-10k">$5,000 - $10,000</option>
                                        <option value="10k-25k">$10,000 - $25,000</option>
                                        <option value="25k+">$25,000+</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-2">Project Details *</label>
                                    <textarea
                                        {...register("message", { required: true })}
                                        rows="5"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 outline-none"
                                        placeholder="Tell me about your project, timeline, and goals..."
                                    />
                                    {errors.message && <span className="text-red-500 text-sm">Project details are required</span>}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all text-lg"
                                >
                                    Send Message →
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-6 px-1 bg-slate-900 dark:bg-black text-center">
                {/* <p className="text-slate-400 mb-2">Prefer email?</p> */}
                <a href="mailto:sanjay@example.com" className="text-teal-400 hover:text-teal-300 font-semibold text-lg">
                    Designed & Built by Sanjay Murmu © 2026
                </a>
            </section>
        </div>
    );
}
