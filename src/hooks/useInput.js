import { useState } from "react";

export function useInput(initialValue, validation){
    const [inputValue, setInputValue] = useState(initialValue);
    const [didEdit, setDidEdit] = useState(false);

    const valid = validation(inputValue);

    function handleInputBlur(){
        setDidEdit(true);
    }

    const handleInputValues = (e) => {
        setInputValue(e.target.value); 
    
        setDidEdit(false);
    }

    return{
        value: inputValue,
        handleInputBlur,
        handleInputValues, 
        hasError: didEdit && !valid
    }
}