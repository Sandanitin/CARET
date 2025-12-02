import React from 'react';
import { motion } from 'framer-motion';
import { stats } from '../constants';

const Stats = () => {
    return (
        <section className="py-20 bg-slate-800 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                            className="p-6"
                        >
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 font-heading">
                                {stat.value}
                            </h3>
                            <p className="text-primary-400 font-medium uppercase tracking-wider text-sm">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
