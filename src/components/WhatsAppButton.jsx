import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useBooking } from '../context/BookingContext';

const WhatsAppButton = () => {
    const { openBooking } = useBooking();

    return (
        <button
            onClick={() => openBooking('General Inquiry')}
            className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:shadow-green-500/30 transition-all duration-300 animate-bounce-slow group"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp size={32} />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Chat with us
            </span>
        </button>
    );
};

export default WhatsAppButton;
