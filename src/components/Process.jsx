import React from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '../constants';
import { Link } from 'react-router-dom';

const Process = () => {
    return (
        <section id="process" className="py-20 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold font-heading text-gray-900 mb-4"
                    >
                        Our Process
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto"
                    >
                        How we create your perfect digital solution
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
                                className="bg-white md:bg-transparent p-6 rounded-2xl md:p-0 text-center group border border-gray-200 md:border-0"
                            >
                                <div className="w-16 h-16 mx-auto bg-white border-2 border-red-600 rounded-full flex items-center justify-center text-xl font-bold text-gray-900 mb-6 relative z-10 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 shadow-lg">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to transform your business?</h3>
                    <Link
                        to="/contact"
                        className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/30"
                    >
                        Start Your Project Today
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Process;