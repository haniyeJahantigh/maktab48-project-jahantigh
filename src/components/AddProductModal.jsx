import React,{useContext} from 'react'
import { ModalContext } from '../context/modalContext'

const AddProductModal = () => {
    const {modal,handleModal,modalContent} = useContext(ModalContext)

    return (
        <div>
           <p>افزودن/ویرایش کالا</p>
        </div>
    )
}

export default AddProductModal
