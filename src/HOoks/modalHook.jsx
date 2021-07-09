import { useState } from "react"

export const useModalHook=()=>{
    //useState is an array 
    const [modal,setModal]=useState(false);
    const [modalContent, setModalContent] = useState("");

    const handleModal=(content)=>{
        console.log(content);
        setModal(!modal)
        if(content){
            setModalContent(content)
        }
    };
    let btn = <button>hi</button>
//must return theme: some of them that user must have acsese to theme.
    return {modal, modalContent,handleModal,btn}
}