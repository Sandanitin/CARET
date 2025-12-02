import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, TrendingUp, CheckCircle } from 'lucide-react';

const About = () => {
    const values = [
        { icon: Target, title: "Mission-Driven", description: "Focused on delivering measurable results for our clients" },
        { icon: Users, title: "Client-Centric", description: "Your success is our top priority" },
        { icon: Award, title: "Excellence", description: "Committed to the highest quality standards" },
        { icon: TrendingUp, title: "Innovation", description: "Staying ahead with cutting-edge solutions" }
    ];

    const milestones = [
        { year: "2018", title: "Company Founded", description: "Started with a vision to transform e-commerce" },
        { year: "2020", title: "100+ Clients", description: "Reached our first major milestone" },
        { year: "2022", title: "Global Expansion", description: "Extended services to international markets" },
        { year: "2024", title: "Industry Leader", description: "Recognized as a top digital solutions provider" }
    ];

    return (
        <div className="bg-slate-900 pt-20">
            {/* Hero Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/marketing.png"
                        alt="About Background"
                        className="absolute inset-0 w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold font-heading text-white mb-6"
                    >
                        About <span className="text-gradient">DigitalSolutionsHub</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-3xl mx-auto"
                    >
                        Empowering businesses with comprehensive digital solutions since 2018
                    </motion.p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 bg-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
                                Our Story
                            </h2>
                            <p className="text-gray-400 mb-4 leading-relaxed">
                                Founded in 2018, DigitalSolutionsHub emerged from a simple vision: to help businesses thrive in the digital age. We recognized that many companies struggled with fragmented digital services, jumping between multiple providers for their website, marketing, logistics, and automation needs.
                            </p>
                            <p className="text-gray-400 mb-4 leading-relaxed">
                                We set out to change that by creating a comprehensive, integrated platform where businesses could access all their digital needs under one roof. Today, we've helped over 250 businesses transform their operations and achieve remarkable growth.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Our team of experts brings decades of combined experience in e-commerce, digital marketing, logistics, and technology. We're passionate about what we do, and it shows in the results we deliver for our clients.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img
                                src="/images/photography.png"
                                alt="Our Team"
                                className="rounded-2xl shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold font-heading text-white mb-4"
                        >
                            Our <span className="text-gradient">Values</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 max-w-2xl mx-auto"
                        >
                            The principles that guide everything we do
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-800 p-6 rounded-2xl border border-white/5 hover:border-primary-500/50 transition-all"
                            >
                                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4 text-primary-400">
                                    <value.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                                <p className="text-gray-400 text-sm">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold font-heading text-white mb-4"
                        >
                            Our <span className="text-gradient">Journey</span>
                        </motion.h2>
                    </div>

                    <div className="relative">
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-500/30" />

                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className={`flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                                    <div className="bg-slate-900 p-6 rounded-2xl border border-white/10">
                                        <span className="text-primary-400 font-bold text-2xl">{milestone.year}</span>
                                        <h3 className="text-xl font-bold text-white mt-2 mb-2">{milestone.title}</h3>
                                        <p className="text-gray-400 text-sm">{milestone.description}</p>
                                    </div>
                                </div>
                                <div className="hidden md:flex w-2/12 justify-center">
                                    <div className="w-4 h-4 bg-primary-500 rounded-full border-4 border-slate-800" />
                                </div>
                                <div className="hidden md:block w-5/12" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
