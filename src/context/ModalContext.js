import { createContext, useState } from 'react';

export const ModalContext = createContext();

const ModalContextProvider = (props) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    // Modal Open
    const openModal = () => {
        document.body.style.overflow = 'hidden';
        setIsOpen(true);
    }

    // Modal Close
    const closeModal = () => {
        document.body.style.removeProperty('overflow');
        setIsOpen(false);
    }

    return (
        <ModalContext.Provider value={{ modalIsOpen, openModal, closeModal }} > 
			{ props.children }
		</ModalContext.Provider>
    )
}

export default ModalContextProvider;