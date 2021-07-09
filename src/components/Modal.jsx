import React,{useContext} from 'react'
import { ModalContext } from '../context/modalContext'
import ReactDom from 'react-dom'

const Modal = ({...props}) => {
    const {modal,handleModal,modalContent} = useContext(ModalContext);
    const handleCloseModal=()=>{
        handleModal()
    }
    if(modal){
        return ReactDom.createPortal (
            <div className='modal__backdrop' onClick={handleCloseModal}>
             <div  className="modal" onClick={(e)=>e.stopPropagation()}>
                 <button onClick={handleCloseModal}>X</button>
                 {modalContent}

             </div>
            </div>,
            document.querySelector("#modal-root")
        )
    }else{
        return null
    }
    
}

export default Modal
