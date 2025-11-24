import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const BookingModal = () => {
    const { isModalOpen, closeBooking, selectedService } = useBooking();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: ''
    });

    if (!isModalOpen) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const message = `Hello, I would like to book a consultation for ${selectedService || 'General Inquiry'}.
    
Name: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/919581224365?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
        closeBooking();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-slide-up">
                <div className="bg-primary-900 p-6 flex justify-between items-center">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <FaWhatsapp className="text-green-400 text-2xl" />
                        Book via WhatsApp
                    </h3>
                    <button onClick={closeBooking} className="text-white/80 hover:text-white transition-colors">
                        <FaTimes size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg text-sm text-primary-800 mb-4">
                        Please provide your details before proceeding to WhatsApp.
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Patient Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all"
                            placeholder="Enter patient name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                        <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all"
                            placeholder="Enter contact number"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <textarea
                            name="address"
                            required
                            value={formData.address}
                            onChange={handleChange}
                            rows="3"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all resize-none"
                            placeholder="Enter full address"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        <FaWhatsapp size={20} />
                        Proceed to WhatsApp
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;
