import React from 'react';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';
import { MessageCircle, Clock, Mail, Phone } from 'lucide-react';

const ContactPage = () => {
    const faqs = [
        {
            question: "How long does a typical project take?",
            answer: "Project timelines vary based on scope, but most website projects take 4-8 weeks, while comprehensive solutions may take 2-3 months."
        },
        {
            question: "Do you offer ongoing support?",
            answer: "Yes! We provide ongoing maintenance, support, and optimization services to ensure your continued success."
        },
        {
            question: "Can I customize a service package?",
            answer: "Absolutely! We specialize in creating custom solutions tailored to your specific business needs and budget."
        },
        {
            question: "What industries do you work with?",
            answer: "We work with businesses across all industries, from startups to established enterprises in retail, services, technology, and more."
        }
    ];

    return (
        <div className="bg-slate-900 pt-20">
            {/* Hero Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-950/20 to-slate-900" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold font-heading text-white mb-6"
                    >
                        Get in <span className="text-gradient">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-3xl mx-auto"
                    >
                        Let's discuss how we can help transform your business
                    </motion.p>
                </div>
            </section>

            <Contact />

            {/* Quick Contact Info */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Phone, title: "Phone", info: "+1 (555) 123-4567", subinfo: "Mon-Fri, 9am-6pm EST" },
                            { icon: Mail, title: "Email", info: "info@digitalsolutionshub.com", subinfo: "24/7 Support" },
                            { icon: Clock, title: "Business Hours", info: "Monday - Friday", subinfo: "9:00 AM - 6:00 PM EST" },
                            { icon: MessageCircle, title: "Live Chat", info: "Available Now", subinfo: "Average response: 2 min" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-800 p-6 rounded-2xl border border-white/5 text-center"
                            >
                                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary-400">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm mb-1">{item.info}</p>
                                <p className="text-gray-500 text-xs">{item.subinfo}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-slate-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold font-heading text-white mb-4"
                        >
                            Frequently Asked <span className="text-gradient">Questions</span>
                        </motion.h2>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-900 p-6 rounded-2xl border border-white/5"
                            >
                                <h3 className="text-white font-bold mb-3 text-lg">{faq.question}</h3>
                                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
