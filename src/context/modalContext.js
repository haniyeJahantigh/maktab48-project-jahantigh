import React, { createContext } from "react";
import { useModalHook } from "../HOoks/modalHook";
import Modal from "../components/Modal";

let ModalContext;
let { Provider } = (ModalContext = createContext());
let ModalProvider = ({ children }) => {
  const { modal, modalContent, handleModal } = useModalHook();
  return (
    <Provider value={{ modal, modalContent, handleModal }}>
      <Modal />
      {children}
    </Provider>
  );
};
export { ModalContext, ModalProvider };
