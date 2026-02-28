import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

export default function Contact() {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onTouched' });

    const onSubmit = (data) => {
        console.log(data);
        alert('Form functionality is just a mock for now. Thanks for reaching out!');
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
                    Get In Touch
                </h2>

                <p className="text-slate-600 dark:text-slate-400 text-base mb-12">
                    Although I'm focused on my current roles and building a path to a remote senior position,
                    my inbox is always open. Whether you have a question or just want to say hi for a remote work or HR inquiry,
                    I'll try my best to get back to you! <br className="hidden md:block" />
                    <span className="mt-4 block">
                        Email me directly at:{' '}
                        <a href="mailto:sanjaymurmu40work@gmail.com" className="text-teal-600 dark:text-teal-300 hover:underline">
                            sanjaymurmu40work@gmail.com
                        </a>
                    </span>
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="text-left space-y-6">
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
                            className="inline-block px-8 py-4 bg-teal-600/10 dark:bg-teal-300/10 border border-teal-600 dark:border-teal-300 text-teal-600 dark:text-teal-300 font-mono rounded-md hover:bg-teal-600/20 dark:hover:bg-teal-300/20 transition-colors cursor-pointer w-full md:w-auto"
                        >
                            Say Hello
                        </button>
                    </div>
                </form>
            </motion.div>
        </section>
    );
}
