import React, { FC } from 'react'
import './Modal.scss'

interface ModalProps {
    isActive: boolean;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactElement
}

export const Modal: FC<ModalProps> = ({ isActive, setIsActive, children }) => {


    if (isActive === false) {
        return null
    }


    return (
        <div className="modal">
            <div className="modal__wrapper">
                {children}
            </div>
        </div>
    )
}
