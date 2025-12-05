import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-50 text-gray-600 py-12 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div>
                        <Link to="/" className="block mb-4">
                            <img src="/images/LOGO.png" alt="Caret Enterprises" className="h-10 w-auto" />
                        </Link>
                        <p className="text-sm mb-4">
                            Providing comprehensive digital solutions for e-commerce businesses of all sizes. We transform ideas into successful online ventures.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-500 hover:text-red-600 transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-500 hover:text-red-600 transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-500 hover:text-red-600 transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-500 hover:text-red-600 transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-gray-900 font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/services" className="hover:text-red-600 transition-colors">Our Services</Link></li>
                            <li><Link to="/about" className="hover:text-red-600 transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-red-600 transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-gray-900 font-bold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/services" className="hover:text-red-600 transition-colors">Website Development</Link></li>
                            <li><Link to="/services" className="hover:text-red-600 transition-colors">Marketplace Management</Link></li>
                            <li><Link to="/services" className="hover:text-red-600 transition-colors">Digital Marketing</Link></li>
                            <li><Link to="/services" className="hover:text-red-600 transition-colors">Fulfillment & Logistics</Link></li>
                            <li><Link to="/services" className="hover:text-red-600 transition-colors">Business Consulting</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-gray-900 font-bold mb-4">Contact Info</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start">
                                <MapPin size={16} className="mr-2 mt-1 text-red-600" />
                                <span>123 Business Avenue, Suite 450<br />New York, NY 10001</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={16} className="mr-2 text-red-600" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={16} className="mr-2 text-red-600" />
                                <span>info@caretenterprises.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>&copy; 2023 Caret Enterprises. All rights reserved.</p>
                    <p className="text-gray-500 mt-2 md:mt-0">Designed and Developed by <a href="https://vikrin.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700">Vikrin</a></p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
