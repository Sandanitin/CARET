import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services = () => {
    return (
        <section id="services" className="py-20 bg-slate-900 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold font-heading text-white mb-4"
                    >
                        Our Comprehensive <span className="text-gradient">Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        We offer a complete suite of digital solutions designed to cover every aspect of your e-commerce and online business needs.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 border border-white/5 hover:-translate-y-2"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80" />
                            </div>

                            <div className="p-6 relative">
                                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4 text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                                    <service.icon size={24} />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 h-14">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400 text-sm mb-4 line-clamp-3 h-16">
                                    {service.description}
                                </p>

                                <ul className="space-y-2 mb-6">
                                    {service.features.slice(0, 2).map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-xs text-gray-500">
                                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-primary-400 font-bold">{service.price}</span>
                                    <button className="p-2 rounded-full bg-white/5 hover:bg-primary-500 text-white transition-colors">
                                        <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;