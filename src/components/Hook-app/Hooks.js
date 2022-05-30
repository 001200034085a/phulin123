import { useState } from "react";

export function useForm(){
    const [formData, setFormData]=useState({});

    const handleSubmit=(callback)=>{
        return (event)=>{
            event.preventDefault();
            callback(formData);
        }
    }
    const handleInputChange=(event)=>{
        // event.preventDefault();
        const name=event.target.name;
        const value =event.target.value;

        const newFormData={...formData};
        newFormData[name]=value;

        setFormData(newFormData);
    }
    const validateData=()=>{

    }

    return{
        message:"hello, this is custom hook to handle form",
        handleSubmit,
        handleInputChange,
        validateData,
    }
}