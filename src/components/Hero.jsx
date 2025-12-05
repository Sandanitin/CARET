import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src="/images/1e25d302451b2b45bb1250293ae0b4ce.jpg"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Light Overlay for better text readability */}
                <div className="absolute inset-0 bg-white/60" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-red-50 border border-red-200 text-red-700 text-sm font-medium mb-6">
                        Transform Your Digital Presence
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold font-heading text-gray-900 mb-6 tracking-tight"
                >
                    Complete Digital Solutions for <br />
                    <span className="text-gradient">E-commerce Success</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl text-gray-600 max-w-3xl mb-10 leading-relaxed"
                >
                    We provide end-to-end digital services that transform your business from concept to market leader. From website development to fulfillment and automation, our integrated solutions drive growth.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Link
                        to="/services"
                        className="group inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-red-600 rounded-full hover:bg-red-700 transition-all shadow-lg hover:shadow-red-500/30"
                    >
                        Explore Services
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-200 transition-all"
                    >
                        Book Consultation
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1 h-1 bg-gray-900 rounded-full"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
