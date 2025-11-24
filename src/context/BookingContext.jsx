import React, { createContext, useState, useContext } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState('');

    const openBooking = (serviceName = '') => {
        setSelectedService(serviceName);
        setIsModalOpen(true);
    };

    const closeBooking = () => {
        setIsModalOpen(false);
        setSelectedService('');
    };

    return (
        <BookingContext.Provider value={{ isModalOpen, selectedService, openBooking, closeBooking }}>
            {children}
        </BookingContext.Provider>
    );
};

export const useBooking = () => useContext(BookingContext);
