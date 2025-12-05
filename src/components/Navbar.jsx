import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm' : 'bg-white/80 backdrop-blur-sm'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center">
                            <img src="/images/LOGO.png" alt="Caret Enterprises" className="h-12 w-auto" />
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(link.path)
                                            ? 'text-red-600 bg-red-50'
                                            : 'text-gray-700 hover:text-red-600'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-red-600 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-white border-b border-gray-200"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path)
                                            ? 'text-red-600 bg-red-50'
                                            : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="w-full text-center bg-red-600 text-white block px-3 py-2 rounded-md text-base font-medium mt-4 hover:bg-red-700"
                            >
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
