import React,{useContext} from 'react'
import { ModalContext } from '../context/modalContext'

const AddProductModal = () => {
    const {modal,handleModal,modalContent} = useContext(ModalContext)

    return (
        <div>
           <div>
                <h1>LogOut</h1>
                <p>are you sure?</p>
                <button
        onClick={() => {
          console.log("logout");
          handleModal();
        }}
      >
        Yes
      </button>
      <button
        onClick={() => {
          handleModal();
        }}
      >
        No
      </button>
            </div>
        </div>
    )
}

export default AddProductModal
