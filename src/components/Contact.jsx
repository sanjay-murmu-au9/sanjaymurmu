import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { supabase } from '../lib/supabase';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: 'onTouched' });

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setSubmitError(null);
        
        try {
            const { data: result, error } = await supabase.functions.invoke('portfolio-contact', {
                body: {
                    name: data.name,
                    email: data.email,
                    message: data.message,
                    source: 'main-portfolio'
                }
            });

            if (error) {
                throw error;
            }

            setSubmitted(true);
            reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            if (error.message?.includes('already been submitted')) {
                setSubmitError('This email has already been submitted. I\'ll get back to you soon!');
            } else {
                setSubmitError('Failed to send message. Please try again or email directly.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section-padding">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="max-w-xl mx-auto text-center"
            >
                <p className="text-teal-600 dark:text-teal-300 font-mono text-sm md:text-base mb-4">05. What's Next?</p>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-200 mb-6">
                    Got a Million‑Dollar Idea?
                </h2>

                <p className="text-slate-600 dark:text-slate-400 text-base mb-12">
                    You bring the vision — I'll handle the entire tech side. Whether you're a founder with a product idea,
                    a business owner who needs a high-performance system built, or a team looking for a senior developer
                    to ship fast and scale smart —{' '}
                    <span className="text-teal-600 dark:text-teal-300 font-semibold">I'm available and ready to build.</span>
                </p>

                {submitted ? (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center p-8 bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 rounded-xl border border-teal-200 dark:border-teal-700"
                    >
                        <div className="text-5xl mb-4">✅</div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Message Sent!</h3>
                        <p className="text-slate-600 dark:text-slate-400">
                            Thanks for reaching out! I'll get back to you within 24 hours.
                        </p>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="text-left space-y-6">
                        {submitError && (
                            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                                <p className="text-red-700 dark:text-red-300 text-sm flex items-center">
                                    <span className="mr-2">⚠️</span>
                                    {submitError}
                                </p>
                            </div>
                        )}
                    <div>
                        <label className="block text-slate-700 dark:text-slate-300 text-sm font-medium mb-2" htmlFor="name">Name</label>
                        <input
                            id="name"
                            {...register("name", { required: "Name is required" })}
                            className={`w-full bg-white dark:bg-light-navy border ${errors.name ? 'border-red-500 dark:border-red-400' : 'border-slate-300 dark:border-slate-700'} rounded-md py-3 px-4 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-teal-600 dark:focus:border-teal-300 transition-colors`}
                            placeholder="Elon Musk"
                        />
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label className="block text-slate-700 dark:text-slate-300 text-sm font-medium mb-2" htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                            })}
                            className={`w-full bg-white dark:bg-light-navy border ${errors.email ? 'border-red-500 dark:border-red-400' : 'border-slate-300 dark:border-slate-700'} rounded-md py-3 px-4 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-teal-600 dark:focus:border-teal-300 transition-colors`}
                            placeholder="elon@mars.com"
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label className="block text-slate-700 dark:text-slate-300 text-sm font-medium mb-2" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            {...register("message", { required: "Message is required" })}
                            rows="5"
                            className={`w-full bg-white dark:bg-light-navy border ${errors.message ? 'border-red-500 dark:border-red-400' : 'border-slate-300 dark:border-slate-700'} rounded-md py-3 px-4 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-teal-600 dark:focus:border-teal-300 transition-colors resize-none`}
                            placeholder="Let's build something great..."
                        ></textarea>
                        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                    </div>

                    <div className="text-center pt-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-block px-8 py-4 bg-teal-600/10 dark:bg-teal-300/10 border border-teal-600 dark:border-teal-300 text-teal-600 dark:text-teal-300 font-mono rounded-md hover:bg-teal-600/20 dark:hover:bg-teal-300/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer w-full md:w-auto flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                'Say Hello'
                            )}
                        </button>
                    </div>
                </form>
                )}
            </motion.div>
        </section>
    );
}
