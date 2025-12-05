import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../constants';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Process from '../components/Process';

const ServicesPage = () => {

    return (
        <div className="bg-white pt-20">
            {/* Hero Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold font-heading text-gray-900 mb-6"
                    >
                        Our <span className="text-gradient">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Comprehensive digital solutions tailored to your business needs
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-red-500/50 transition-all hover:shadow-2xl hover:shadow-red-500/10"
                            >
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
                                    <div className="absolute bottom-4 left-4">
                                        <div className="w-16 h-16 bg-red-50 backdrop-blur-sm rounded-xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors border border-gray-200">
                                            <service.icon size={32} />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="mb-6">
                                        <h4 className="text-gray-900 font-semibold mb-3">Key Features:</h4>
                                        <ul className="space-y-2">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start text-gray-600">
                                                    <Check className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                                                    <span className="text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                                        <div>
                                            <span className="text-gray-500 text-sm">Starting at</span>
                                            <p className="text-red-600 font-bold text-xl">{service.price}</p>
                                        </div>
                                        <Link
                                            to="/contact"
                                            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all flex items-center group"
                                        >
                                            Get Started
                                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Process />

            {/* CTA Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold font-heading text-gray-900 mb-6"
                    >
                        Need a Custom Solution?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
                    >
                        We can create a tailored package that perfectly fits your business needs
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-red-600 rounded-full hover:bg-red-700 transition-all shadow-lg hover:shadow-red-500/30"
                        >
                            Request Custom Quote
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;