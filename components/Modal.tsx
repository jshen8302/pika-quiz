'use client';

import { useRouter } from "next/navigation";
import {createPortal} from "react-dom";
import {ReactNode} from "react";
import { useEffect, useRef} from 'react';
import { VT323 } from 'next/font/google';
import clsx from 'clsx';

const vt323 = VT323({
  subsets: ['latin'],
  weight: '400'
});

interface ModalProps {
  children: ReactNode;
}

const Modal = ({children}: ModalProps) => {



  const modalRef = useRef<HTMLDialogElement | null>(null);
  const router = useRouter();


  useEffect(() => {
    const modal = modalRef.current;

  
    document.body.classList.add("no-scroll");
  
    if (modal && !modal.open) {

      modal.showModal();
    }
    return () => {
      // Remove no-scroll class from body when the modal unmounts
      document.body.classList.remove("no-scroll");
    };
  }, []); // Empty dependency array ensures this only runs once on mount
  
  

  const modalRoot = document.getElementById("modal-root-id");



  function onModalHide() {
    modalRef.current?.close();
    router.back();

  }

  if (!modalRoot) {
    console.error("Modal root not found");
    return null;
  }






  return createPortal (

    <dialog
      ref={modalRef}
      className={clsx(vt323.className, "fixed flex justify-center items-center h-3/4 w-3/4 bg-transparent")}
    >
      
      {children}
      <div 
        className="fixed w-screen h-screen scale-125 -z-10 opacity-80 "
        onClick={onModalHide}
 
        
      >
      </div>

     
      

    </dialog>, modalRoot
    

  )
}

export default Modal;