import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-gray-400 py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div>
                        <a href="#" className="block mb-4">
                            <img src="/images/LOGO.png" alt="Caret Enterprises" className="h-10 w-auto" />
                        </a>
                        <p className="text-sm mb-4">
                            Providing comprehensive digital solutions for e-commerce businesses of all sizes. We transform ideas into successful online ventures.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#services" className="hover:text-primary-400 transition-colors">Our Services</a></li>
                            <li><a href="#process" className="hover:text-primary-400 transition-colors">Our Process</a></li>
                            <li><a href="#contact" className="hover:text-primary-400 transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Case Studies</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Website Development</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Marketplace Management</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Digital Marketing</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Fulfillment & Logistics</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Business Consulting</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Contact Info</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start">
                                <MapPin size={16} className="mr-2 mt-1 text-primary-400" />
                                <span>123 Business Avenue, Suite 450<br />New York, NY 10001</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={16} className="mr-2 text-primary-400" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={16} className="mr-2 text-primary-400" />
                                <span>info@caretenterprises.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>&copy; 2023 Caret Enterprises. All rights reserved.</p>
                    <p className="text-gray-500 mt-2 md:mt-0">Designed and Developed by <span className="text-primary-400">Vikrin</span></p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
