import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import { motion } from 'framer-motion';
import { ArrowRight, Code, TrendingUp, Camera, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const featuredServices = [
        {
            icon: Code,
            title: "Website Development",
            description: "Custom-built, responsive websites optimized for conversions.",
            link: "/services"
        },
        {
            icon: TrendingUp,
            title: "Digital Marketing",
            description: "Comprehensive strategies to increase visibility and drive traffic.",
            link: "/services"
        },
        {
            icon: Camera,
            title: "Product Photography",
            description: "Professional photography that increases conversions.",
            link: "/services"
        },
        {
            icon: Truck,
            title: "Fulfillment & Logistics",
            description: "End-to-end logistics solutions for your business.",
            link: "/services"
        }
    ];

    return (
        <div className="bg-white">
            <Hero />

            {/* Featured Services */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold font-heading text-gray-900 mb-4"
                        >
                            Featured <span className="text-gradient">Services</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-600 max-w-2xl mx-auto"
                        >
                            Discover our most popular solutions designed to transform your business
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-red-500/50 transition-all hover:-translate-y-2 shadow-sm hover:shadow-lg"
                            >
                                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                    <service.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                                <Link to={service.link} className="inline-flex items-center text-red-600 hover:text-red-700 text-sm font-medium">
                                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/services"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-red-600 rounded-full hover:bg-red-700 transition-all shadow-lg hover:shadow-red-500/30"
                        >
                            View All Services
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold font-heading text-gray-900 mb-4"
                        >
                            Why Choose <span className="text-gradient">Caret Enterprises</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-600 max-w-2xl mx-auto"
                        >
                            We deliver exceptional results through innovation, expertise, and dedication
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: '🎯',
                                title: 'Proven Expertise',
                                description: 'Years of experience delivering successful digital solutions across industries'
                            },
                            {
                                icon: '⚡',
                                title: 'Fast Delivery',
                                description: 'Quick turnaround times without compromising on quality or attention to detail'
                            },
                            {
                                icon: '💎',
                                title: 'Premium Quality',
                                description: 'High-quality solutions built with the latest technologies and best practices'
                            },
                            {
                                icon: '🤝',
                                title: '24/7 Support',
                                description: 'Round-the-clock support to ensure your business runs smoothly'
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-red-500/50 transition-all text-center group hover:-translate-y-2 shadow-sm hover:shadow-lg"
                            >
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Stats />

            {/* CTA Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold font-heading text-gray-900 mb-6"
                    >
                        Ready to Transform Your Business?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
                    >
                        Let's discuss how our comprehensive solutions can drive your success
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-red-600 rounded-full hover:bg-red-700 transition-all shadow-lg hover:shadow-red-500/30"
                        >
                            Get Started
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                        <Link
                            to="/about"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-900 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-all"
                        >
                            Learn About Us
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
