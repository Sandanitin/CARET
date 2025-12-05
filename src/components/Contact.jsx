import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-gray-900 mb-6">
                            Ready to Transform <br />
                            <span className="text-gradient">Your Business?</span>
                        </h2>
                        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                            Whether you're starting a new e-commerce venture or looking to optimize your existing operations, our team of experts is ready to help.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-red-600 flex-shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-gray-900 font-bold mb-1">Call Us</h4>
                                    <p className="text-gray-600">+1 (555) 123-4567</p>
                                    <p className="text-gray-500 text-sm">Mon-Fri, 9am-6pm EST</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-red-600 flex-shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-gray-900 font-bold mb-1">Email Us</h4>
                                    <p className="text-gray-600">info@caretenterprises.com</p>
                                    <p className="text-gray-600">sales@caretenterprises.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-red-600 flex-shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-gray-900 font-bold mb-1">Visit Us</h4>
                                    <p className="text-gray-600">123 Business Avenue, Suite 450</p>
                                    <p className="text-gray-600">New York, NY 10001, USA</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Custom Package Quote</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                                    <input type="text" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all" placeholder="John Smith" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                                    <input type="email" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input type="tel" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all" placeholder="+1 (555) 123-4567" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                                    <input type="text" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all" placeholder="Your Business Name" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Services Interested In</label>
                                <select className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all">
                                    <option>Select one or more services</option>
                                    <option>Website Development</option>
                                    <option>Digital Marketing</option>
                                    <option>Marketplace Management</option>
                                    <option>Fulfillment & Logistics</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Project Details *</label>
                                <textarea rows="4" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all" placeholder="Tell us about your business, goals, timeline, and budget..."></textarea>
                            </div>

                            <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center group shadow-lg hover:shadow-red-500/30">
                                Request Free Consultation
                                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
