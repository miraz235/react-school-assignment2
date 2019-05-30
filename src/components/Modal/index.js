import React from "react";
import './Modal.css';
import ModalContent from "./ModalContent"

const Modal = ({ isOpen, onClose, children }) => {

    let modalNode;
    const onClickAway = e => {
        if (modalNode && modalNode.contains(e.target)) return;
        onClose()
    }
   
    return (
      <>
        {isOpen && (
          <ModalContent
            modalRef={n => (modalNode = n)}
            content={children}
            onClickAway={onClickAway}
            onClose={onClose}
            isOpen={isOpen}
          />
        )}
      </>
    )
  
}

export default Modal