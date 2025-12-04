import React from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '../constants';

const Process = () => {
    return (
        <section id="process" className="py-20 bg-slate-900 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold font-heading text-white mb-4"
                    >
                        Our Process
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        How we create your perfect closet solution
                    </motion.p>
                </div>

                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-slate-800 md:bg-transparent p-6 rounded-2xl md:p-0 text-center group"
                            >
                                <div className="w-16 h-16 mx-auto bg-slate-900 border-2 border-secondary-500 rounded-full flex items-center justify-center text-xl font-bold text-white mb-6 relative z-10 group-hover:bg-secondary-500 transition-colors duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <h3 className="text-2xl font-bold text-white mb-6">Ready to transform your space?</h3>
                    <button className="px-8 py-3 bg-gradient-to-r from-secondary-500 to-secondary-700 hover:from-secondary-600 hover:to-secondary-800 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                        Start Your Project Today
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Process;