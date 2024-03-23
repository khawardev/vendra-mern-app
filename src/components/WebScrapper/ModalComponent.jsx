/* eslint-disable react/prop-types */
import  { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
    return (
        <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="fixed inset-0 bg-black opacity-50 transition-opacity"></div>
            <div className="bg-white p-8 rounded-md z-10 transition-opacity">
                <p>This is some text inside the modal!</p>
                <button className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-md" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

const ModalComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold mb-8">React Modal Example</h1>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={handleOpenModal}>Open Modal</button>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default ModalComponent;
